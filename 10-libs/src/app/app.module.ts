import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { FourComponent } from './four/four.component';

// BOOTSTRAP
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AlertModule } from 'ngx-bootstrap/alert';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CarouselModule } from 'ngx-bootstrap/carousel';

// MATERIAL
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';


import {AtomSpinnerModule} from 'angular-epic-spinners';
import { HollowDotsSpinnerModule } from 'angular-epic-spinners';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    FourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ButtonsModule.forRoot(),
    AlertModule.forRoot(),
    TabsModule.forRoot(),
    AccordionModule.forRoot(),
    CarouselModule.forRoot(),
    MatSidenavModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatInputModule,
    AtomSpinnerModule,
    HollowDotsSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
