import { Component, OnInit } from '@angular/core';
import { of, merge, fromEvent, interval, Observable, throwError } from 'rxjs';
import { mergeMap, map, exhaustMap, take, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


    interval(1000).pipe(
      mergeMap( x => {
        if(x > 2) {
          return throwError(false)
        } 
        return of(x)
      }),
      catchError( val => {
        return of('All work and no play makes jack a dull boy');
      })
    ).subscribe(
      x => console.log(x),
      e => console.log(e)
    )


// const request = new Observable((observer)=>{
//       setTimeout(()=>{
//         observer.error('USER DATA')
//       }, 2000)
//     });

// const click = fromEvent(document,'click');
//     const result = click.pipe(
//       exhaustMap( ev => request.pipe(
//         take(1),
//         map( user => console.log(user))
//       ))
//     );

//     result.subscribe();

    // of is like a loop that will run through the array of values
    //merge runs the observable in parallel
    // const click = fromEvent(document,'click');
    // const numbers = of(1, 2, 3, 4, 5);
    // const letters = of('a', 'b', 'c', 'd', 'e');

    // const both = merge(numbers,letters,click);
    // both.subscribe( x => console.log(x));
    
    ////////////////////////////////////////////////////////

    // x is accessing the values of the observable of(1, 2, 3, 4, 5);
    // (x) => of('a', 'b', 'c', 'd', 'e') is the observable that will be run after
    //  the first observable is done an i is equal to of('a', 'b', 'c', 'd', 'e') array
    // const numbers = of(1, 2, 3, 4, 5);
    // const result = numbers.pipe(
    //   mergeMap(
    //     (x) => of('a', 'b', 'c', 'd', 'e').pipe(
    //       map(i => {
    //           return i + x;
    //       })
    //     )
    //   )
    // );

    // result.subscribe(x => console.log(x));
  }

}
