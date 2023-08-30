import {HomePageActions} from "../model/actions/HomePageActions";

const homePagePageActions: HomePageActions = new HomePageActions()
beforeEach(() => {
    cy.visit('')
});

describe('Home Page Test Suite', () => {


    it('WEBC-4 Navigating to the Home Page and asserting that the', () => {
        cy.log("******************** " + process.env.DEVICE);
        cy.log("******************** " + process.env.RUN_NAME);
        homePagePageActions.verifyHeaderText()
    });
});