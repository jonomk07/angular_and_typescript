import { Component, OnInit } from '@angular/core';
import {
  MAT_TOOLTIP_DEFAULT_OPTIONS
} from '@angular/material/tooltip';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.css'],
  // providers: [
  //   {
  //     provide: MAT_TOOLTIP_DEFAULT_OPTIONS,
  //     useValue: {
  //         showDelay: 1000,
  //         hideDelay: 1000,
  //         position: 'right'
  //     }
  //   }
  // ]
})
export class FourComponent implements OnInit {
  myControl = new FormControl() ;
  countries = [
    'EEUU',
    'China',
    'India',
    'England',
    'Germany',
    'Brazil'
  ];
  filteredCountries!: Observable<string[]>;


  constructor() { }

  ngOnInit() {
    this.filteredCountries = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map( value => {
        const filterValue = value.toLowerCase();
        return this.countries.filter(
          country => country.toLowerCase().includes(filterValue)
        );
      })
    );
  }



  handleTooltip(tooltip:any) {
    console.log(tooltip);

    tooltip.disabled = false;
    tooltip.show();

    setTimeout(()=>{
      tooltip.disabled = true;
    },1000);

  }

}
