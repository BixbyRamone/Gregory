import { Component, OnInit, SimpleChanges } from '@angular/core';
import { TabsService } from '../_services/tabs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private opened = false;
  private swipeCoord?: [number, number];
  private swipeTime?: number;
  swiped: string;
  setTab: string;
  navTabsArray = ['tab1', 'tab2', 'tab3', 'tab4'];
  initiate = true;

  constructor(private tabsService: TabsService) { }

  ngOnInit() {
    console.log('init');
    this.setTab = localStorage.getItem('lastTab') ? localStorage.getItem('lastTab') : 'tab1';

    this.tabsService.tabSelection$.subscribe(
      message => {
        this.setTab = message;
        console.log(this.setTab);
      }
    );

    // this.tabsService.tabSelection$.subscribe({
    //   next: (result: any) => {
    //     this.setTab = result;
    //     console.log(this.setTab);
    //   },
    //   error: (err: any) => {
    //     console.log(err);
    //   },
    //   complete: () => {
    //   }
    // });
  }

  swipe(e: TouchEvent, when: string): void {
    const coord: [number, number] = [e.changedTouches[0].clientX, e.changedTouches[0].clientY];
    const time = new Date().getTime();

    if (when === 'start') {
      this.swipeCoord = coord;
      this.swipeTime = time;
    } else if (when === 'end') {
      const direction = [coord[0] - this.swipeCoord[0], coord[1] - this.swipeCoord[1]];
      const duration = time - this.swipeTime;

      if (duration < 1000 //
        && Math.abs(direction[0]) > 30 // Long enough
        && Math.abs(direction[0]) > Math.abs(direction[1] * 3)) { // Horizontal enough
          const pageTurn = direction[0] < 0 ? 'next' : 'previous';
          let arrayIndx = this.navTabsArray.indexOf(localStorage.getItem('lastTab'));

          if (pageTurn === 'next') {
            if (arrayIndx !== this.navTabsArray.length - 1) {
              arrayIndx++;
              arrayIndx++;
              this.swiped = 'tab' + arrayIndx;
            }
          } else if (pageTurn === 'previous') {
              if (arrayIndx !== 0) {
                this.swiped = 'tab' + arrayIndx;
              }
          }
          this.tabsService.sendTab(this.swiped);
      }
    }
  }

  private _toggleSidebar() {
    this.opened = !this.opened;
  }

}
