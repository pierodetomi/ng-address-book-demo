import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appKeypressAlert]'
})
export class KeypressAlertDirective {

  constructor(private elementRef: ElementRef) {
    /**
     *! I ALTERNATIVE - BAD
     */
    // elementRef.nativeElement.addEventListener('keypress', (e: KeyboardEvent) => {
    //   if (e.which === 13) {
    //     alert('ENTER key pressed!');
    //   }
    // });
  }

  /**
   *! II ALTERNATIVE - BETTER
   */
  @HostListener('keypress', ['$event'])
  public onKeyPress(event: KeyboardEvent) {
    if (event.which === 13) {
      alert('ENTER key pressed!');
    }
  }
}
