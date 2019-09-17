/**
 * Arrays
 */
// Initialize new array
var names = ["John", "Mark", "Jane"];
var years = new Array(1990, 1969, 1948);
console.log(names[2]); // Jane
console.log(names.length) // 3

// Mutate array data
names[1] = "Ben";
names[names.length] = "Mary";
console.log(names);

// Different Data types
var john = ["John", "Smith", 1990, "teacher", false];
john.push("blue");
john.unshift("Mr.");
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(23));

var isDesigner = john.indexOf("designer") === -1 ?
  "John is NOT a designer" : "John is a designer";

console.info(isDesigner);