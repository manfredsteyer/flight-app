import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appTableField]'
})
export class TableFieldDirective {
  // tslint:disable-next-line: no-input-rename
  @Input('appTableFieldAs') propName = '';

  constructor(public templateRef: TemplateRef<any>) { }
}
