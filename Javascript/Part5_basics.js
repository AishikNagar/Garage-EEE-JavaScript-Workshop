// We will now learn about Functions, arrays and objects
// These topics are a little more advanced and trickier than before!!
// Let's get started!

// FUNCTIONS

// Functions will be one of our main building blocks when we construct
// larger and larger amounts of code to solve problems.

// In JavaScript, functions follow this general form:
// (parameters are also commonly called arguments)

function name(parameter1, parameter2, parameter3) {
    //code to be executed
}

// Basic example

function hello(){
    console.log("hello world!");
}

hello()// Calling the function

// QUESTION - Create a function which takes in 2 numbers,adds them and logs the sum in the console

function addNum(num1,num2){
    console.log(num1+num2);
}
addNum(30,20)


// Scope of variables:

var v = "I'm global v"
var stuff = "I'm global stuff"

function fun(stuff){
    console.log(v);
    stuff = "Reassign stuff inside func";
    console.log(stuff);
}

fun()

// Lucky Sum exercise:

// Given 3 numerical values, a b c, return their sum. However, if one of the values is
// 13 then it does not count towards the sum and values to its right do not count.
// So for example, if b is 13, then both b and c do not count.

// Hint (Explore using multiple return statements inside a single function!)

// Example input and output

// luckySum(1, 2, 3) → 6
// luckySum(1, 2, 13) → 3
// luckySum(1, 13, 3) → 1

function luckySum(a, b, c){

  if(a == 13){
    return 0
  }
  if(b == 13){
    return a
  }
  if(c == 13){
    return a + b
  }
  return a + b + c
}

// ARRAYS:

var pokemon = ['Charmander','Squirtle','Bulbasaur'];
pokemon[0];

var myString = "ABCDEFG";
myString[0];

var mixed = [true,20,"string"];
mixed.length

// Arrays Methods:

var lastPokemon = poemon.pop()
pokemon.push('Pikachu')

var matrix = [[1,2,3],[4,5,6],[7,8,9]]
console.log(matrix);

// Iterating through an arrays

// A nice way of iterating through arrays in javascript is to use a for loop
// Now you may think that a for/in is a great choice, but an issue that arises
// the for/in statement will return the name of your user-defined properties
// in addition to the numeric indexes. So it will look like you are just
// returning the indexes of the array.

var arr = ['A','B','C']
// Don't do this!
for (let letter in arr) {
  alert(letter);
}

// Because of this you will want to use a for/of loop. For example:
for (let letter of arr) {
  alert(letter);
}

// But notice that it may be very common to issue a function for every element
// in an array, so common in fact, that an array has a special method for this.
// It's called the forEach method, check it out:

arr.forEach(alert);
