import { Directive, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]',
  exportAs: 'campoColorido'
})
export class CampoColoridoDirective {

  @Input() bgColor = 'transparent';
  @Input() fontColor = 'black';
  @HostBinding('style.backgroundColor') bg: string;
  @HostBinding('style.color') color: string;

  @HostListener('mouseover') onMouseOver(){
    this.bg = this.bgColor;
    this.color = this.fontColor;
   }
  @HostListener('mouseout') onMouseOut(){
     this.bg = 'transparent';
     this.color = 'black';
   }

}
