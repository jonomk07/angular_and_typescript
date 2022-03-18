import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  @ViewChild('f', { static: true }) registerForm: NgForm | any;

  ageOptions = ['20-30', '30-40', '40-50', '>60'];
  message = '';

  state = {
    userData: {
      name: '',
      email: '',
    },
    age: '',
    message: '',
    newsletter: '',
  }

  constructor() { }

  // submitHandler(form: NgForm) {
  //   console.log(form);
  // }

  submitHandler() {

    const userData= {
      name: this.registerForm.value.userProfile.name,
    }
    this.registerForm.form.reset();
       console.log(this.registerForm);
    // if (this.registerForm.valid) {
    //   console.log(this.registerForm.age);
    // }
 
  }

  ngOnInit(): void {
    setTimeout(() => {

      // patchValue is used to update the value of a form control.
      // this.registerForm.form.patchValue({
      //   userProfile: {
      //     name: 'Jono',
      //     email: 'jono@gmail.com',
      //   },
      //   age: '20-30',
      //   message: 'Message',
      //   newsletter: true,

      // });
      // setValue is used to set the value of a control, without changing the state of the control.
      this.registerForm.form.setValue({
        userProfile: {
          name: 'Jono',
          email: 'jono@gmail.com',
        },
        age: '20-30',
        message: 'Message',
        newsletter: true,

      });

    }
      , 2000);
  }

}
