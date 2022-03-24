//BASIC TYPES

// implicit type notation is when you don't specify the type of a variable
// explicit type inference is when you specify the type of a variable


// NUMBER

let cars: number = 5; // Implicit type notation
let car = 5; // Explicit type inference
console.log(cars);

// STRING 

let username: string = "John";
let userName = "John";
let user_name = "John";
console.log(username);

// ANY (can be anything)
let something: any = "John";

something = true;
something = {};
something = () => { };

console.log(something);

// NULL / UNDEFINED (no value)
let flowers: null = null;
let biker: undefined = undefined;
console.log(flowers);

// BUILT IN TYPES
let date: Date = new Date();
let math: number = Math.PI;
console.log(date);

// ARRAY (COLLECTION OF SAME TYPE)
let numbers: number[] = [1, 2, 3, 4, 5];
let numbers2: Array<number> = [1, 2, 3, 4, 5];
let magazines: string[] = ["otaku", "The Verge", "wired"];
let booleans: boolean[] = [true, false, true];
let user: (boolean | string | number)[] = ["francis", 23, true];
console.log(user);

// MULTY DIMENSIONAL ARRAY
let matrix: any[][] = [
    [1, 2, 3],
    [true, 5, "francis"],
    ["Jono", false, "francis"]
];
console.log(matrix);

type Guitars = (boolean | string | number)[][];
let guitars: Guitars = [["ibanez", 6, true], ["fender", true, 6]];
console.log(guitars);

// TUPLE (ARRAY OF DIFFERENT TYPES)
let basket: [string, number, boolean] = ["banana", 2, true];
console.log(basket);

type Laptops = [string, boolean];
let laptops: Laptops = ["Mac", false];
console.log(laptops);

// OBJECTS (COLLECTION OF PROPERTIES)
let userData: { name: string, age: number } = {
    name: "John",
    age: 23
};

console.log(userData.age);

// FUNCTION (BLOCK OF CODE THAT CAN BE EXECUTED)

const logNumber: (x: number, y: number) => number = (
    x: number,
    y: number
): number => {
    return x + y;
}
console.log(logNumber(1, 2));

function getName(firstName: string, lastName: string): string {
    return firstName + " " + lastName;
}
console.log(getName("Jono", "Muamba"));

function myFunc(x: number, y: number): number {
    // named function
    return x + y;
  }
  console.log("named function " + myFunc(1, 2));
  
  const greet = function(x: number, y: number): number {
    // anonymous  function
    return x + y;
  };
  console.log("anonymous function " + greet(1, 2));

// void means that the function doesn't return anything

const voided = (): void | number => {
    /////
    return 2;
};

console.log(voided());

// DESTUCTURING ARRAYS AND OBJECTS 

const info = {
    name: "NBA",
    channel: 3
  };

console.log(info.name);

// const tv = (info: { name: string; channel: number }): void => {
//   console.log(`The show: ${info.name} is in channel ${info.channel} `);
// };

const tv = ({ name, channel }: { name: string; channel: number }): void => {
    console.log(`The show: ${name} is in channel ${channel} `);
  };
  
tv(info);

const shout = (...args: any[]): void => {
    console.log("SHOUT",`Shout ${args}, ${args[1]} , ${args[2]}`);
};
shout();


const info2 = {
    nameTV: "Monster wheel",
    channelTV: 3
  };
  
  const { nameTV, channelTV }: { nameTV: string; channelTV: number } = info2;
  console.log(nameTV);


// INFERENCE TYPES

let monitors: string;
monitors = "presonus";


let whatever; // inferred type

let discountPrice: boolean | number = false;
let price = 200;
if (price < 200) {
    discountPrice = 150;
  }
console.log(discountPrice);