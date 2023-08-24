/// <reference types="cypress" />

import { LocationsPage as DesktopPage } from '../desktop/LocationsPage';

export class LocationsPage extends DesktopPage {

    elements = {
        ...this.elements
    }

    verifyLocationsName(spacesName: string): void {
        super.verifyLocationsName(spacesName);
        cy.log("This is a mobile verifyLocationsName() function");
    }
}
