//recursive functions

// Base Case: The stopping condition that prevents infinite recursion.
// Recursive Case: The function calls itself with modified arguments to move toward the base case.
function countdown(n) {
  if (n === 0) return; //base case
  console.log(n);
  countdown(n - 1); //recursive case
}

countdown(5);

function factorial(n) {
  if (n === 0) return 1; // base case
  return n * factorial(n - 1); // recursive case
}

console.log(factorial(5), "factorial of 5");

function quickSort(arr) {
  if (arr.length <= 1) return arr;

  let pivot = arr[arr.length - 1];
  let left = arr.filter((e) => e < pivot);
  let right = arr.filter((e) => e > pivot);

  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([5, 3, 8, 4, 2]));
