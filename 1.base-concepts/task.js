"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;
  let x1;
  let x2;
  if (d === 0) {
    x1 = (-b / (2 * a))
    arr.push(x1)
  }
  if (d > 0) {
    x1 = (-b + Math.sqrt(d)) / (2 * a);
    x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x1, x2);
  }
  
  return arr;
};
solveEquation()


function calculateTotalMortgage(percent, amount, contribution, countMonths) {
  const calcPercent = percent / 100 / 12;
  const calcAmount = contribution - amount;
  let payment = calcAmount * (calcPercent + (calcPercent / (((1 + calcPercent) ** countMonths) - 1)));

  return Number((payment * countMonths).toFixed(2));
}
calculateTotalMortgage()