/**
 * Hoisting
 */

calculateAge(1990); // call the function calculateAge() first
// then write the function
// function deceleration 
function calculateAge(year) {
  console.log(2019 - year); // 29
}
calculateAge(1990);

// Function Expression 
// retirement(1965) // call the retirement
// Uncaught TypeError: retirement is not a function at main.js:13 
var retirement = function (year) {
  console.log(65 - (2016 - year));
}

// variables

console.log(age); // undefined
var age = 25;
console.log(age); // 25

function foo() {
  console.log(age) // undefined
  var age = 65; // define inside the function
  console.log(age); // 65
}
foo();
console.log(age); // 25

/***************************************************************
 * SCOPING
 */

// first scoping example

var a = "Hello! ";
first();
function first() {
  var b = "Hi! ";
  second();

  function second() {
    var c = "Hey! ";
    console.log(a + b + c); // Hello! Hi! Hey!
  }
}

// Execution Stack vs Scope Chain
// Example to show the difference between execution stack and scope chain

var a = "Hello!";
first();
function first() {
  var b = "Hi!";
  second();

  function second() {
    var c = "Hey!";
    third()
  }
}

function third() {
  var d = "John";
  // console.log(a + b + c + d);
  // console.log(c)
  console.log(a + d)
}

// Order in which functions are called
// Execution Stack from bottom to top

// Execution Context third()      
// Execution Context second()
// Execution Context first()
// Global Execution Context


// Order in which functions are written lexically
// Scope Chain from bottom to top

// Global Scope         // a = "Hello!"
// Scope first()        // a = "Hello!", b = "Hi!"
// Scope second()       // a = "Hello!", b = "Hi!", c = "Hey!"
// Scope third()        // a = "Hello!", d = "John"

/**
 * this keyword
 */

// console.log(this); // window object 

// calculateAge(1985)

// function calculateAge(year) {
//   console.log(2016 - year);
//   console.log(this) // window object
// }

var john = {
  name: "John",
  yearOfBirth: 1990,
  calculateAge: function () {
    console.log(this);
    console.log(2016 - this.yearOfBirth);

    // TODO

    // function innerFunction() {
    //   console.log(this); // window object
    // }
    // innerFunction();
  }
}

john.calculateAge();

var mike = {
  name: "Mike",
  yearOfBirth: 1984,

}

mike.calculateAge = john.calculateAge;

mike.calculateAge();

