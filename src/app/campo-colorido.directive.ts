import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {}

  @HostListener('mouseover') onMouseOver(){
    this.renderer.setStyle(this.elementRef.nativeElement,
      'background-color', 'black');
    this.renderer.setStyle(this.elementRef.nativeElement,
        'color', 'white');
   }
   @HostListener('mouseout') onMouseOut(){
    this.renderer.setStyle(this.elementRef.nativeElement,
      'background-color', 'white');
    this.renderer.setStyle(this.elementRef.nativeElement,
        'color', 'black');
   }

}
