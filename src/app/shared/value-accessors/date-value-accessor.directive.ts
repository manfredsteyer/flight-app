// src/app/shared/value-accessors/date-value-accessor.directive.ts

import { Directive, ElementRef, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[appDate]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: DateValueAccessorDirective,
    multi: true
  }]
})
export class DateValueAccessorDirective implements ControlValueAccessor {

  constructor(private elementRef: ElementRef) { }

  onChange = (_: any) => { };
  onTouched = () => { };

  writeValue(value: any): void {
    if (value) {
      const date = new Date(value);
      value = date.getDate() + '.'
        + (date.getMonth() + 1) + '.'
        + date.getFullYear();
    }

    const formatted = (value) ? value : '';
    this.elementRef.nativeElement.value = formatted;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @HostListener('blur')
  blur(): void {
    this.onTouched();
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @HostListener('input', ['$event.target.value'])
  input(value: string): void {

    if (value) {
      const parts = value.split(/\./);
      value = parts[2] + '-' + parts[1] + '-' + parts[0];
    }

    this.onChange(value);
  }

}
