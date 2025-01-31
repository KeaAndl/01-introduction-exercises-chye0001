// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2
const sum1 = Number(numberOne) + Number(numberTwo);
console.log(sum1);

// --------------------------------------






// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const sum2 = Number(anotherNumberOne) + Number(anotherNumberTwo);
console.log(sum2.toFixed(2));

// --------------------------------------






// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals
const sum3 = one + two + three;
const avg = sum3/3;
console.log(avg.toFixed(5));

// --------------------------------------






// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"

const c = letters.substring(2);
console.log(c);

// --------------------------------------






// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

const J = fact.substring(17, 18).toUpperCase();
const updatedFact = fact.replace("j", J);
console.log(updatedFact);

// --------------------------------------



