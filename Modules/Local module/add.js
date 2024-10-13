// first local module add
const calculation = require("./fun");

const add = calculation.add(2, 7);
const mul = calculation.mul(2, 7);
const div = calculation.div(2, 7);
const sub = calculation.sub(2, 7);

console.log("Two number of additon:- " + add);
console.log("Two number of multiply:- " + mul);
console.log("Two number of Devided:- " + Math.floor(div));
console.log("Two number of Substract:- " + sub);

// second local module add
const check = require("./check");

check.Palindrom(122);
check.evenOdd(4);

//above the write code in Javascript here we are adding the functionalities of local modules because we are adding the js file modules by the require pre-build funcation
