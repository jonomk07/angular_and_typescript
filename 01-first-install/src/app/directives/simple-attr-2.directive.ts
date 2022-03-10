import { Directive, ElementRef, OnInit, Renderer2, RendererStyleFlags2, HostListener } from '@angular/core';

@Directive({
  selector: '[appSimpleAttr2]'
})

export class SimpleAttr2Directive implements OnInit {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2

  ) { }


  @HostListener('click') onClick() {
    this.modifyIt();
  }

  @HostListener('mouseover') mouseover( eventData: Event ) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'blue', RendererStyleFlags2.Important);
    console.log(event);
  }

  modifyIt() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'pink');
  }

  ngOnInit() {
    
    const flags = RendererStyleFlags2.DashCase | RendererStyleFlags2.Important;
    this.renderer.setStyle(this.el.nativeElement, 'color', 'red', flags);
    console.log(this.el);
    // add a Class
    this.renderer.addClass(this.el.nativeElement, 'renderer');

    // add a child
    const p = this.renderer.createElement('p');
    const text = this.renderer.createText('This is a new Child paragraph');
    this.renderer.appendChild(p, text);
    this.renderer.appendChild(this.el.nativeElement, p);

    // set attribute
    this.renderer.setAttribute(this.el.nativeElement, 'title', 'This is a new title');
  }
}

