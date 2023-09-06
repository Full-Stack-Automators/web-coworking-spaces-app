import {HelperFunctions} from "../../../support/Helper/HelperFunctions";

export class LocationsPage {
    helperFunctions: HelperFunctions = new HelperFunctions();

    elements = {
        learnMoreButton: () => cy.get('#learn-more'),
        spacesName: () => cy.get('#spaces-name'),
    }

    verifyLocationsName(spacesName: string): void {
        cy.fixture(this.helperFunctions.const.assertionFixtureFile).then((data) => {
            this.elements.spacesName().then(el => {
                expect(data['spacesNames'][spacesName]).contains(el.text());
            })
        })
    }

    clickLearnMore(): void {
        this.elements.learnMoreButton().click();
    }
}
