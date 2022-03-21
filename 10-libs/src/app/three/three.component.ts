import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {
  @ViewChild('mySidenav', { static: true}) mySidenav:any;
  opened = true;
  constructor() { }

  ngOnInit() {
  }

  openSidenav(e:any) {
    console.log(e);
  }

  changed() {
    console.log(this.mySidenav._opened);
  }

}
