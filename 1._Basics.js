// --------------------------------------
// Variables, strings, numbers, floats
// --------------------------------------
// Exercise 1 - Console and constiables

const firstName = "Anders";
const lastName = "Latif";
// EXERCISE
// show in the console
// My first name is Anders and my last name is Latif
console.log("My first name is", firstName, "and my last name is", lastName);

// --------------------------------------
// Exercise 2 - Numbers and Strings

const year = "2024";
const increment = 1;

// Add the year plus the increment
// The result should be 2025
// You cannot touch the first or the second line
const result1 = Number(year) + increment;
console.log(result1);

const result2 = parseInt(year) + increment;
console.log(result2);

// using plus infront of a string, converts it to a Number, f.eks: +year
const result3 = +year + increment;
console.log(result3);

// --------------------------------------
