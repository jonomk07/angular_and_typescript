import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { InterceptService } from './intercept.service';
import { OtherInterceptService } from './otherIntercep.service'; 


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass:InterceptService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass:OtherInterceptService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
