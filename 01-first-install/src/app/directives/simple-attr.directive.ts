import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: "[appSimpleAttr]"
})
export class SimpleAttrDirective implements OnInit {

    // el: ElementRef;

    // constructor(el: ElementRef) {
    //     this.el = el;
    // }
    
    constructor(private el: ElementRef) {}

    ngOnInit() {
        this.el.nativeElement.style.color = "blue";
        console.log(this.el);
    }
}
