//*Definition: Numbers divided by only one and itself are called prime numbers.
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

//*What is going to be printed in console?
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

//*Wich array method you should use to get Julius Cesar's famous phrase "veni vidi vici"?
let words = ["id", "en", "ic"];
words = words.sort();
console.log(words);
const [a, b, c] = words;
const quote = `v${a}i v${c}i v${b}i`;

console.log(quote);
////the answer is sort()
//? Why??
//// the SORT OPERATOR sorts the elements of an arrayn in place and returns the sorted array
////when is called with no arguments, it sorts in alphabetical order(temporarily converting them
//// to strings to perform the comparison, if necessary)
////to sort an array into some order other than alphabetical order, you must pass a comparison
////functions as an argument

//*What is the result this method returns?
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = numbers.filter((number) => number % 2 === 0 || number % 3 === 0); //?return number%2===0 OU number%3 ===0
console.log(result);
////the answer is [0,2,3,4,5,8,9]
//? Why??
////Using the FILTER OPERATOR, that returns an array containing a subset of the elementsof the array on which it is invoked.
////the function you pass to it should be predicate: a function that returns TRUE or FALSE
////if the return value is true, or a value that converts to true, then the element will be added to the array

//*What is going to be printed in console?
const numbers2 = [24, 41, 23, 16, 59];
numbers2.fill(1, 2, 3);
console.log(numbers2);
////the answer is [24, 41, 1, 16, 59]
//? Why??
//// using THE FILL OPERATOR that has the following syntax ==> fill(value, start, end)
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

//*Which array method should you use to check that all vehicles are taxis?
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
console.log(areAllTaxi2);
