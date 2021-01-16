import faker from 'faker'
import { Mappable } from "./CustomMap";

// implements keyword brings typechecking benefits
// to this file (not necessary)
export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    // to work in addMarker function (index.ts)
    // must have location object with lat, lng keys
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }

  // also, must contain marker function that returns string
  markerContent(): string {
    return `
    <div>
      <h1>Company Name: ${this.companyName}</h1>
      <p>Catchphrase: ${this.catchPhrase}</p>
    </div>
    `;
  }
}