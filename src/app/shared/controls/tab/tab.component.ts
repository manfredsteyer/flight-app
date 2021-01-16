// src/app/shared/controls/tab/tab.component.ts

import { Component, Input, OnInit, Optional } from '@angular/core';
import { TabbedPaneComponent } from '../tabbed-pane/tabbed-pane.component';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  @Input() title = '';
  visible = true;

  constructor(@Optional() pane: TabbedPaneComponent) {
    if (pane) {
      pane.register(this);
    }
  }

  ngOnInit(): void {
  }

}
