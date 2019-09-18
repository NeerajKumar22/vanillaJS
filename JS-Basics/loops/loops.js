/**
 * Loops and Iteration
 */
// for loop
for (var i = 0; i < 10; i++) {
  console.log(i);
}
// i = 0, 0 < 10 true, log i to console, i ++
// i = 1, 1 < 10 true, log i to the console, i++
// ....
// i = 9, 9 < 10 true, log i to console, i++;
// i = 10, 10 < 10 false, exit from the loop!

for (var i = 0; i < 20; i += 2) {
  console.log(i)
}

// var john = ["John", "Smith", 1990, "designer", false];

// console.log(john[0]); // John
// console.log(john[1]); // Smith
// console.log(john[2]); // 1990
// console.log(john[3]); // designer
// console.log(john[4]); // false

// for (var i = 0; i < john.length; i++) {
//   console.log(john[i]);
// }

// while loop
// var i = 0;
// while (i < john.length) {
//   console.log(john[i]);
//   i++;
// };

// continue and break statements...
// continue
var john = ["John", "Smith", 1990, "designer", false, "blue"];
for (let i = 0; i < john.length; i++) {
  if (typeof john[i] !== "string") {
    continue;
  }
  console.log(john[i]);
}

// break

for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== "string") {
    break;
  }
  console.log(john[i]);
}

// Looping backwards

for (var i = john.length - 1; i >= 0; i--) {
  console.log(" * " + john[i]);
};