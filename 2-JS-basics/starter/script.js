console.log('Hello World!!!');

/*
Variables and Datatypes and becoming familiar with JavaScript.
*/

// This is a single line comment.

let firstName = 'Conner';
let lastName = 'Donohoo';
const fullName = firstName + ' ' + lastName;
console.log(fullName)

let age = 23;
console.log(`${fullName}, Age: ${age}`) /* template string */

//Prompts and alerts will break node script.js
// const girlfriend = prompt('What is your girlfriends name?');
// alert(girlfriend + ' is an amazing woman.  Good choice!');
// console.log(girlfriend);

// ****************************************************************************


let currentYear = 2018;
let year = 365;
let myAge = 23;
let myBirthdayYear = 1995;
let myBirthdayMonth = 'April';
let myBirthdayDay = '5';

console.log(`Hello, my name is ${fullName} and I am ${myAge} years old.  I was born in ${myBirthdayYear}
 on the ${myBirthdayDay}th of ${myBirthdayMonth}.`)
 console.log("-------------Operators--------------")


 // ****************************************************************************


 var x, y;
 x = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
 console.log(x);

 x *= 2; // x = x * 2
 console.log(x);
 x += 5; // x = x + 10
 console.log(x);
 x++ // x = x + 1; x += 1
 console.log(x);

 console.log("-------------Coding Challenge--------------")


 /*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index),
which is calculated using the formula: BMI = mass / height^2 = mass / (height * height).
(mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like
    "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/

const markHeight = 69;
const markWeight = 192;
const johnHeight = 73;
const johnWeight = 180;

let markBMI = markWeight / (markHeight * markHeight);
console.log("Mark BMI:", markBMI);
let johnBMI = johnWeight / (johnHeight * johnHeight);
console.log("John BMI:", johnBMI);

let markFatter = markBMI > johnBMI;
console.log(`Is Marks BMI higher than john's? ${markFatter}.`)

if (markFatter) {
    console.log('Mark is fatter than John.')
} else {
    console.log('John is fatter than Mark.')
}

console.log("-------------If Else--------------")

// **************************************************************************

// let firstName = 'Conner';
let civilStatus = 'in a relationship'

if (civilStatus === 'in a relationship'){
    console.log(firstName + ' is ' + civilStatus)
} else {
    console.log(firstName + 'doesn\'t have his shit together');
}

let isMarried = false;
if (isMarried){
    console.log(firstName + ' has got a hot wife')
} else {
    console.log(firstName + ' doesn\'t have his shit together');
}

console.log("-------------Boolean Logic--------------")

// **************************************************************************

// let firstName = 'Conner';
// let age = 23;

if (age <= 2) {
    console.log(firstName + ' is a toddler.')
} else if (age <= 5) {
    console.log(firstName + ' is a child.');
} else if (age >5 && age < 13) {
    console.log(firstName + ' is a boy.');
}else if (age >= 13 && age <= 19) {
    console.log(firstName + ' is a teenager.');
}else {
    console.log(firstName + ' is a man.');
}

console.log("-------------The Ternary Operator and Switch Statements--------------")

// **************************************************************************

// let firstName = 'Conner';
//let age = 23;

//Ternary
age >= 21 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.')

const drink = age >= 21 ? 'beer' : 'juice';
console.log(drink);

// same as ternary
// if (age >= 21) {
//     let drink = 'beer';
// } else {
//     let drink = 'juice';
// }

//Switch statement
let job = 'Coder';
switch (job) {
    case 'Coder':
    case 'Developer':
    console.log(firstName + ' writes beautiful code.');
    break;
    case 'Driver' :
    console.log(firstName + ' drives an Uber in Salt Lake.');
    break;
    case 'Athlete' :
    console.log(firstName + ' Plays basketball professionally.');
    break;
    default: console.log(firstName + ' does something else.');
}

// if (age <= 2) {
//     console.log(firstName + ' is a toddler.')
// } else if (age <= 5) {
//     console.log(firstName + ' is a child.');
// } else if (age >5 && age < 13) {
//     console.log(firstName + ' is a boy.');
// }else if (age >= 13 && age <= 19) {
//     console.log(firstName + ' is a teenager.');
// }else {
//     console.log(firstName + ' is a man.');
// }

switch(true) {
    case age <= 2:
        console.log(firstName + ' is a toddler.');
        break;
    case age <= 5:
        console.log(firstName + ' is a child.');
        break;
    case age > 5 && age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age <= 19:
        console.log(firstName + ' is a teenager.');
        break;
    default:
    console.log(firstName + ' is a man.')
}