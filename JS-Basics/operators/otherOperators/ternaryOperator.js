/**
 * The Ternary Operator and Switch Statements 
 */

var firstName = "Neeraj";
var age = 27;

age > 18 ?
  console.log(firstName + " drinks beer.") :
  console.log(firstName + " drinks juice.");

var drink = age >= 18 ? "beer" : "juice";
console.log(drink);

/**
 *
 if (age >= 18) {
   var drink = "beer";
 } else {
   var drink = "juice"
 }
 */

// Switch statements

var job = "teacher";
switch (job) {
  case "teacher":
    console.log(firstName + " teaches kids how to code.");
    break;
  case "driver":
    console.log(firstName + " drives and uber in Delhi.");
    break;
  case "designer":
    console.log(firstName + " design beautiful website.")
    break;
  default:
    console.log(firstName + "dose something else.");
}

age = 22;
switch (true) {
  case age < 13:
    console.log(firstName + " is a boy.");
    break
  case age >= 13 && age < 20:
    console.log(firstName + " is a teenager.");
    break
  case age >= 20 && age < 30:
    console.log(firstName + " is a young man.");
    break
  default:
    console.log(firstName + " is a man.");
}