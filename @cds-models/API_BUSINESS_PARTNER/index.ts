// This is an automatically generated file. Please do not change its contents manually!
import * as __ from './../_';
export default { name: 'API_BUSINESS_PARTNER' }
export function _A_AddressEmailAddressAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_AddressEmailAddress extends Base {
        AddressID?: string;
        Person?: string;
        OrdinalNumber?: string;
        IsDefaultEmailAddress?: boolean | null;
        EmailAddress?: string | null;
        SearchEmailAddress?: string | null;
        AddressCommunicationRemarkText?: string | null;
      static actions: {
    }
  };
}
export class A_AddressEmailAddress extends _A_AddressEmailAddressAspect(__.Entity) {}
export class A_AddressEmailAddress_ extends Array<A_AddressEmailAddress> {}
Object.defineProperty(A_AddressEmailAddress, 'name', { value: 'API_BUSINESS_PARTNER.A_AddressEmailAddress' })
Object.defineProperty(A_AddressEmailAddress_, 'name', { value: 'API_BUSINESS_PARTNER.A_AddressEmailAddress' })

export function _A_AddressFaxNumberAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_AddressFaxNumber extends Base {
        AddressID?: string;
        Person?: string;
        OrdinalNumber?: string;
        IsDefaultFaxNumber?: boolean | null;
        FaxCountry?: string | null;
        FaxNumber?: string | null;
        FaxNumberExtension?: string | null;
        InternationalFaxNumber?: string | null;
        AddressCommunicationRemarkText?: string | null;
      static actions: {
    }
  };
}
export class A_AddressFaxNumber extends _A_AddressFaxNumberAspect(__.Entity) {}
export class A_AddressFaxNumber_ extends Array<A_AddressFaxNumber> {}
Object.defineProperty(A_AddressFaxNumber, 'name', { value: 'API_BUSINESS_PARTNER.A_AddressFaxNumber' })
Object.defineProperty(A_AddressFaxNumber_, 'name', { value: 'API_BUSINESS_PARTNER.A_AddressFaxNumber' })

export function _A_AddressHomePageURLAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_AddressHomePageURL extends Base {
        AddressID?: string;
        Person?: string;
        OrdinalNumber?: string;
        ValidityStartDate?: string;
        IsDefaultURLAddress?: boolean;
        SearchURLAddress?: string | null;
        AddressCommunicationRemarkText?: string | null;
        URLFieldLength?: number | null;
        WebsiteURL?: string | null;
      static actions: {
    }
  };
}
export class A_AddressHomePageURL extends _A_AddressHomePageURLAspect(__.Entity) {}
export class A_AddressHomePageURL_ extends Array<A_AddressHomePageURL> {}
Object.defineProperty(A_AddressHomePageURL, 'name', { value: 'API_BUSINESS_PARTNER.A_AddressHomePageURL' })
Object.defineProperty(A_AddressHomePageURL_, 'name', { value: 'API_BUSINESS_PARTNER.A_AddressHomePageURL' })

export function _A_AddressPhoneNumberAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_AddressPhoneNumber extends Base {
        AddressID?: string;
        Person?: string;
        OrdinalNumber?: string;
        DestinationLocationCountry?: string | null;
        IsDefaultPhoneNumber?: boolean | null;
        PhoneNumber?: string | null;
        PhoneNumberExtension?: string | null;
        InternationalPhoneNumber?: string | null;
        PhoneNumberType?: string | null;
        AddressCommunicationRemarkText?: string | null;
      static actions: {
    }
  };
}
export class A_AddressPhoneNumber extends _A_AddressPhoneNumberAspect(__.Entity) {}
export class A_AddressPhoneNumber_ extends Array<A_AddressPhoneNumber> {}
Object.defineProperty(A_AddressPhoneNumber, 'name', { value: 'API_BUSINESS_PARTNER.A_AddressPhoneNumber' })
Object.defineProperty(A_AddressPhoneNumber_, 'name', { value: 'API_BUSINESS_PARTNER.A_AddressPhoneNumber' })

export function _A_BPAddrDepdntIntlLocNumberAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_BPAddrDepdntIntlLocNumber extends Base {
        BusinessPartner?: string | null;
        AddressID?: string | null;
        InternationalLocationNumber1?: string | null;
        InternationalLocationNumber2?: string | null;
        InternationalLocationNumber3?: string | null;
      static actions: {
    }
  };
}
export class A_BPAddrDepdntIntlLocNumber extends _A_BPAddrDepdntIntlLocNumberAspect(__.Entity) {}
export class A_BPAddrDepdntIntlLocNumber_ extends Array<A_BPAddrDepdntIntlLocNumber> {}
Object.defineProperty(A_BPAddrDepdntIntlLocNumber, 'name', { value: 'API_BUSINESS_PARTNER.A_BPAddrDepdntIntlLocNumber' })
Object.defineProperty(A_BPAddrDepdntIntlLocNumber_, 'name', { value: 'API_BUSINESS_PARTNER.A_BPAddrDepdntIntlLocNumber' })

export function _A_BPContactToAddressAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_BPContactToAddress extends Base {
        RelationshipNumber?: string;
        BusinessPartnerCompany?: string;
        BusinessPartnerPerson?: string;
        ValidityEndDate?: string;
        AddressID?: string;
        AddressNumber?: string | null;
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
        AddressRepresentationCode?: string | null;
        ContactPersonBuilding?: string | null;
        ContactPersonPrfrdCommMedium?: string | null;
        ContactRelationshipDepartment?: string | null;
        ContactRelationshipFunction?: string | null;
        CorrespondenceShortName?: string | null;
        Floor?: string | null;
        InhouseMail?: string | null;
        IsDefaultAddress?: boolean | null;
        RoomNumber?: string | null;
        to_EmailAddress?: __.Association.to.many<A_AddressEmailAddress_>;
        to_FaxNumber?: __.Association.to.many<A_AddressFaxNumber_>;
        to_MobilePhoneNumber?: __.Association.to.many<A_AddressPhoneNumber_>;
        to_PhoneNumber?: __.Association.to.many<A_AddressPhoneNumber_>;
        to_URLAddress?: __.Association.to.many<A_AddressHomePageURL_>;
      static actions: {
    }
  };
}
export class A_BPContactToAddress extends _A_BPContactToAddressAspect(__.Entity) {}
export class A_BPContactToAddress_ extends Array<A_BPContactToAddress> {}
Object.defineProperty(A_BPContactToAddress, 'name', { value: 'API_BUSINESS_PARTNER.A_BPContactToAddress' })
Object.defineProperty(A_BPContactToAddress_, 'name', { value: 'API_BUSINESS_PARTNER.A_BPContactToAddress' })

export function _A_BPContactToFuncAndDeptAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_BPContactToFuncAndDept extends Base {
        RelationshipNumber?: string;
        BusinessPartnerCompany?: string;
        BusinessPartnerPerson?: string;
        ValidityEndDate?: string;
        ContactPersonAuthorityType?: string | null;
        ContactPersonDepartment?: string | null;
        ContactPersonDepartmentName?: string | null;
        ContactPersonFunction?: string | null;
        ContactPersonFunctionName?: string | null;
        ContactPersonRemarkText?: string | null;
        ContactPersonVIPType?: string | null;
        EmailAddress?: string | null;
        FaxNumber?: string | null;
        FaxNumberExtension?: string | null;
        PhoneNumber?: string | null;
        PhoneNumberExtension?: string | null;
        RelationshipCategory?: string | null;
      static actions: {
    }
  };
}
export class A_BPContactToFuncAndDept extends _A_BPContactToFuncAndDeptAspect(__.Entity) {}
export class A_BPContactToFuncAndDept_ extends Array<A_BPContactToFuncAndDept> {}
Object.defineProperty(A_BPContactToFuncAndDept, 'name', { value: 'API_BUSINESS_PARTNER.A_BPContactToFuncAndDept' })
Object.defineProperty(A_BPContactToFuncAndDept_, 'name', { value: 'API_BUSINESS_PARTNER.A_BPContactToFuncAndDept' })

export function _A_BPCreditWorthinessAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_BPCreditWorthiness extends Base {
        BusinessPartner?: string | null;
        BusPartCreditStanding?: string | null;
        BPCreditStandingStatus?: string | null;
        CreditRatingAgency?: string | null;
        BPCreditStandingComment?: string | null;
        BPCreditStandingDate?: string | null;
        BPCreditStandingRating?: string | null;
        BPLegalProceedingStatus?: string | null;
        BPLglProceedingInitiationDate?: string | null;
        BusinessPartnerIsUnderOath?: boolean | null;
        BusinessPartnerOathDate?: string | null;
        BusinessPartnerIsBankrupt?: boolean | null;
        BusinessPartnerBankruptcyDate?: string | null;
        BPForeclosureIsInitiated?: boolean | null;
        BPForeclosureDate?: string | null;
        BPCrdtWrthnssAccessChkIsActive?: string | null;
      static actions: {
    }
  };
}
export class A_BPCreditWorthiness extends _A_BPCreditWorthinessAspect(__.Entity) {}
export class A_BPCreditWorthiness_ extends Array<A_BPCreditWorthiness> {}
Object.defineProperty(A_BPCreditWorthiness, 'name', { value: 'API_BUSINESS_PARTNER.A_BPCreditWorthiness' })
Object.defineProperty(A_BPCreditWorthiness_, 'name', { value: 'API_BUSINESS_PARTNER.A_BPCreditWorthiness' })

