import { Component, OnInit , ViewChild  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, User, UserToken} from './../lib/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f', {static: true}) loginRegisterForm: NgForm | any;
  formMode = true; // true = register
  hasError: any = null ;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    setTimeout(() => {
      // This is for later, so we don't have to enter user and pass every time
      this.loginRegisterForm.form.setValue({
        email: 'jono@gmail.com',
        password: 'testing123',
      });
    }, 1000);
  }

  toggleMode(){
    this.formMode = !this.formMode;
  }
  submitHandler() {
    const formValue = this.loginRegisterForm.value;
    if (this.loginRegisterForm.valid) {
      // console.log(this.loginRegisterForm.value);
      if(this.formMode){
         // REGISTER
         this.authService.register(formValue).subscribe(
           data => this.handleSuccess(data),
          //  data => console.log(data),
          error => this.handleError(error)
          //  error => console.log(error),
         )
      } else {
        // LOGIN
        this.authService.login(formValue).subscribe(
          data => this.handleSuccess(data),
          error => this.handleError(error)
        )
      }
      this.loginRegisterForm.form.reset();
    }
  }

  handleSuccess(data: UserToken){
    this.router.navigate(['./']);
    this.hasError = null;
    // console.log(data.accessToken);
  }

  handleError(error: string){
    this.hasError = error;
  }

}
