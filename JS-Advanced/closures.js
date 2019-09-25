/*************
 * CLOSURES :-
 *          An inner function has always access to the variables and 
 *          parameters of its outer function, even after the outer 
 *          function has returned...
 */

function retirement(retirementAge) {
  var a = " years left in the retirement"
  return function (yearOfBirth) {
    var age = 2016 - yearOfBirth;
    console.log((retirementAge - age) + a);
  }
}

var retirementUS = retirement(66);

var retirementGermany = retirement(65);

var retirementIceland = retirement(67);

retirementGermany(1990); // 39 years left in the retirement
retirementUS(1990); // 40 years left in the retirement
retirementIceland(1990); // 41 years left in the retirement

// retirement(66)(1990);


// function interviewQuestion(job) {
//   if (job === "designer") {
//     return function (name) {
//       console.log(name + ", can you please explain what UX design is?");
//     }
//   } else if (job === "teacher") {
//     return function (name) {
//       console.log("What subject do you teach, " + name + "?")
//     }
//   } else {
//     return function (name) {
//       console.log("Hello " + name + ", what do you do?")
//     }
//   }
// }

function interviewQuestion(job) {
  return function (name) {
    if (job === "designer") {
      console.log(name + ", can you please explain what UX design is ?");
    } else if (job === "teacher") {
      console.log("What subject do you teach, " + name + "?");
    } else {
      console.log("Hello " + name + ", what do you do?");
    }
  }
}

interviewQuestion("teacher")("Neeraj") // What subject do you tach, Neeraj?


/***************************
 * BIND :-
 *        Bind allows to create a copy of a function with preset argument.
 * , Call and apply
 */

var neeraj = {
  name: "Neeraj",
  age: 26,
  job: "teacher",
  presentation: function (style, timeOfDay) {
    if (style === "formal") {
      console.log(
        "Good " +
        timeOfDay +
        ", Ladies and gentlemen! I'm " +
        this.name +
        ", I'm a " +
        this.job +
        " and I'm " +
        this.age +
        " years old "
      )
    }
    else if (style === "friendly") {
      console.log(
        "Hey what's up? I'm " +
        this.name +
        ", I'm a " +
        this.job +
        " and I'm " +
        this.age +
        " years old. Have a nice " +
        timeOfDay + "."
      )
    }
  }
};

var emily = {
  name: "Emily",
  age: 35,
  job: "designer",
}

neeraj.presentation("formal", "morning");
// Good morning, Ladies and gentlemen! I'm Neeraj, 
// I'm a teacher and I'm 26 years old 

neeraj.presentation.call(emily, "friendly", "afternoon");
// Hey what's up? I'm Emily, I'm a designer and I'm 35 years old.
// Have a nice afternoon.

// john.presentation.apply(emily, ["friendly", "afternoon"]);

var neerajFriendly = neeraj.presentation.bind(neeraj, "friendly")

neerajFriendly("morning");
// Hey what's up? I'm Neeraj,
// I'm a teacher and I'm 26 years old. Have a nice morning.

neerajFriendly("night");
// Hey what's up? I'm Neeraj,
// I'm a teacher and I'm 26 years old. Have a nice night.

var emilyFormal = neeraj.presentation.bind(emily, "formal");
emilyFormal("afternoon")
// Good afternoon, Ladies and gentlemen! I'm Emily,
// I'm a designer and I'm 35 years old 


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

function isFullAge(limit, el) {
  return el >= limit;
}

var ages = arrayCalc(years, calculateAge);

var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages); // [26, 51, 79, 11, 18]
console.log(fullJapan); // [true, true, true, false, false]

