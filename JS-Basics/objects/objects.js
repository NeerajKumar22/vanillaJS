/**
 * Objects and properties
 */
// in objects we define key value pairs...
// how we define an object

var john = {
  firstName: "John",
  lastName: "Smith",
  birthYear: 1990,
  family: [
    "Jane",
    "Mark",
    "Bob",
    "Emily",
  ],
  job: "teacher",
  isMarried: false,
}
console.log(john.firstName); // John
var x = "birthYear";
console.log(john[x]) // 1990
console.log(john["lastName"]); // Smith

john.job = "designer";
john["isMarried"] = true;
console.log(john)

// New Object syntax
var jane = new Object();
jane.firstName = "Jane";
jane.birthYear = 1960;
jane["lastName"] = "Smith";
console.log(jane)

/**
 * Objects and methods
 */

var john = {
  firstName: "John",
  lastName: "Smith",
  birthYear: 1990,
  family: [
    "Jane",
    "Mark",
    "Bob",
    "Emily",
  ],
  job: "teacher",
  isMarried: false,
  calcAge: function (birthYear) {
    return 2019 - this.birthYear; // here this means the current object
  }
};

var age = john.calcAge(1990); // 29
john.age = john.calcAge();
console.log(john);
