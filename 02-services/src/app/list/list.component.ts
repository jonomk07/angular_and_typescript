import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  // providers: [UserService]
})
export class ListComponent implements OnInit {

  @Input() user: { name: string } | any;
  @Input() position: { name: number } | any;
  // @Output() userRemoved = new EventEmitter<{ position: number }>();

  constructor(
    private userService: UserService
  ) { }

  remove() {
    this.userService.onUserRemoved({
      position: this.position.name
    });
    // console.log('remove', this.position);
    // this.userRemoved.emit({position: this.position});
    // this.userService.consoleSomething();
  }
  ngOnInit(): void {
  }

}
