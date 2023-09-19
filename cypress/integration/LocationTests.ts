import {HomePageActions} from "../model/actions/HomePageActions";
import {LocationPageActions} from "../model/actions/LocationPageActions";
import {HelperFunctions} from "../support/Helper/HelperFunctions";

const homePagePageActions: HomePageActions = new HomePageActions()
const locationPageActions: LocationPageActions = new LocationPageActions()
const helperFunctions: HelperFunctions = new HelperFunctions()

beforeEach(() => {
    cy.visit('')
    helperFunctions.storeRandomLocationID();
});

describe(['LOCATION_TESTS'], 'Location Page Test Suite', () => {

    it('WEBC-58 - Verify the information for a Location is correct', () => {
        homePagePageActions.clickLearnMore();
        locationPageActions.verifyRoomsFeatures();
    });
});