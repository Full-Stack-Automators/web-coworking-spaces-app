import { LocationsPage as DesktopPage } from '../desktop/LocationsPage';

export class LocationsPage extends DesktopPage {

    elements = {
        ...this.elements
    }

    verifyLocationName(): void {
        super.verifyLocationName();
        cy.log("This is a mobile verifyLocationsName() function");
    }
}
