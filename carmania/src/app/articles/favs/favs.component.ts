import { Component, OnInit , Input, OnChanges} from '@angular/core';
import { FavsService } from './../../lib/favs.service';

@Component({
  selector: 'app-favs',
  templateUrl: './favs.component.html',
  styleUrls: ['./favs.component.css']
})
export class FavsComponent implements OnInit, OnChanges {
  active = true; /// TRUE =  ADD TO FAVS .... FALSE =  ALREADY IN
  @Input() postId: number | any;
  constructor(
    private favsService: FavsService
  ) { }

  ngOnInit() {
  }

  ngOnChanges()   {
    this.active = this.favsService.checkFavState(this.postId);
  }

  toogleFav() {
    this.active = this.favsService.onToggleFav(this.postId);
  }

}
