import { User }from './User'
import { Company } from './Company'

// limit access to Google API
export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(elementID: string) {
    this.googleMap = new google.maps.Map(document.getElementById(elementID), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  addUserMarker(user: User) {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng
      }
    })
  }

  addCompanyMarker(company: Company) {
    new google.maps.Marker()
  }
}