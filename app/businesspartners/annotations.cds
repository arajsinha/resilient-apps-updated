using AdminService as service from '../../srv/admin';

annotate service.BusinessPartnerVerification with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Value : BusinessPartner,
        },
        {
            $Type : 'UI.DataField',
            Label : 'FirstName',
            Value : FirstName,
        },
        {
            $Type : 'UI.DataField',
            Label : 'LastName',
            Value : LastName,
        },
        {
            $Type : 'UI.DataField',
            Value : verificationStatus_code,
        },
        {
            $Type : 'UI.DataField',
            Label : 'BusinessPartnerIsBlocked',
            Value : BusinessPartnerIsBlocked,
        },
    ]
);
annotate service.BusinessPartnerVerification with {
    verificationStatus @Common.ValueList : {
        $Type : 'Common.ValueListType',
        CollectionPath : 'StatusValues',
        Parameters : [
            {
                $Type : 'Common.ValueListParameterInOut',
                LocalDataProperty : verificationStatus_code,
                ValueListProperty : 'code',
            },
            {
                $Type : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty : 'value',
            },
            {
                $Type : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty : 'criticality',
            },
            {
                $Type : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty : 'updateCode',
            },
        ],
    }
};
annotate service.BusinessPartnerVerification with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : BusinessPartner,
            },
            {
                $Type : 'UI.DataField',
                Label : 'FirstName',
                Value : FirstName,
            },
            {
                $Type : 'UI.DataField',
                Label : 'LastName',
                Value : LastName,
            },
            {
                $Type : 'UI.DataField',
                Value : verificationStatus_code,
            },
            {
                $Type : 'UI.DataField',
                Label : 'BusinessPartnerIsBlocked',
                Value : BusinessPartnerIsBlocked,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
    ]
);
