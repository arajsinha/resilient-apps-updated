/* eslint-disable require-yield */

import cds, { ApplicationService } from '@sap/cds'
import { Event } from './common/constants'
import { Service } from '@sap/cds/apis/services'
import { Request } from '@sap/cds/apis/events'
// import {EventMessage} from '@sap/cds/apis/services'
import { BusinessPartner, BusinessPartnerVerification, BusinessPartnerAddresses, Address, } from '../@cds-models/AdminService'

interface IEventData {
  BusinessPartner: string
}
class AdminService extends ApplicationService {
  bupaSrv?: Service | null

  async init() {

    const { BusinessPartnerVerification: BPVerify } = require('../@cds-models/AdminService')

    // const messagingService = await cds.connect.to('messaging')
    this.bupaSrv = await cds.connect.to('API_BUSINESS_PARTNER')

    this.on(Event.READ, BusinessPartnerAddresses, this.delegateQuery)
    this.on(Event.READ, BusinessPartner, this.delegateQuery)

    // messagingService.on(`${BUSINESSPARTNERTOPICBASE}Created/v1`, this.handleBusinessPartnerCreated)
    // messagingService.on(`${BUSINESSPARTNERTOPICBASE}Changed/v1`, this.handleBusinessPartnerChanged)

    this.bupaSrv.on('BusinessPartnerCreated', this.handleBusinessPartnerCreated)
    this.bupaSrv.on('BusinessPartnerChanged', this.handleBusinessPartnerChanged)

    this.before(Event.SAVE, BPVerify, this.beforeSaveAddresses)
    this.on(BPVerify.actions.block, BusinessPartnerVerification, this.blockBusinessPartner)
    this.on(BPVerify.actions.unblock, BusinessPartnerVerification, this.unblockBusinessPartner)

    super.init()
  }

  private delegateQuery = async (req: Request) => {
    return this.bupaSrv.run(req.query)
  }

  private handleBusinessPartnerCreated = async (msg: Request) => {
    const { BusinessPartner: businessPartnerID } = msg.data as IEventData
    if (await this.getLocalBusinessPartner(businessPartnerID, msg)) {
      console.warn(`BusinessPartner ${businessPartnerID} already persisted, no need to proceed`)
      return
    }
    const businessPartnerS4 = await this.getBusinessPartnerFromS4(businessPartnerID, msg)

    if (!businessPartnerS4) return
    //check error handling

    const verification = this.cloneRemoteToLocalBupa(businessPartnerS4)
    verification.verificationStatus_code = 'N'
    const localBupa = await this.createLocalBupa(msg, verification)
    if (!localBupa) {
      msg.error('400', 'technical error while inserting new Verification')
    }
  }

  private handleBusinessPartnerChanged = async (msg: Request) => {
    console.log("Change event is triggered");
    const { BusinessPartner: businessPartnerID } = msg.data as IEventData
    const businessPartnerS4 = (await this.getBusinessPartnerFromS4(businessPartnerID, msg)) as BusinessPartner
    const localBusinessPartner = await this.getLocalBusinessPartner(businessPartnerID, msg)
    const verification = this.cloneRemoteToLocalBupa(businessPartnerS4)
    verification.verificationStatus_code = 'U'
    if (!localBusinessPartner) {
      await this.createLocalBupa(msg, verification)
    } else {
      for (const addresses of verification.addresses) {
        addresses.verifications_ID = localBusinessPartner.ID
      }
      await this.updateLocalBupa(msg, verification)
    }
  }

  private beforeSaveAddresses = async (req: Request) => {
    const businessPartner: BusinessPartnerVerification = req.data as BusinessPartnerVerification

    for (const address of businessPartner.addresses) {
      const updated = await this.updateS4BupaAddress(req, address, businessPartner.BusinessPartner)
      console.log(`BusinessPartner ${businessPartner.BusinessPartner} updated in SAP S/4HANA`)
      if (updated) req.notify(204, `Updated [${businessPartner.FirstName} ${businessPartner.LastName}] in SAP S/4HANA`)
    }
  }

  private blockBusinessPartner = async (req: Request) => {
    const localBupaUUID = (req.params[0] as any).ID
    const localBupa = (await this.getBusinessPartnerByUUID(localBupaUUID, req)) as BusinessPartnerVerification
    const updated = await this.updateBlockedStatusS4(req, localBupa.BusinessPartner, true)
    if (updated) req.notify(204, `Blocked [${localBupa.FirstName} ${localBupa.LastName}] in SAP S/4HANA`)
  }

