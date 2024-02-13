sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ns/businesspartners/test/integration/FirstJourney',
		'ns/businesspartners/test/integration/pages/BusinessPartnerVerificationList',
		'ns/businesspartners/test/integration/pages/BusinessPartnerVerificationObjectPage',
		'ns/businesspartners/test/integration/pages/AddressesObjectPage'
    ],
    function(JourneyRunner, opaJourney, BusinessPartnerVerificationList, BusinessPartnerVerificationObjectPage, AddressesObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ns/businesspartners') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBusinessPartnerVerificationList: BusinessPartnerVerificationList,
					onTheBusinessPartnerVerificationObjectPage: BusinessPartnerVerificationObjectPage,
					onTheAddressesObjectPage: AddressesObjectPage
                }
            },
            opaJourney.run
        );
    }
);