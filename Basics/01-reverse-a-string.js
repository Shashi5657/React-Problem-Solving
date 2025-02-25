// 1) Reverse a string using inbuilt methods

let myName = "shashi";
//split converts the string to array
let myNameArray = myName.split("");
//reverse method is used to reverse the array
let reversedArray = myNameArray.reverse();
//join method is used to convert the array to string
let reversedString = reversedArray.join("");

//reverse a string without inbuilt methods
function reverseAString(str) {
  // Step 1: Create an empty string to store the reversed word
  let reversedStr = "";

  // Step 2: Loop through the word from the last letter to the first letter
  for (let i = str.length - 1; i >= 0; i--) {
    // Step 3: Take each letter from the end and add it to reversedStr
    reversedStr += str[i];
  }

  // Step 4: Return the reversed word
  return reversedStr;
}

//find the missing number from the array of n numbers

const numbersArray = [0, 5, 4, 1, 2, 3, 8, 6];

function findMissingNumber(arr) {
  //takes the length of the array
  let n = arr.length;
  // The sum of the first n natural numbers is given by the formula:
  let expectedSum = (n * (n + 1)) / 2;
  //first one is a callback function which is accumulator(ex sum), second one is the current value
  let actualSum = arr.reduce((sum, num) => sum + num, 0);
  //if we subtract we'll get the missing value
  return expectedSum - actualSum;
}

function isPalindrome(input) {
  // converts the numbers to string, if any number is passed
  const str = String(input);

  //removes unmatching letters from the given string & converts all letters to lowercase
  let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // converts to string reverses it, & join back to string
  const reversedCleanedStr = cleanedStr.split("").reverse().join("");

  //compare reversed & original
  return cleanedStr === reversedCleanedStr;
}

function twoSum(nums, target) {
  // Step 1: Create a Map (a special object to store key-value pairs)
  const map = new Map();

  // Step 2: Loop through the numbers in the array
  for (let i = 0; i < nums.length; i++) {
    // Step 3: Calculate the missing number we need (complement)
    const complement = target - nums[i];

    // Step 4: Check if the complement is already in the map
    if (map.has(complement)) {
      // If found, return the indices of the two numbers
      return [map.get(complement), i];
    }

    // Step 5: Store the current number and its index in the map
    map.set(nums[i], i);
  }

  // Step 6: If no pair is found, return an empty array
  return [];
}

function fibonacci(n) {
  // Step 1: Handle cases where n is negative (not valid)
  if (n < 0) return [];

  // Step 2: If n = 1, return just [0]
  if (n === 1) return [0];

  // Step 3: If n = 2, return [0, 1] (since these are the first two Fibonacci numbers)
  if (n === 2) return [0, 1];

  // Step 4: Start with the first two numbers in the sequence
  let fib = [0, 1];

  // Step 5: Loop from index 2 to n-1 and generate Fibonacci numbers
  for (let i = 2; i < n; i++) {
    // Get the last two numbers and add them together
    fib.push(fib[i - 1] + fib[i - 2]);
  }

  // Step 6: Return the full Fibonacci sequence
  return fib;
}

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2); // Find the middle index

    if (arr[mid] === target) return mid; // If found, return index
    else if (arr[mid] < target) left = mid + 1; // Search in the right half
    else right = mid - 1; // Search in the left half
  }

  return -1; // If not found, return -1
}

// Example usage
console.log(binarySearch([1, 2, 3, 4, 5, 6, 13, 56, 333], 13)); // Output: 6

//   Time Complexity
//   O(log n) → Super Fast! 🚀

//   Each step cuts the array in half.
//   A loop search (O(n)) would take 9 steps in worst case.
//   Binary search (O(log n)) only takes ~3 steps for n = 9.

function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) return -1; // Base case: not found

  let mid = Math.floor((left + right) / 2); // Find the middle index

  if (arr[mid] === target) return mid; // Found the target
  else if (arr[mid] < target)
    return binarySearchRecursive(arr, target, mid + 1, right); // Search right
  else return binarySearchRecursive(arr, target, left, mid - 1); // Search left
}

// Example usage
console.log(binarySearchRecursive([1, 2, 3, 4, 5, 6, 13, 56, 333], 13));

//Bubble sort

function bubbleSort(arr) {
  let n = arr.length;
  let swapped;

  do {
    swapped = false;
    for (i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
    n--;
  } while (swapped);
  return arr;
}

function selectionSort(arr) {
  let n = arr.length;

  for (i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}

console.log(selectionSort([21, 8, 16, 5]));

function mergeSort(arr) {
  if (arr.length <= 1) return arr; // Base case: if only 1 element, it's already sorted

  let mid = Math.floor(arr.length / 2); // Find middle index
  let left = mergeSort(arr.slice(0, mid)); // Recursively sort left half
  let right = mergeSort(arr.slice(mid)); // Recursively sort right half

  return merge(left, right); // Merge sorted halves
}

function merge(left, right) {
  let result = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    // Compare elements from both halves
    if (left[i] < right[j]) {
      result.push(left[i]); // Add smaller element to result
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j)); // Add remaining elements
}

// Example
console.log(mergeSort([4, 2, 7, 1])); // Output: [1, 2, 4, 7]

function quickSort(arr) {
  if (arr.length <= 1) return arr; // Base case: If only 1 element, it's already sorted

  let pivot = arr[arr.length - 1]; // Choose the last element as pivot
  let left = [],
    right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    // Partition the array
    if (arr[i] < pivot) {
      left.push(arr[i]); // Elements smaller than pivot go left
    } else {
      right.push(arr[i]); // Elements greater go right
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)]; // Recursively sort left & right, then combine
}

// Example
console.log(quickSort([4, 2, 7, 1])); // Output: [1, 2, 4, 7]

//recursive functions

// Base Case: The stopping condition that prevents infinite recursion.
// Recursive Case: The function calls itself with modified arguments to move toward the base case.
function countdown(n) {
  if (n === 0) return; //base case
  console.log(n);
  countdown(n - 1); //recursive case
}

countdown(5);

function factorial(n){
  if(n === 0) return 1 // base case
  return n * factorial(n-1) // recursive case
}

console.log(factorial(5), 'factorial of 5')
