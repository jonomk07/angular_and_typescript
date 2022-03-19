import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';

import { PostsService } from './posts.service';
import { Subscription } from 'rxjs';

interface Post {
  title: string;
  body: string;
  id: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('f', {static: true}) ourForm: NgForm | any;
  postsList: Post[] = [];
  error = {
    status: false,
    message:''
  }
  errorHandler: Subscription | any

  constructor(
    private http: HttpClient,
    private postsService:PostsService
  ) {}

  submitHandler() {
    const postData = this.ourForm.value;
    this.postsService.addPost(postData).subscribe(
      (data) => {
        this.getPosts();
        this.ourForm.reset();
      },
      error => {
        console.log(error)
        this.error = {
          status:true,
          message: error.message
        }
      }
    );
   }
   
   getPosts() {
     this.postsService.getPosts().subscribe(
      (data: Post[])=>{
        this.postsList = data;
      },
      error => {
        console.log(error)
        this.error = {
          status:true,
          message: error.message
        }
      }) 
   }

   deletePost(id: number) {
      this.postsService.deletePost(id).subscribe(
        data =>{
        this.getPosts();
        }
      )

   }

   ngOnInit() {
    this.getPosts();

    this.errorHandler = this.postsService.error.subscribe( error => {
      this.error = {
        status:true,
        message: error.message
      }
    })
   }

   ngOnDestroy(){
    this.errorHandler.unsubscribe();
   }

}
