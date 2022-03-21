import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { FourComponent } from './four/four.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'one', component: OneComponent},
  { path: 'two', component: TwoComponent},
  { path: 'three', component: ThreeComponent},
  { path: 'four', component: FourComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
