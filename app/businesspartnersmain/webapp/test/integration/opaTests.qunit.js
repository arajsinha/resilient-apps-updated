sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ns/businesspartnersmain/test/integration/FirstJourney',
		'ns/businesspartnersmain/test/integration/pages/BusinessPartnerVerificationList',
		'ns/businesspartnersmain/test/integration/pages/BusinessPartnerVerificationObjectPage',
		'ns/businesspartnersmain/test/integration/pages/AddressesObjectPage'
    ],
    function(JourneyRunner, opaJourney, BusinessPartnerVerificationList, BusinessPartnerVerificationObjectPage, AddressesObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ns/businesspartnersmain') + '/index.html'
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