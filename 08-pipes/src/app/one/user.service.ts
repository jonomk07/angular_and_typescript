import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { Subject, BehaviorSubject } from 'rxjs';

export interface UserData {
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  subject = new BehaviorSubject(null);

  constructor(
    private http: HttpClient
  ) { }


  getUser() {

    // get is an observable that emits a value after a given time period.
    // In RxJS, when a data is sent to the stream it goes through a series of operators:

    // The map operator will simply apply a function to that data and return the result.
    // The tap operator however takes a data, apply a function to that data but returns the 
    // original data, if the function bothered to return a result, tap just ignores it.
    // Difference between tap and map is  tap side effects and map will just alter the out coming data on the subscription.
    // A Subject is a special type of Observable that allows values to be multicasted to many Observers. Subjects are like EventEmitters.
    //A variant of Subject that requires an initial value and emits its current value whenever it is subscribed to.

    return this.http.get('https://jsonplaceholder.typicode.com/users/1')
      .pipe(
        tap(
          // (data:any) => this.storeUser(data),
          (data: any) => this.subject.next(data),
          (error: any) => console.log(error)
        ),
        map(
          (data: UserData) => {
            return {
              name: data.name,
              email: data.email
            }
          }
        )
      )
  }

  storeUser(data: any) {
    console.log('User store', data)
  }
}
