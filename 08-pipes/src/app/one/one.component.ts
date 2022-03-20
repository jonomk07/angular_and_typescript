import { Component, OnInit, OnDestroy} from '@angular/core';
import { UserService, UserData} from './user.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit, OnDestroy {

  user: any = null;
  userSubject: Subscription | any; 

  constructor(
    private userService: UserService
  ) { }

  loadUser() {
    this.userService.getUser().subscribe(
      (data: UserData) => {
        console.log(data)
      });
  }

  removeUser() {
    this.userService.subject.next(null)
  }
  

  ngOnInit(): void {
    this.userSubject = this.userService.subject.subscribe( 
      (data) => {
        this.user = data;
        console.log(data)
      })
  }

  ngOnDestroy(){
    this.userSubject.unsubscribe();
  }

}
