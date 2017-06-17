'use strict';


// MAX/MIN

let array = [1,2,3,4,5,6,7]

function max(numbers) {
  let largest = 0;
  let i = 0
  while (i < numbers.length) {
      if (numbers[i] > largest){
        largest = numbers[i];
      }
            i++;

    }

  return largest
}

let array2 = [-1,1,2,3,4,5,6,7]

function min(numbers) {
  let smallest = 0;
  let i = 0;
  while (i < numbers.length) {
      if (numbers[i] < smallest){
        smallest = numbers[i];
      }
            i++;

    }

  return smallest
}

min(array2);

//VM85:1 Uncaught SyntaxError: Identifier 'array' has already been declared
    //at <anonymous>:1:1
    //message was coming up even though it was in a "let" variable, value did not switch, why?



// AVERAGE ///////////////////////////////////

    function average(numbers) {
      let i = 0;
      let sum = numbers[0];

      while (i < numbers.length) {
        sum += numbers[i];
        i++;
      }
        const average = sum / numbers.length;

      return average

    }
    console.log(average([1,3,5]));



// HAZARD ALERT ///////////////////////////////////

function hazardWarningCreator(typeOfWarning){
  let warningCounter = 0;
  return function(location){
    warningCounter ++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
  }
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const floodWarning = hazardWarningCreator('Water on Road');
const treeWarning = hazardWarningCreator('Fallen tree on Road');

rocksWarning('Broadway St');
rocksWarning('Easy St');
rocksWarning('Wall St');

floodWarning('Broadway St');
floodWarning('Easy St');
floodWarning('Wall St');

treeWarning('Broadway St');
treeWarning('Easy St');
treeWarning('Wall St');


// HIGH FUNCTION  /////////////////

function repeat (fn,n) {
	for (i = 0; i < n; i++){
		fn();
	}
}

function hello() {
	console.log('Hello world');
}
function goodbye() {
	console.log('Goodbye world');
}


repeat(hello, 5);
repeat(goodbye, 5);


// HIGH FUNCTION 2 /////////////////////////

// Return only names that begin with 'R'
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

const filteredNames = filter(myNames, function(name) {
    // This is a "predicate function" - it's a function that only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']

const newArray = [];
// TASK -- DEFINE YOUR FILTER FUNCTION BELOW:
function filter(arr, fn) {
	const i = 0
	while (i < arr.length){
		if (arr[i] === true) {
			NewArray.push(arr[i]);
		}
	}
return newArray();
}

filter(myNames, function(name){return name[0] === 'R'});

// SWITCH fizz buzz ///////////////////

function doFizzBuzz(num) {
  switch (num % 15){
    case 3:
    case 6:
    case 9:
    case 12:
      return 'fizz';

    case 5:
    case 10:
      return 'buzz';

    case 0:
      return 'fizzBuzz';

    default:
      return num;
  }

}
function makeFizzBuzzArray (countTo){
  const result = []
  for (let i = 1; i <= countTo; i++) {
    result.push(doFizzBuzz(i));
  }

return result
}

console.log(makeFizzBuzzArray(15));

// TURTLE  //////////////////////

// function steps (step) {
// 	return step > 0;

// }
// const turtleSteps = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]].filter(steps);

const turtleSteps3 = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]]
const totalSteps3 = turtleSteps2.map(function(a,b){
	return a + b;
});

// turtleSteps.forEach();

// ======================================

// function isBigEnough(value) {
//   return value >= 10;
// }

// var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// // filtered is [12, 130, 44]


// ======================================

var numbers = [1, 4, 9];
var doubles = numbers.map(function(num) {
  return num * 2;
});

//Need to check
