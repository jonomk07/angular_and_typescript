import { Component, OnInit , Input} from '@angular/core';
import { Articles } from './../../lib/requests.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @Input() carouselArticles:  Articles | any;

  constructor() { }

  ngOnInit(): void {
  }

}
