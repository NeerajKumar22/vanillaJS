// Function constructor

var john = {
  name: "John",
  yearOfBirth: 1990,
  job: "teacher"
}

var Person = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
  // this.calculateAge = function () {
  //   console.log(2016 - yearOfBirth);
  // }
}

// Prototype property
Person.prototype.calculateAge = function () {
  console.log(2016 - this.yearOfBirth);
}

Person.prototype.lastName = "Smith"

var john = new Person("John", 1990, "teacher");
// john.calculateAge()

var jane = new Person("Jane", 1969, "designer");
var mark = new Person("Mark", 1948, "retired");

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName); // Smith
console.log(jane.lastName); // Smith
console.log(mark.lastName); // Smith

// The prototype chain in the console

console.log(john); // Person {name: "John", yearOfBirth: 1990, job: "teacher"}
console.log(john.__proto__ === Person.prototype); // true
john.hasOwnProperty("job"); // true

john.hasOwnProperty("lastName"); // false

john instanceof Person; // true

// Object.create

var personProto = {
  calculateAge: function () {
    console.log(2016 - this.yearOfBirth);
  }
};

var john = Object.create(personProto);
john.name = "John";
john.yearOfBirth = 1990;
john.job = "teacher";

var jane = Object.create(personProto, {
  name: { value: "Jane" },
  yearOfBirth: { value: 1969 },
  job: { value: "designer" }
});

// Primitives vs objects

// Primitives

var a = 23;
var b = a;
a = 46;
console.log(a); // 46
console.log(b); // 23

// Objects

var obj1 = {
  name: "John",
  age: 26
}
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age); // 30
console.log(obj2.age); // 30

