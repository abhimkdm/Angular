import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(eff : ElementRef) {
      console.log(eff.nativeElement);
      eff.nativeElement.style.color="Red";
   }

}
