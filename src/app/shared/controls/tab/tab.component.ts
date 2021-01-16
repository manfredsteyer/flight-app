// src/app/shared/controls/tab/tab.component.ts

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  @Input() title = '';
  visible = true;

  ngOnInit(): void {
  }

}
