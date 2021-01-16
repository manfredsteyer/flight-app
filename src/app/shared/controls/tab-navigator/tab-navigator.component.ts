// src/app/shared/controls/tab-navigator/tab-navigator.component.ts

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tab-navigator',
  templateUrl: './tab-navigator.component.html',
  styleUrls: ['./tab-navigator.component.scss']
})
export class TabNavigatorComponent implements OnInit {

  @Input() page = 0;
  @Input() pageCount = 0;
  @Output() pageChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  prev(): void {
    if (this.page <= 1) {
      return;
    }
    this.page--;
    this.pageChange.emit(this.page);
  }

  next(): void {
    if (this.page >= this.pageCount) {
      return;
    }
    this.page++;
    this.pageChange.emit(this.page);
  }

}
