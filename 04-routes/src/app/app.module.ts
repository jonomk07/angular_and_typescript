
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { GamesComponent } from './games/games.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './users/profile/profile.component';
import { PostsComponent } from './games/posts/posts.component';

import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

import { AuthGuard } from './utils/auth.guard';
import { CanDeactivateService } from './utils/deactivate.service';

const routeApp = [
  {path: '', component: HomeComponent},
  {path: 'games', canDeactivate: [CanDeactivateService], component: GamesComponent, children: [
    {path: ':id/:rating', component: PostsComponent, data: { title: 'The title of the page'} },
  ]},
  {path: 'users', component: UsersComponent, children: [
    {path: 'profile/:id', component: ProfileComponent},
    {path: 'account', redirectTo: '/users'}
  ]},
  { path: '**', component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    GamesComponent,
    HomeComponent,
    ProfileComponent,
    PostsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeApp)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
