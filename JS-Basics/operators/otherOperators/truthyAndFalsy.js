/**
 * Truthy and falsy values and equality operators
 */

// falsy values: undefined, null, 0, " ", NaN
// truthy values: NOT falsy values

var height;
height = 23;
if (height || height === 0) {
  console.log("variable is defined");
} else {
  console.log("variable has NOT been defined");
}

// if height is equal to 0 then it is a falsy value.
// the else statement is console.

// Equality Operators
if (height == "23") {
  console.log("the == operator does type coercion")
}

23 == "23"; // true;
23 === "23"; // false;