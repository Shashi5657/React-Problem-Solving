let myName = "shashi";
//split converts the string to array
let myNameArray = myName.split("");
//reverse method is used to reverse the array
let reversedArray = myNameArray.reverse();
//join method is used to convert the array to string
let reversedString = reversedArray.join("");

//reverse a string without inbuilt methods
function reverseAString(str) {
  let reversedStr = "";
  for (i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
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
  const str = String(input);
  let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  const reversedCleanedStr = cleanedStr.split("").reverse().join("");

  return cleanedStr === reversedCleanedStr;
}

function twoSum(nums, target) {
  const map = new Map();

  for (i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }
  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
