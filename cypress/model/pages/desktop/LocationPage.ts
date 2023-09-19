import {HelperFunctions} from "../../../support/Helper/HelperFunctions";
import {LocationData} from "../../../support/Interfaces/LocationData";
import {RoomModel} from "../../../support/Interfaces/RoomModel";
import {Rooms} from "../../../support/Enums/Rooms";

export class LocationPage {
    helperFunctions: HelperFunctions = new HelperFunctions();

    elements = {
        seats: '#{replacementText} #seats',
        monthlyRate: '#{replacementText} #monthly-rate',
        privateWashroomLocator: '#{replacementText} #private-facilities .fa-check',
        phoneLocator: '#{replacementText} #phone .fa-check',
        windowsLocator: '#{replacementText} #windows .fa-check',
        cornerLocator: '#{replacementText} #corner .fa-check',
    }

    verifyRoomsFeatures(): void {
        cy.get<LocationData>('@locationData').then(locationData => {
            const locationID = locationData.locationID
            cy.fixture(`locationRooms/${locationID}`).then((data) => {
                const rooms = Object.values(Rooms);
                rooms.forEach((values, index) => {
                    if (data[values]) {
                        const roomModel: RoomModel = data[values];
                        this.verifyRoomBoolean(values, roomModel);
                    }
                });
            });
        });
    }

    verifyRoomBoolean(roomID: string ,room: RoomModel): void {
        this.assertRoomFeature(this.elements.privateWashroomLocator, roomID, room.privateWashroom);
        this.assertRoomFeature(this.elements.phoneLocator, roomID, room.phone);
        this.assertRoomFeature(this.elements.windowsLocator, roomID, room.windows);
        this.assertRoomFeature(this.elements.cornerLocator, roomID, room.corner);
    }

    assertRoomFeature(locator: string, roomID: string, featureExists: boolean) {
            const formattedLocator = locator.replace('{replacementText}', roomID);
            if (featureExists) {
                cy.get(formattedLocator).should('exist');
            } else {
                cy.get(formattedLocator).should('not.exist');
            }
    }
}
