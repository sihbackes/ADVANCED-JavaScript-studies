//* 1 - Definition: Numbers divided by only one and itself are called prime numbers.
//*For this algorithm to find out whether a number is prime or not, what must the
//*if condition be inside the loop?
function isPrimeNumber(n) {
  const divisor = 2;
  while (n > divisor) {
    if (n % divisor === 0) {
      return false;
    } else divisor++;
    return true;
  }
}
console.log(isPrimeNumber()); //?this function doesn't work unless you replace const for let
////the answer is n % divisor

//* 2 - What is going to be printed in console?
const student = {
  name: "Diego",
  surname: "Banovaz",
  age: 18,
};
const student2 = {
  name: "Tobia",
};

console.log({ ...student, ...student2 });
//// the answer is {name: 'Tobia', surname:'Banovaz', age:18}
//? BUT WHY?
////this code is using:
//? //SPREAD OPERATOR///
////What the code above does, is to spread over the adrian object and get
////all its properties, then overwrite the existing properties with the ones we're passing.
////Think of this spread thing as extracting all the individual properties one by one and
////transferring them to the new object. The JavaScript engine is smart enough to know that we
////want to overwrite the original values of those properties that are coming from the original object.
//? NOTE that this is not the same as REST OPERATOR that also uses (...)

//* 3 - Wich array method you should use to get Julius Cesar's famous phrase "veni vidi vici"?
let words = ["id", "en", "ic"];
words = words.sort();
console.log(words);
const [a, b, c] = words; //!using destructuring here
const quote = `v${a}i v${c}i v${b}i`;

console.log(quote);
////the answer is sort()
//? Why??
//// the SORT METHOD sorts the elements of an arrayn in place and returns the sorted array
////when is called with no arguments, it sorts in alphabetical order(temporarily converting them
//// to strings to perform the comparison, if necessary)
////to sort an array into some order other than alphabetical order, you must pass a comparison
////functions as an argument

//* 4 - What is the result this method returns?
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = numbers.filter((number) => number % 2 === 0 || number % 3 === 0); //?return number%2===0 OU number%3 ===0
console.log(result);
////the answer is [0,2,3,4,5,8,9]
//? Why??
////Using the FILTER METHOD, that returns an array containing a subset of the elementsof the array on which it is invoked.
////the function you pass to it should be predicate: a function that returns TRUE or FALSE
////if the return value is true, or a value that converts to true, then the element will be added to the array

//* 5 - What is going to be printed in console?
const numbers2 = [24, 41, 23, 16, 59];
numbers2.fill(1, 2, 3);
console.log(numbers2);
////the answer is [24, 41, 1, 16, 59]
//? Why??
//// using THE FILL METHOD that has the following syntax ==> fill(value, start, end)
////this methods sets the elements of an array, or a slice of an array, to a specified value.
////it mutates the array it is calledon, also return the modified array
//?syntax
////fill(value)
////fill(value, start)
////fill(value, start, end)
//*EXAMPLE
const numbers3 = [24, 41, 23, 16, 59];
numbers3.fill(1);
console.log(numbers3); //?RETURNS [1,1,1,1,1]
//************************/
const numbers4 = [24, 41, 23, 16, 59];
numbers4.fill(1, 2);
console.log(numbers4); //?RETURNS [24,41,1,1,1]
//************************/
const numbers5 = [24, 41, 23, 16, 59, 68, 90, 45, 32];
numbers5.fill(1, 2, 5);
console.log(numbers5); //?RETURNS [24,41,1,1,1, 68,90,45,32]

//* 6 - Which array method should you use to check that all vehicles are taxis?
const cars = ["bike", "taxi", "truck"];
const areAllTaxi = cars.every((car) => car === "taxi");
console.log(areAllTaxi);
////the answer is every() and returns FALSE
////this method returns TRUE if and only if your predicate function returns
////TRUE for ALL elements in the array
////also returns TRUE when invoked on an empty array
//*EXAMPLE
const emptyArray = [];
const areAllTaxi2 = emptyArray.every((car) => car === "taxi");
console.log(areAllTaxi2); //?returns FALSE

//* 7 - What is going to be printed in console?
const moreNumbers = [1, 2, 3, 4, 5];
const otherResult = moreNumbers.slice(3);
console.log(otherResult);
////the answer is [4,5]
//? Why??
//// the SLICE METHOD returns a slice, or subarray of the speciefied array
//// its TWO arguments specify the start and the end of the slice to be returned
//// the returned array contains the element specified by the second argument and all
////subsequent elements up to, nut not including, the element specified by the second argument.
////if only ONE argument is specified, the return array contains all elements from the star position
////to the END of the array.

//* 8 - anObject is declared as const in the first line of this snippet. What can you expect from the next lines of code?

const anObject = {};
anObject.name = "Jhon";
// anObject = 2; //!uncomment to see the error
console.log(anObject); //?return an error
////the answer is --> First one is a valid assignment, second one is not.
//? Why??
///// An object needs a key and and a value, they working in pairs
////that's why the first assignment is valid, name is the key and Jhon is the value

