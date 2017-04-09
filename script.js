// Write a function named stringy that takes a size and returns a string of alternating '1s' and '0s'. The string should start with a 1. A string with size 6 should return :'101010'. With size 4 should return : '1010'. With size 12 should return : '101010101010'. The size will always be positive and will only use whole numbers.

function stringy(size) {
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
  // console.log(numList.join());
  return numList.join()
}

stringy(4);

// odd number is 2*i + 1


// Given a non-negative integer, return an array containing a list of independent digits in reverse order. Example: 348597 => [7,9,5,8,4,3]

function userInput(num) {
  // counter
  var i = 0;

  // array where the number wll be pushed
  var inputArray = [];

  // loop
  // the array will be the length of the number passed into function. To get the reverse of the number, subtract the number's length from counter. This will be the index value of the number that is pushed into array.
  for (i=0; i <= num.length; i++) {
    var size = num.length
    var reverse = num[num.length - i];

    inputArray.push(reverse);
  }
  
  inputArray.shift(0);
  return inputArray
  // console.log(inputArray);
}

userInput("8675309");


// Fibonacci number is the sum of the previous two sequence numbers. Below is an example of the sequence 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, … Notice the sequence pattern is the sum of the previous two numbers? 0 + 1 = 1 1 + 1 = 2 1 + 2 = 3 2 + 3 = 5 3 + 5 = 8 … Build a function to illustrate how to get this sequence to output. If you don’t know where to begin start with pseudo code to work through the steps

// function
function generateFib() {
  // counter
  var i = 0;
  // array where numbers will be pushed
  var fibArray = [];

  // pushing first two numbers in Fibonacci sequence into array
  fibArray.push(1);
  fibArray.push(1);
  // console.log(fibArray);

  // loop will output the next 30 Fibonacci numbers
  for (i=0; i <= 30; i++) {
    // next number in sequence will equal to the last two numbers added
    var nextNum = fibArray[i] + fibArray[i + 1]
    // next number in sequence is pushed into fibArray
    fibArray.push(nextNum);
  }
  return fibArray
}

generateFib();


// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons. Write a function called checkCoupon to verify that a coupon is valid and not expired. If the coupon is good, return true. Otherwise, return false. A coupon expires at the END of the couponDate date. All dates will be passed in as strings in this format: "June 15, 2014"

// date variables
var checkMonth;
var checkDay;
var checkYear;
var date = new Date();

// month array, will have to convert month to number from 0-11 since that's what getMonth returns
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// function
function checkCoupon(couponDate) {
  // retrieving current month, day and year
  checkMonth = date.getMonth();
  checkDay = date.getDate();
  checkYear = date.getFullYear();
  // console.log(checkMonth);
  // console.log(checkDay);
  // console.log(checkYear);

  // variable containing the input date string split, splitting by space
  var values = couponDate.split(" ");

  // the different parts of date string (3) can be accessed like array
  values[0] = month.indexOf(values[0]);
  // console.log(values)

  // removing the comma after the day
  values[1] = values[1].slice(0, -1);
  // console.log(values)

  // turning string values into numbers
  values[1] = parseInt(values[1]);
  values[2] = parseInt(values[2]);
  // console.log(values)

  // checking coupon date against current date
  // if the year on coupon is greater than current year, then the coupon is valid
  if (values[2] > checkYear) {
    return true
  }
  // if the year on coupon is same as current year, check if the coupon month is greater than current month, if yes then coupon is valid
  else if (values[2] == checkYear && values[0] > checkMonth) {
    return true
  }
  // if the coupon year and month are same as current date, then check to see if the day on coupon is greater than or equal to the current date, if yes coupon is valid
  else if (values[2] == checkYear && values[0] == checkMonth && values[1] >= checkDay) {
  return true
  }
  // if none of the conditions above were met, then coupon is invalid
  else {
    return false
  }
}

// checkCoupon("March 01, 2019");
// checkCoupon("April 08, 2016");
// checkCoupon("April 08, 2017");
