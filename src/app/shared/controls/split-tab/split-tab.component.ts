import { Component, OnInit } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

export type SplitTabMode = 'top' | 'bottom' | 'both';

@Component({
  selector: 'app-split-tab',
  templateUrl: './split-tab.component.html',
  styleUrls: ['./split-tab.component.scss']
})
export class SplitTabComponent extends TabComponent {
  mode: SplitTabMode = 'both';

  constructor() {
    super();
  }

  setMode(mode: SplitTabMode): void {
    this.mode = mode;
  }

}
