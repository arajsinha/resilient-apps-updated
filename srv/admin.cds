using tfe.model.bpVerification as model from '../db/schema';
using API_BUSINESS_PARTNER as externalBuPa from './external/API_BUSINESS_PARTNER';

@impl : './admin'
service AdminService {
    @odata.draft.enabled
    entity BusinessPartnerVerification as projection on model.Verifications actions {
        @(
            cds.odata.bindingparameter.name : '_it',
            Common.SideEffects              : {
                TargetProperties : ['_it/BusinessPartnerIsBlocked', '_it/verificationStatus_code']
            }
        )
        @sap.applicable.path : 'block' action   block();

        @(
            cds.odata.bindingparameter.name : '_it',
            Common.SideEffects              : {
                TargetProperties : ['_it/BusinessPartnerIsBlocked', '_it/verificationStatus_code']
            }
        )
        @sap.applicable.path : 'unblock' action unblock();
    }
    @cds.persistence.skip
    entity BusinessPartner             as projection on externalBuPa.A_BusinessPartner {
        key BusinessPartner,
            BusinessPartnerIsBlocked,
            FirstName,
            LastName,
            to_BusinessPartnerAddress as addresses : redirected to BusinessPartnerAddresses
    }
    @cds.persistence.skip
    entity BusinessPartnerAddresses    as projection on externalBuPa.A_BusinessPartnerAddress {
        key BusinessPartner,
        key AddressID,
            Country,
            CityName,
            StreetName,
            PostalCode,
            HouseNumber
    }

    entity StatusValues                as projection on model.StatusValues;
    entity Addresses                   as projection on model.Addresses;
    function testFunction() returns String;

    extend service externalBuPa with {
        event BusinessPartnerCreated @(topic: 'tfe/bp/em/ce/sap/s4/beh/businesspartner/v1/BusinessPartner/Created/v1') {
            BusinessPartner : String
        }

        event BusinessPartnerChanged @(topic: 'tfe/bp/em/ce/sap/s4/beh/businesspartner/v1/BusinessPartner/Changed/v1') {
            BusinessPartner : String
        }
    }


}


annotate AdminService with @(requires : 'authenticated-user');

annotate AdminService.Addresses with @(restrict : [{
    grant : ['*'],
    to    : 'BPAdmin'
}]);


annotate AdminService.BusinessPartnerVerification with @(restrict : [{
    grant : ['*'],
    to    : 'BPAdmin'
}]);
