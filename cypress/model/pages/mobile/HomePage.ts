/// <reference types="cypress" />

import {HelperFunctions} from "../../../support/Helper/HelperFunctions";
import { HomePage as DesktopPage } from '../desktop/HomePage';

export class HomePage extends DesktopPage {
    helperFunctions: HelperFunctions = new HelperFunctions();

    elements = {
        ...this.elements
    };

    verifyHeaderText() {
        super.verifyH1Text();
        cy.log("This is a mobile verifyHeaderText() function");
    }
}
