// This is an automatically generated file. Please do not change its contents manually!
import * as _tfe_model_bpVerification from './../tfe/model/bpVerification';
import * as __ from './../_';
import * as _ from './..';
import * as _API_BUSINESS_PARTNER from './../API_BUSINESS_PARTNER';
export default { name: 'AdminService' }
export function _BusinessPartnerVerificationAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class BusinessPartnerVerification extends Base {
        BusinessPartner?: string | null;
        FirstName?: string | null;
        LastName?: string | null;
        verificationStatus?: __.Association.to<_tfe_model_bpVerification.StatusValue> | null;
        verificationStatus_code?: string | null;
        addresses?: __.Composition.of.many<_tfe_model_bpVerification.Addresses>;
        BusinessPartnerIsBlocked?: boolean | null;
      static actions: {
        block: { (): any, __parameters: {}, __returns: any }
        unblock: { (): any, __parameters: {}, __returns: any }
    }
  };
}
export class BusinessPartnerVerification extends _._managedAspect(_._cuidAspect(_BusinessPartnerVerificationAspect(__.Entity))) {static drafts: typeof BusinessPartnerVerification}
export class BusinessPartnerVerification_ extends Array<BusinessPartnerVerification> {static drafts: typeof BusinessPartnerVerification}
Object.defineProperty(BusinessPartnerVerification, 'name', { value: 'AdminService.BusinessPartnerVerification' })
Object.defineProperty(BusinessPartnerVerification_, 'name', { value: 'AdminService.BusinessPartnerVerification' })

