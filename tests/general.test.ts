import { AxiosError, AxiosResponse } from 'axios'
import cds from '@sap/cds'
import 'jest';
import chaiAsPromised from 'chai-as-promised'
import { version } from 'chai';
import { describe } from 'node:test';

const project = __dirname + '/..'
const { chai, GET, DELETE, POST, PATCH, expect } = cds.test(project, '--with-mocks', '--in-memory')
console.log("this is dirname:", project)

const AUTH = { auth: { username: 'bp-admin', password: '123' } }


const statusValues = [
    {
        code: 'INV',
        value: 'INVALID',
        criticality: 1,
        updateCode: false
    },
    {
        code: 'N',
        value: 'NEW',
        criticality: 2,
        updateCode: false
    },
    {
        code: 'U',
        value: 'UPDATED',
        criticality: 2,
        updateCode: false
    },
    {
        code: 'V',
        value: 'VERIFIED',
        criticality: 3,
        updateCode: true
    }
]

beforeAll(async () => {
    const db = await cds.connect.to('db')
    expect(db).to.exist
    expect(db.model).to.exist
})

describe('GET admin/$metadata', function () {
    chai.use(chaiAsPromised)
    it('should fail unauthenticated', async () => {
        await expect(GET('odata/v4/admin/$metadata')).to.be.rejectedWith(AxiosError)
    })

    it('should work authenticated', async () => {
        const res = (await GET('odata/v4/admin/$metadata', AUTH)) as AxiosResponse
        //console.log(res)
        expect(res.headers).to.contain({
            'content-type': 'application/xml',
            'odata-version': '4.0'
        })
        expect(res.status).to.be.equal(200)
        expect(res.data).to.contain('EntitySet Name="StatusValues" EntityType="AdminService.StatusValues"')
        expect(res.data).to.contain('EntitySet Name="BusinessPartner" EntityType="AdminService.BusinessPartner"')
        expect(res.data).to.contain('EntitySet Name="Addresses" EntityType="AdminService.Addresses"')
        expect(res.data).to.contain('EntitySet Name="BusinessPartnerAddresses" EntityType="AdminService.BusinessPartnerAddresses"')
        expect(res.data).to.contain('EntitySet Name="BusinessPartnerVerification" EntityType="AdminService.BusinessPartnerVerification"')
    })
})

describe('GET /admin/StatusValues', function () {
    it('should fail unauthenticated', async () => {
        await expect(GET('odata/v4/admin/StatusValues')).to.be.rejectedWith(AxiosError)
    })

    it('should deliver an array of 4 statusValues', async () => {
        const res = (await GET('odata/v4/admin/StatusValues', AUTH)) as AxiosResponse
        expect(res.status).to.be.equal(200)
        expect(res.headers).to.contain({
            'content-type': 'application/json;odata.metadata=minimal'
        })
        expect(Array.isArray(res.data.value)).to.be.true
        expect(res.data.value).to.have.lengthOf(4)
        expect(res.data.value).to.deep.equal(statusValues);
    })
})



describe('Test Mock endpoints for S/4', function () {
    it('metadata', async () => {
        const res = (await GET('odata/v4/api-business-partner')) as AxiosResponse
        console.log('res')
        expect(res.status).to.be.equal(200)
        expect(res.data.value).to.have.lengthOf(52) // 52 Entities
        expect(res.data['@odata.context']).to.be.equal('$metadata')
    })

    it('GET Request BusinessPartner', async () => {
        console.log(project)
        const res = (await GET('odata/v4/api-business-partner/A_BusinessPartner')) as AxiosResponse
        expect(res.status).to.be.equal(200)
        expect(res.data.value).to.have.lengthOf(3) // 3 Test Business Partners
        expect(res.data['@odata.context']).to.be.equal('$metadata#A_BusinessPartner')
    })

    it('GET Request BusinessPartnerAddress', async () => {
        const res = await GET('odata/v4/api-business-partner/A_BusinessPartnerAddress')
        expect(res.status).to.be.equal(200)
        expect(res.data.value).to.have.lengthOf(1) // 2 Test Business Partners 1 address
        expect(res.data['@odata.context']).to.be.equal('$metadata#A_BusinessPartnerAddress')
    })
})