export function _A_BPDataControllerAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_BPDataController extends Base {
        BusinessPartner?: string;
        DataController?: string;
        PurposeForPersonalData?: string;
        DataControlAssignmentStatus?: string | null;
        BPDataControllerIsDerived?: string | null;
        PurposeDerived?: string | null;
        PurposeType?: string | null;
        BusinessPurposeFlag?: string | null;
      static actions: {
    }
  };
}
export class A_BPDataController extends _A_BPDataControllerAspect(__.Entity) {}
export class A_BPDataController_ extends Array<A_BPDataController> {}
Object.defineProperty(A_BPDataController, 'name', { value: 'API_BUSINESS_PARTNER.A_BPDataController' })
Object.defineProperty(A_BPDataController_, 'name', { value: 'API_BUSINESS_PARTNER.A_BPDataController' })

export function _A_BPFinancialServicesExtnAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_BPFinancialServicesExtn extends Base {
        BusinessPartner?: string | null;
        BusinessPartnerIsVIP?: boolean | null;
        TradingPartner?: string | null;
        FactoryCalendar?: string | null;
        BusinessPartnerOfficeCountry?: string | null;
        BusinessPartnerOfficeRegion?: string | null;
        BPRegisteredOfficeName?: string | null;
        BPBalanceSheetCurrency?: string | null;
        BPLastCptlIncrAmtInBalShtCrcy?: number | null;
        BPLastCapitalIncreaseYear?: string | null;
        BPBalanceSheetDisplayType?: string | null;
        BusinessPartnerCitizenship?: string | null;
        BPMaritalPropertyRegime?: string | null;
        BusinessPartnerIncomeCurrency?: string | null;
        BPNumberOfChildren?: number | null;
        BPNumberOfHouseholdMembers?: number | null;
        BPAnnualNetIncAmtInIncomeCrcy?: number | null;
        BPMonthlyNetIncAmtInIncomeCrcy?: number | null;
        BPAnnualNetIncomeYear?: string | null;
        BPMonthlyNetIncomeMonth?: string | null;
        BPMonthlyNetIncomeYear?: string | null;
        BPPlaceOfDeathName?: string | null;
        CustomerIsUnwanted?: boolean | null;
        UndesirabilityReason?: string | null;
        UndesirabilityComment?: string | null;
        LastCustomerContactDate?: string | null;
        BPGroupingCharacter?: string | null;
        BPLetterSalutation?: string | null;
        BusinessPartnerTargetGroup?: string | null;
        BusinessPartnerEmployeeGroup?: string | null;
        BusinessPartnerIsEmployee?: boolean | null;
        BPTermnBusRelationsBankDate?: string | null;
      static actions: {
    }
  };
}
export class A_BPFinancialServicesExtn extends _A_BPFinancialServicesExtnAspect(__.Entity) {}
export class A_BPFinancialServicesExtn_ extends Array<A_BPFinancialServicesExtn> {}
Object.defineProperty(A_BPFinancialServicesExtn, 'name', { value: 'API_BUSINESS_PARTNER.A_BPFinancialServicesExtn' })
Object.defineProperty(A_BPFinancialServicesExtn_, 'name', { value: 'API_BUSINESS_PARTNER.A_BPFinancialServicesExtn' })

export function _A_BPFinancialServicesReportingAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_BPFinancialServicesReporting extends Base {
        BusinessPartner?: string | null;
        BPIsNonResident?: boolean | null;
        BPNonResidencyStartDate?: string | null;
        BPIsMultimillionLoanRecipient?: boolean | null;
        BPLoanReportingBorrowerNumber?: string | null;
        BPLoanRptgBorrowerEntityNumber?: string | null;
        BPCreditStandingReview?: string | null;
        BPCreditStandingReviewDate?: string | null;
        BusinessPartnerLoanToManager?: string | null;
        BPCompanyRelationship?: string | null;
        BPLoanReportingCreditorNumber?: string | null;
        BPOeNBIdentNumber?: string | null;
        BPOeNBTargetGroup?: string | null;
        BPOeNBIdentNumberAssigned?: string | null;
        BPOeNBInstituteNumber?: string | null;
        BusinessPartnerIsOeNBInstitute?: boolean | null;
        BusinessPartnerGroup?: string | null;
        BPGroupAssignmentCategory?: string | null;
        BusinessPartnerGroupName?: string | null;
        BusinessPartnerLegalEntity?: string | null;
        BPGerAstRglnRestrictedAstQuota?: string | null;
        BusinessPartnerDebtorGroup?: string | null;
        BusinessPartnerBusinessPurpose?: string | null;
        BusinessPartnerRiskGroup?: string | null;
        BPRiskGroupingDate?: string | null;
        BPHasGroupAffiliation?: boolean | null;
        BPIsMonetaryFinInstitution?: boolean | null;
        BPCrdtStandingReviewIsRequired?: boolean | null;
        BPLoanMonitoringIsRequired?: boolean | null;
        BPHasCreditingRelief?: boolean | null;
        BPInvestInRstrcdAstIsAuthzd?: boolean | null;
        BPCentralBankCountryRegion?: string | null;
      static actions: {
    }
  };
}
export class A_BPFinancialServicesReporting extends _A_BPFinancialServicesReportingAspect(__.Entity) {}
export class A_BPFinancialServicesReporting_ extends Array<A_BPFinancialServicesReporting> {}
Object.defineProperty(A_BPFinancialServicesReporting, 'name', { value: 'API_BUSINESS_PARTNER.A_BPFinancialServicesReporting' })
Object.defineProperty(A_BPFinancialServicesReporting_, 'name', { value: 'API_BUSINESS_PARTNER.A_BPFinancialServicesReporting' })

export function _A_BPFiscalYearInformationAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_BPFiscalYearInformation extends Base {
        BusinessPartner?: string;
        BusinessPartnerFiscalYear?: string;
        BPBalanceSheetCurrency?: string | null;
        BPAnnualStockholderMeetingDate?: string | null;
        BPFiscalYearStartDate?: string | null;
        BPFiscalYearEndDate?: string | null;
        BPFiscalYearIsClosed?: boolean | null;
        BPFiscalYearClosingDate?: string | null;
        BPFsclYrCnsldtdFinStatementDte?: string | null;
        BPCapitalStockAmtInBalShtCrcy?: number | null;
        BPIssdStockCptlAmtInBalShtCrcy?: number | null;
        BPPartcipnCertAmtInBalShtCrcy?: number | null;
        BPEquityCapitalAmtInBalShtCrcy?: number | null;
        BPGrossPremiumAmtInBalShtCrcy?: number | null;
        BPNetPremiumAmtInBalShtCrcy?: number | null;
        BPAnnualSalesAmtInBalShtCrcy?: number | null;
        BPAnnualNetIncAmtInBalShtCrcy?: number | null;
        BPDividendDistrAmtInBalShtCrcy?: number | null;
        BPDebtRatioInYears?: number | null;
        BPAnnualPnLAmtInBalShtCrcy?: number | null;
        BPBalSheetTotalAmtInBalShtCrcy?: number | null;
        BPNumberOfEmployees?: string | null;
        BPCptlReserveAmtInBalShtCrcy?: number | null;
        BPLglRevnRsrvAmtInBalShtCrcy?: number | null;
        RevnRsrvOwnStkAmtInBalShtCrcy?: number | null;
        BPStatryReserveAmtInBalShtCrcy?: number | null;
        BPOthRevnRsrvAmtInBalShtCrcy?: number | null;
        BPPnLCarryfwdAmtInBalShtCrcy?: number | null;
        BPSuborddLbltyAmtInBalShtCrcy?: number | null;
        BPRetOnTotalCptlEmpldInPercent?: number | null;
        BPDebtClearancePeriodInYears?: number | null;
        BPFinancingCoeffInPercent?: number | null;
        BPEquityRatioInPercent?: number | null;
      static actions: {
    }
  };
}
export class A_BPFiscalYearInformation extends _A_BPFiscalYearInformationAspect(__.Entity) {}
export class A_BPFiscalYearInformation_ extends Array<A_BPFiscalYearInformation> {}
Object.defineProperty(A_BPFiscalYearInformation, 'name', { value: 'API_BUSINESS_PARTNER.A_BPFiscalYearInformation' })
Object.defineProperty(A_BPFiscalYearInformation_, 'name', { value: 'API_BUSINESS_PARTNER.A_BPFiscalYearInformation' })

export function _A_BPIntlAddressVersionAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_BPIntlAddressVersion extends Base {
        BusinessPartner?: string;
        AddressID?: string;
        AddressRepresentationCode?: string;
        AddresseeFullName?: string | null;
        AddressIDByExternalSystem?: string | null;
        AddressPersonID?: string | null;
        AddressSearchTerm1?: string | null;
        AddressSearchTerm2?: string | null;
        AddressTimeZone?: string | null;
        CareOfName?: string | null;
        CityName?: string | null;
        CityNumber?: string | null;
        CompanyPostalCode?: string | null;
        Country?: string | null;
        DeliveryServiceNumber?: string | null;
        DeliveryServiceTypeCode?: string | null;
        DistrictName?: string | null;
        FormOfAddress?: string | null;
        HouseNumber?: string | null;
        HouseNumberSupplementText?: string | null;
        Language?: string | null;
        OrganizationName1?: string | null;
        OrganizationName2?: string | null;
        OrganizationName3?: string | null;
        OrganizationName4?: string | null;
        PersonFamilyName?: string | null;
        PersonGivenName?: string | null;
        POBox?: string | null;
        POBoxDeviatingCityName?: string | null;
        POBoxDeviatingCountry?: string | null;
        POBoxDeviatingRegion?: string | null;
        POBoxIsWithoutNumber?: boolean | null;
        POBoxLobbyName?: string | null;
        POBoxPostalCode?: string | null;
        PostalCode?: string | null;
        PrfrdCommMediumType?: string | null;
        Region?: string | null;
        SecondaryRegion?: string | null;
        SecondaryRegionName?: string | null;
        StreetName?: string | null;
        StreetPrefixName1?: string | null;
        StreetPrefixName2?: string | null;
        StreetSuffixName1?: string | null;
        StreetSuffixName2?: string | null;
        TaxJurisdiction?: string | null;
        TertiaryRegion?: string | null;
        TertiaryRegionName?: string | null;
        TransportZone?: string | null;
        VillageName?: string | null;
      static actions: {
    }
  };
}
export class A_BPIntlAddressVersion extends _A_BPIntlAddressVersionAspect(__.Entity) {}
export class A_BPIntlAddressVersion_ extends Array<A_BPIntlAddressVersion> {}
Object.defineProperty(A_BPIntlAddressVersion, 'name', { value: 'API_BUSINESS_PARTNER.A_BPIntlAddressVersion' })
Object.defineProperty(A_BPIntlAddressVersion_, 'name', { value: 'API_BUSINESS_PARTNER.A_BPIntlAddressVersion' })

