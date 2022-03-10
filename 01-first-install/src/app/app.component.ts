// Component is the base class for all components in Angular.

import { Component, ViewEncapsulation } from "@angular/core";

// Decorator allows us to add metadata to a class.
// Decorators are functions that are used to modify a class.
// Decoratore is a function that returns a function.

@Component({
    //selector is a string that represents the tag name of the component.
    // templateUrl is a string that represents the path to the component's template.
    // styleUrls is an array of strings that represents the path to the component's styles.
    
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    title = "Hello World From App Component ts";
    artist: string = "Snoop Dogg";
    show: boolean = true;
    tvshow: boolean = false;
    green:string = "green";

    coffees:{style:string, available:string}[] = [
        {style:"Espresso", available:"Yes"},
        {style:"Black coffee", available:"no"},
        {style:"Capuccino", available:"yes"}
    ];

    items = [
        'Yes',
        'No',
        'Maybe',
        'Not Sure'
    ]

    style = {
        color: "pink",
        fontSize: "20px"
    };
    // list = [ '1', '2', '3' ];

    // list = [ {position:1}, {position:2}, {position:3} ];
    

    constructor() {
      
    }


    getColor() {
        return 'Blue';
    }

    changeLifehk() {
        this.artist = "Dr Dree";
    }

    ngOnInit() {
      // setTimeout(() => {
      //   this.show = true;
      // }
      //   , 3000);
    }

}