export function _BusinessPartnerAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class BusinessPartner extends Base {
        BusinessPartner?: string;
        Customer?: string | null;
        Supplier?: string | null;
        AcademicTitle?: string | null;
        AuthorizationGroup?: string | null;
        BusinessPartnerCategory?: string | null;
        BusinessPartnerFullName?: string | null;
        BusinessPartnerGrouping?: string | null;
        BusinessPartnerName?: string | null;
        BusinessPartnerUUID?: string | null;
        CorrespondenceLanguage?: string | null;
        CreatedByUser?: string | null;
        CreationDate?: string | null;
        CreationTime?: string | null;
        FirstName?: string | null;
        FormOfAddress?: string | null;
        Industry?: string | null;
        InternationalLocationNumber1?: string | null;
        InternationalLocationNumber2?: string | null;
        IsFemale?: boolean | null;
        IsMale?: boolean | null;
        IsNaturalPerson?: string | null;
        IsSexUnknown?: boolean | null;
        GenderCodeName?: string | null;
        Language?: string | null;
        LastChangeDate?: string | null;
        LastChangeTime?: string | null;
        LastChangedByUser?: string | null;
        LastName?: string | null;
        LegalForm?: string | null;
        OrganizationBPName1?: string | null;
        OrganizationBPName2?: string | null;
        OrganizationBPName3?: string | null;
        OrganizationBPName4?: string | null;
        OrganizationFoundationDate?: string | null;
        OrganizationLiquidationDate?: string | null;
        SearchTerm1?: string | null;
        SearchTerm2?: string | null;
        AdditionalLastName?: string | null;
        BirthDate?: string | null;
        BusinessPartnerBirthDateStatus?: string | null;
        BusinessPartnerBirthplaceName?: string | null;
        BusinessPartnerDeathDate?: string | null;
        BusinessPartnerIsBlocked?: boolean | null;
        BusinessPartnerType?: string | null;
        ETag?: string | null;
        GroupBusinessPartnerName1?: string | null;
        GroupBusinessPartnerName2?: string | null;
        IndependentAddressID?: string | null;
        InternationalLocationNumber3?: string | null;
        MiddleName?: string | null;
        NameCountry?: string | null;
        NameFormat?: string | null;
        PersonFullName?: string | null;
        PersonNumber?: string | null;
        IsMarkedForArchiving?: boolean | null;
        BusinessPartnerIDByExtSystem?: string | null;
        BusinessPartnerPrintFormat?: string | null;
        BusinessPartnerOccupation?: string | null;
        BusPartMaritalStatus?: string | null;
        BusPartNationality?: string | null;
        BusinessPartnerBirthName?: string | null;
        BusinessPartnerSupplementName?: string | null;
        NaturalPersonEmployerName?: string | null;
        LastNamePrefix?: string | null;
        LastNameSecondPrefix?: string | null;
        Initials?: string | null;
        BPDataControllerIsNotRequired?: boolean | null;
        TradingPartner?: string | null;
        to_BPCreditWorthiness?: __.Association.to<_API_BUSINESS_PARTNER.A_BPCreditWorthiness> | null;
        to_BPCreditWorthiness_BusinessPartner?: string | null;
        to_BPDataController?: __.Association.to.many<_API_BUSINESS_PARTNER.A_BPDataController_>;
        to_BPFinServicesReporting?: __.Association.to<_API_BUSINESS_PARTNER.A_BPFinancialServicesReporting> | null;
        to_BPFinServicesReporting_BusinessPartner?: string | null;
        to_BPFiscalYearInformation?: __.Association.to.many<_API_BUSINESS_PARTNER.A_BPFiscalYearInformation_>;
        to_BPRelationship?: __.Association.to.many<_API_BUSINESS_PARTNER.A_BPRelationship_>;
        to_BuPaIdentification?: __.Association.to.many<_API_BUSINESS_PARTNER.A_BuPaIdentification_>;
        to_BuPaIndustry?: __.Association.to.many<_API_BUSINESS_PARTNER.A_BuPaIndustry_>;
        to_BusinessPartner?: __.Association.to<_API_BUSINESS_PARTNER.A_BPFinancialServicesExtn> | null;
        to_BusinessPartner_BusinessPartner?: string | null;
        to_BusinessPartnerAddress?: __.Association.to.many<_API_BUSINESS_PARTNER.A_BusinessPartnerAddress_>;
        to_BusinessPartnerBank?: __.Association.to.many<_API_BUSINESS_PARTNER.A_BusinessPartnerBank_>;
        to_BusinessPartnerContact?: __.Association.to.many<_API_BUSINESS_PARTNER.A_BusinessPartnerContact_>;
        to_BusinessPartnerRating?: __.Association.to.many<_API_BUSINESS_PARTNER.A_BusinessPartnerRating_>;
        to_BusinessPartnerRole?: __.Association.to.many<_API_BUSINESS_PARTNER.A_BusinessPartnerRole_>;
        to_BusinessPartnerTax?: __.Association.to.many<_API_BUSINESS_PARTNER.A_BusinessPartnerTaxNumber_>;
        to_BusPartAddrDepdntTaxNmbr?: __.Association.to.many<_API_BUSINESS_PARTNER.A_BusPartAddrDepdntTaxNmbr_>;
        to_Customer?: __.Association.to<_API_BUSINESS_PARTNER.A_Customer> | null;
        to_Customer_Customer?: string | null;
        to_PaymentCard?: __.Association.to.many<_API_BUSINESS_PARTNER.A_BusinessPartnerPaymentCard_>;
        to_Supplier?: __.Association.to<_API_BUSINESS_PARTNER.A_Supplier> | null;
        to_Supplier_Supplier?: string | null;
      static actions: {
    }
  };
}
export class BusinessPartner extends _BusinessPartnerAspect(__.Entity) {}
export class BusinessPartner_ extends Array<BusinessPartner> {}
Object.defineProperty(BusinessPartner, 'name', { value: 'AdminService.BusinessPartner' })
Object.defineProperty(BusinessPartner_, 'name', { value: 'AdminService.BusinessPartner' })

