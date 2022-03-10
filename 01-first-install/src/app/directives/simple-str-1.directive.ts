import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appSimpleStr1]'
})
export class SimpleStr1Directive  implements OnInit{

  //@Input() appSimpleStr1: boolean; //The Value of the directive is passed to the template as a variable.

  @Input() set appSimpleStr1(value: boolean) {
    if (value) {
      this.viewContainerRew.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRew.clear();
    }
  }
  // @Input() appSimpleStr1: Boolean; is an example of an interface capital letter


  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRew: ViewContainerRef
  ) { }
  ngOnInit() {
    console.log(this.appSimpleStr1);
    console.log(this.templateRef);
    console.log(this.viewContainerRew);

   
  }

}
