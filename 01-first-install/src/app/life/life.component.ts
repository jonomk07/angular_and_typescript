import { 
Component, 
OnInit, 
Input, 
OnChanges, 
SimpleChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})
export class LifeComponent implements 
OnInit, 
OnChanges, 
DoCheck, 
AfterContentInit, 
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {

  @Input() artist: string;

  instrument: string = 'Guitar';

  constructor() { 
    console.log('constructor');
    setTimeout(() => {
      this.instrument = 'Bass';
    }
    , 3000);
  }

  // ngOnChanges is called when the input properties of the component change.

  ngOnChanges( changes: SimpleChanges) {
    console.log('OnChanges' , changes);
  }

   // ngOnInit is called after the constructor and the first ngOnChanges()
   ngOnInit() {
    console.log('ngOnInit');
  }

  // ngDoCheck is called every time the component is checked.
  ngDoCheck() {
    console.log('DoCheck');
  }
 // ngAfterContentInit is called after ngOnInit
  ngAfterContentInit() {
    console.log('ngAfterContentInit'); 
  }

  //ngAfterContentChecked is called every time the content of the component is checked.
  ngAfterContentChecked() { 
    console.log('ngAfterContentChecked');
  }
 
  //ngAfterViewInit is called after ngAfterContentInit
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  // ngAfterViewChecked is called every time the view of the component is checked.
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
  

}
