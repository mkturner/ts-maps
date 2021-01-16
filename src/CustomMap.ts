// Instructions to other classes on how to
// be an argument to `addMarker`
interface Mappable {
  location: {
    lat: number,
    lng: number
  }
  markerContent(): string;
}

// limit access to Google API
export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(elementID: string) {
    this.googleMap = new google.maps.Map(document.getElementById(elementID), {
      zoom: 2,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });

    // add infoWindow to display info when clicked
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent();
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}