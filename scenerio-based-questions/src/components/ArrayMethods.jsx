import React from "react";

//join, slice, indexOf, push, slice
const ArrayMethods = () => {
  const fruits = [];

  fruits.push("apple", "banana", "orange");
  fruits[10] = "watermelon";
  console.log(fruits[1]); //  can access using fruits[1] or fruits ['1'] - but fruits['01'] !== fruits['1']
  console.log(fruits.length); //11 because 3-9 indexes are undefined. 10th index is watermelon
  console.log(Object.keys(fruits)); // Object.keys(array) returns the indexes

  const colors = ["orange", "green", "blue"];
  colors[5] = "yellow";

  colors.forEach((item, index) => console.log(`${index} : ${item}`));
  // Output:
  // 0: red
  // 1: yellow
  // 2: blue
  // 5: purple
  console.log(colors.reverse()); // ['purple', empty × 2, 'blue', 'yellow', 'red']
  const iterator = colors.keys();
  for (const key of iterator) {
    console.log(`${key}: ${colors[key]}`);
  }

  // ==> Array creation Methods

  const vegetables = ["tomato", "potato"];
  const veg2 = new Array("tomato", "potato");
  console.log(veg2, "v");

  // ==> Array to String && vice-verca
  const frts = "apple, banana";
  const frtsArr = frts.split(", "); //string to array
  console.log(frtsArr);

  console.log(frtsArr.join()); //array to string
  console.log(fruits[fruits.length - 1]); // to access last element - always length -1
  console.log(fruits.indexOf("banana")); // to find the index of an element
  console.log(fruits.push("grapes")); // adds elements to the end of an array
  fruits.pop(); // removes last element
  console.log(fruits);
  const days = ["mon", "tue", "wed", "thur", "fri", "sat", "sun"];
  const weekend = days.splice(5); // after 5 index all elements are returned & saved to weekend
  console.log(weekend); //splice mutates the original array & returns the modified array

  //from the days if I want only the weekdays
  const start = 5;
  const count = 2;
  days.splice(start, count);
  console.log(days);

  // ==> Iterate over an array

  for (const day of days) {
    console.log(day);
  }

  //    assigning an existing array to a new variable doesn't create a copy of
  //  either the array or its elements.
  // Instead the new variable is just a reference, or alias, to the original array
  const fruitss = ["Strawberry", "Mango"];
  const fruitsAlias = fruits;
  // 'fruits' and 'fruitsAlias' are the same object, strictly equivalent.
  fruitss === fruitsAlias; // true
  // Any changes to the 'fruits' array change 'fruitsAlias' too.
  fruitss.unshift("Apple", "Banana");
  console.log(fruitss);
  // ['Apple', 'Banana', 'Strawberry', 'Mango']
  console.log(fruitsAlias);
  // ['Apple', 'Banana', 'Strawberry', 'Mango']

  const numbers = [1, 2, 1, 2, 3, 4, 4, 5, 6, 6];

  const uniqueNumbers = numbers.filter(
    (num) => numbers.indexOf(num) === numbers.lastIndexOf(num)
  );

  console.log(uniqueNumbers);

  //at
  const array1 = [2, 5, 33, 44, 65, 65];
  const index = 5;
  console.log(array1.at(2)); //33

  //concat
  console.log(array1.concat([10, 12, 11])); //[2,5,33,44,65,10,12,11]

  //every
  console.log(array1.every((el) => el < 100)); // true

  //filter
  console.log(array1.filter((el) => el > 50)); //[65]

  //find
  console.log(array1.find((el) => el > 30)); //33

  //findIndex
  console.log(array1.findIndex((el) => el < 30)); // 0

  //flat
  const array2 = [1, 2, 3, [4, [5, 6]]];
  console.log(array2.flat()); // [1, 2, 3, 4, Array(2)]
  console.log(array2.flat(2)); // [1, 2, 3, 4, 5, 6]

  //flatMap
  console.log(array1.flatMap((num) => (num === 2 ? [2, 2] : 1)));

  //foreach
  array1.forEach((el) => console.log(el));

  //from
  console.log(Array.from("foo"));
  // Expected output: Array ["f", "o", "o"]
  console.log(Array.from([1, 2, 3], (x) => x + x));
  // Expected output: Array [2, 4, 6]

  //includes
  console.log(array1.includes(33));

  //indexOf
  console.log(array1.indexOf(65)); //4

  //lastIndexOf
  console.log(array1.lastIndexOf(65)); //5

  //isArray
  console.log(Array.isArray(array1)); //true
  const str = "a,b,c";
  console.log(Array(str)); //  ["a,b,c"];

  //join
  console.log(array1.join()); // 2,5,33,44,65,65

  //keys
  const iterator1 = array1.keys();
  for (const key of iterator1) {
    console.log(key + 1);
  }

  //length
  console.log(array1.length); //5

  //map
  array1.map((el) => console.log(el + 1));

  //pop
  array1.pop();
  console.log(array1); //[2, 5, 33, 44, 65]

  //push
  array1.push(96);
  console.log(array1); //[2, 5, 33, 44, 65, 96]

  //reduce
  console.log(array1.reduce((sum, num) => sum + num, 0));

  //reverse
  console.log(array1.reverse()); //[96, 65, 44, 33, 5, 2]

  //shift
  array1.shift();
  console.log(array1); //[65, 44, 33, 5, 2]

  //slice
  console.log(array1.slice(1, 3)); //[44,33]

  //some
  const array = [1, 2, 3, 4, 5];
  // Checks whether an element is even
  const even = (element) => element % 2 === 0;
  console.log(array.some(even));
  // Expected output: true

  //sort
  console.log(array1.sort((a, b) => b - a)); //[65, 44, 33, 5, 2]

  //splice
  array1.splice(5, 0, 1);
  //   splice(index, 0 - inserts, 1- replace, 'number that is to be inserted')
  console.log(array1); // [65, 44, 33, 5, 2, 1]
  //toReversed - creates a new array of reversed
  //toSorted - creates a new array of sorted

  array1.unshift(100);
  console.log(array1); //[100, 65, 44, 33, 5, 2, 1]

  return <div>ArrayMethods</div>;
};

export default ArrayMethods;
