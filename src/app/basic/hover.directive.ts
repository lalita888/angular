import { Directive,HostListener,ElementRef } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private el:ElementRef) { }

  @HostListener('mouseenter')onmouseenter(){
    this.el.nativeElement.style.backgroundColor = "grey";
  }

  @HostListener('mouseleave')onmouseleave(){
    this.el.nativeElement.style.backgroundColor = "initial";
  }

}
