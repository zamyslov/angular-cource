import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBackground]'
})

export class BackgroundDirective implements OnInit {
  @Input('appBackground') hoverColor = 'green';
  @Input() defaultColor = 'transparent';
  @HostBinding('style.backgroundColor') background: string;

  constructor(private element: ElementRef, private renderer: Renderer2) {

  }

  ngOnInit(): void {
    this.background = this.defaultColor;
  }

  @HostListener('mouseenter') onMouseEnter() {
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'red');
    this.background = this.hoverColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'transparent');
    this.background = this.defaultColor;
  }

}
