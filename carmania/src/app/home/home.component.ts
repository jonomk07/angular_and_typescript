
import { Component, OnInit } from '@angular/core';
import { RequestsService , Articles} from './../lib/requests.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  carouselArticles: Articles | any;
  homeArticles:  Articles | any;
  constructor(
    private requestsService: RequestsService
  ) { }

  ngOnInit() {
    // GET SLIDER ARTICLES
    this.requestsService.getArticles({
      _sort: 'id', _order: 'desc', _start: 0 , _end: 5
    }).subscribe(
      data => {
        this.carouselArticles =  data ;
       }
    );

    // GET ARTICLES HOME
    this.requestsService.getArticles({
      _sort: 'id', _order: 'desc', _start: 5 , _limit: 6
    }).subscribe(
      data => {
        this.homeArticles = data;
        console.log(data)
      }
    );


  }

}
