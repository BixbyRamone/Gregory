import { Component, OnInit, SimpleChanges } from '@angular/core';
import { TabsService } from '../_services/tabs.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  swiped: string;
  tabObjSel = {
    tab1: 'active',
    tab2: 'inactive',
    tab3: 'inactive',
    tab4: 'inactive',
    tab5: 'inactive'
  };
  initiate = true;

  constructor(private tabsService: TabsService) { }

  ngOnInit() {
    if (localStorage.getItem('lastTab')) {
      this.storedTab();
    }
  }

  clickATab(event: any) {
    this.setAsActive(event.srcElement.id);
    console.log(this.tabObjSel);
  }

  storedTab() {
    this.setAsActive(localStorage.getItem('lastTab'));
  }

  swipe(newTab: string) {
    this.setAsActive(newTab);
   }

   setAsActive(tabName: string) {
    for (const prop in this.tabObjSel) {
      if (prop === tabName) {
        this.tabObjSel[prop] = 'active';
        this.tabsService.sendTab(tabName);
      } else {
        this.tabObjSel[prop] = 'inactive';
      }
    }
    localStorage.setItem('lastTab', tabName);
   }

}
