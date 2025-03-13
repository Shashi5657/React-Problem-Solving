# Higher-Order Functions in JavaScript

## Overview

Higher-order functions (HOFs) are a fundamental concept in JavaScript. They are functions that either take another function as an argument or return a function as a result. This enables more flexible, reusable, and declarative programming.

## Table of Contents

- [Definition](#definition)
- [Examples](#examples)
  - [Passing a Function as an Argument](#passing-a-function-as-an-argument)
  - [Returning a Function](#returning-a-function)
  - [Built-in Higher-Order Functions](#built-in-higher-order-functions)
- [Why Use Higher-Order Functions?](#why-use-higher-order-functions)
- [Conclusion](#conclusion)

## Definition

A **higher-order function** is a function that:

1. **Takes another function as an argument** (callback function).
2. **Returns a function** as its result.

## Examples

### Passing a Function as an Argument

```javascript
function sayHello(name) {
  console.log("Hello, " + name + "!");
}

function processUser(callback) {
  let user = "Alice";
  callback(user);
}

processUser(sayHello); // Output: Hello, Alice!
```

### Returning a Function

```javascript
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15
```

### Built-in Higher-Order Functions

JavaScript provides built-in higher-order functions like `map`, `filter`, and `reduce`.

#### Using `map()`

```javascript
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((num) => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
```

#### Using `filter()`

```javascript
const ages = [15, 22, 18, 30, 12];
const adults = ages.filter((age) => age >= 18);
console.log(adults); // Output: [22, 18, 30]
```

#### Using `reduce()`

```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // Output: 15
```

## Why Use Higher-Order Functions?

- **Code Reusability** – Avoids repetition and makes functions more modular.
- **Cleaner Code** – Eliminates unnecessary loops and complex logic.
- **Improved Readability** – More declarative and easier to understand.
- **Encourages Functional Programming** – Leads to a more structured approach to problem-solving.

## Conclusion

Higher-order functions are a powerful feature in JavaScript that improve code efficiency, readability, and reusability. Understanding and using them effectively is crucial for writing clean and maintainable JavaScript code.
