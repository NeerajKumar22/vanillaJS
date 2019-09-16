/*******************
 * Basic operators:
 *  operators are like function that written in special way in JavaScript
 */

// This look nice...

var now, yearNeeraj, yearKumar, yearNew;
now = 2019;
yearNeeraj = now - 28;
yearKumar = now - 33;
yearNew = now - 15;

console.log(yearNeeraj); // 1991
// addition 
console.log(now + 2) // 2021

// also multiply
console.log(now * 2) // 4038

// divide
console.log(now / 10); // 201.9

// Logical operators

var neerajOlder = yearNeeraj > yearKumar;
console.log(neerajOlder) // true

var neerajOlder = yearNeeraj < yearKumar;
console.log(neerajOlder) // false

// typeof operator
console.log(typeof neerajOlder); // boolean
console.log(typeof yearNeeraj); // number
console.log(typeof "Kumar is older then Neeraj"); // string
var x; // here we didn't define any value for x variable.
console.log(typeof x); // undefined 

/**
 * Operator Precedence: 
 * See JavaScript operator precedence table
 */

var now, yearJohn, fullAge;
now = 2018;
yearJohn = 1989;
fullAge = 18;

// Multiple Operators
var isFullAge = now - yearJohn >= fullAge;

console.log(isFullAge); // true

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average); // 32

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y) // 26 26

// More operators
// x = x * 2;
// console.log(x); // 52
x *= 2;
console.log(x); // 104
x += 10;
console.log(x); // 62
x = x + 1;
console.log(x); // 63
x += 1;
console.log(x); // 64
x++;
console.log(x); // 65
x--;
console.log(x); // 64