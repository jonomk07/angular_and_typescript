import { Component, OnInit , EventEmitter } from '@angular/core';
import { observable, Observable } from 'rxjs';

import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TestService]
})
export class AppComponent implements OnInit {

  show: boolean = false;
  open = new EventEmitter<any>();

  constructor(
    private testService: TestService
  ) { }


  toggleDiv() {
    this.show = !this.show;
  }

  emitClick() {
    this.open.complete();
    console.log('emitClick');
  }
  
    ngOnInit(): void {
      this.open.subscribe(
        data => { console.log(data) },
        error => { console.log(error) },
        () => { console.log('completed') }
      );
  
      this.testService.showMesage.subscribe(
        data => { console.log(data) },
        error => { console.log(error) },
        () => { console.log('completed') }
      );
    }
}
