// Functions

var age = 27;
var obj = {
  name: "Neeraj",
  city: "Delhi",
}

function change(a, b) {
  a = 30;
  b.city = "New Delhi"
}
change(age, obj);
console.log(age); // 27
console.log(obj.city); // New Delhi


/*************************************
 * Passing function as a argument
 */

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (let i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
};

function calculateAge(el) {
  return 2016 - el;
}

function isFullAge(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - (0.67 * el));
  } else {
    return -1;
  }
}
var ages = arrayCalc(years, calculateAge);

var fullAges = arrayCalc(ages, isFullAge);

var rates = arrayCalc(ages, maxHeartRate);

console.log(ages); // [26, 51, 79, 11, 18]

console.log(fullAges); // [true, true, true, false, true]

console.log(rates); // [189, 173, 154, -1, 195]


/**
 * Functions returning functions
 */

function interviewQuestion(job) {
  if (job === "designer") {
    return function (name) {
      console.log(name + ", can you please explain what UX design is?");
    }
  } else if (job === "teacher") {
    return function (name) {
      console.log("What subject do you teach, " + name + "?")
    }
  } else {
    return function (name) {
      console.log("Hello " + name + ", what do you do?")
    }
  }
}

var teacherQuestion = interviewQuestion("teacher");

var designerQuestion = interviewQuestion("designer");

teacherQuestion("John"); // What subject do you teach, John?
designerQuestion("Mark"); // Mark, can you please explain what UX design is?
interviewQuestion("teacher")("Neeraj"); // What subject do you teach, Neeraj?

/**
 * IMMEDIATELY INVOKED FUNCTION EXPRESSION(IIFE);
 */

// function game() {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// }
// game();

(function () {
  var score = Math.random() * 10;
  console.log(score >= 5)
})();

// console.log(score);

(function (goodLuck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck)
})(5);