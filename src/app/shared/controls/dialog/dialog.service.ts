import { Injectable, InjectionToken, Type } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

export const DIALOG_DATA = new InjectionToken<any>('DIALOG_DATA');

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  componentToShow = new BehaviorSubject<Type<any> | null>(null);
  data = new BehaviorSubject<any>(null);

  constructor() { }

  show(comp: Type<any>, data: any): void {
    this.componentToShow.next(comp);
    this.data.next(data);
  }

  hide(): void {
    this.componentToShow.next(null);
    this.data.next(null);
  }
}
