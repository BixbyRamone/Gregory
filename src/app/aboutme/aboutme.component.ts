import { Component, OnInit } from '@angular/core';
import { TabsService } from '../_services/tabs.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  constructor(private tabsService: TabsService) { }

  ngOnInit() {
  }

  setAsActive() {
    this.tabsService.sendTab('tab4');
    localStorage.setItem('lastTab', 'tab4');
   }

}
