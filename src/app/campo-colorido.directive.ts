import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {

  @HostBinding('style.backgroundColor') bg: string;
  @HostBinding('style.color') color: string;

  @HostListener('mouseover') onMouseOver(){
    this.bg = 'black';
    this.color = 'white';
   }
  @HostListener('mouseout') onMouseOut(){
     this.bg = 'transparent';
     this.color = 'black';
   }

}
