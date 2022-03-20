import { Component, OnInit} from '@angular/core';
import { AuthService, User } from './lib/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user:any = null

  constructor(
    private authService: AuthService
  ) {}
  
  ngOnInit() {
    this.authService.autoLogin();
    this.authService.userChange.subscribe(
      (data: User) => {
        this.user = data;
        console.log(data);
        // this.user = data;
      }
    );
  }

  logoutUser() {
    this.authService.logoutUser();
  }

}
