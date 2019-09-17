/********************************
 * Functions
 */

// Function is like a machine that receives some input and return something
// DRY (Don't repeat yourself)
function calculateAge(birthYear) {
  return 2018 - birthYear;
}
// call the function and assign that value to the variable ageJohn
var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageMary = calculateAge(1969);
console.log(ageJohn, ageMike, ageMary); // 28 70 49

function yearUntilRetirement(year, firstName) {
  var age = calculateAge(year); // call the calculateAge function
  var retirement = 65 - age;
  if (retirement > 0) {
    console.log(firstName + " retires in " + retirement + " years.");
  } else {
    console.log(firstName + " is already retired.")
  }
}

yearUntilRetirement(1990, "John");
yearUntilRetirement(1948, "Mike");
yearUntilRetirement(1969, "Mary");

/**
 * Function Statements and Expression
 */

// Function Deceleration 
// function whatDoYouDo(job, firstName){}

// Function Expression
// var whatDoYouDo = function ( job, firstName){}
var whatDoYouDo = function (job, firstName) {
  switch (job) {
    case "teacher":
      return firstName + " teaches kids how to code.";
    case "driver":
      return firstName + " drives a cabs in Delhi.";
    case "designer":
      return firstName + " designs a beautiful website.";
    default:
      return firstName + " does something else.";
  }
}

console.log(whatDoYouDo("teacher", "John"));
console.log(whatDoYouDo("designer", "Mary"));
console.log(whatDoYouDo("retire", "Mark"));

