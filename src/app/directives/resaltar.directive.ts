import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltar]'
})
export class ResaltarDirective {
  constructor(private element: ElementRef) {
    console.log('directiva llamada');
    // element.nativeElement.style.backgroundColor = 'yellow';
  }

  @Input('appResaltar') newColor: string;
  @HostListener('mouseenter')
  mouseIn() {
    this.resaltar(this.newColor || 'yellow');
  }
  @HostListener('mouseleave') mouseLeave() {
    this.resaltar(null);
  }

  resaltar(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }
}
