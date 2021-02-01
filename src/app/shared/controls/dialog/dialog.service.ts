// src/app/shared/controls/dialog/dialog.service.ts

import { Injectable, Type } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DialogInfo } from './dialog-info';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  dialogInfo = new BehaviorSubject<DialogInfo>({
    component: null,
    data: null
  });

  constructor() { }

  show(comp: Type<any>, data: any): void {
    this.dialogInfo.next({
      component: comp,
      data
    });
  }

  hide(): void {
    this.dialogInfo.next({
      component: null,
      data: null
    });
  }
}
