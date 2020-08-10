import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabsService {

  private tabSelectionSource = new Subject<string>();
  tabSelection$ = this.tabSelectionSource.asObservable();

constructor() { }

  sendTab(tabString: string) {
    localStorage.setItem('lastTab', tabString);
    this.tabSelectionSource.next(tabString);
  }
}