export function _A_BPRelationshipAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_BPRelationship extends Base {
        RelationshipNumber?: string;
        BusinessPartner1?: string;
        BusinessPartner2?: string;
        ValidityEndDate?: string;
        ValidityStartDate?: string | null;
        IsStandardRelationship?: boolean | null;
        RelationshipCategory?: string | null;
        BPRelationshipType?: string | null;
        CreatedByUser?: string | null;
        CreationDate?: string | null;
        CreationTime?: string | null;
        LastChangedByUser?: string | null;
        LastChangeDate?: string | null;
        LastChangeTime?: string | null;
      static actions: {
    }
  };
}
export class A_BPRelationship extends _A_BPRelationshipAspect(__.Entity) {}
export class A_BPRelationship_ extends Array<A_BPRelationship> {}
Object.defineProperty(A_BPRelationship, 'name', { value: 'API_BUSINESS_PARTNER.A_BPRelationship' })
Object.defineProperty(A_BPRelationship_, 'name', { value: 'API_BUSINESS_PARTNER.A_BPRelationship' })

export function _A_BuPaAddressUsageAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_BuPaAddressUsage extends Base {
        BusinessPartner?: string;
        ValidityEndDate?: string;
        AddressUsage?: string;
        AddressID?: string;
        ValidityStartDate?: string | null;
        StandardUsage?: boolean | null;
        AuthorizationGroup?: string | null;
      static actions: {
    }
  };
}
export class A_BuPaAddressUsage extends _A_BuPaAddressUsageAspect(__.Entity) {}
export class A_BuPaAddressUsage_ extends Array<A_BuPaAddressUsage> {}
Object.defineProperty(A_BuPaAddressUsage, 'name', { value: 'API_BUSINESS_PARTNER.A_BuPaAddressUsage' })
Object.defineProperty(A_BuPaAddressUsage_, 'name', { value: 'API_BUSINESS_PARTNER.A_BuPaAddressUsage' })

export function _A_BuPaIdentificationAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_BuPaIdentification extends Base {
        BusinessPartner?: string;
        BPIdentificationType?: string;
        BPIdentificationNumber?: string;
        BPIdnNmbrIssuingInstitute?: string | null;
        BPIdentificationEntryDate?: string | null;
        Country?: string | null;
        Region?: string | null;
        ValidityStartDate?: string | null;
        ValidityEndDate?: string | null;
        AuthorizationGroup?: string | null;
      static actions: {
    }
  };
}
export class A_BuPaIdentification extends _A_BuPaIdentificationAspect(__.Entity) {}
export class A_BuPaIdentification_ extends Array<A_BuPaIdentification> {}
Object.defineProperty(A_BuPaIdentification, 'name', { value: 'API_BUSINESS_PARTNER.A_BuPaIdentification' })
Object.defineProperty(A_BuPaIdentification_, 'name', { value: 'API_BUSINESS_PARTNER.A_BuPaIdentification' })

export function _A_BuPaIndustryAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_BuPaIndustry extends Base {
        IndustrySector?: string;
        IndustrySystemType?: string;
        BusinessPartner?: string;
        IsStandardIndustry?: string | null;
        IndustryKeyDescription?: string | null;
      static actions: {
    }
  };
}
export class A_BuPaIndustry extends _A_BuPaIndustryAspect(__.Entity) {}
export class A_BuPaIndustry_ extends Array<A_BuPaIndustry> {}
Object.defineProperty(A_BuPaIndustry, 'name', { value: 'API_BUSINESS_PARTNER.A_BuPaIndustry' })
Object.defineProperty(A_BuPaIndustry_, 'name', { value: 'API_BUSINESS_PARTNER.A_BuPaIndustry' })

export function _A_BusinessPartnerAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_BusinessPartner extends Base {
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
        to_BPCreditWorthiness?: __.Association.to<A_BPCreditWorthiness> | null;
        to_BPCreditWorthiness_BusinessPartner?: string | null;
        to_BPDataController?: __.Association.to.many<A_BPDataController_>;
        to_BPFinServicesReporting?: __.Association.to<A_BPFinancialServicesReporting> | null;
        to_BPFinServicesReporting_BusinessPartner?: string | null;
        to_BPFiscalYearInformation?: __.Association.to.many<A_BPFiscalYearInformation_>;
        to_BPRelationship?: __.Association.to.many<A_BPRelationship_>;
        to_BuPaIdentification?: __.Association.to.many<A_BuPaIdentification_>;
        to_BuPaIndustry?: __.Association.to.many<A_BuPaIndustry_>;
        to_BusinessPartner?: __.Association.to<A_BPFinancialServicesExtn> | null;
        to_BusinessPartner_BusinessPartner?: string | null;
        to_BusinessPartnerAddress?: __.Association.to.many<A_BusinessPartnerAddress_>;
        to_BusinessPartnerBank?: __.Association.to.many<A_BusinessPartnerBank_>;
        to_BusinessPartnerContact?: __.Association.to.many<A_BusinessPartnerContact_>;
        to_BusinessPartnerRating?: __.Association.to.many<A_BusinessPartnerRating_>;
        to_BusinessPartnerRole?: __.Association.to.many<A_BusinessPartnerRole_>;
        to_BusinessPartnerTax?: __.Association.to.many<A_BusinessPartnerTaxNumber_>;
        to_BusPartAddrDepdntTaxNmbr?: __.Association.to.many<A_BusPartAddrDepdntTaxNmbr_>;
        to_Customer?: __.Association.to<A_Customer> | null;
        to_Customer_Customer?: string | null;
        to_PaymentCard?: __.Association.to.many<A_BusinessPartnerPaymentCard_>;
        to_Supplier?: __.Association.to<A_Supplier> | null;
        to_Supplier_Supplier?: string | null;
      static actions: {
    }
  };
}
export class A_BusinessPartner extends _A_BusinessPartnerAspect(__.Entity) {}
export class A_BusinessPartner_ extends Array<A_BusinessPartner> {}
Object.defineProperty(A_BusinessPartner, 'name', { value: 'API_BUSINESS_PARTNER.A_BusinessPartner' })
Object.defineProperty(A_BusinessPartner_, 'name', { value: 'API_BUSINESS_PARTNER.A_BusinessPartner' })

export function _A_BusinessPartnerAddressAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_BusinessPartnerAddress extends Base {
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
        to_AddressUsage?: __.Association.to.many<A_BuPaAddressUsage_>;
        to_BPAddrDepdntIntlLocNumber?: __.Association.to<A_BPAddrDepdntIntlLocNumber> | null;
        to_BPAddrDepdntIntlLocNumber_BusinessPartner?: string | null;
        to_BPAddrDepdntIntlLocNumber_AddressID?: string | null;
        to_BPIntlAddressVersion?: __.Association.to.many<A_BPIntlAddressVersion_>;
        to_EmailAddress?: __.Association.to.many<A_AddressEmailAddress_>;
        to_FaxNumber?: __.Association.to.many<A_AddressFaxNumber_>;
        to_MobilePhoneNumber?: __.Association.to.many<A_AddressPhoneNumber_>;
        to_PhoneNumber?: __.Association.to.many<A_AddressPhoneNumber_>;
        to_URLAddress?: __.Association.to.many<A_AddressHomePageURL_>;
      static actions: {
    }
  };
}
export class A_BusinessPartnerAddress extends _A_BusinessPartnerAddressAspect(__.Entity) {}
export class A_BusinessPartnerAddress_ extends Array<A_BusinessPartnerAddress> {}
Object.defineProperty(A_BusinessPartnerAddress, 'name', { value: 'API_BUSINESS_PARTNER.A_BusinessPartnerAddress' })
Object.defineProperty(A_BusinessPartnerAddress_, 'name', { value: 'API_BUSINESS_PARTNER.A_BusinessPartnerAddress' })

