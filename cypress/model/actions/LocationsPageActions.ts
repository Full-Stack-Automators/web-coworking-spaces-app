import {LocationsPage} from "../pages/LocationsPage";

export class LocationsPageActions {
    locationsPage: LocationsPage = new LocationsPage()

    verifyLocationName(): void {
        this.locationsPage.verifyLocationName()
    }

    clickLearnMore(): void {
        this.locationsPage.clickLearnMore()
    }
}