// === DO NOT EDIT THIS REGION ===
// Read the comments to understand how the program is structured.

// Prompt the user for a list of integers separated by commas.
const userInputString = prompt(
  "Please enter some integers separated by commas.",
  "1,2,3,4,5"
);
console.log(userInputString);

// Split the string of numbers into an array of strings.
const stringArray = userInputString.split(",");

// Convert the array of strings into an array of numbers.
const numbers = [];
for (let i = 0; i < stringArray.length; i++) {
  const str = stringArray[i];
  const number = parseInt(str);
  numbers.push(number);
}

// Perform some calculations on the numbers.
console.log(numbers);
console.log(`You have given ${getLength(numbers)} numbers.`);
console.log(`The sum of your numbers is ${getSum(numbers)}.`);
console.log(`The mean of your numbers is ${getMean(numbers)}.`);
console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
console.log(`The largest of your numbers is ${getMax(numbers)}.`);
console.log(`The range of your numbers is ${getRange(numbers)}.`);
console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);

// === EDIT THE CODE BELOW ===
// Complete the functions below to make the program work!

//---the length of the array---//
function getLength(numbers) {
  return numbers.length;
}

//---the sum of the numbers---//
function getSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
}

//---the mean of the numbers---//
function getMean(numbers) {
  const total = getSum(numbers);
  const mean = total / numbers.length;
  return mean;
}

//---the smallest of the numbers---//
function getMin(numbers) {
  //start with the first number "being" the smallest
  let smallest = numbers[0];
  //loop to check every number
  for (let i = 1; i < numbers.length; i++) {
    //seeing if the next number is smaller than the current smallest//
    if (smallest > numbers[i]) {
      //if it is smaller, update it
      smallest = numbers[i];
    }
  }
  return smallest;
}

//---the largest of the numbers---//
//same process as getMin//
function getMax(numbers) {
  let largest = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (largest < numbers[i]) {
      largest = numbers[i];
    }
  }
  return largest;
}

//---the range of the numbers (max - min)---//
function getRange(numbers) {
  const min = getMin(numbers);
  const max = getMax(numbers);
  const range = max - min;
  return range;
}

//---the even numbers in the array---//
function getEvens(numbers) {
  const evenNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    }
  }
  return evenNumbers;
}

//---the odd numbers in the array---//
function getOdds(numbers) {
  const oddNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      oddNumbers.push(numbers[i]);
    }
  }
  return oddNumbers;
}
