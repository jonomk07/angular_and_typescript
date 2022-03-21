import { Component, OnInit, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  @ViewChild('myTab', {static: true }) myTab: TabsetComponent | any;
  
  constructor() { }

  ngOnInit() {
  }

  selectTab(tabId: number) {
    this.myTab.tabs[tabId].active = true;
    this.myTab.tabs[tabId].removable = true;
  }

  consoleChange(event:any) {
    console.log(event);
  }


}
