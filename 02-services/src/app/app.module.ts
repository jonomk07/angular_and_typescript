import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ListComponent } from './list/list.component';

import { UserService } from './services/user.service';
import { ConsoleService } from './services/console.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    // UserService,
    // ConsoleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
