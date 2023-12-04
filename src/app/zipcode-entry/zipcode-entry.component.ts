import { Component } from '@angular/core';
import {LOCATIONS, LocationService} from '../location.service';
import {WeatherService} from '../weather.service';

@Component({
  selector: 'app-zipcode-entry',
  templateUrl: './zipcode-entry.component.html'
})
export class ZipcodeEntryComponent {

  constructor(
      private weatherSvc : WeatherService,
      private locationSvc: LocationService
  ) {

  }

  addLocation(zipcode : string){
    if(zipcode && this.locationSvc.locations.getValue().filter(loc => loc == zipcode).length == 0)
      this.weatherSvc.addCurrentConditions(zipcode);
  }

}
