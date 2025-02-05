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
console.log(reverseAString("shashi"));
