//Before diving into call, apply, and bind, it's important to understand how this works.
//this refers to the object that is executing the current function.

const person1 = { name: "Shashi" };

const person2 = { name: "Vinay" };

function intro(age) {
  console.log(`Hello, My name is ${this.name} and I am ${age} years`);
}

intro.call(person1, 24);

intro.apply(person2, [25]);

const introduction = intro.bind(person1, 30);

introduction();

// async makes a function return a promise automatically.
// await pauses execution until the promise resolves.

async function getData() {
  console.log("fetching data...");
  const data = await fetchData();
  console.log(data);
}

getData();

// A closure is when a function remembers the variables from its parent function
// even after the parent function has finished executing.

function counter() {
  let count = 0;

  return {
    increment: function () {
      count++;
      console.log(count);
    },
    decrement: function () {
      count--;
      console.log(count);
    },
  };
}

const myCounter = counter();
myCounter.increment(); // Output: 1
myCounter.increment(); // Output: 2
myCounter.decrement(); // Output: 1

function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15

function delayedMessage(message, delay) {
  return function () {
    setTimeout(() => console.log(message), delay);
  };
}

const helloLater = delayedMessage("Hello, world!", 2000);

helloLater();

// Output (after 2 seconds): Hello, world!

// Lexical scoping determines variable accessibility based on
// where functions are defined, not where they are called.

function outer() {
  let outerVar = "I am outer!";

  function inner() {
    console.log(outerVar);
  }

  inner();
}

outer();
// Output: I am outer!
