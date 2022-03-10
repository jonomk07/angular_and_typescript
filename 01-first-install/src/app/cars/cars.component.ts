import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
  encapsulation: ViewEncapsulation.None,
  // styles: [`
  //   .car {
  //     background-color: #EEE;
  //     border: 1px solid #DDD;
  //     margin-top: 10px;
  //   }
  // `]

})
export class CarsComponent implements OnInit, AfterViewInit{

  contentValue: string = 'Content value';

  // title properties 
  title:string = 'Super Cars';

// carValues:{ name:string, model:string, color: string } = {
//   name: 'BMW',
//   model: 'i8',
//   color: 'Red'
// }

carValues:{ name:string, model:string, color: string }[] = [
  {
    name: 'BMW',
    model: 'i8',
    color: 'Red'
  },
  {
    name: 'Audi',
    model: 'A8',
    color: 'Blue'
  },
  {
    name: 'Mercedes',
    model: 'C class',
    color: 'Black'
  }
]

  @ViewChild('anotherDiv', { static: true })
  anotherDiv: ElementRef;

  @ViewChild('carComponent', { static: true })
  carComponent: Component;



  getTitle(element:{title: string}) {
    this.title = element.title;
  }

  carWasSubmitted(carData:{name:string, model:string, color: string }) {
    console.log(carData);
  }
  
  constructor() { }

  ngOnInit() {
    // console.log(this.anotherDiv);
    console.log(this.carComponent);
  }

  ngAfterViewInit() {
    console.log(this.carComponent);
  }


}