describe('Test changes in S/4 through mocks', function () {
    it('Create Business Partner', async () => {
        const bpResponse = await GET(`odata/v4/admin/BusinessPartner(BusinessPartner='MAXSTR')?$expand=addresses`, AUTH)
        const bpRes = bpResponse.data
        // console.log(bpRes)
        const bupaSrv = await cds.connect.to('API_BUSINESS_PARTNER')
        await bupaSrv.emit('BusinessPartnerCreated', { "BusinessPartner": bpRes.BusinessPartner })
        const verResponse = await GET(`odata/v4/admin/BusinessPartnerVerification?$expand=addresses`, AUTH)
        const verification = verResponse.data.value[0]
        // console.log(verification)
        expect(verResponse.status).to.be.equal(200)
        expect(verification.BusinessPartner).to.be.equal(bpRes.BusinessPartner)
        expect(verification.FirstName).to.be.equal(bpRes.FirstName)
        expect(verification.LastName).to.be.equal(bpRes.LastName)
        expect(verification.BusinessPartnerIsBlocked).to.be.equal(bpRes.BusinessPartnerIsBlocked)
        expect(verification.IsActiveEntity).to.be.equal(true)
        expect(verification.verificationStatus_code).to.be.equal('N')
        for (const newBupaAddress of bpRes.addresses) {
            const verificationAddress = verification.addresses.find((verificationAddress: { AddressID: string; }) => verificationAddress.AddressID === bpRes.addresses[0].AddressID)
            expect(verificationAddress.AddressID).to.be.equal(newBupaAddress.AddressID)
            expect(verificationAddress.CityName).to.be.equal(newBupaAddress.CityName)
            expect(verificationAddress.Country).to.be.equal(newBupaAddress.Country)
            expect(verificationAddress.HouseNumber).to.be.equal(newBupaAddress.HouseNumber)
            expect(verificationAddress.PostalCode).to.be.equal(newBupaAddress.PostalCode)
            expect(verificationAddress.StreetName).to.be.equal(newBupaAddress.StreetName)
        }
    })

    it('Update Business Partner Block Status (Includes BusinessPartnerChanged)', async () => {
        const bupaSrv = await cds.connect.to('API_BUSINESS_PARTNER')
        const bpResponse = await GET(`odata/v4/admin/BusinessPartner(BusinessPartner='MAXSTR')?$expand=addresses`, AUTH)
        const bpRes = bpResponse.data
        const updateJson = {
            BusinessPartner: bpRes.BusinessPartner,
            BusinessPartnerIsBlocked: !bpRes.BusinessPartnerIsBlocked
        }
        const { status } = (await PATCH(`odata/v4/admin/BusinessPartner('${bpRes.BusinessPartner}')`, updateJson, AUTH)) as AxiosResponse
        expect(status).to.be.equal(200)
        await bupaSrv.emit('BusinessPartnerChanged', { "BusinessPartner": bpRes.BusinessPartner })
        // await new Promise((resolve) => setTimeout(resolve, 2000)) // make sure that the service can process the event
        const { data: dataGet, status: statusGet } = (await GET(`odata/v4/admin/BusinessPartnerVerification?$expand=addresses&$filter=BusinessPartner eq '${bpRes.BusinessPartner}'`, AUTH)) as AxiosResponse
        expect(statusGet).to.be.equal(200)
        expect(dataGet.value).to.have.lengthOf(1)
        expect(dataGet.value[0].addresses).to.have.lengthOf(bpRes.addresses.length)

        const verification = dataGet.value[0]
        expect(verification.BusinessPartner).to.be.equal(bpRes.BusinessPartner)
        expect(verification.FirstName).to.be.equal(bpRes.FirstName)
        expect(verification.LastName).to.be.equal(bpRes.LastName)
        expect(verification.BusinessPartnerIsBlocked).to.be.equal(!bpRes.BusinessPartnerIsBlocked)
        expect(verification.IsActiveEntity).to.be.equal(true)
        expect(verification.verificationStatus_code).to.be.equal('U')
        for (const newBupaAddress of bpRes.addresses) {
            const verificationAddress = verification.addresses.find((verificationAddress: { AddressID: string; }) => verificationAddress.AddressID === newBupaAddress.AddressID)
            expect(verificationAddress.AddressID).to.be.equal(newBupaAddress.AddressID)
            expect(verificationAddress.CityName).to.be.equal(newBupaAddress.CityName)
            expect(verificationAddress.Country).to.be.equal(newBupaAddress.Country)
            expect(verificationAddress.HouseNumber).to.be.equal(newBupaAddress.HouseNumber)
            expect(verificationAddress.PostalCode).to.be.equal(newBupaAddress.PostalCode)
            expect(verificationAddress.StreetName).to.be.equal(newBupaAddress.StreetName)
        }
    }, 15000)
})
