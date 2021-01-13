import { User } from './User' 
import { Company } from "./Company";
import { CustomMap } from './CustomMap'

function onLoad() {
  const user = new User();
  const customMap = new CustomMap('map');

  customMap.addUserMarker(user);
}

window.addEventListener('load', onLoad);