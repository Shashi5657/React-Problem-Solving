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
