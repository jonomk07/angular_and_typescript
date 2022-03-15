import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DeactivateComponent } from '../utils/deactivate.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit, DeactivateComponent {

  leave = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute

  ) { }


  loadLink() {
   this.router.navigate(['/']);
  //  this.router.navigate(['games'], { relativeTo: this.activatedRoute });
  }

  ngOnInit(): void {
    console.log(this.activatedRoute);
  }

  candDeactivate() {
    if (this.leave) {
      return true;
    }

    alert('Sorry you are not allowed to leave');
    return false;
  }

}