//* 9 - A Promise can be in status
////the answer is --> FULFILLED, REJECTED and PENDING
//? Why??
////pending: initial state, neither fulfilled nor rejected.
////fulfilled: meaning that the operation was completed successfully.
////rejected: meaning that the operation failed.

//* 10 - What is going to be printed in console?

const student3 = {
  name: "Diego",
  surname: "Banovaz",
  age: 18,
};
const { name, age = 20 } = student3;
console.log(age);
//// the answer is 18
//// this is the equivalent to:
console.log(student3.age); //? return 18, same as above
//? Why?
//// this method is called destructuring
////If the destructured object doesn't have the property specified in the destructuring assignment, then the variable is assigned with undefined.
////But you can set a default value if the property doesn't exist in the destructured object.
////So the statament age = 20 is a default in case the age key doesn't exist, but if it exist, then will just get the value inside of the object

//* 11 - Fill in the blanks to complete the callback approach for async operations.
//// the answer is err,data
//? Why?
//// A Callback Function is a function that is passed as the last parameter in an asynchronous function and a callback is called when the asynchronous
//// function has been executed. The first parameter in any callback function is the error object so they are often referred to as error-first callbacks.
//// If there is no error, the error object is null otherwise it will contain information regarding the error.
////In Node.js, it is considered standard practice to handle errors in asynchronous functions by returning them as the first argument to the current
////function's callback. If there is an error, the first parameter is passed an Error object with all the details. Otherwise, the first parameter is null.

//* 12 - Which callback should be used if we want to sort Teaching Assistants by age in increasing order?

const ta = [
  {
    name: "Tetiana",
    age: 14,
  },
  {
    name: "Ubeyt",
    age: 15,
  },
  {
    name: "Luis",
    age: 12.5,
  },
];

const sortedByAgeInc = ta.sort((a, b) => a.age - b.age); //? reverse numerical order
console.log(sortedByAgeInc);
////the answer is ((a, b) => a.age - b.age)
////the SORT METHOD aks for a function as parameter to sort the elements in some order other than alphabetical order
////to bring back the the lower value we use a - b

//* 13 - What is the output of the following code?
////the answer "start" "end" "Here is your data"
////The callback function will run only after the program has finished executing the code from top to bottom (even if the delay is 0ms)
////The main difference between synchronous and asynchronous callbacks is that synchronous callbacks are executed immediately, whereas
////the execution of asynchronous callbacks is deferred to a later point in time.

//* 14 - What is the output of the following code?
const nums = [1, 2, 3, 4, 5];
const resulties = nums.reduce((accum, current) => {
  accum.push(current * 2);
  return accum;
}, []);

console.log(resulties);
//// the answer is [2, 4, 6, 8, 10]
//? Why?
////we are using the REDUCE METHOD
//// this method combine the elements of an array, using the function you specify, to produce a single value and takes two arguments
////but are also using PUSH, wich adds one or more elements to the end of an array and returns the new length of the array.

//* 15 - What will be the output when the following code is executed?
const d = [1, 2, 3];
const doubled = d.forEach((num) => num * 2);
console.log(doubled);
//// the answer is undefine
//? Why?
//// we are using forEach()
//// forEach() is not meant to return anything. It is used to basically read the content of the array
////thats is one of the main differences between map() and forEach()

//* 16 - What is going to be printed in console?

let x = 2;
console.log(x);
if (true) {
  let x = 4;
  console.log(x);
}
console.log(x);
//// the answer is 2, 4, 2
//? Why?
//// because let declaration declares a block-scoped local variable, the let x from outside the function is not the same as inside of the function

//* 17 - A callback is...
//// the answer is: a function that will be called at some point in the future
////example
const button = document.getElementById("button");
function callback() {
  console.log("Hello world");
}

button.addEventListener("click", callback);

//* 18 - Can we use callbacks to write asynchronous code?
//// the answer is: TRUE
////Whether a callback is executed synchronously or asynchronously depends on the function which calls it.
////If the function is asynchronous, then the callback is asynchronous too.

//* 19 - The "graduated" value of this "const" object variable can be changed.
const student4 = {
  school: "Strive School",
  program: "Full Stack",
  graduated: false,
};
student4.graduated = true;
console.log(student4);
//// the answer is: Yes, we can change it.
//// you got the same result using the SPREAD OPERATOR
////Example
const student5 = {
  school: "Strive School",
  program: "Full Stack",
  graduated: false,
};
const student6 = {
  graduated: true,
};

console.log({ ...student5, ...student6 });
//* 20 - A callback is a ____ passed into a function as an argument
//// the answer is: function

//* 21 - What is going to be printed in console?
const student7 = {
  name1: "Diego",
  surname: "Banovaz",
};
const { name1 } = student;
console.log(name);
////the answer is Diego
//? Why?
////we are using destructuring here
////Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, as sometimes that’s more convenient.

//* 22 - When you see three dots syntax (...), what kind of features are getting used?
////the answer is: Either rest parameters or the spread operator

//* 23 - The array.map() method returns
//// the answer is:a new array with different length than the original one
