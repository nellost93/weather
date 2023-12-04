import { Injectable } from '@angular/core';

@Injectable()
export class TabService {
  selectedTabIndex: number = 0;

  constructor() {}

  selectTab(tabIndex: number){
    this.selectedTabIndex = tabIndex;
  }

  closeTab(tabIndex: number){
    (this.selectedTabIndex <= tabIndex && this.selectedTabIndex > 0) && this.selectedTabIndex--;
  }


}
