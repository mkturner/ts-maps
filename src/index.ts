import { User } from './User' 
import { Company } from "./Company";
import { CustomMap } from './CustomMap'
import { company } from 'faker';

function onLoad() {
  const user = new User();
  const company = new Company();
  const customMap = new CustomMap('map');

  customMap.addUserMarker(user);
  customMap.addCompanyMarker(company);
}

window.addEventListener('load', onLoad);