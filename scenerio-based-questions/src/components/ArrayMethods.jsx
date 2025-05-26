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
  //concat
  //every
  //filter
  //find
  //findIndex
  //flat
  //flatMap
  //foreach
  //from
  //includes
  //indexOf
  //lastIndexOf
  //isArray
  //join
  //keys
  //length
  //map
  //pop
  //push
  //reduce
  //reverse
  //shift
  //slice
  //some
  //sort
  //splice
  //toReversed
  //toSorted

  return <div>ArrayMethods</div>;
};

export default ArrayMethods;
