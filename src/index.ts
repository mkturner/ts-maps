import { User } from './User' 
import { Company } from "./Company";
import { CustomMap } from './CustomMap'

function onLoad() {
  new CustomMap('map');
}

window.addEventListener('load', onLoad);