import faker  from 'faker';
import { Mappable } from './CustomMap';

// implements keyword brings typechecking benefits
// to this file (not necessary)
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    // to work in addMarker function (index.ts)
    // must have location object with lat, lng keys
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }

  // marker function must return string to be a Mappable
  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}

