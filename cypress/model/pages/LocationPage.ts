import { LocationPage as DesktopPage } from './desktop/LocationPage';
import { LocationPage as MobilePage } from './mobile/LocationPage';

let ResponsivePage = DesktopPage;

if (Cypress.env('isMobile')) ResponsivePage = MobilePage;

export class LocationPage extends ResponsivePage {

}
