import {HomePage} from "../pages/HomePage";

export class HomePageActions {
    homePage: HomePage = new HomePage()

    verifyHeaderText(): void {
        this.homePage.verifyHeaderText()
    }

    clickExploreOurLocations(): void {
        this.homePage.clickExploreOurLocations()
    }
}