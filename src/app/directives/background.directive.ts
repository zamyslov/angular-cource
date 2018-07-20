import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBackground]'
})

export class BackgroundDirective implements OnInit {
  @HostBinding('style.backgroundColor') background: string;

  constructor(private element: ElementRef, private renderer: Renderer2) {

  }

  ngOnInit(): void {
  }

  @HostListener('mouseenter') onMouseEnter() {
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'red');
    this.background = 'red';
  }

  @HostListener('mouseleave') onMouseLeave() {
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'transparent');
    this.background = 'transparent';
  }

}
