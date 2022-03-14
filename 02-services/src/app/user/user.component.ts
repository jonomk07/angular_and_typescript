import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  // providers: [UserService]
})
export class UserComponent implements OnInit {

  @Output() addUser = new EventEmitter<{name: string}>();

  constructor(
    private userService: UserService
  
  ) { }

  add(user:string) {
    // console.log(user);
    // this.addUser.emit({
    //   name: user
    // });
    // const userService = new UserService();
    // userService.consoleSomething();
    // this.userService.consoleSomething();

    this.userService.onAddUser({
      name: user
    });
    
  }

  ngOnInit(): void {
  }

}
