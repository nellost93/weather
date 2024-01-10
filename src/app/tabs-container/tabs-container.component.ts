import {AfterContentInit, Component, ContentChildren, EventEmitter, Input, Output, QueryList, Signal, TemplateRef, ViewChild} from '@angular/core';
import {DecimalPipe, JsonPipe, NgForOf, NgIf, NgTemplateOutlet} from '@angular/common';
import {TabService} from '../tab.service';
import { TabComponent } from 'app/tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.css'],
  standalone: true,
  imports: [
    NgForOf,
    DecimalPipe,
    NgIf,
    NgTemplateOutlet,
    JsonPipe
  ]
})
export class TabsContainerComponent implements AfterContentInit{
  @ContentChildren(TabComponent) tabItems: QueryList<TabComponent>;

  constructor(
    private tabService: TabService,
  ){}

  ngAfterContentInit(){
    this.setIndex();
    this.tabItems.changes.subscribe(()=> this.setIndex());
  }

  setIndex(){
    this.tabItems.map((item, index) =>{
      item.index = index;
      return item;
    })
  }
  
}
