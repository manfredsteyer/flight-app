import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[appClickWithWarning]'
})
export class ClickWithWarningDirective implements OnInit {

  @Input() warning = 'Are you sure?';
  @Output() appClickWithWarning = new EventEmitter();

  @HostBinding('class') classBinding: string | undefined;

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit(): void {
      // Warnung: Direkter DOM-Zugriff!
      // this.elementRef.nativeElement.setAttribute('class', 'btn btn-danger');
      this.classBinding = 'btn btn-danger';
  }

  @HostListener('click', ['$event'])
  handleClick($event: MouseEvent): void {
      if ($event.shiftKey || confirm(this.warning)) {
          this.appClickWithWarning.emit();
      }
  }

}
