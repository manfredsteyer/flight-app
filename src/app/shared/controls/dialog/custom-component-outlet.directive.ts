// src/app/shared/controls/dialog/custom-component-outlet.directive.ts

import { ComponentFactoryResolver, Directive, Injector, Input, OnChanges, SimpleChanges, Type, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomComponentOutlet]'
})
export class CustomComponentOutletDirective implements OnChanges {

  @Input('appCustomComponentOutlet') component: Type<any> | undefined;

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('appCustomComponentOutletInjector') injector: Injector | undefined;

  constructor(
    private cfr: ComponentFactoryResolver,
    private viewContainer: ViewContainerRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.component) {
      return;
    }
    const factory = this.cfr.resolveComponentFactory(this.component);
    const compRef = this.viewContainer.createComponent(factory, undefined, this.injector);
  }

}
