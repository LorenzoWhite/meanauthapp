import { Directive, ElementRef, HostListener, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Directive({
  selector: '[appShrink]'
})
export class ShrinkDirective {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  @HostListener('window:scroll') onScroll() {
    let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      if (number > 100) {
        console.log('youre scrolling')
      }
    }
}
