// Welcome to Part 4 of Javascript Level One!
// It's time to learn how to add some logical capabilities to our JS code.
// You can type these commands into the browser console

// Booleans and logical operators

3>2
1<2
2>=2
"hello" = "hello"

"8"==8

// It returned True! Although this may cause errors for some programs!

// JS uses type coercion! This means it will try it's best to convert objects
// to similar data types to perform the comparison! A lot of times you don't
// actually want that!

// We want a way to check equality of both value AND type!
// Add another set of equals signs to do this!

"8"===8

// It is common to substitute 0 and 1 for true and false

true == 1;
true === 1;

false == 0;
false === 0;

// Weird behaviour for null, undefined, and NaN values!

null == undefined; // true

NaN == NaN; // false


// PRACTICE EXERCISES 

var x = 1
var y = 2

// Exercise 1
"2" == y && x === 1;

// Exercise 2
x >= 0 || y === "2";

// Exercise 3
!(x !== 1) && y === (1+1);

// Exercise 4
y !== "2" && x < 10 ;

// Exercise 5
y !== x || y == "2" || x === 3;
