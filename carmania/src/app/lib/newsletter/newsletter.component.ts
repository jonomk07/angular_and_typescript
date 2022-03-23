
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { NewsletterService } from './../newsletter.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {
  newsletterForm = this.fb.group({
    email: [null, [Validators.email, Validators.required]]
  });
  disableButton = false;
  formSuccess = false;
  formError = {
    show: false,
    message: 'sss'
  };

  constructor(
    private fb: FormBuilder,
    private newsletterService: NewsletterService
  ) { }

  submitForm() {
    this.disableButton = true;

    if (this.newsletterForm.valid) {
      this.newsletterService.subscribeUser(this.newsletterForm.value.email).subscribe(
        data => {
          this.formSuccess = true;
          this.newsletterForm.reset();
          this.enableButton();
        },
        error => {
          this.handleError('show', error);
        }
      );

    } else {
      this.handleError('show', 'You need a valid email to subscribe !!');
    }
  }

  handleError( type: string , message: string) {
    if (type === 'reset') {
      this.formError = { show: false, message };
    } else {
      this.formError = {
        show: true,
        message
      };
    }
    this.enableButton();
  }

  enableButton() {
    setTimeout(() => {
      this.disableButton = false;
    }, 2000);
  }


  ngOnInit() {
  }


}
