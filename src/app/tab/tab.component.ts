import {Component, EventEmitter, Input, Output, Signal} from '@angular/core';
import {DecimalPipe, NgForOf, NgIf, NgTemplateOutlet} from '@angular/common';
import {LocationService} from '../location.service';
import {WeatherService} from '../weather.service';
import {TabService} from '../tab.service';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
  standalone: true,
  imports: [
    NgForOf,
    DecimalPipe,
    NgIf,
    NgTemplateOutlet
  ]
})
export class TabComponent {

  @Input() header: string;
  @Input() index: number;
  @Output() onCloseTab = new EventEmitter<number>();
  @Output() onSelectTab = new EventEmitter<number>();


  constructor(public tabService: TabService) {}

  select(){
    this.tabService.selectTab(this.index);
    this.onSelectTab.emit(this.index);
  }

  close(){
    this.tabService.closeTab(this.index);
    this.onCloseTab.emit(this.index);
  }


}
