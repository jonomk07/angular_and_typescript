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

    constructor() {
      setTimeout(() => {
        this.show = false;
      }
        , 3000);
    }

    changeLifehk() {
        this.artist = "Dr Dree";
    }
}
