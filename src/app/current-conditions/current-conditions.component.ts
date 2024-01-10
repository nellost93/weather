import {Component, inject, OnInit, Signal} from '@angular/core';
import {WeatherService} from "../weather.service";
import {LocationService} from "../location.service";
import {Router} from "@angular/router";
import {ConditionsAndZip} from '../conditions-and-zip.type';
import {TabService} from '../tab.service';

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css']
})
export class CurrentConditionsComponent {
  private router = inject(Router);
  protected weatherService = inject(WeatherService);
  protected currentConditionsByZip: Signal<ConditionsAndZip[]> = this.weatherService.getCurrentConditions();

  protected locationService = inject(LocationService);

  tabTest1 = true;
  tabTest2 = true;

  constructor(public tabService: TabService) {}

  closeTab(index: number){
    this.locationService.removeLocation(index);
  }


  /* REMOVED CLICK ON DIV */
  /*showForecast(zipcode : string){
    this.router.navigate(['/forecast', zipcode])
  }*/
}
