import { Component, OnInit, ViewChild } from '@angular/core';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AlertModule } from 'ngx-bootstrap/alert';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('staticTabs', { static: false }) staticTabs?: TabsetComponent;
  
  disabled = false;
  singleModel = true;
  cookieModel = 'Chocolate';
  // showError = true;
  // defaultAlert: any = [
  //   {
  //     type: 'danger',
  //     timeout: 2000,
  //   }
  // ];


  dismissible = true;
  defaultAlerts: any[] = [
    {
      type: 'success',
      msg: `You successfully read this important alert message.`
    },
    {
      type: 'info',
      msg: `This alert needs your attention, but it's not super important.`
    },
    {
      type: 'danger',
      msg: `Better check yourself, you're not looking too good.`
    }
  ];
  alerts = this.defaultAlerts;
 
  reset(): void {
    this.alerts = this.defaultAlerts;
  }
 
  onClosed(dismissedAlert: any): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }

  // Tabs
  selectTab(tabId: number) {
    if (this.staticTabs?.tabs[tabId]) {
      this.staticTabs.tabs[tabId].active = true;
    }
  }

  consolChange(event: any) {
    console.log(event);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
