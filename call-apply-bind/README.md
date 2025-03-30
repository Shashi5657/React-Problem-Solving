# JavaScript Core Concepts

## Table of Contents

1. [Call, Apply, and Bind](#call-apply-and-bind)
   - [Call](#call)
   - [Apply](#apply)
   - [Bind](#bind)
2. [Async and Await](#async-and-await)
3. [Closures](#closures)
4. [Lexical Scoping](#lexical-scoping)

---

## Call, Apply, and Bind

### Call

`call()` is used to invoke a function with a specific `this` value and **arguments passed individually**.

#### Example:

```javascript
const person = {
  name: "Alice",
  greet: function (age) {
    console.log(`Hello, my name is ${this.name} and I am ${age} years old.`);
  },
};

const anotherPerson = { name: "Bob" };

person.greet.call(anotherPerson, 25);
// Output: Hello, my name is Bob and I am 25 years old.
```

### Apply

`apply()` is similar to `call()`, but **arguments are passed as an array**.

#### Example:

```javascript
person.greet.apply(anotherPerson, [30]);
// Output: Hello, my name is Bob and I am 30 years old.
```

### Bind

`bind()` returns a **new function** with the `this` value set but **does not immediately execute it**.

#### Example:

```javascript
const boundFunction = person.greet.bind(anotherPerson, 28);
boundFunction();
// Output: Hello, my name is Bob and I am 28 years old.
```

---

## Async and Await

`async` and `await` simplify handling asynchronous operations in JavaScript, making code more readable than traditional `promises`.

### Example:

```javascript
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data received"), 2000);
  });
}

async function getData() {
  console.log("Fetching data...");
  const data = await fetchData();
  console.log(data);
}

getData();
// Output:
// Fetching data...
// (After 2 seconds) Data received
```

---

## Closures

A **closure** is a function that remembers the variables from its lexical scope, even when executed outside that scope.

### Example:

```javascript
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log(`Outer: ${outerVariable}, Inner: ${innerVariable}`);
  };
}

const newFunction = outerFunction("Hello");
newFunction("World");
// Output: Outer: Hello, Inner: World
```

Closures are also useful for data privacy:

```javascript
function counter() {
  let count = 0; // Private variable

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
```

---

## Lexical Scoping

Lexical scoping determines how variables are resolved in nested functions. Inner functions have access to variables in their outer functions.

### Example:

```javascript
function outer() {
  let outerVar = "I'm outer!";
  function inner() {
    console.log(outerVar);
  }
  inner();
}

outer();
// Output: I'm outer!
```

---

## Summary Table

| Concept         | Explanation                                                                   | Example                                              |
| --------------- | ----------------------------------------------------------------------------- | ---------------------------------------------------- |
| `call()`        | Calls a function with a specific `this` value, arguments passed individually. | `func.call(obj, arg1, arg2)`                         |
| `apply()`       | Calls a function with a specific `this` value, arguments passed as an array.  | `func.apply(obj, [arg1, arg2])`                      |
| `bind()`        | Returns a new function with `this` set, but does not call immediately.        | `const newFunc = func.bind(obj, arg1, arg2)`         |
| `async/await`   | Handles asynchronous operations in a synchronous-like way.                    | `const data = await fetchData();`                    |
| Closures        | A function remembers variables from its parent scope.                         | `function outer() { return function inner() {...} }` |
| Lexical Scoping | Inner functions can access outer function variables.                          | `function inner() { console.log(outerVar); }`        |

---

## Conclusion

Understanding these concepts will help you write better, cleaner, and more efficient JavaScript code. 🚀
