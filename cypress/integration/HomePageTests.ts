/// <reference types="cypress" />

import {HomePageActions} from "../model/actions/HomePageActions";
import {LocationsPageActions} from "../model/actions/LocationsPageActions";

const homePagePageActions: HomePageActions = new HomePageActions()
const locationsPageActions: LocationsPageActions = new LocationsPageActions()
beforeEach(() => {
    cy.visit('')
});

describe(['HOMEPAGE_TESTS'],'Home Page Test Suite', () => {


    it('WEBC-4 - Navigate to homepage and verify that this is done successfully', () => {

    });

    it('WEBC-5 Verify that the location is correct', () => {
        homePagePageActions.clickExploreOurLocations()
        locationsPageActions.verifyLocationsName('MCGLYNNE');
    });

    it('WEBC-53 - Verify the banner section contains the correct title and information', () => {
        homePagePageActions.verifyH1Text();
        homePagePageActions.verifyH1DescriptionText();
    });

    it.only('WEBC-57 - Verify the information on the Featured locations is correct ', () => {
        homePagePageActions.verifyFeaturedLocation();
    });
});