import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log(this.activatedRoute);
    console.log(this.activatedRoute.snapshot.queryParams);
    console.log(this.activatedRoute.snapshot.fragment);

    this.activatedRoute.queryParams.subscribe(() => {
      console.log(this.activatedRoute.snapshot.queryParams);
    });

    this.activatedRoute.fragment.subscribe(() => {
      console.log(this.activatedRoute.snapshot.fragment);
    });

  }

}
