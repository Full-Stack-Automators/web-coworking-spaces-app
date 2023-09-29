import {LocationData} from "../Interfaces/LocationData";

export class HelperFunctions {

    const = {
        assertionFixtureFile: 'assertions',
        locationsFixtureFile: 'locations',
        locationRoomFixtureFile: 'locationRooms/locations',
    }

    storeRandomData(): void {
        cy.fixture(this.const.locationsFixtureFile).then((data) => {
            const randomLocationIndex: number = Math.floor(Math.random() * data['locations'].length);
            const locationDataRaw : any = data['locations'][randomLocationIndex];
            const locationData: LocationData = {
                id: locationDataRaw['id'],
                name: locationDataRaw['name'],
                address: locationDataRaw['address'],
                parking: locationDataRaw['parking'],
                conferenceRoom: locationDataRaw['conferenceRoom'],
                receptionServices: locationDataRaw['receptionServices'],
                publicAccess: locationDataRaw['publicAccess']
            }
            cy.wrap(locationData).as('locationData');
        });
    }

    printDeviceAndViewport(): void{
        const viewportWidth = String(Cypress.config('viewportWidth'));
        const viewportHeight = String(Cypress.config('viewportHeight'));
        const deviceName = Cypress.env('deviceName');
        cy.task('log', `  Tests running on: ${deviceName} - which has a ViewportWidth: ${viewportWidth} | ViewportHeight: ${viewportHeight}`);
        cy.task('log', `  ${Cypress.config('baseUrl')}`);
    }
}