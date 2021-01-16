import { User } from './User' 
import { Company } from "./Company";
import { CustomMap } from './CustomMap'

function onLoad() {
  // Create objects of classes with Location info
  const user = new User();
  const company = new Company();
  
  // create object for map to display locations
  const customMap = new CustomMap('map');

  /* Both objects are drop-in Mappables because they
    conform to the interface, else these lines would
    have errors */
  customMap.addMarker(user);
  customMap.addMarker(company);
}

window.addEventListener('load', onLoad);