//? map()

////The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
const array1 = [1, 4, 9, 16];
const map1 = array1.map((x) => x * 2); // pass a function to map
console.log(map1); // expected output: Array [2, 8, 18, 32]
////The map() method is an iterative method. It calls a provided callbackFn function once for each element in an array and constructs a new array from the results.
////map() creates a new array from calling a function for every array element.
////map() calls a function once for each element in an array.
////map() does not execute the function for empty elements.
////map() does not change the original array.
//! Return Value --> ARRAY
//? MAP() works like a loop
let arr = [3, 4, 5, 6];
for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i] * 3;
}
console.log(arr); // [9, 12, 15, 18]
//?same result using map
let arr1 = [3, 4, 5, 6];
let modifiedArr = arr1.map((x) => x * 3);
console.log(modifiedArr); // [9, 12, 15, 18]

////Using map to join the names to surnames in an array of objects
let users = [
  { firstName: "Susan", lastName: "Steward" },
  { firstName: "Daniel", lastName: "Longbottom" },
  { firstName: "Jacob", lastName: "Black" },
];

let userFullnames = users.map((x) => `${x.firstName} ${x.lastName}`);
console.log(userFullnames); // ["Susan Steward", "Daniel Longbottom", "Jacob Black"]

//? forEach()

////The forEach() method calls a function for each element in an array.
////The forEach() method is not executed for empty elements.
//! Return Value --> UNDEFINE
let sum = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach(sumItens);
function sumItens(item) {
  sum += item;
}
console.log(sum);
////The forEach() method is an iterative method. It calls a provided callbackFn function once for each element in an array in ascending-index order.
//// Unlike map(), forEach() always returns undefined and is not chainable. The typical use case is to execute side effects at the end of a chain.
////There is no way to stop or break a forEach() loop other than by throwing an exception. If you need such behavior, the forEach() method is the wrong tool.

//? every()
////The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

const array2 = [1, 30, 39, 29, 10, 13];
console.log(array2.every((x) => x < 40));
////The every() method is an iterative method. It calls a provided callbackFn function once for each element in an array, until the callbackFn returns a falsy value.
////an element is found, every() immediately returns false and stops iterating through the array. Otherwise, if callbackFn returns a truthy value for all elements,
////every() returns true.
////The every() method does not execute the function for empty elements.
////The every() method does not change the original array
//! Return Value --> TRUE OR FALSE

//? fill()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.fill("Kiwi");
console.log(fruits);
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.fill("Kiwi", 2, 4);
console.log(fruits2);

////The fill() method fills specified elements in an array with a value.
////The fill() method overwrites the original array.
////Start and end position can be specified. If not, all elements will be filled.
//! Return Value --> ARRAY
//// SYNTAX array.fill(value, start, end)

//? filter()
const ages = [32, 33, 16, 40];
const result = ages.filter((x) => x >= 18);
console.log(result);
////The filter() method creates a new array filled with elements that pass a test provided by a function.
////The filter() method does not execute the function for empty elements.
////The filter() method does not change the original array.
//! Return Value --> ARRAY
////The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array
////that pass the test implemented by the provided function.

//? find()

////The find() method returns the value of the first element that passes a test.
////The find() method executes a function for each array element.
////The find() method returns undefined if no elements are found.
////The find() method does not execute the function for empty elements.
////The find() method does not change the original array.
const ages2 = [3, 15, 19, 20];
const result2 = ages2.find((x) => x > 18);
console.log(result2); // return 19, the first time th age is higher than 18, the method stops
//! Return Value --> A value -->The value of the first element that pass the test.
//!Otherwise it returns undefined.
