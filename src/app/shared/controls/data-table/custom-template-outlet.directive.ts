import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomTemplateOutlet]'
})
export class CustomTemplateOutletDirective implements OnInit {

  @Input('appCustomTemplateOutlet') template: TemplateRef<any> | undefined;
  @Input('appCustomTemplateOutletContext') context: any;

  constructor(private viewContainer: ViewContainerRef) { }

  ngOnInit(): void {
    if (!this.template) {
      return;
    }
    // this.viewContainer.clear();

    this.viewContainer.createEmbeddedView(this.template, this.context);

    // const ref = this.viewContainer.createEmbeddedView(this.template, this.context);
    // const nativeElement = ref.rootNodes.pop();
    // console.debug(nativeElement);
  }

}
