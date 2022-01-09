// To comment in JavaScript you have to use // to do it a short cut to do so it 'command + /' 

// /* // this is a line of code that will not run but is used to leave a note
var greeting = "hello"; */



// recieves two numbers and returns their sum
function addNums(a, b) {
    // TODO refactor to check if a and b are numbers
  return a + b; }




// A multiline comment is denoted with /* */  the short cut to do so is "option + shift + a"

/*
This is a paragraph of text to describe this section of the document. I am continuing this comment
*/



// JS Doc strings 

/**
 * @description recieves two numbers and returns their sum
 * @param {Number} a Any positive int
 * @param {Number} b
 * @returns
 * @author URL
 */
 function addNums2(a, b) {
    return a + b;
  }


  /**
 * this variable is an apple
 */
const apple = "apple"; 


// Variables 

/* The difference between let and const is that a const variable cannot be re-assigned to - you can assign data to it once, and that's it: */

let x = 25;
x = 100; // no problem
const z = 25;
z = 100; // Uncaught TypeError: Assignment to constant variable

const person = {name: 'Fred'};
person.age = 25; // no error
person = {name: 'Barney'} // Uncaught TypeError: Assignment to constant variable

// Identifiers are used to name variables, as well as named functions:

let points; // the identifier is "points" and names the variable "points"

let name = "Fred Flintstone"; // two birds with one stone!

name = "Barney"; // note that we only declare a variable once

// Multiple variables can be defined in a single statement, separated by commas:

let name = 'Wilma', age, town = 'Bedrock';
// above is equivalent to
let name = 'Wilma';
let age;
let town = 'Bedrock';

// In JavaScript, when naming variables, the convention is to name the identifiers using lowerCamelCase


const name = "Anthony"

let shoeSize = '12'