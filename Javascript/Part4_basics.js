// Link this script to an htm file and look at the output in the console

// CONTROL FLOW

// if (condition){
//     // Execute some code
// }
// else{
//    // Execute some other code
// }

var tea = 10
var coffee = 10

// Ask students to solve!

// Report to HQ
var report = 'blank'

if(tea >= 10 && coffee >= 10){
    report = "Strong sales of both items"

}else if(tea === 0 && coffee === 0){
    report = "Nothing sold!"
}else{
    report = 'We had some sales'
}
console.log(report)


// LOOPS

// while (condition){
//     # Code executed here
//     # while condition is true
// }

var x = 0

while(x < 5){

    console.log("x is currently: "+ x);

    if(x === 3){
      console.log("x is equal to 3, BREAK")
      break;
    }

    console.log("x is still less than 5, adding 1 to x");

    // add one to x
    x = x+1;

}

// FOR LOOPS

// Javascript has two types of For Loops:
// * for - loops through a block of code a number of times
// * for/in - loops through elements of an object sequence
//
// There is also the for/of loop, which we will discuss when we reach arrays.
//
// Let's take  a look at some examples to clarify the differences between these two


// The for loop has the following syntax:
//
// for (statement 1; statement 2; statement 3) {
//     code block to be executed
// }

for (i = 0; i < 5; i++) {
    console.log("Number is " + i );
}

var word = "ABCDEFGHIJK"
// Ask Students to log each letter of the string!!

for (i = 0; i < word.length; i++) {
    console.log(word[i]);
}
