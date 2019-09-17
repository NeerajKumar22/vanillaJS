/**
 * CODING CHALLENGE -2
 */

/*
John and his family went on a holiday and went to 3 different restaurants.
The bills were $124, $48 and $268.
To tip the waiter a fair amount, John created a simple tip calculator(as a
  function). He likes to tip 20% of the bill when the bill is less then $50,
  15% when the bill is between $50 and $200, and 10% if the bill is more than
  $200.
In the end, John would like to have two arrays:
1). Containing all three tip(one for each bill);
2). Containing all three final bill paid amounts(bill + tip).

(Note: To calculate 20% of a value, simply multiply if with 20/100 = 0.2)

GOOD LUCK 😀
*/

function tipCalculator(bill) {
  var percentage;
  if (bill < 50) {
    percentage = .2;
  } else if (bill >= 50 && bill < 200) {
    percentage = .15;
  } else {
    percentage = .1;
  }
  return percentage * bill;

}

console.log(tipCalculator(10))

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])];
var finalValue = [
  bills[0] + tips[0],
  bills[1] + tips[1],
  bills[2] + tips[2],
]
console.log(tips, finalValue)