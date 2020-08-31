import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective implements OnInit {

  @HostBinding('class.active') active = false;

  @HostListener('click', ['$event.currentTarget'])
  onClick(element) {
    this.active = !this.active;
  }

  constructor(
    private renderer: Renderer2,
    private element: ElementRef
  ) {
  }

  ngOnInit() {
    this.setActiveClass();
  }

  setActiveClass() {
    this.renderer.addClass(this.element.nativeElement, 'tester');
  }

}