export function _A_BusinessPartnerBankAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_BusinessPartnerBank extends Base {
        BusinessPartner?: string;
        BankIdentification?: string;
        BankCountryKey?: string | null;
        BankName?: string | null;
        BankNumber?: string | null;
        SWIFTCode?: string | null;
        BankControlKey?: string | null;
        BankAccountHolderName?: string | null;
        BankAccountName?: string | null;
        ValidityStartDate?: string | null;
        ValidityEndDate?: string | null;
        IBAN?: string | null;
        IBANValidityStartDate?: string | null;
        BankAccount?: string | null;
        BankAccountReferenceText?: string | null;
        CollectionAuthInd?: boolean | null;
        CityName?: string | null;
        AuthorizationGroup?: string | null;
      static actions: {
    }
  };
}
export class A_BusinessPartnerBank extends _A_BusinessPartnerBankAspect(__.Entity) {}
export class A_BusinessPartnerBank_ extends Array<A_BusinessPartnerBank> {}
Object.defineProperty(A_BusinessPartnerBank, 'name', { value: 'API_BUSINESS_PARTNER.A_BusinessPartnerBank' })
Object.defineProperty(A_BusinessPartnerBank_, 'name', { value: 'API_BUSINESS_PARTNER.A_BusinessPartnerBank' })

export function _A_BusinessPartnerContactAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_BusinessPartnerContact extends Base {
        RelationshipNumber?: string;
        BusinessPartnerCompany?: string;
        BusinessPartnerPerson?: string;
        ValidityEndDate?: string;
        ValidityStartDate?: string | null;
        IsStandardRelationship?: boolean | null;
        RelationshipCategory?: string | null;
        to_ContactAddress?: __.Association.to.many<A_BPContactToAddress_>;
        to_ContactRelationship?: __.Association.to<A_BPContactToFuncAndDept> | null;
        to_ContactRelationship_RelationshipNumber?: string | null;
        to_ContactRelationship_BusinessPartnerCompany?: string | null;
        to_ContactRelationship_BusinessPartnerPerson?: string | null;
        to_ContactRelationship_ValidityEndDate?: string | null;
      static actions: {
    }
  };
}
export class A_BusinessPartnerContact extends _A_BusinessPartnerContactAspect(__.Entity) {}
export class A_BusinessPartnerContact_ extends Array<A_BusinessPartnerContact> {}
Object.defineProperty(A_BusinessPartnerContact, 'name', { value: 'API_BUSINESS_PARTNER.A_BusinessPartnerContact' })
Object.defineProperty(A_BusinessPartnerContact_, 'name', { value: 'API_BUSINESS_PARTNER.A_BusinessPartnerContact' })

export function _A_BusinessPartnerPaymentCardAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_BusinessPartnerPaymentCard extends Base {
        BusinessPartner?: string;
        PaymentCardID?: string;
        PaymentCardType?: string;
        CardNumber?: string;
        IsStandardCard?: boolean | null;
        CardDescription?: string | null;
        ValidityDate?: string | null;
        ValidityEndDate?: string | null;
        CardHolder?: string | null;
        CardIssuingBank?: string | null;
        CardIssueDate?: string | null;
        PaymentCardLock?: string | null;
        MaskedCardNumber?: string | null;
      static actions: {
    }
  };
}
export class A_BusinessPartnerPaymentCard extends _A_BusinessPartnerPaymentCardAspect(__.Entity) {}
export class A_BusinessPartnerPaymentCard_ extends Array<A_BusinessPartnerPaymentCard> {}
Object.defineProperty(A_BusinessPartnerPaymentCard, 'name', { value: 'API_BUSINESS_PARTNER.A_BusinessPartnerPaymentCard' })
Object.defineProperty(A_BusinessPartnerPaymentCard_, 'name', { value: 'API_BUSINESS_PARTNER.A_BusinessPartnerPaymentCard' })

export function _A_BusinessPartnerRatingAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_BusinessPartnerRating extends Base {
        BusinessPartner?: string;
        BusinessPartnerRatingProcedure?: string;
        BPRatingValidityEndDate?: string;
        BusinessPartnerRatingGrade?: string | null;
        BusinessPartnerRatingTrend?: string | null;
        BPRatingValidityStartDate?: string | null;
        BPRatingCreationDate?: string | null;
        BusinessPartnerRatingComment?: string | null;
        BusinessPartnerRatingIsAllowed?: boolean | null;
        BPRatingIsValidOnKeyDate?: boolean | null;
        BusinessPartnerRatingKeyDate?: string | null;
        BusinessPartnerRatingIsExpired?: boolean | null;
      static actions: {
    }
  };
}
export class A_BusinessPartnerRating extends _A_BusinessPartnerRatingAspect(__.Entity) {}
export class A_BusinessPartnerRating_ extends Array<A_BusinessPartnerRating> {}
Object.defineProperty(A_BusinessPartnerRating, 'name', { value: 'API_BUSINESS_PARTNER.A_BusinessPartnerRating' })
Object.defineProperty(A_BusinessPartnerRating_, 'name', { value: 'API_BUSINESS_PARTNER.A_BusinessPartnerRating' })

export function _A_BusinessPartnerRoleAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_BusinessPartnerRole extends Base {
        BusinessPartner?: string;
        BusinessPartnerRole?: string;
        ValidFrom?: string | null;
        ValidTo?: string | null;
        AuthorizationGroup?: string | null;
      static actions: {
    }
  };
}
export class A_BusinessPartnerRole extends _A_BusinessPartnerRoleAspect(__.Entity) {}
export class A_BusinessPartnerRole_ extends Array<A_BusinessPartnerRole> {}
Object.defineProperty(A_BusinessPartnerRole, 'name', { value: 'API_BUSINESS_PARTNER.A_BusinessPartnerRole' })
Object.defineProperty(A_BusinessPartnerRole_, 'name', { value: 'API_BUSINESS_PARTNER.A_BusinessPartnerRole' })

export function _A_BusinessPartnerTaxNumberAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_BusinessPartnerTaxNumber extends Base {
        BusinessPartner?: string;
        BPTaxType?: string;
        BPTaxNumber?: string | null;
        BPTaxLongNumber?: string | null;
        AuthorizationGroup?: string | null;
      static actions: {
    }
  };
}
export class A_BusinessPartnerTaxNumber extends _A_BusinessPartnerTaxNumberAspect(__.Entity) {}
export class A_BusinessPartnerTaxNumber_ extends Array<A_BusinessPartnerTaxNumber> {}
Object.defineProperty(A_BusinessPartnerTaxNumber, 'name', { value: 'API_BUSINESS_PARTNER.A_BusinessPartnerTaxNumber' })
Object.defineProperty(A_BusinessPartnerTaxNumber_, 'name', { value: 'API_BUSINESS_PARTNER.A_BusinessPartnerTaxNumber' })

export function _A_BusPartAddrDepdntTaxNmbrAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_BusPartAddrDepdntTaxNmbr extends Base {
        BusinessPartner?: string;
        AddressID?: string;
        BPTaxType?: string;
        BPTaxNumber?: string | null;
        BPTaxLongNumber?: string | null;
        AuthorizationGroup?: string | null;
      static actions: {
    }
  };
}
export class A_BusPartAddrDepdntTaxNmbr extends _A_BusPartAddrDepdntTaxNmbrAspect(__.Entity) {}
export class A_BusPartAddrDepdntTaxNmbr_ extends Array<A_BusPartAddrDepdntTaxNmbr> {}
Object.defineProperty(A_BusPartAddrDepdntTaxNmbr, 'name', { value: 'API_BUSINESS_PARTNER.A_BusPartAddrDepdntTaxNmbr' })
Object.defineProperty(A_BusPartAddrDepdntTaxNmbr_, 'name', { value: 'API_BUSINESS_PARTNER.A_BusPartAddrDepdntTaxNmbr' })

export function _A_CustAddrDepdntExtIdentifierAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_CustAddrDepdntExtIdentifier extends Base {
        Customer?: string;
        AddressID?: string;
        CustomerExternalRefID?: string | null;
      static actions: {
    }
  };
}
export class A_CustAddrDepdntExtIdentifier extends _A_CustAddrDepdntExtIdentifierAspect(__.Entity) {}
export class A_CustAddrDepdntExtIdentifier_ extends Array<A_CustAddrDepdntExtIdentifier> {}
Object.defineProperty(A_CustAddrDepdntExtIdentifier, 'name', { value: 'API_BUSINESS_PARTNER.A_CustAddrDepdntExtIdentifier' })
Object.defineProperty(A_CustAddrDepdntExtIdentifier_, 'name', { value: 'API_BUSINESS_PARTNER.A_CustAddrDepdntExtIdentifier' })

export function _A_CustAddrDepdntInformationAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_CustAddrDepdntInformation extends Base {
        Customer?: string;
        AddressID?: string;
        ExpressTrainStationName?: string | null;
        TrainStationName?: string | null;
        CityCode?: string | null;
        County?: string | null;
      static actions: {
    }
  };
}
export class A_CustAddrDepdntInformation extends _A_CustAddrDepdntInformationAspect(__.Entity) {}
export class A_CustAddrDepdntInformation_ extends Array<A_CustAddrDepdntInformation> {}
Object.defineProperty(A_CustAddrDepdntInformation, 'name', { value: 'API_BUSINESS_PARTNER.A_CustAddrDepdntInformation' })
Object.defineProperty(A_CustAddrDepdntInformation_, 'name', { value: 'API_BUSINESS_PARTNER.A_CustAddrDepdntInformation' })

