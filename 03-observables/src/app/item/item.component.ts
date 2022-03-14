import { Component, OnInit, OnDestroy } from '@angular/core';
import { fromEvent, interval, Observable, range, Subscription, timer } from 'rxjs';

import { filter, delay } from 'rxjs/operators';
import { TestService } from '../test.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnDestroy {
  private showNumbers: Subscription | any;

  constructor(
    private testService: TestService

  ) { }

  ngOnInit(): void {

    this.testService.showMesage.emit('hello emit');

    // const numbers = range(1, 7);
    // numbers.subscribe( x => console.log(x));

    // const numbers = interval(1000);
    // numbers.subscribe( x => console.log(x));

    // const numbers = timer(3000, 1000);
    // numbers.subscribe( x => console.log(x));

    // const clicks = fromEvent(document, 'click');
    // clicks.subscribe(x => console.log(x));

    const numbers = range(1, 7);

    // pip is used to pipe the observable
    const getNumbers = numbers.pipe(
      delay(5000),  // delay the observable
      filter( value => { return value >= 4}),
    );
    getNumbers.subscribe( x => console.log(x));

    // create showNumbers observable
    // const ourObservable = new Observable(observer => {
    //   let count = 0;
    //   setInterval(() => {
    //     if (count !== 3) {
    //       observer.next(count);
    //     }

    //     if (count === 10) {
    //       observer.complete();
    //     }

    //     if (count === 11) {
    //       observer.error('There was an error');
    //     }

    //     // } else {
    //     //   // it will skip 10 and stop the interval
    //     //   observer.complete();
    //     // }
    //     count++;
    //   }, 1000);
    // });

    // this.showNumbers = ourObservable.subscribe(
    //   data => { console.log(data); },
    //   error => { console.log(error) },
    //   () => { console.log('completed') }
    // );
  }

  ngOnDestroy() {
  //  this.showNumbers.unsubscribe();
  }

}
