import {HomePageActions} from "../model/actions/HomePageActions";
import {LocationsPageActions} from "../model/actions/LocationsPageActions";

const homePagePageActions: HomePageActions = new HomePageActions()
const locationsPageActions: LocationsPageActions = new LocationsPageActions()
beforeEach(() => {
    cy.visit('')
});

describe.skip('Home Page Test Suite', () => {


    it('WEBC-5 Verify that the location is correct', () => {
        homePagePageActions.clickExploreOurLocations()
        locationsPageActions.verifyLocationsName('MCGLYNNE');
    });
});