export function _A_CustomerAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_Customer extends Base {
        Customer?: string | null;
        AuthorizationGroup?: string | null;
        BillingIsBlockedForCustomer?: string | null;
        CreatedByUser?: string | null;
        CreationDate?: string | null;
        CustomerAccountGroup?: string | null;
        CustomerClassification?: string | null;
        CustomerFullName?: string | null;
        BPCustomerFullName?: string | null;
        CustomerName?: string | null;
        BPCustomerName?: string | null;
        DeliveryIsBlocked?: string | null;
        FreeDefinedAttribute01?: string | null;
        FreeDefinedAttribute02?: string | null;
        FreeDefinedAttribute03?: string | null;
        FreeDefinedAttribute04?: string | null;
        FreeDefinedAttribute05?: string | null;
        FreeDefinedAttribute06?: string | null;
        FreeDefinedAttribute07?: string | null;
        FreeDefinedAttribute08?: string | null;
        FreeDefinedAttribute09?: string | null;
        FreeDefinedAttribute10?: string | null;
        NFPartnerIsNaturalPerson?: string | null;
        OrderIsBlockedForCustomer?: string | null;
        PostingIsBlocked?: boolean | null;
        Supplier?: string | null;
        CustomerCorporateGroup?: string | null;
        FiscalAddress?: string | null;
        Industry?: string | null;
        IndustryCode1?: string | null;
        IndustryCode2?: string | null;
        IndustryCode3?: string | null;
        IndustryCode4?: string | null;
        IndustryCode5?: string | null;
        InternationalLocationNumber1?: string | null;
        InternationalLocationNumber2?: string | null;
        InternationalLocationNumber3?: string | null;
        NielsenRegion?: string | null;
        PaymentReason?: string | null;
        ResponsibleType?: string | null;
        TaxNumber1?: string | null;
        TaxNumber2?: string | null;
        TaxNumber3?: string | null;
        TaxNumber4?: string | null;
        TaxNumber5?: string | null;
        TaxNumberType?: string | null;
        VATRegistration?: string | null;
        DeletionIndicator?: boolean | null;
        ExpressTrainStationName?: string | null;
        TrainStationName?: string | null;
        CityCode?: string | null;
        County?: string | null;
        to_CustAddrDepdntExtIdentifier?: __.Association.to.many<A_CustAddrDepdntExtIdentifier_>;
        to_CustAddrDepdntInformation?: __.Association.to.many<A_CustAddrDepdntInformation_>;
        to_CustomerCompany?: __.Association.to.many<A_CustomerCompany_>;
        to_CustomerSalesArea?: __.Association.to.many<A_CustomerSalesArea_>;
        to_CustomerTaxGrouping?: __.Association.to.many<A_CustomerTaxGrouping_>;
        to_CustomerText?: __.Association.to.many<A_CustomerText_>;
        to_CustomerUnloadingPoint?: __.Association.to.many<A_CustomerUnloadingPoint_>;
        to_CustUnldgPtAddrDepdntInfo?: __.Association.to.many<A_CustUnldgPtAddrDepdntInfo_>;
      static actions: {
    }
  };
}
export class A_Customer extends _A_CustomerAspect(__.Entity) {}
export class A_Customer_ extends Array<A_Customer> {}
Object.defineProperty(A_Customer, 'name', { value: 'API_BUSINESS_PARTNER.A_Customer' })
Object.defineProperty(A_Customer_, 'name', { value: 'API_BUSINESS_PARTNER.A_Customer' })

export function _A_CustomerCompanyAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_CustomerCompany extends Base {
        Customer?: string;
        CompanyCode?: string;
        APARToleranceGroup?: string | null;
        AccountByCustomer?: string | null;
        AccountingClerk?: string | null;
        AccountingClerkFaxNumber?: string | null;
        AccountingClerkInternetAddress?: string | null;
        AccountingClerkPhoneNumber?: string | null;
        AlternativePayerAccount?: string | null;
        AuthorizationGroup?: string | null;
        CollectiveInvoiceVariant?: string | null;
        CustomerAccountNote?: string | null;
        CustomerHeadOffice?: string | null;
        CustomerSupplierClearingIsUsed?: boolean | null;
        HouseBank?: string | null;
        InterestCalculationCode?: string | null;
        InterestCalculationDate?: string | null;
        IntrstCalcFrequencyInMonths?: string | null;
        IsToBeLocallyProcessed?: boolean | null;
        ItemIsToBePaidSeparately?: boolean | null;
        LayoutSortingRule?: string | null;
        PaymentBlockingReason?: string | null;
        PaymentMethodsList?: string | null;
        PaymentReason?: string | null;
        PaymentTerms?: string | null;
        PaytAdviceIsSentbyEDI?: boolean | null;
        PhysicalInventoryBlockInd?: boolean | null;
        ReconciliationAccount?: string | null;
        RecordPaymentHistoryIndicator?: boolean | null;
        UserAtCustomer?: string | null;
        DeletionIndicator?: boolean | null;
        CashPlanningGroup?: string | null;
        KnownOrNegotiatedLeave?: string | null;
        ValueAdjustmentKey?: string | null;
        CustomerAccountGroup?: string | null;
        to_CompanyText?: __.Association.to.many<A_CustomerCompanyText_>;
        to_CustomerDunning?: __.Association.to.many<A_CustomerDunning_>;
        to_WithHoldingTax?: __.Association.to.many<A_CustomerWithHoldingTax_>;
      static actions: {
    }
  };
}
export class A_CustomerCompany extends _A_CustomerCompanyAspect(__.Entity) {}
export class A_CustomerCompany_ extends Array<A_CustomerCompany> {}
Object.defineProperty(A_CustomerCompany, 'name', { value: 'API_BUSINESS_PARTNER.A_CustomerCompany' })
Object.defineProperty(A_CustomerCompany_, 'name', { value: 'API_BUSINESS_PARTNER.A_CustomerCompany' })

export function _A_CustomerCompanyTextAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_CustomerCompanyText extends Base {
        Customer?: string;
        CompanyCode?: string;
        Language?: string;
        LongTextID?: string;
        LongText?: string | null;
      static actions: {
    }
  };
}
export class A_CustomerCompanyText extends _A_CustomerCompanyTextAspect(__.Entity) {}
export class A_CustomerCompanyText_ extends Array<A_CustomerCompanyText> {}
Object.defineProperty(A_CustomerCompanyText, 'name', { value: 'API_BUSINESS_PARTNER.A_CustomerCompanyText' })
Object.defineProperty(A_CustomerCompanyText_, 'name', { value: 'API_BUSINESS_PARTNER.A_CustomerCompanyText' })

export function _A_CustomerDunningAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_CustomerDunning extends Base {
        Customer?: string;
        CompanyCode?: string;
        DunningArea?: string;
        DunningBlock?: string | null;
        DunningLevel?: string | null;
        DunningProcedure?: string | null;
        DunningRecipient?: string | null;
        LastDunnedOn?: string | null;
        LegDunningProcedureOn?: string | null;
        DunningClerk?: string | null;
        AuthorizationGroup?: string | null;
        CustomerAccountGroup?: string | null;
      static actions: {
    }
  };
}
export class A_CustomerDunning extends _A_CustomerDunningAspect(__.Entity) {}
export class A_CustomerDunning_ extends Array<A_CustomerDunning> {}
Object.defineProperty(A_CustomerDunning, 'name', { value: 'API_BUSINESS_PARTNER.A_CustomerDunning' })
Object.defineProperty(A_CustomerDunning_, 'name', { value: 'API_BUSINESS_PARTNER.A_CustomerDunning' })

export function _A_CustomerSalesAreaAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_CustomerSalesArea extends Base {
        Customer?: string;
        SalesOrganization?: string;
        DistributionChannel?: string;
        Division?: string;
        AccountByCustomer?: string | null;
        AuthorizationGroup?: string | null;
        BillingIsBlockedForCustomer?: string | null;
        CompleteDeliveryIsDefined?: boolean | null;
        CreditControlArea?: string | null;
        Currency?: string | null;
        CustIsRlvtForSettlmtMgmt?: boolean | null;
        CustomerABCClassification?: string | null;
        CustomerAccountAssignmentGroup?: string | null;
        CustomerGroup?: string | null;
        CustomerIsRebateRelevant?: boolean | null;
        CustomerPaymentTerms?: string | null;
        CustomerPriceGroup?: string | null;
        CustomerPricingProcedure?: string | null;
        CustProdProposalProcedure?: string | null;
        DeliveryIsBlockedForCustomer?: string | null;
        DeliveryPriority?: string | null;
        IncotermsClassification?: string | null;
        IncotermsLocation2?: string | null;
        IncotermsVersion?: string | null;
        IncotermsLocation1?: string | null;
        IncotermsSupChnLoc1AddlUUID?: string | null;
        IncotermsSupChnLoc2AddlUUID?: string | null;
        IncotermsSupChnDvtgLocAddlUUID?: string | null;
        DeletionIndicator?: boolean | null;
        IncotermsTransferLocation?: string | null;
        InspSbstHasNoTimeOrQuantity?: boolean | null;
        InvoiceDate?: string | null;
        ItemOrderProbabilityInPercent?: string | null;
        ManualInvoiceMaintIsRelevant?: boolean | null;
        MaxNmbrOfPartialDelivery?: number | null;
        OrderCombinationIsAllowed?: boolean | null;
        OrderIsBlockedForCustomer?: string | null;
        OverdelivTolrtdLmtRatioInPct?: number | null;
        PartialDeliveryIsAllowed?: string | null;
        PriceListType?: string | null;
        ProductUnitGroup?: string | null;
        ProofOfDeliveryTimeValue?: number | null;
        SalesGroup?: string | null;
        SalesItemProposal?: string | null;
        SalesOffice?: string | null;
        ShippingCondition?: string | null;
        SlsDocIsRlvtForProofOfDeliv?: boolean | null;
        SlsUnlmtdOvrdelivIsAllwd?: boolean | null;
        SupplyingPlant?: string | null;
        SalesDistrict?: string | null;
        UnderdelivTolrtdLmtRatioInPct?: number | null;
        InvoiceListSchedule?: string | null;
        ExchangeRateType?: string | null;
        AdditionalCustomerGroup1?: string | null;
        AdditionalCustomerGroup2?: string | null;
        AdditionalCustomerGroup3?: string | null;
        AdditionalCustomerGroup4?: string | null;
        AdditionalCustomerGroup5?: string | null;
        PaymentGuaranteeProcedure?: string | null;
        CustomerAccountGroup?: string | null;
        to_PartnerFunction?: __.Association.to.many<A_CustSalesPartnerFunc_>;
        to_SalesAreaTax?: __.Association.to.many<A_CustomerSalesAreaTax_>;
        to_SalesAreaText?: __.Association.to.many<A_CustomerSalesAreaText_>;
        to_SlsAreaAddrDepdntInfo?: __.Association.to.many<A_CustSlsAreaAddrDepdntInfo_>;
      static actions: {
    }
  };
}
export class A_CustomerSalesArea extends _A_CustomerSalesAreaAspect(__.Entity) {}
export class A_CustomerSalesArea_ extends Array<A_CustomerSalesArea> {}
Object.defineProperty(A_CustomerSalesArea, 'name', { value: 'API_BUSINESS_PARTNER.A_CustomerSalesArea' })
Object.defineProperty(A_CustomerSalesArea_, 'name', { value: 'API_BUSINESS_PARTNER.A_CustomerSalesArea' })

export function _A_CustomerSalesAreaTaxAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_CustomerSalesAreaTax extends Base {
        Customer?: string;
        SalesOrganization?: string;
        DistributionChannel?: string;
        Division?: string;
        DepartureCountry?: string;
        CustomerTaxCategory?: string;
        CustomerTaxClassification?: string | null;
        to_SlsAreaAddrDepdntTax?: __.Association.to.many<A_CustSlsAreaAddrDepdntTaxInfo_>;
      static actions: {
    }
  };
}
export class A_CustomerSalesAreaTax extends _A_CustomerSalesAreaTaxAspect(__.Entity) {}
export class A_CustomerSalesAreaTax_ extends Array<A_CustomerSalesAreaTax> {}
Object.defineProperty(A_CustomerSalesAreaTax, 'name', { value: 'API_BUSINESS_PARTNER.A_CustomerSalesAreaTax' })
Object.defineProperty(A_CustomerSalesAreaTax_, 'name', { value: 'API_BUSINESS_PARTNER.A_CustomerSalesAreaTax' })

export function _A_CustomerSalesAreaTextAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_CustomerSalesAreaText extends Base {
        Customer?: string;
        SalesOrganization?: string;
        DistributionChannel?: string;
        Division?: string;
        Language?: string;
        LongTextID?: string;
        LongText?: string | null;
      static actions: {
    }
  };
}
export class A_CustomerSalesAreaText extends _A_CustomerSalesAreaTextAspect(__.Entity) {}
export class A_CustomerSalesAreaText_ extends Array<A_CustomerSalesAreaText> {}
Object.defineProperty(A_CustomerSalesAreaText, 'name', { value: 'API_BUSINESS_PARTNER.A_CustomerSalesAreaText' })
Object.defineProperty(A_CustomerSalesAreaText_, 'name', { value: 'API_BUSINESS_PARTNER.A_CustomerSalesAreaText' })

export function _A_CustomerTaxGroupingAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_CustomerTaxGrouping extends Base {
        Customer?: string;
        CustomerTaxGroupingCode?: string;
        CustTaxGrpExemptionCertificate?: string | null;
        CustTaxGroupExemptionRate?: number | null;
        CustTaxGroupExemptionStartDate?: string | null;
        CustTaxGroupExemptionEndDate?: string | null;
        CustTaxGroupSubjectedStartDate?: string | null;
        CustTaxGroupSubjectedEndDate?: string | null;
      static actions: {
    }
  };
}
export class A_CustomerTaxGrouping extends _A_CustomerTaxGroupingAspect(__.Entity) {}
export class A_CustomerTaxGrouping_ extends Array<A_CustomerTaxGrouping> {}
Object.defineProperty(A_CustomerTaxGrouping, 'name', { value: 'API_BUSINESS_PARTNER.A_CustomerTaxGrouping' })
Object.defineProperty(A_CustomerTaxGrouping_, 'name', { value: 'API_BUSINESS_PARTNER.A_CustomerTaxGrouping' })

export function _A_CustomerTextAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_CustomerText extends Base {
        Customer?: string;
        Language?: string;
        LongTextID?: string;
        LongText?: string | null;
      static actions: {
    }
  };
}
export class A_CustomerText extends _A_CustomerTextAspect(__.Entity) {}
export class A_CustomerText_ extends Array<A_CustomerText> {}
Object.defineProperty(A_CustomerText, 'name', { value: 'API_BUSINESS_PARTNER.A_CustomerText' })
Object.defineProperty(A_CustomerText_, 'name', { value: 'API_BUSINESS_PARTNER.A_CustomerText' })

export function _A_CustomerUnloadingPointAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_CustomerUnloadingPoint extends Base {
        Customer?: string;
        UnloadingPointName?: string;
        CustomerFactoryCalenderCode?: string | null;
        BPGoodsReceivingHoursCode?: string | null;
        IsDfltBPUnloadingPoint?: boolean | null;
        MondayMorningOpeningTime?: string | null;
        MondayMorningClosingTime?: string | null;
        MondayAfternoonOpeningTime?: string | null;
        MondayAfternoonClosingTime?: string | null;
        TuesdayMorningOpeningTime?: string | null;
        TuesdayMorningClosingTime?: string | null;
        TuesdayAfternoonOpeningTime?: string | null;
        TuesdayAfternoonClosingTime?: string | null;
        WednesdayMorningOpeningTime?: string | null;
        WednesdayMorningClosingTime?: string | null;
        WednesdayAfternoonOpeningTime?: string | null;
        WednesdayAfternoonClosingTime?: string | null;
        ThursdayMorningOpeningTime?: string | null;
        ThursdayMorningClosingTime?: string | null;
        ThursdayAfternoonOpeningTime?: string | null;
        ThursdayAfternoonClosingTime?: string | null;
        FridayMorningOpeningTime?: string | null;
        FridayMorningClosingTime?: string | null;
        FridayAfternoonOpeningTime?: string | null;
        FridayAfternoonClosingTime?: string | null;
        SaturdayMorningOpeningTime?: string | null;
        SaturdayMorningClosingTime?: string | null;
        SaturdayAfternoonOpeningTime?: string | null;
        SaturdayAfternoonClosingTime?: string | null;
        SundayMorningOpeningTime?: string | null;
        SundayMorningClosingTime?: string | null;
        SundayAfternoonOpeningTime?: string | null;
        SundayAfternoonClosingTime?: string | null;
      static actions: {
    }
  };
}
export class A_CustomerUnloadingPoint extends _A_CustomerUnloadingPointAspect(__.Entity) {}
export class A_CustomerUnloadingPoint_ extends Array<A_CustomerUnloadingPoint> {}
Object.defineProperty(A_CustomerUnloadingPoint, 'name', { value: 'API_BUSINESS_PARTNER.A_CustomerUnloadingPoint' })
Object.defineProperty(A_CustomerUnloadingPoint_, 'name', { value: 'API_BUSINESS_PARTNER.A_CustomerUnloadingPoint' })

export function _A_CustomerWithHoldingTaxAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_CustomerWithHoldingTax extends Base {
        Customer?: string;
        CompanyCode?: string;
        WithholdingTaxType?: string;
        WithholdingTaxCode?: string | null;
        WithholdingTaxAgent?: boolean | null;
        ObligationDateBegin?: string | null;
        ObligationDateEnd?: string | null;
        WithholdingTaxNumber?: string | null;
        WithholdingTaxCertificate?: string | null;
        WithholdingTaxExmptPercent?: number | null;
        ExemptionDateBegin?: string | null;
        ExemptionDateEnd?: string | null;
        ExemptionReason?: string | null;
        AuthorizationGroup?: string | null;
      static actions: {
    }
  };
}
export class A_CustomerWithHoldingTax extends _A_CustomerWithHoldingTaxAspect(__.Entity) {}
export class A_CustomerWithHoldingTax_ extends Array<A_CustomerWithHoldingTax> {}
Object.defineProperty(A_CustomerWithHoldingTax, 'name', { value: 'API_BUSINESS_PARTNER.A_CustomerWithHoldingTax' })
Object.defineProperty(A_CustomerWithHoldingTax_, 'name', { value: 'API_BUSINESS_PARTNER.A_CustomerWithHoldingTax' })

export function _A_CustSalesPartnerFuncAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_CustSalesPartnerFunc extends Base {
        Customer?: string;
        SalesOrganization?: string;
        DistributionChannel?: string;
        Division?: string;
        PartnerCounter?: string;
        PartnerFunction?: string;
        BPCustomerNumber?: string | null;
        CustomerPartnerDescription?: string | null;
        DefaultPartner?: boolean | null;
        Supplier?: string | null;
        PersonnelNumber?: string | null;
        ContactPerson?: string | null;
        AddressID?: string | null;
        AuthorizationGroup?: string | null;
      static actions: {
    }
  };
}
export class A_CustSalesPartnerFunc extends _A_CustSalesPartnerFuncAspect(__.Entity) {}
export class A_CustSalesPartnerFunc_ extends Array<A_CustSalesPartnerFunc> {}
Object.defineProperty(A_CustSalesPartnerFunc, 'name', { value: 'API_BUSINESS_PARTNER.A_CustSalesPartnerFunc' })
Object.defineProperty(A_CustSalesPartnerFunc_, 'name', { value: 'API_BUSINESS_PARTNER.A_CustSalesPartnerFunc' })

