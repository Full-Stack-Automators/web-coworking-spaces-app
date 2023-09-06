import {HelperFunctions} from "../../../support/Helper/HelperFunctions";

export class LocationPage {
    helperFunctions: HelperFunctions = new HelperFunctions();

    elements = {
        roomValue: () => cy.get('#room'),
        monthlyRateValue: () => cy.get('#monthly-rate'),
        seatsValue: () => cy.get('#seats'),
        privateWashroomValue: () => cy.get('#private-facilities'),
        phoneValue: () => cy.get('#phone'),
        windowsValue: () => cy.get('#windows'),
        cornerValue: () => cy.get('#corner'),
    }
}
