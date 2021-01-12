import { User } from './User' 
import { Company } from "./Company";

function onLoad() {
  new google.maps.Map(document.getElementById('map'), {
    zoom: 1,
    center: {
      lat: 0,
      lng: 0
    }
  });
}

window.addEventListener('load', onLoad);