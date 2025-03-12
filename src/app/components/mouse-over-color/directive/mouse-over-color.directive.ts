import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMouseOverColor]'
})
export class MouseOverColorDirective {
  @Input('appMouseOverColor') hoverColor: string = 'blue';
  private originalColor: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.originalColor = this.el.nativeElement.style.color;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.originalColor = this.el.nativeElement.style.color;
    this.renderer.setStyle(this.el.nativeElement, 'color', this.hoverColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'color', this.originalColor);
  }
}
