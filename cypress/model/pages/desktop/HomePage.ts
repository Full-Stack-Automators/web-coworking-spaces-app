import {HelperFunctions} from "../../../support/Helper/HelperFunctions";
import {LocationData} from "../../../support/Interfaces/LocationData";

export class HomePage {
    helperFunctions: HelperFunctions = new HelperFunctions();

    elements = {
        h1: () => cy.get('#header-tagline'),
        h1Description: () => cy.get('#header-description'),
        exploreOurLocationsButton: () => cy.get('#explore-location'),
        addressLocator: '#{replacementText} #address',
        parkingLocator: '#{replacementText} #fa-suitcase .fa-check',
        learnMoreButtonLocator: '#{replacementText} #learn-more'
    }

    verifyH1Text(): void {
        cy.fixture(this.helperFunctions.const.assertionFixtureFile).eq(0).then((data) => {
            this.elements.h1().then(el => {
                expect(data['homePage']['h1Text']).contains(el.text());
            })
        })
    }

    verifyH1Description(): void {
        cy.fixture(this.helperFunctions.const.assertionFixtureFile).then((data) => {
            this.elements.h1Description().then(el => {
                expect(data['homePage']['h1Description']).eq(el.text());
            })
        })
    }

    verifyFeaturedLocation(): void {
            cy.get<LocationData>('@locationData').then(locationData => {
                const addressLocator = this.elements.addressLocator.replace('{replacementText}', locationData.id);
                cy.get(addressLocator).then(el => {
                    expect(el.text()).eq(locationData.address);
                });
            });
    }

    clickExploreOurLocations(): void {
        this.elements.exploreOurLocationsButton().click();
    }

    clickLearnMore(): void {
        cy.get<LocationData>('@locationData').then(locationData => {
            const locator = this.elements.learnMoreButtonLocator.replace('{replacementText}', locationData.id);
            cy.get(locator).click();
        });
    }
}
