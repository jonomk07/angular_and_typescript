// BrowserModule imports Angular's http module
// NgModule imports Angular's core functionality

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from './header/header.component';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './cars/car/car.component';
import { AddComponent } from './cars/add/add.component';
import { FormsModule } from '@angular/forms';
import { LifeComponent } from './life/life.component';

@NgModule({ 
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [ 
        AppComponent, 
        HeaderComponent, CarsComponent, CarComponent, AddComponent, LifeComponent, 
    ],
    bootstrap: [
        AppComponent
    ],
    providers: []
})


export class AppModule { }