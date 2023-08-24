import { LocationsPage as DesktopPage } from './desktop/LocationsPage';
import { LocationsPage as MobilePage } from './mobile/LocationsPage';

let ResponsivePage = DesktopPage;

if (Cypress.env('isMobile')) ResponsivePage = MobilePage;

export class LocationsPage extends ResponsivePage {

}
