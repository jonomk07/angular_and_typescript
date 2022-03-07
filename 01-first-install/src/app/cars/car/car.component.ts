import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CarComponent implements OnInit {

  // name = 'BMW';
  // model = 'i8';
  // color: string = 'Black';
  // year: number = 2022;
//   linkto: string = 'https://www.google.com';
//   target: string = '_blank';
//   disabled: boolean = true;
//   hidden: boolean = false;
//  theDate = Date.now();

  // changeValues() {
  //   this.name = 'Audi';
  //   this.model = 'Q7';
  //   this.year = 2020;
  // }

  // constructor is a special method that is called when an instance of a class is created.
  // It is called before the constructor body.
  // The constructor is used to initialize the class.
  // The constructor is called only once.
  // The constructor is used to set the values of class properties.
  // The constructor is used to call the methods of the class.



  // @Input('carElement') carValues: { name: string; model: string; color: string; }

  @Input('carElement') carValues:{ name:string, model:string, color: string };
  
  constructor() {
    // setTimeout(() => {
    // this.target = '_self';
    // this.name = 'Audi';
    // }
    //   , 3000); 
  }

  ngOnInit(): void {
  }


  // date() {
  //   return this.theDate;
  // }

  getTheColor(color: string) {
    if (color !== 'default') {
      this.carValues.color = color;
      return this.carValues.color;
    }
    return this.carValues.color = 'Black';
  }



}
