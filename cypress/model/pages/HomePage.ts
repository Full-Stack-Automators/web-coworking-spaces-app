import { HomePage as DesktopPage } from './desktop/HomePage';
import { HomePage as MobilePage } from './mobile/HomePage';

let ResponsivePage = DesktopPage;

if (Cypress.env('isMobile')) ResponsivePage = MobilePage;

export class HomePage extends ResponsivePage {

}
