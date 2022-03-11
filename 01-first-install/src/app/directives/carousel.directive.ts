import { Directive, Input, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';

export interface CarouselContext {
  $implicit: string,
  controller: {
    next: () => void,
    prev: () => void
  }
}

@Directive({
  selector: '[appCarousel]'
})

export class CarouselDirective implements OnInit {

  context: CarouselContext;
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRew: ViewContainerRef
  ) { }

  // when you want to catch the value after the from on the thml use the selector: '[appCarousel]' and then use From eg:appCarouselFrom'

  @Input('appCarouselFrom') items: string[];

  index: number = 0;
  
  autoplaySomething: string;

  @Input('appCarouselAutoplay')
  set autoplay(autoplay: 'on' | 'off'){
    this.autoplaySomething = autoplay;
  }

  @Input('appCarouselDelay')
  set delay(delay: number){
   console.log(delay)
  }

  next(){
    this.index++;
    if( this.index >= this.items.length){
      this.index = 0;
    }
    this.context.$implicit = this.items[this.index];
  }

  prev() {
   this.index--;
    if( this.index < 0){
      this.index = this.items.length - 1;
    }
    this.context.$implicit = this.items[this.index];
  }

  ngOnInit() {
    this.context = {
      $implicit: this.items[0],
      controller: {
        next: () => this.next(),
        prev: () => this.prev()
      }

    }
    // this.items.forEach((item) => {
    //     this.viewContainerRew.createEmbeddedView(this.templateRef, {
    //       $implicit: item,
    //     });
    //   });
    console.log(this.context);
    this.viewContainerRew.createEmbeddedView(this.templateRef, this.context);
  }

}
