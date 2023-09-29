import {HelperFunctions} from "../../../support/Helper/HelperFunctions";
import {LocationData} from "../../../support/Interfaces/LocationData";

export class LocationsPage {
    helperFunctions: HelperFunctions = new HelperFunctions();

    elements = {
        learnMoreButton: () => cy.get('#learn-more'),
        spacesNameLocator: '#{replacementText} #spaces-name'
    }

    verifyLocationName(): void {
        cy.get<LocationData>('@locationData').then(locationData => {
            const formattedLocator = this.elements.spacesNameLocator.replace('{replacementText}', locationData.id);
            const locationName: string = locationData.name;
            cy.get(formattedLocator).then(el => {
                expect(locationName).contains(el.text());
            });
        });
    }

    clickLearnMore(): void {
        this.elements.learnMoreButton().click();
    }
}
