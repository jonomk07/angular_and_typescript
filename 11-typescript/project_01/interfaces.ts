
// interface is a way to define an index of types that can be used in a function

export interface User {
    name: string;
    lastname: string;
    age: number;
    greet(): string;
  }
  
  export interface Message {
    show(): void;
  }
  