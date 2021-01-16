// src/app/shared/controls/tabbed-pane/tabbed-pane.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabbedPaneService {

  readonly pageCount = new BehaviorSubject<number>(0);
  readonly currentPage = new BehaviorSubject<number>(1);

  constructor() { }
}
