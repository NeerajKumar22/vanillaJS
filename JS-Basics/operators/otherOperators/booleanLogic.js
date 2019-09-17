/**
 * Boolean Logic 
 */

var firstName = "Neeraj";
var age = 27;
if (age < 15) {
  console.log(firstName + " is a boy.");
} else if (age >= 13 && age < 20) {// between 13 and 20
  console.log(firstName + " is a teenager.")
} else if (age >= 20 && age < 30) {
  console.log(firstName + " is a young man.");
} else {
  console.log(firstName + " is a man.");
};
