import { Type } from '@angular/core';

export interface DialogInfo {
    component: Type<any> | null;
    data: any;
}
