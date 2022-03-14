import { Component, OnInit } from '@angular/core';
import answersValues from './utils/answers.json';


export interface Errors {
  show: boolean;
  message: string;
}

export interface AppValues {
  visiblePanel: string;
  question: string;
  mode: boolean;
  answers: string[];
  custom: string[];
  answer: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Decide App';

  errors: Errors = {
    show: false,
    message: ''
  };

  appValues: AppValues = {
    visiblePanel: 'one',
    question: '',
    mode: false,
    answers: answersValues.answers,
    custom: [],
    answer: ''
  };

  handleNext(values: AppValues) {
    this.appValues = values;
  }
  handleErrors(values: Errors) {
    const errorsCopy = this.errors;
    this.errors ={
      show: values.show,
      message: values.message
    };
    setTimeout(() => {
      this.errors = errorsCopy;
    }
      , 2000);
  }
  handleReset() {
    let appValuesCopy = this.appValues;
    appValuesCopy = {
      ...appValuesCopy,
      visiblePanel: 'one',
      question: '',
      mode: false,
      custom: [],
      answer: ''
    };

    this.appValues = appValuesCopy;
  }

  ngOnInit() {
    // console.log(answersValues.answers);
  }
}
