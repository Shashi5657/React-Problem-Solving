// 1. Data types in JavaScript
// Primitive (Mutable)=>  String, number, boolean, BigInt, undefined, null, symbol
// Non Primitive(Immutable) => Object, Array, Function, Map, Set
// Note:- typeOf null is a "object"
//arrays & functions are technically objects

// ------------------------------------------------------------------------//

//2. Types of Functions
// Function Declaration - named function
function greet(name) {
  console.log(`Hello, Good Morning ${name}.!`);
} // hoisted

//Function Expression
const greet = function (name) {
  return `Hi ${name}`;
}; // not hoisted

//Arrow functions
const greet = (name) => `Hi ${name}`;

//Anonymous Function
setTimeout(function () {
  console.log("printing after 2 seconds");
}, 2000);

//Immediately invoked function expression IIFE
(function () {
  console.log("logging");
})();

//async functions
async function fetchData() {
  const res = await fetch("www.mockdata.json.com");
  return await res.json();
}

// ------------------------------------------------------------------------//

// 3. Features Introduced in ES6
// let & const - Block scoped variables
// Arrow functions
// template literals
// default parameters
// Destructuring assignment
// rest & spread operator
// modules import export
//promises
//Map & Set

// ------------------------------------------------------------------------//

// Diff b/w spread & rest operator
// 1.spread
//used for spreading elements from array or objects
//copy or merge data structures
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];
console.log(arr2, "aaa"); //[1,2,3,4,5,6]

// 2. Rest
// Collects or groups
//gathers all arguments into an array
function sum(...nums) {
  return nums.reduce((a, b) => a + b);
}
sum(1, 2, 3); //6
