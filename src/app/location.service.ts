import { Injectable } from '@angular/core';
import {WeatherService} from "./weather.service";
import {BehaviorSubject} from 'rxjs';

export const LOCATIONS : string = "locations";

@Injectable()
export class LocationService {

  locations: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  removeLocations: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor() {
    /* snipped code moved in zipcode-entry */

    /*let locString = sessionStorage.getItem(LOCATIONS);
    if (locString)
      this.locations.next(JSON.parse(locString));
    for (let loc of this.locations.getValue())
      this.weatherService.addCurrentConditions(loc);*/
  }

  addLocation(zipcode : string) {
    /* Fixed bug on inserting duplicate zip codes */
    if(this.locations.getValue().filter(loc => loc == zipcode).length == 0) {
      //removed push and utilized spread operator for increament value in subject
      this.locations.next([...this.locations.getValue(), zipcode]);
      sessionStorage.setItem(LOCATIONS, JSON.stringify(this.locations.getValue()));
      //this.changeLocations.next({value: zipcode, action: ACTION_LOCATION_CHANGE.ADD} );
    }
  }

  removeLocation(index : number) {
    let zipCode =this.locations.getValue()[index];
    this.locations.next(this.locations.getValue().filter((loc, i) => i != index));
    sessionStorage.setItem(LOCATIONS, JSON.stringify(this.locations.getValue()));

    this.removeLocations.next(zipCode);
  }

}


