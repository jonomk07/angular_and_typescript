import { Component, OnInit } from '@angular/core';
import { NavService, Nav } from './../lib/nav.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  routes: Nav[] = [];

  constructor(
    private navService: NavService
  ) { }

  ngOnInit(): void {
    this.routes = this.navService.routes;
  }

}
