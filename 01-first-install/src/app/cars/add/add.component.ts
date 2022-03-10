import { Component, EventEmitter, OnInit, Output, Input,
ContentChild, ElementRef, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  // status = "status of the mouse events";


  // highlight MouseEvent and press f12 on your keyboard to view all MouseEvent properties
  // C:\Users\mypc\AppData\Local\Programs\Microsoft VS Code\resources\app\extensions\node_modules\typescript\lib\lib.dom.d.ts

  // alertOnClick(event: MouseEvent) {
  //   console.log(event);
  //   alert('You clicked me! on: X ' + event.clientX + ' and Y: ' + event.clientY);
  // }

  // onMouseEnter() {
  //   this.status = 'Your mouse is over me!';
  // }

  // onMouseLeave() {
  //   this.status = 'Your mouse is not over me!';
  // }

  // name: string;
  // model: string;
  // color: string;


// emmiting from child to parrent component
@ContentChild ('contentApp', {static: true}) contentDiv:ElementRef
@Input()  getTheDiv!: HTMLElement;
@Output () setTitle = new EventEmitter<{title: string}>();
@Output() carSubmited = new EventEmitter<{ name: string; model: string; color: string; }>();



  userData:{ name: string; model: string; color: string; } = {
    name: '',
    model: '',
    color: ''
  }

  // onAddName(event: Event) {
  //  this.name = (<HTMLInputElement>event.target).value;
  // }
  // onAddModel(event: Event) {
  //  this.model = (<HTMLInputElement>event.target).value;
  // }
  // onAddColor(event: Event) {
  //  this.color = (<HTMLInputElement>event.target).value;
  // }

  onSubmitCar() {

    this.carSubmited.emit(this.userData);
    // console.log(ref.value);
    // console.log(this.userData);
    // console.log(this.userData.name);
    // console.log(this.userData.model);
    // console.log(this.userData.color);
  }


  constructor() {

    
    // this.name = '';
    // this.model = '';
    // this.color = '';
   }
   AfterContentInit () {
    console.log(this.contentDiv.nativeElement);
    

   }

  //  ngOnInit is called when the component is created
  ngOnInit(): void {
    this.setTitle.emit({title: 'Super Cars'});
    // console.log(this.getTheDiv);
    // console.log(this.contentDiv.nativeElement);
  }

}
