import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  post: { id: number; ratings: string; } | any

  related: { id: number; ratings: string; } = {
    id: 2,
    ratings: '4*'
  };

  constructor(
    private activatedRoute: ActivatedRoute

  ) { }

  ngOnInit(): void {
    // console.log(this.activatedRoute.snapshot);
    // console.log(this.activatedRoute.snapshot.params['id']);
    console.log(this.activatedRoute.snapshot.params);
    this.post = {
      id: this.activatedRoute.snapshot.params['id'],
      ratings: this.activatedRoute.snapshot.params['ratings']
    };
    // recive params from url
    // build in observable dont need to unsubscribe
    this.activatedRoute.params.subscribe(params => {
      this.post = {
        id: params['id'],
        ratings: params['ratings']
      };
    });

    console.log(this.activatedRoute.snapshot.data['title']);
    this.activatedRoute.data.subscribe(data => {
      console.log(data);
    } );
  }

}
