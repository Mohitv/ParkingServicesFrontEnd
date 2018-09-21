import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const nearByParking = [{
    "_id": {
        "$oid": "58a3f3d8d50b6e000422c2ba"
    },
    "parkingSlotId": 3,
    "name": "Bellandur",
    "openTime": {
        "$date": "2016-02-02T19:35:45.000Z"
    },
    "closeTime": {
        "$date": "2016-02-02T19:35:45.000Z"
    },
    "parkingId": 2,
    "leftPhoto": null,
    "rightPhoto": null,
    "frontPhoto": null,
    "parkingType": "Open Surface",
    "parkingOwner": null,
    "collectionAt": null,
    "avgParkingWeekday": null,
    "avgParkingWeekend": null,
    "ticketingSystem": null,
    "extraNotes": null,
    "parkingArea": null,
    "parkingAreaType": null,
    "deleted": 0,
    "createdAt": {
        "$date": "2016-02-02T19:35:45.000Z"
    },
    "updatedAt": {
        "$date": "2016-11-21T03:53:41.000Z"
    },
    "parkingSubSlots": [
        {
            "parkingSubSlotId": 1,
            "parkingType": "CAR_24",
            "capacity": 100,
            "collectionModel": "POSTPAID",
            "taxiTime": {
                "$date": "2016-02-02T19:35:45.000Z"
            },
            "autoCheckoutTime": {
                "$date": "2016-02-02T19:35:45.000Z"
            },
            "autoCheckoutCost": 0,
            "parkingLotId": 2,
            "bookingSecurity": 0,
            "convenienceFee": 0,
            "bookingNotes": "",
            "plateNumberType": "NUMERIC",
            "mobileRequired": "NA",
            "valetName": "NA",
            "lastCheckinUpdateTime": {
                "$date": "2016-02-02T19:35:45.000Z"
            },
            "insidePhoto": "",
            "lostTicketFee": 0,
            "challanCost": 0,
            "createdAt": {
                "$date": "2016-02-02T19:35:45.000Z"
            },
            "updatedAt": {
                "$date": "2016-11-24T12:42:35.000Z"
            },
            "deleted": 0,
            "Availability": 10,
            "_id": {
                "$oid": "58a3f3d8d50b6e000422c2bc"
            }
        },
        {
            "parkingSubSlotId": 2,
            "parkingType": "BIKE",
            "capacity": 300,
            "collectionModel": "POSTPAID",
            "taxiTime": {
                "$date": "2016-02-02T19:35:45.000Z"
            },
            "autoCheckoutTime": {
                "$date": "2016-02-02T19:35:45.000Z"
            },
            "autoCheckoutCost": 0,
            "parkingLotId": 2,
            "bookingSecurity": 0,
            "convenienceFee": 0,
            "bookingNotes": "",
            "plateNumberType": "NUMERIC",
            "mobileRequired": "NA",
            "valetName": "NA",
            "lastCheckinUpdateTime": {
                "$date": "2016-02-02T19:35:45.000Z"
            },
            "insidePhoto": "",
            "lostTicketFee": 0,
            "challanCost": 0,
            "createdAt": {
                "$date": "2016-02-02T19:35:45.000Z"
            },
            "updatedAt": {
                "$date": "2016-04-14T11:56:33.000Z"
            },
            "deleted": 0,
            "Availability": 10,
            "_id": {
                "$oid": "58a3f3d8d50b6e000422c2bb"
            }
        }
    ],
    "geoLocation": {
        "lat": "28.62823",
        "lng": "77.27474"
    },
    "__v": 0
}]


class NearByParkingApi {
  static getNearByParkingSlot() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], nearByParking));
      }, delay);
    });
  }
}

export default NearByParkingApi;