export function _A_CustSlsAreaAddrDepdntInfoAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_CustSlsAreaAddrDepdntInfo extends Base {
        Customer?: string;
        SalesOrganization?: string;
        DistributionChannel?: string;
        Division?: string;
        AddressID?: string;
        IncotermsClassification?: string | null;
        IncotermsLocation1?: string | null;
        IncotermsLocation2?: string | null;
        IncotermsSupChnLoc1AddlUUID?: string | null;
        IncotermsSupChnLoc2AddlUUID?: string | null;
        IncotermsSupChnDvtgLocAddlUUID?: string | null;
        DeliveryIsBlocked?: string | null;
        SalesOffice?: string | null;
        SalesGroup?: string | null;
        ShippingCondition?: string | null;
        SupplyingPlant?: string | null;
        IncotermsVersion?: string | null;
      static actions: {
    }
  };
}
export class A_CustSlsAreaAddrDepdntInfo extends _A_CustSlsAreaAddrDepdntInfoAspect(__.Entity) {}
export class A_CustSlsAreaAddrDepdntInfo_ extends Array<A_CustSlsAreaAddrDepdntInfo> {}
Object.defineProperty(A_CustSlsAreaAddrDepdntInfo, 'name', { value: 'API_BUSINESS_PARTNER.A_CustSlsAreaAddrDepdntInfo' })
Object.defineProperty(A_CustSlsAreaAddrDepdntInfo_, 'name', { value: 'API_BUSINESS_PARTNER.A_CustSlsAreaAddrDepdntInfo' })

export function _A_CustSlsAreaAddrDepdntTaxInfoAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_CustSlsAreaAddrDepdntTaxInfo extends Base {
        Customer?: string;
        SalesOrganization?: string;
        DistributionChannel?: string;
        Division?: string;
        AddressID?: string;
        DepartureCountry?: string;
        CustomerTaxCategory?: string;
        CustomerTaxClassification?: string | null;
      static actions: {
    }
  };
}
export class A_CustSlsAreaAddrDepdntTaxInfo extends _A_CustSlsAreaAddrDepdntTaxInfoAspect(__.Entity) {}
export class A_CustSlsAreaAddrDepdntTaxInfo_ extends Array<A_CustSlsAreaAddrDepdntTaxInfo> {}
Object.defineProperty(A_CustSlsAreaAddrDepdntTaxInfo, 'name', { value: 'API_BUSINESS_PARTNER.A_CustSlsAreaAddrDepdntTaxInfo' })
Object.defineProperty(A_CustSlsAreaAddrDepdntTaxInfo_, 'name', { value: 'API_BUSINESS_PARTNER.A_CustSlsAreaAddrDepdntTaxInfo' })

export function _A_CustUnldgPtAddrDepdntInfoAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_CustUnldgPtAddrDepdntInfo extends Base {
        Customer?: string;
        AddressID?: string;
        UnloadingPointName?: string;
        CustomerFactoryCalenderCode?: string | null;
        BPGoodsReceivingHoursCode?: string | null;
        IsDfltBPUnloadingPoint?: boolean | null;
        MondayMorningOpeningTime?: string | null;
        MondayMorningClosingTime?: string | null;
        MondayAfternoonOpeningTime?: string | null;
        MondayAfternoonClosingTime?: string | null;
        TuesdayMorningOpeningTime?: string | null;
        TuesdayMorningClosingTime?: string | null;
        TuesdayAfternoonOpeningTime?: string | null;
        TuesdayAfternoonClosingTime?: string | null;
        WednesdayMorningOpeningTime?: string | null;
        WednesdayMorningClosingTime?: string | null;
        WednesdayAfternoonOpeningTime?: string | null;
        WednesdayAfternoonClosingTime?: string | null;
        ThursdayMorningOpeningTime?: string | null;
        ThursdayMorningClosingTime?: string | null;
        ThursdayAfternoonOpeningTime?: string | null;
        ThursdayAfternoonClosingTime?: string | null;
        FridayMorningOpeningTime?: string | null;
        FridayMorningClosingTime?: string | null;
        FridayAfternoonOpeningTime?: string | null;
        FridayAfternoonClosingTime?: string | null;
        SaturdayMorningOpeningTime?: string | null;
        SaturdayMorningClosingTime?: string | null;
        SaturdayAfternoonOpeningTime?: string | null;
        SaturdayAfternoonClosingTime?: string | null;
        SundayMorningOpeningTime?: string | null;
        SundayMorningClosingTime?: string | null;
        SundayAfternoonOpeningTime?: string | null;
        SundayAfternoonClosingTime?: string | null;
      static actions: {
    }
  };
}
export class A_CustUnldgPtAddrDepdntInfo extends _A_CustUnldgPtAddrDepdntInfoAspect(__.Entity) {}
export class A_CustUnldgPtAddrDepdntInfo_ extends Array<A_CustUnldgPtAddrDepdntInfo> {}
Object.defineProperty(A_CustUnldgPtAddrDepdntInfo, 'name', { value: 'API_BUSINESS_PARTNER.A_CustUnldgPtAddrDepdntInfo' })
Object.defineProperty(A_CustUnldgPtAddrDepdntInfo_, 'name', { value: 'API_BUSINESS_PARTNER.A_CustUnldgPtAddrDepdntInfo' })

export function _A_SupplierAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_Supplier extends Base {
        Supplier?: string | null;
        AlternativePayeeAccountNumber?: string | null;
        AuthorizationGroup?: string | null;
        BusinessPartnerPanNumber?: string | null;
        CreatedByUser?: string | null;
        CreationDate?: string | null;
        Customer?: string | null;
        PaymentIsBlockedForSupplier?: boolean | null;
        PostingIsBlocked?: boolean | null;
        PurchasingIsBlocked?: boolean | null;
        SupplierAccountGroup?: string | null;
        SupplierFullName?: string | null;
        SupplierName?: string | null;
        VATRegistration?: string | null;
        BirthDate?: string | null;
        ConcatenatedInternationalLocNo?: string | null;
        DeletionIndicator?: boolean | null;
        FiscalAddress?: string | null;
        Industry?: string | null;
        InternationalLocationNumber1?: string | null;
        InternationalLocationNumber2?: string | null;
        InternationalLocationNumber3?: string | null;
        IsNaturalPerson?: string | null;
        PaymentReason?: string | null;
        ResponsibleType?: string | null;
        SuplrQltyInProcmtCertfnValidTo?: string | null;
        SuplrQualityManagementSystem?: string | null;
        SupplierCorporateGroup?: string | null;
        SupplierProcurementBlock?: string | null;
        TaxNumber1?: string | null;
        TaxNumber2?: string | null;
        TaxNumber3?: string | null;
        TaxNumber4?: string | null;
        TaxNumber5?: string | null;
        TaxNumberResponsible?: string | null;
        TaxNumberType?: string | null;
        SuplrProofOfDelivRlvtCode?: string | null;
        BR_TaxIsSplit?: boolean | null;
        DataExchangeInstructionKey?: string | null;
        to_SupplierCompany?: __.Association.to.many<A_SupplierCompany_>;
        to_SupplierPurchasingOrg?: __.Association.to.many<A_SupplierPurchasingOrg_>;
        to_SupplierText?: __.Association.to.many<A_SupplierText_>;
      static actions: {
    }
  };
}
export class A_Supplier extends _A_SupplierAspect(__.Entity) {}
export class A_Supplier_ extends Array<A_Supplier> {}
Object.defineProperty(A_Supplier, 'name', { value: 'API_BUSINESS_PARTNER.A_Supplier' })
Object.defineProperty(A_Supplier_, 'name', { value: 'API_BUSINESS_PARTNER.A_Supplier' })

export function _A_SupplierCompanyAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_SupplierCompany extends Base {
        Supplier?: string;
        CompanyCode?: string;
        AuthorizationGroup?: string | null;
        CompanyCodeName?: string | null;
        PaymentBlockingReason?: string | null;
        SupplierIsBlockedForPosting?: boolean | null;
        AccountingClerk?: string | null;
        AccountingClerkFaxNumber?: string | null;
        AccountingClerkPhoneNumber?: string | null;
        SupplierClerk?: string | null;
        SupplierClerkURL?: string | null;
        PaymentMethodsList?: string | null;
        PaymentReason?: string | null;
        PaymentTerms?: string | null;
        ClearCustomerSupplier?: boolean | null;
        IsToBeLocallyProcessed?: boolean | null;
        ItemIsToBePaidSeparately?: boolean | null;
        PaymentIsToBeSentByEDI?: boolean | null;
        HouseBank?: string | null;
        CheckPaidDurationInDays?: number | null;
        Currency?: string | null;
        BillOfExchLmtAmtInCoCodeCrcy?: number | null;
        SupplierClerkIDBySupplier?: string | null;
        ReconciliationAccount?: string | null;
        InterestCalculationCode?: string | null;
        InterestCalculationDate?: string | null;
        IntrstCalcFrequencyInMonths?: string | null;
        SupplierHeadOffice?: string | null;
        AlternativePayee?: string | null;
        LayoutSortingRule?: string | null;
        APARToleranceGroup?: string | null;
        SupplierCertificationDate?: string | null;
        SupplierAccountNote?: string | null;
        WithholdingTaxCountry?: string | null;
        DeletionIndicator?: boolean | null;
        CashPlanningGroup?: string | null;
        IsToBeCheckedForDuplicates?: boolean | null;
        MinorityGroup?: string | null;
        SupplierAccountGroup?: string | null;
        to_CompanyText?: __.Association.to.many<A_SupplierCompanyText_>;
        to_Supplier?: __.Association.to<A_Supplier> | null;
        to_Supplier_Supplier?: string | null;
        to_SupplierDunning?: __.Association.to.many<A_SupplierDunning_>;
        to_SupplierWithHoldingTax?: __.Association.to.many<A_SupplierWithHoldingTax_>;
      static actions: {
    }
  };
}
export class A_SupplierCompany extends _A_SupplierCompanyAspect(__.Entity) {}
export class A_SupplierCompany_ extends Array<A_SupplierCompany> {}
Object.defineProperty(A_SupplierCompany, 'name', { value: 'API_BUSINESS_PARTNER.A_SupplierCompany' })
Object.defineProperty(A_SupplierCompany_, 'name', { value: 'API_BUSINESS_PARTNER.A_SupplierCompany' })

