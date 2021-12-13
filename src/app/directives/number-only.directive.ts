import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumberOnly]',
})
export class NumberOnlyDirective {
  constructor(private _el: ElementRef) {}

  @HostListener('input', ['$event']) onInputChange(event: Event): void {
    const initialValue = this._el.nativeElement.value;
    this._el.nativeElement.value = initialValue.replace('/[^0-9]*/g');
    if (this._el.nativeElement !== initialValue) {
      event.stopPropagation();
    }
  }
}