  private unblockBusinessPartner = async (req: Request) => {
    const localBupaUUID = (req.params[0] as any).ID
    const localBupa = (await this.getBusinessPartnerByUUID(localBupaUUID, req)) as BusinessPartnerVerification
    const updated = await this.updateBlockedStatusS4(req, localBupa.BusinessPartner, false)
    if (updated) req.notify(204, `Unblocked [${localBupa.FirstName} ${localBupa.LastName}] in SAP S/4HANA`)
  }

  private getBusinessPartnerFromS4 = async (businessPartnerID: string, req: Request): Promise<BusinessPartner | null> => {
    try {
      const s4Bupa = await this.bupaSrv?.run(
        SELECT.one(BusinessPartner, (bp: any) => {
          bp.BusinessPartner, bp.BusinessPartnerIsBlocked, bp.FirstName, bp.LastName, bp.addresses((address: Address) => { address.AddressID, address.CityName, address.Country, address.HouseNumber, address.StreetName, address.PostalCode })
        }).where({ BusinessPartner: businessPartnerID })
      )
      return s4Bupa
    } catch (error) {
      console.error(error)
      return null
    }
  }

  private async getBusinessPartnerByUUID(UUID: string, req: Request): Promise<BusinessPartnerVerification | null> {
    const localBusinessPartner = (await cds.run(SELECT.one(BusinessPartnerVerification).where({ ID: UUID }))) as BusinessPartnerVerification
    if (!localBusinessPartner) {
      console.error(`ERROR: couldn't find BusinessPartner for UUID ${UUID}, skip processing`)
      return null
    } else {
      return localBusinessPartner
    }
  }

  private async getLocalBusinessPartner(businessPartnerId: string, req: Request): Promise<BusinessPartnerVerification | null> {
    const localBusinessPartner = await cds.run(
      SELECT.one(BusinessPartnerVerification, (bp: any) => {
        bp.ID
        bp.BusinessPartner, bp.BusinessPartnerIsBlocked, bp.FirstName, bp.LastName, bp.verificationStatus_code,
          bp.addresses((address: Address) => { address.AddressID, address.CityName, address.Country, address.HouseNumber, address.StreetName, address.PostalCode })
      }).where({ BusinessPartner: businessPartnerId })
    )
    return localBusinessPartner
  }

  private cloneRemoteToLocalBupa(businessPartnerS4: BusinessPartner): BusinessPartnerVerification {
    const verification = {} as BusinessPartnerVerification
    Object.assign(verification, businessPartnerS4)
    return verification
  }

  private async createLocalBupa(req: Request, verification: BusinessPartnerVerification): Promise<boolean> {
    const insertResult = await cds.run(INSERT.into(BusinessPartnerVerification).entries(verification))
    if (!insertResult) {
      console.error(`ERROR: couldn't insert new verification entry for BusinessPartner ${verification.BusinessPartner} with status "${verification.verificationStatus_code}", skip processing`)
      return false
    }
    console.log(`Saved BusinessPartner ${verification.BusinessPartner} to the HDI Container on SAP HANA Cloud`)
    return true
  }

  private async updateLocalBupa(req: Request, verification: BusinessPartnerVerification): Promise<boolean> {
    try {
      cds.tx(async () => {
        const updateResult = await cds.run(UPDATE.entity(BusinessPartnerVerification).set(verification).where({ BusinessPartner: verification.BusinessPartner }))
        if (!updateResult) return false
      }
      )
    } catch (error) {
      console.log('erro1: ' + error)
      return false
    }
    return true
  }

  private async updateBlockedStatusS4(req: Request, businessPartnerId: string, blockStatus: boolean): Promise<boolean> {
    const updateResult = await this.bupaSrv?.run(UPDATE.entity(BusinessPartner).set({ BusinessPartnerIsBlocked: blockStatus })
      .where({ BusinessPartner: businessPartnerId }))
    if (!updateResult) return false
    else return true
  }

  private async updateS4BupaAddress(req: Request, address: Address, businessPartnerId: string): Promise<boolean> {
    const updateResult = await this.bupaSrv?.run(UPDATE.entity(BusinessPartnerAddresses).set(address).where({ BusinessPartner: businessPartnerId, AddressID: address.AddressID }))

    if (!updateResult) return false
    else return true
  }
}

module.exports = { AdminService }
