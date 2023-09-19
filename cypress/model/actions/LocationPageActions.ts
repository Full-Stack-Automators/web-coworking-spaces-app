import {LocationPage} from "../pages/LocationPage";

export class LocationPageActions {
    locationPage: LocationPage = new LocationPage()

    verifyRoomsFeatures(): void {
        this.locationPage.verifyRoomsFeatures();
    }
}