var arr = [1, 2, 3, 4, 5, 6, 7, 8];
var [v1, v2, ...v3] = arr;
console.log(v1);
console.log(v2);
console.log(v3);

function balance(amt, milk, veggies, juice, fruits) {
  var spent = milk + veggies + juice + fruits;
  var balance = amt - spent;
  console.log(balance);
}
balance(1000, 100, 100, 100, 100);

function spreadBalance(amt, ...spent) {
  var sumSpent = 0;
  for (let i of spent) {
    sumSpent = sumSpent + i;
  }
  var bal = amt - sumSpent;
  console.log(bal);
}
spreadBalance(1000, 20, 20, 10, 30, 10, 20, 10, 20);
