import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appInfo]'
})
export class InfoDirective implements OnInit {

  @Input('appInfo') template: TemplateRef<any> | undefined;

  constructor(private viewContainer: ViewContainerRef) {
  }

  ngOnInit(): void {
    if (!this.template) {
      return;
    }
    const ref = this.viewContainer.createEmbeddedView(this.template);
    ref.rootNodes.forEach(nativeElement => {
      // console.debug('nativeElement', nativeElement);
      nativeElement.style.color = 'red';
    });

  }

}
