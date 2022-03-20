import { Component, OnInit } from '@angular/core';
import { UserService , UserData } from './one/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: any = null;
  constructor(
    private userService: UserService
  ){}


  ngOnInit(){
    this.userService.subject.subscribe( data => {
      this.user = data
    })

    this.userService.getUser().subscribe();
  }

}