export function _BusinessPartnerAddressAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class BusinessPartnerAddress extends Base {
        BusinessPartner?: string;
        AddressID?: string;
        ValidityStartDate?: string | null;
        ValidityEndDate?: string | null;
        AuthorizationGroup?: string | null;
        AddressUUID?: string | null;
        AdditionalStreetPrefixName?: string | null;
        AdditionalStreetSuffixName?: string | null;
        AddressTimeZone?: string | null;
        CareOfName?: string | null;
        CityCode?: string | null;
        CityName?: string | null;
        CompanyPostalCode?: string | null;
        Country?: string | null;
        County?: string | null;
        DeliveryServiceNumber?: string | null;
        DeliveryServiceTypeCode?: string | null;
        District?: string | null;
        FormOfAddress?: string | null;
        FullName?: string | null;
        HomeCityName?: string | null;
        HouseNumber?: string | null;
        HouseNumberSupplementText?: string | null;
        Language?: string | null;
        POBox?: string | null;
        POBoxDeviatingCityName?: string | null;
        POBoxDeviatingCountry?: string | null;
        POBoxDeviatingRegion?: string | null;
        POBoxIsWithoutNumber?: boolean | null;
        POBoxLobbyName?: string | null;
        POBoxPostalCode?: string | null;
        Person?: string | null;
        PostalCode?: string | null;
        PrfrdCommMediumType?: string | null;
        Region?: string | null;
        StreetName?: string | null;
        StreetPrefixName?: string | null;
        StreetSuffixName?: string | null;
        TaxJurisdiction?: string | null;
        TransportZone?: string | null;
        AddressIDByExternalSystem?: string | null;
        CountyCode?: string | null;
        TownshipCode?: string | null;
        TownshipName?: string | null;
        to_AddressUsage?: __.Association.to.many<_API_BUSINESS_PARTNER.A_BuPaAddressUsage_>;
        to_BPAddrDepdntIntlLocNumber?: __.Association.to<_API_BUSINESS_PARTNER.A_BPAddrDepdntIntlLocNumber> | null;
        to_BPAddrDepdntIntlLocNumber_BusinessPartner?: string | null;
        to_BPAddrDepdntIntlLocNumber_AddressID?: string | null;
        to_BPIntlAddressVersion?: __.Association.to.many<_API_BUSINESS_PARTNER.A_BPIntlAddressVersion_>;
        to_EmailAddress?: __.Association.to.many<_API_BUSINESS_PARTNER.A_AddressEmailAddress_>;
        to_FaxNumber?: __.Association.to.many<_API_BUSINESS_PARTNER.A_AddressFaxNumber_>;
        to_MobilePhoneNumber?: __.Association.to.many<_API_BUSINESS_PARTNER.A_AddressPhoneNumber_>;
        to_PhoneNumber?: __.Association.to.many<_API_BUSINESS_PARTNER.A_AddressPhoneNumber_>;
        to_URLAddress?: __.Association.to.many<_API_BUSINESS_PARTNER.A_AddressHomePageURL_>;
      static actions: {
    }
  };
}
export class BusinessPartnerAddress extends _BusinessPartnerAddressAspect(__.Entity) {}
export class BusinessPartnerAddresses extends Array<BusinessPartnerAddress> {}
Object.defineProperty(BusinessPartnerAddress, 'name', { value: 'AdminService.BusinessPartnerAddresses' })
Object.defineProperty(BusinessPartnerAddresses, 'name', { value: 'AdminService.BusinessPartnerAddresses' })

export function _StatusValueAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class StatusValue extends Base {
        code?: string | null;
        value?: string | null;
        criticality?: number | null;
        updateCode?: boolean | null;
      static actions: {
    }
  };
}
export class StatusValue extends _StatusValueAspect(__.Entity) {}
export class StatusValues extends Array<StatusValue> {}
Object.defineProperty(StatusValue, 'name', { value: 'AdminService.StatusValues' })
Object.defineProperty(StatusValues, 'name', { value: 'AdminService.StatusValues' })

export function _AddressAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Address extends Base {
        verifications?: __.Association.to<_tfe_model_bpVerification.Verification> | null;
        verifications_ID?: string | null;
        AddressID?: string | null;
        Country?: string | null;
        CityName?: string | null;
        StreetName?: string | null;
        PostalCode?: string | null;
        HouseNumber?: string | null;
      static actions: {
    }
  };
}
export class Address extends _._cuidAspect(_AddressAspect(__.Entity)) {static drafts: typeof Address}
export class Addresses extends Array<Address> {static drafts: typeof Address}
Object.defineProperty(Address, 'name', { value: 'AdminService.Addresses' })
Object.defineProperty(Addresses, 'name', { value: 'AdminService.Addresses' })

// action
export declare const testFunction: { (): string | null, __parameters: {}, __returns: string | null };