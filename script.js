// Write a function named stringy that takes a size and returns a string of alternating '1s' and '0s'. The string should start with a 1. A string with size 6 should return :'101010'. With size 4 should return : '1010'. With size 12 should return : '101010101010'. The size will always be positive and will only use whole numbers.

function Stringy(size) {
  // variable numList stores an array that takes in a size
  var numList = new Array(size);

  // pushes 1 into array since first number will always be 1
  numlist.push("1");

  // index counter
  var i = 0;

  // loop increments index up to the array size and if/else statement pushes either 0 or 1 into array
  for (i = 0; i < size; i++) {
    // if the previous index value is 1 then pushes 0 into array
    if (numList[i--] == "1") {
      // numList[i] = "0";
      numlist.push("0");
    }
    // if the previous index value is 0 then pushes 1 into array
    else {
      // numList[i] = "1";
      numlist.push("1");
    }
  }
  // returns array values in string
  console.log(numList.join());
}

Stringy(4);

// odd number is 2*i + 1

// function Stringy(size) {
//   var numList = new Array(size);
//   var i = 0;
//   for (i = 0; i < size; i++) {
//     if (numList[i] == 2*i + 1) {
//       numList[i] = "0";
//     }
//     else {
//       numList[i] = "1";
//     }
//   }
//   console.log(numList.join());
// }
//
// Stringy(4);



// // counter
// var i = 0;
//
// // string constructor function
// function Stringy() {
//   // empty array
//   this.finalString = [];
// }
//
// // Stringy method
// Stringy.prototype.addOneZero = function(userNumber) {
//   // counter starts at zero, while the counter is less than or equal to the userNumber the loop can continue
//   for (i = 1; i <= userNumber; i++) {
//     if (userNumber == isOdd()) {
//       this.finalString.push("1");
//     }
//     else {
//       this.finalString.push("0");
//     }
// }
//
// // function to determine if number is odd
// function isOdd() {
//   i = 1
//   if (userNumber = 1 || userNumber = i + 2) {
//     i++
//     returns true;
//   else {
//     returns false;
//   }
// }
//
// // creating new Stringy variable
// var newString = new Stringy();
//
// // pushing userNumbner into newString
// newString.addOneZero(2);
// // retrieving array values
// console.log(newString.finalString);
//
// // pushing userNumbner into newString
// newString.addOneZero(5);
// // retrieving array values
// console.log(newString.finalString);


// var i = 0;
//
// function Stringy() {
//   this.finalString = [];
// }
//
// Stringy.prototype.addOneZero = function(userNumber) {
//   for (i = 1; i <= userNumber; i++) {
//   this.finalString.push("1");
//   this.finalString.push("0");
//   }
// };
//
// var newString = new Stringy();
//
// newString.addOneZero(3);
// console.log(newString.finalString);

// var i = 0;
//
// function Stringy() {
//   this.finalString = [];
// }
//
// Stringy.prototype.addOneZero = function(userNumber) {
//   for (i = 0; i <= userNumber; i++) {
//   this.finalString.push("1");
//   this.finalString.push("0");
//   }
// };
//
// var newString = new Stringy();
//
// newString.addOneZero(10);


// var userName
// var x = 0;
//
// function Stringy() {
//   this.finalString = [];
// }
//
// Stringy.prototype.addOneZero = function(userName) {
//   finalString.length = userName;
//
//   for (x = 1, x <= userName, x++) {
//     finalString.push = "1";
//     finalString.push = "0";
//   }
// }


// function oddNum(userName.length) {
//   for (x = 1; x <= userName; x = x + 2)
//   return true;
// }
//
// function evenNum(userName) {
//   for (x = 2; x <= userName; x = x + 2)
//   return true;
// }


//
// function stringy(userNumber) {
//   var finalString = "";
//   var x = 0;
//
//   var oddNum() {
//     for (x = 1; x <= userNumber; x + 2)
//     finalString = "0";
//
//   }
//
//   var evenNum() {
//     for (x = 2, x <= userNumber, x + 2)
//     finalString = "0";
//   }
//
//   if (userNumber > 0 && userNumber ==) {
//     finalString.length = userNumber;
//     finalString = "1"
//   }
//
//
//   if (i = 1, i + 2) {
//     finalString.length = userNumber;
//     finalString = "1";
//     finalString = "1" + "0";
//   }
// }
//
// stringy(5);
// console.log(finalString);


// Given a non-negative integer, return an array containing a list of independent digits in reverse order. Example: 348597 => [7,9,5,8,4,3]

function userInput(stuff) {
  var inputArray = stuff.split(" ");
  console.log(inputArray);

  var reverseInput = [];
  i = inputArray.length-1;
  x = 0;
  i--
  x++
  reverseInput[i] = inputArray[x];

  console.log(reverseInput);
}

userInput(10345);


// if userInput is 1468 then array length = 4
// userInput.split = [1, 4, 6, 8]
// index = 0 - 3
// index =    3  2  1  0
// reverseArray = [8, 6, 4, 1];
//
// i = inputArray.length
// i--
// reverse[i] = []


// Fibonacci number is the sum of the previous two sequence numbers. Below is an example of the sequence 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, … Notice the sequence pattern is the sum of the previous two numbers? 0 + 1 = 1 1 + 1 = 2 1 + 2 = 3 2 + 3 = 5 3 + 5 = 8 … Build a function to illustrate how to get this sequence to output. If you don’t know where to begin start with pseudo code to work through the steps











// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons. Write a function called checkCoupon to verify that a coupon is valid and not expired. If the coupon is good, return true. Otherwise, return false. A coupon expires at the END of the expiration date. All dates will be passed in as strings in this format: "June 15, 2014"
