// src/app/shared/controls/click-with-warning.directive.ts

import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[appClickWithWarning]',
  exportAs: 'clickWithWarning'
})
export class ClickWithWarningDirective implements OnInit {

  @Input() warning = 'Are you sure?';
  @Output() appClickWithWarning = new EventEmitter();

  @HostBinding('class') classBinding: string | undefined;

  constructor(private elementRef: ElementRef) {
  }

  @HostListener('click', ['$event.shiftKey'])
  handleClick(shiftKey: boolean): void {
      if (shiftKey || confirm(this.warning)) {
          this.appClickWithWarning.emit();
      }
  }

  ngOnInit(): void {
      // Warnung: Direkter DOM-Zugriff!
      // this.elementRef.nativeElement.setAttribute('class', 'btn btn-danger');
      this.classBinding = 'btn btn-danger';
  }

}
