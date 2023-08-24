import {LocationsPage} from "../pages/LocationsPage";

export class LocationsPageActions {
    locationsPage: LocationsPage = new LocationsPage()

    verifyLocationsName(spacesName: string): void {
        this.locationsPage.verifyLocationsName(spacesName)
    }

    clickLearnMore(): void {
        this.locationsPage.clickLearnMore()
    }
}