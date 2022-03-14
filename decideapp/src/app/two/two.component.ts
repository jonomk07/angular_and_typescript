import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { AppValues, Errors } from './../app.component';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  @Input() appValues: AppValues;
  @Output() next = new EventEmitter<AppValues>();
  @Output() hasErrors = new EventEmitter<Errors>();

  constructor() { }

  getResults() {
    if (this.validateResults()) {
      const appValuesCopy = this.appValues;
      appValuesCopy.visiblePanel = 'three';
      this.next.emit(appValuesCopy);
    } else {
      this.hasErrors.emit({
        show: true,
        message: 'You need at least two answers'
      });
    }

  }

  validateResults(){
    if ( this.appValues.mode ) {
      if ( this.appValues.custom.length > 1 ) {
        return true;
      }
      return false;
    } else {
      return true;
    }
  }

  changeMode() {
    const appValuesCopy = this.appValues;
    appValuesCopy.mode = true;
    this.next.emit(appValuesCopy);
  }

  addCustom(custom:any) {
    if (custom.value !== '') {
      const appValuesCopy = this.appValues;
      appValuesCopy.custom.push(custom.value);
      this.next.emit(appValuesCopy);
    } else {
      this.hasErrors.emit({
        show: true,
        message: 'The field is empty.'
      });
    }
  }


  ngOnInit() {
  }

}
