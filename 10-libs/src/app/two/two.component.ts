import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css'],
  providers: [
    { 
      provide: CarouselConfig, 
      useValue: {
         interval: 1500, 
         noPause: true, 
         showIndicators: true 
        } 
      }
  ]
})
export class TwoComponent implements OnInit {

  slides = [
    {image: 'assets/images/1.jpg'},
    {image: 'assets/images/2.jpg'},
    {image: 'assets/images/3.jpg'},
    {image: 'assets/images/4.jpg'},
    {image: 'assets/images/5.jpg'},
    {image: 'assets/images/6.jpg'},
    {image: 'assets/images/7.jpg'},
    {image: 'assets/images/8.jpg'},
  ]

  interval: number = 1000;
  pauseOnFocus = true;
  
  constructor() { }

  ngOnInit(): void {
  }

}
