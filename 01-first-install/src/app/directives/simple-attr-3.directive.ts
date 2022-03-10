import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appSimpleAttr3]'
})
export class SimpleAttr3Directive implements OnInit {

  // @HostBinding('style.color') color = 'magenta';

  @HostBinding('style.color') elementColor: string;

  // Passing arguments attribute
  @Input() color: string
  @Input() disabled: boolean
  @Input() clickable: boolean
  

  constructor() { }

  @HostListener('click') onClick() {
    if (this.disabled) {
      console.log('click disabled');
    }
  }

  ngOnInit() {
    if (this.disabled) {
      this.elementColor = this.color;
    }
  }
}
