import { HomePage as DesktopPage } from './desktop/Homepage';
import { HomePage as MobilePage } from './mobile/Homepage';

let ResponsivePage = DesktopPage;

if (Cypress.env('isMobile')) ResponsivePage = MobilePage;

export class HomePage extends ResponsivePage {

}
