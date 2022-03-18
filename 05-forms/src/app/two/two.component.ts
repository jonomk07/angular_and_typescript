import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  personalForm: FormGroup | any;
  workHours = [4,6,8,12];
  abilitiesArray = [ 'Javascript', 'Typescript', 'Angular', 'React', 'Node' ];
  // personalForm = this.fb.group({
  //   userProfile: this.fb.group({
  //     name: [null, this.customValidation],
  //     email: [null, [Validators.required, Validators.email]]
  //   }),
  //   work: [8],
  //   status: [null],
  //   abilities: this.fb.array([
  //     this.fb.control(''),
  //     this.fb.control(''),
  //     this.fb.control(''),
  //     this.fb.control(''),
  //     this.fb.control('')
  //   ])
  // });


  constructor(
    private fb: FormBuilder
  ) { }


  ngOnInit(): void {
    this.personalForm = new FormGroup({
      userProfile: new FormGroup({
        name: new FormControl(null,  [Validators.required, this.customValidation]),
        email: new FormControl(null, [Validators.required, Validators.email]),
      }),
      work: new FormControl(8),
      status: new FormControl(null),
      abilities: new FormArray([
        // new FormControl(null, Validators.required)
        new FormControl(),
        new FormControl(),
        new FormControl(),
        new FormControl(),
        new FormControl(),
      ])
    });


    // valueChanges are called when the value of the form changes 
    // they are EventEmitter also observable so you can subscribe to them
     // it will emit something  whenever  the value of something changes
    this.personalForm.valueChanges.subscribe(
      (value: any) => console.log(value)
    );

    // statusChanges are called when the status of the form changes eg Valid or invalid
    // they are EventEmitter  also observable so you can subscribe to them
    // it will emit an event every time that the status of the whole form changes

    this.personalForm.statusChanges.subscribe(
      (value: any) => console.log(value)
    );

    // this.personalForm.setValue({
    //   userProfile: {
    //     name...
    //   }
    // })

    // patchValue are used to update the value of the form
    this.personalForm.patchValue({
      userProfile:{
        name:'Jono'
      }
    })

  }

  customValidation(control: FormControl ){
    if ( control.value === null || control.value === '') {
      return { noNameProvided: true };
    }
    return null;
  }

  submitForm(){
    console.log(this.personalForm)
  }

}
