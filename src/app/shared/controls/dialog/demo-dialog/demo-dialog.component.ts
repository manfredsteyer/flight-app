// src/app/shared/controls/dialog/demo-dialog/demo-dialog.component.ts

import { Component, Inject, OnInit } from '@angular/core';
import { DialogService } from '../dialog.service';
import { DIALOG_DATA } from '../dialog.token';

@Component({
  selector: 'app-demo-dialog',
  templateUrl: './demo-dialog.component.html',
  styleUrls: ['./demo-dialog.component.scss']
})
export class DemoDialogComponent implements OnInit {

  constructor(
    @Inject(DIALOG_DATA) public data: string,
    private dialogService: DialogService) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogService.hide();
  }

}
