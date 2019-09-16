/**
 * Variables and data types
 */

// fundamental concept of variable

// the values "Neeraj" assign to the variable name firstName.
var firstName = "Neeraj";
console.log(firstName); // Neeraj

var lastName = "Kumar";
var age = 27;

var fullAge = true;
console.log(fullAge); // true

var job;
console.log(job); //  undefined

job = "Teacher";
console.log(job); // Teacher

// variable naming rules....

/*
var 3years = 3 // not a valid variable name;
var neeraj/kumar = "neeraj kumar" // unexpected  token / 
*/
var _3years = 3;
console.log(_3years);

var $3years = 5;
console.log($3years);

/*
var if = 3 or
var function = 6;
these are not valid name of variable...
*/

/**************************************
 *  Variable mutation and type coercion..
 */

// Type coercion 
console.log(firstName + "" + age)

var isMarried;
isMarried = false;

console.log(firstName + " is a " + age + " years old " + job);
// Neeraj is a 27years old Teacher

// Variable mutation

age = "Twenty eight"
job = "driver";

alert(firstName + " is a " + age + " years old " + job);
// Neeraj is a Twenty eight years old driver

var newLastName = prompt("What is his last name ?")
console.log(firstName + " " + newLastName) // Neeraj Kumar