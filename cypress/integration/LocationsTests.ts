import {HomePageActions} from "../model/actions/HomePageActions";
import {LocationsPageActions} from "../model/actions/LocationsPageActions";
import {HelperFunctions} from "../support/Helper/HelperFunctions";

const homePagePageActions: HomePageActions = new HomePageActions();
const locationsPageActions: LocationsPageActions = new LocationsPageActions();
const helperFunctions: HelperFunctions = new HelperFunctions();

beforeEach(() => {
    cy.visit('')
    helperFunctions.storeRandomData();
});

describe(['LOCATIONS_TESTS'], 'Locations Page Test Suite', () => {

    it('WEBC-55 - Verify the information for a Location is correct', () => {

    });
});