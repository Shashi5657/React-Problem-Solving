// a function which uses another function as argument
// a function which returns another function

// We can pass a function as a parameter to another function.
// This is often used in array methods like map, filter, and forEach.
function greetUser(name) {
  console.log("Hello " + name + " Good Morning");
}

function processUser(callbackFunction) {
  let user = "Shashi";
  callbackFunction(user);
}

processUser(greetUser);

// A higher-order function can also return a function instead of a value.
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log(double(10));

// JavaScript provides built-in higher-order functions like
// map, filter, and reduce, which operate on arrays.
const numbers = [2, 3, 4, 5];

const squareRootNumbers = numbers.map((number) => {
  return number * number;
});

console.log(squareRootNumbers);

const filteredNumbers = numbers.filter((number) => number < 4);
console.log(filteredNumbers);

const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum);
