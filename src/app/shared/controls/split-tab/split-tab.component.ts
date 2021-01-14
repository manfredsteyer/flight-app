import { Component, OnInit } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

export type SplitTabView = 'top' | 'bottom' | 'both';

@Component({
  selector: 'app-split-tab',
  templateUrl: './split-tab.component.html',
  styleUrls: ['./split-tab.component.scss']
})
export class SplitTabComponent extends TabComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
