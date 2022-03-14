import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit{

  constructor(
    private userService: UserService
  ) { }
 
  users: {name: string }[] = [];

  // when the app start i will fetch user from the servcices and display them 
  ngOnInit(): void {
    this.users = this.userService.users;
  }
}
