import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  user = {
    name: 'Francis',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    firstLogin: 'Mon March 19 2022 00:00:00 GMT-0416',
    bignumber: '2.718281828459045',
    perc: 0.259,
    dad:{ 
      firstname: 'Jono',
      lastname: 'Muamba',
      age: '32',
    },
    json:  {name: 'Francis', lastname: 'Jones', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}},
  };
  userToFilter = '';
  customValue = 20  
 
  // Promise are used for async operations
  greeting = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello! John');
    }, 2000);
  });

  listOfUsers =  [
    {
      name: 'Francis',
      lastname: 'Jones',
      age: 25
    },
    {
      name: 'Jono',
      lastname: 'Mills',
      age: 32
    },
    {
      name: 'Katherine',
      lastname: 'Robertson',
      age: 60
    },
    {
      name: 'Lisa',
      lastname: 'Kudrow',
      age: 19
    }
  ];

  constructor(
  ) { }

  ngOnInit() {
  }

}