export function _A_SupplierCompanyTextAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_SupplierCompanyText extends Base {
        Supplier?: string;
        CompanyCode?: string;
        Language?: string;
        LongTextID?: string;
        LongText?: string | null;
      static actions: {
    }
  };
}
export class A_SupplierCompanyText extends _A_SupplierCompanyTextAspect(__.Entity) {}
export class A_SupplierCompanyText_ extends Array<A_SupplierCompanyText> {}
Object.defineProperty(A_SupplierCompanyText, 'name', { value: 'API_BUSINESS_PARTNER.A_SupplierCompanyText' })
Object.defineProperty(A_SupplierCompanyText_, 'name', { value: 'API_BUSINESS_PARTNER.A_SupplierCompanyText' })

export function _A_SupplierDunningAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_SupplierDunning extends Base {
        Supplier?: string;
        CompanyCode?: string;
        DunningArea?: string;
        DunningBlock?: string | null;
        DunningLevel?: string | null;
        DunningProcedure?: string | null;
        DunningRecipient?: string | null;
        LastDunnedOn?: string | null;
        LegDunningProcedureOn?: string | null;
        DunningClerk?: string | null;
        AuthorizationGroup?: string | null;
        SupplierAccountGroup?: string | null;
      static actions: {
    }
  };
}
export class A_SupplierDunning extends _A_SupplierDunningAspect(__.Entity) {}
export class A_SupplierDunning_ extends Array<A_SupplierDunning> {}
Object.defineProperty(A_SupplierDunning, 'name', { value: 'API_BUSINESS_PARTNER.A_SupplierDunning' })
Object.defineProperty(A_SupplierDunning_, 'name', { value: 'API_BUSINESS_PARTNER.A_SupplierDunning' })

export function _A_SupplierPartnerFuncAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_SupplierPartnerFunc extends Base {
        Supplier?: string;
        PurchasingOrganization?: string;
        SupplierSubrange?: string;
        Plant?: string;
        PartnerFunction?: string;
        PartnerCounter?: string;
        DefaultPartner?: boolean | null;
        CreationDate?: string | null;
        CreatedByUser?: string | null;
        ReferenceSupplier?: string | null;
        AuthorizationGroup?: string | null;
      static actions: {
    }
  };
}
export class A_SupplierPartnerFunc extends _A_SupplierPartnerFuncAspect(__.Entity) {}
export class A_SupplierPartnerFunc_ extends Array<A_SupplierPartnerFunc> {}
Object.defineProperty(A_SupplierPartnerFunc, 'name', { value: 'API_BUSINESS_PARTNER.A_SupplierPartnerFunc' })
Object.defineProperty(A_SupplierPartnerFunc_, 'name', { value: 'API_BUSINESS_PARTNER.A_SupplierPartnerFunc' })

export function _A_SupplierPurchasingOrgAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_SupplierPurchasingOrg extends Base {
        Supplier?: string;
        PurchasingOrganization?: string;
        AutomaticEvaluatedRcptSettlmt?: boolean | null;
        CalculationSchemaGroupCode?: string | null;
        DeletionIndicator?: boolean | null;
        EvaldReceiptSettlementIsActive?: boolean | null;
        IncotermsClassification?: string | null;
        IncotermsTransferLocation?: string | null;
        IncotermsVersion?: string | null;
        IncotermsLocation1?: string | null;
        IncotermsLocation2?: string | null;
        IncotermsSupChnLoc1AddlUUID?: string | null;
        IncotermsSupChnLoc2AddlUUID?: string | null;
        IncotermsSupChnDvtgLocAddlUUID?: string | null;
        IntrastatCrsBorderTrMode?: string | null;
        InvoiceIsGoodsReceiptBased?: boolean | null;
        InvoiceIsMMServiceEntryBased?: boolean | null;
        MaterialPlannedDeliveryDurn?: number | null;
        MinimumOrderAmount?: number | null;
        PaymentTerms?: string | null;
        PlanningCycle?: string | null;
        PricingDateControl?: string | null;
        ProdStockAndSlsDataTransfPrfl?: string | null;
        ProductUnitGroup?: string | null;
        PurOrdAutoGenerationIsAllowed?: boolean | null;
        PurchaseOrderCurrency?: string | null;
        PurchasingGroup?: string | null;
        PurchasingIsBlockedForSupplier?: boolean | null;
        RoundingProfile?: string | null;
        ShippingCondition?: string | null;
        SuplrDiscountInKindIsGranted?: boolean | null;
        SuplrInvcRevalIsAllowed?: boolean | null;
        SuplrIsRlvtForSettlmtMgmt?: boolean | null;
        SuplrPurgOrgIsRlvtForPriceDetn?: boolean | null;
        SupplierABCClassificationCode?: string | null;
        SupplierAccountNumber?: string | null;
        SupplierIsReturnsSupplier?: boolean | null;
        SupplierPhoneNumber?: string | null;
        SupplierRespSalesPersonName?: string | null;
        SupplierConfirmationControlKey?: string | null;
        IsOrderAcknRqd?: boolean | null;
        AuthorizationGroup?: string | null;
        SupplierAccountGroup?: string | null;
        to_PartnerFunction?: __.Association.to.many<A_SupplierPartnerFunc_>;
        to_PurchasingOrgText?: __.Association.to.many<A_SupplierPurchasingOrgText_>;
      static actions: {
    }
  };
}
export class A_SupplierPurchasingOrg extends _A_SupplierPurchasingOrgAspect(__.Entity) {}
export class A_SupplierPurchasingOrg_ extends Array<A_SupplierPurchasingOrg> {}
Object.defineProperty(A_SupplierPurchasingOrg, 'name', { value: 'API_BUSINESS_PARTNER.A_SupplierPurchasingOrg' })
Object.defineProperty(A_SupplierPurchasingOrg_, 'name', { value: 'API_BUSINESS_PARTNER.A_SupplierPurchasingOrg' })

export function _A_SupplierPurchasingOrgTextAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_SupplierPurchasingOrgText extends Base {
        Supplier?: string;
        PurchasingOrganization?: string;
        Language?: string;
        LongTextID?: string;
        LongText?: string | null;
      static actions: {
    }
  };
}
export class A_SupplierPurchasingOrgText extends _A_SupplierPurchasingOrgTextAspect(__.Entity) {}
export class A_SupplierPurchasingOrgText_ extends Array<A_SupplierPurchasingOrgText> {}
Object.defineProperty(A_SupplierPurchasingOrgText, 'name', { value: 'API_BUSINESS_PARTNER.A_SupplierPurchasingOrgText' })
Object.defineProperty(A_SupplierPurchasingOrgText_, 'name', { value: 'API_BUSINESS_PARTNER.A_SupplierPurchasingOrgText' })

export function _A_SupplierTextAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_SupplierText extends Base {
        Supplier?: string;
        Language?: string;
        LongTextID?: string;
        LongText?: string | null;
      static actions: {
    }
  };
}
export class A_SupplierText extends _A_SupplierTextAspect(__.Entity) {}
export class A_SupplierText_ extends Array<A_SupplierText> {}
Object.defineProperty(A_SupplierText, 'name', { value: 'API_BUSINESS_PARTNER.A_SupplierText' })
Object.defineProperty(A_SupplierText_, 'name', { value: 'API_BUSINESS_PARTNER.A_SupplierText' })

export function _A_SupplierWithHoldingTaxAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class A_SupplierWithHoldingTax extends Base {
        Supplier?: string;
        CompanyCode?: string;
        WithholdingTaxType?: string;
        ExemptionDateBegin?: string | null;
        ExemptionDateEnd?: string | null;
        ExemptionReason?: string | null;
        IsWithholdingTaxSubject?: boolean | null;
        RecipientType?: string | null;
        WithholdingTaxCertificate?: string | null;
        WithholdingTaxCode?: string | null;
        WithholdingTaxExmptPercent?: number | null;
        WithholdingTaxNumber?: string | null;
        AuthorizationGroup?: string | null;
      static actions: {
    }
  };
}
export class A_SupplierWithHoldingTax extends _A_SupplierWithHoldingTaxAspect(__.Entity) {}
export class A_SupplierWithHoldingTax_ extends Array<A_SupplierWithHoldingTax> {}
Object.defineProperty(A_SupplierWithHoldingTax, 'name', { value: 'API_BUSINESS_PARTNER.A_SupplierWithHoldingTax' })
Object.defineProperty(A_SupplierWithHoldingTax_, 'name', { value: 'API_BUSINESS_PARTNER.A_SupplierWithHoldingTax' })

// event
export class BusinessPartnerCreated {
    BusinessPartner: string | null;
}
// event
export class BusinessPartnerChanged {
    BusinessPartner: string | null;
}