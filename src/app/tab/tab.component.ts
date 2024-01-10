import {Component, EventEmitter, Input, Output, Signal, TemplateRef, ViewChild} from '@angular/core';
import {DecimalPipe, NgForOf, NgIf, NgTemplateOutlet} from '@angular/common';
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
  index: number = 0;
  
  @ViewChild('template', {static: true}) template: TemplateRef<any>;
  @Input() header: string;
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
