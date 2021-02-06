// src/app/shared/common/repeat.directive.ts

import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRepeate]'
})
export class RepeateDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  @Input() set appRepeateOf(items: any[]) {
    this.viewContainer.clear();

    let i = 0;
    for (const item of items) {

      i++;

      const context = {
        $implicit: item,
        index: i - 1,
        appRepeate: item
      };

      this.viewContainer.createEmbeddedView(
          this.templateRef,
          context);
    }

  }

}
