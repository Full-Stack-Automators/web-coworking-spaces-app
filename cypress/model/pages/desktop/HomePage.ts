/// <reference types="cypress-xpath" />

import {HelperFunctions} from "../../../support/Helper/HelperFunctions";
import {LocationModel} from "../../../support/Interfaces/LocationModel";

export class HomePage {
    helperFunctions: HelperFunctions = new HelperFunctions();

    elements = {
        h1: () => cy.get('#header-tagline'),
        h1Description: () => cy.get('#header-description'),
        exploreOurLocationsButton: () => cy.get('#explore-location'),
        address: () => cy.xpath("//*[contains(text(), 'Bashirian - Williamson Center')]//ancestor::div[1]//*[@id='address']"),
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
        cy.fixture(this.helperFunctions.const.locationsFixtureFile).then((data) => {
            this.elements.address().then(el => {
                cy.log(el.text());
                cy.log(data['locations'][3]['address']);
                expect(el.text()).eq(data['locations'][3]['address']);
            });
        })
    }

    clickExploreOurLocations(): void {
        this.elements.exploreOurLocationsButton().click();
    }
}
