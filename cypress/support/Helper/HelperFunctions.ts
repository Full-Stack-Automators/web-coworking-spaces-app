import {LocationData} from "../Interfaces/LocationData";

export class HelperFunctions {

    const = {
        assertionFixtureFile: 'assertions',
        locationsFixtureFile: 'locations',
        locationRoomFixtureFile: 'locationRooms/locations',
    }

    storeRandomLocationID(): void {
        cy.fixture(this.const.locationsFixtureFile).then((data) => {
            const randomLocationIndex: number = Math.floor(Math.random() * data['locations'].length);
            const locationID: string = data['locations'][randomLocationIndex]['id'];
            const locationData: LocationData = {
                locationID: locationID,
                // locationID: 'Bashirian-WilliamsonCenter', //ola temp
                locationIndex: randomLocationIndex
            }
            cy.wrap(locationData).as('locationData');
        });
    }
}