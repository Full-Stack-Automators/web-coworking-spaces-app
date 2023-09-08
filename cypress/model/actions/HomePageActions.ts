import {HomePage} from "../pages/HomePage";

export class HomePageActions {
    homePage: HomePage = new HomePage()

    verifyH1Text(): void {
        this.homePage.verifyH1Text();
    }

    verifyH1DescriptionText(): void {
        this.homePage.verifyH1Description();
    }

    clickExploreOurLocations(): void {
        this.homePage.clickExploreOurLocations();
    }

    verifyFeaturedLocation(): void {
        this.homePage.verifyFeaturedLocation();
    }
}