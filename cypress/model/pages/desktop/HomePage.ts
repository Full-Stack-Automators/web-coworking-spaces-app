/// <reference types="cypress" />

import {HelperFunctions} from "../../../support/Helper/HelperFunctions";

export class HomePage {
    helperFunctions: HelperFunctions = new HelperFunctions();

    elements = {
        header: () => cy.get('#header-tagline'),
        exploreOurLocationsButton: () => cy.get('#explore-location'),
    }

    verifyHeaderText(): void {
        cy.fixture(this.helperFunctions.const.assertionFixtureFile).then((data) => {
            this.elements.header().then(el => {
                expect(data['headerTagline']).contains(el.text())
            })
        })
    }

    clickExploreOurLocations(): void {
        this.elements.exploreOurLocationsButton().click();
    }
}
