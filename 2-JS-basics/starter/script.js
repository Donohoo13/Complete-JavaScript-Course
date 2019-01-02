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

console.log("-------------Coding Challenge 2--------------")

/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89,
120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console.
Also include the average score in the output.
3. Then change the scores to show different winners.
Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before,
log the average winner to the console. HINT: you will need the && operator to take the decision.
If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

let mikesTotals = [116, 94, 123];
let johnsTotals = [89, 120, 103];
let marysTotals = [97, 134, 105];

let getAverage = (arr) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++){
        total += arr[i];
    }
    return total / arr.length;
}

const mikesAverage = getAverage(mikesTotals);
const johnsAverage = getAverage(johnsTotals);
const marysAverage = getAverage(marysTotals);
console.log('Mike\'s Average:', mikesAverage, 'John\'s Average:', johnsAverage,
'Mary\'s Average:', marysAverage);

if (mikesAverage > johnsAverage && mikesAverage > marysAverage){
    console.log(`Mike's team with an average of ${mikesAverage} points per game is better than
    John's, and Mary's team at ${johnsAverage}, and ${marysAverage} points per game.`)
} else if (johnsAverage > mikesAverage && johnsAverage > marysAverage){
    console.log(`John's team with an average of ${johnsAverage} points per game is better than
    Mike's, and Mary's team at ${mikesAverage}, and ${marysAverage} points per game.`)
}else if (marysAverage > johnsAverage && marysAverage > mikesAverage){
    console.log(`Mary's team with an average of ${marysAverage} points per game is better than
    Mike's, and John's team at ${mikesAverage}, and ${johnsAverage} points per game.`)
}else {
    console.log('There is a draw in averages.', 'Mike\'s Average:', mikesAverage,
    'John\'s Average:', johnsAverage, 'Mary\'s Average:', marysAverage)
}


console.log("-------------Functions--------------")

// **************************************************************************

const calculateAge = (birthYear) => {
    return 2018 - birthYear;
}

connerAge = calculateAge(1995);
console.log(connerAge);

//function expression
const whatDoYouDo = function(job, firstName) {}

//function declaration
function whatDoYouDo2(job, firstName) {}

// ES6
const whatDoYouDo3 = (job, firstName) => {}

// Pass in variables
whatDoYouDo('coder', 'Conner')

//function statements don't provide an output, expressions do.

console.log("-------------Arrays--------------")

// **************************************************************************

// Make new array
const names = ['Conner', 'Gregg', 'Preston', 'Erik', 'Mayson'];
const years = new Array(1995, 1988, 1992, 1987, 2000);

console.log(years)
console.log(names[1])
// Mutate array data
names[7] = 'Mica'
names[names.length] = 'John'
console.log(names)

// Different data types
const gregg = ['Gregg', 'Donohoo', 1988, 'Sales', true];
gregg.push('Gray');
gregg.unshift('Mr.');
console.log(gregg);
gregg.pop();
gregg.pop()
gregg.shift();
console.log(gregg)

// Items not in array will come back as -1
console.log(gregg.indexOf(1988));

console.log("-------------Coding Challenge 3--------------")

// **************************************************************************

/*
John and his family went on a holiday and went to 3 different restaurants.
The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function).
He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200,
and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/

const bills = new Array(124, 48, 268);

const tipCalculator = (bill) => {
    let tips = []
    for(let i = 0; i < bill.length; i++) {
        if (bill[i] < 50) {tips.push(bill[i] * .2)
        } else if (bill[i] >= 50 && bill[i] < 200) {tips.push(bill[i] * .15)
    } else {tips.push(bill[i] *.1)
    }}
    return tips
}
const tipTotals = tipCalculator(bills);
console.log("Tip amounts", tipCalculator(bills))

const combineTotals = [bills, tipTotals],
grandTotals = combineTotals.reduce((prev, next) => next.map((b, i) => (prev[i] || 0) + b), [])
console.log("Grand Totals:", grandTotals)

console.log("-------------Objects and properties--------------")

// **************************************************************************

//Object literal, Key Value pairs
const susan = {
    firstName: 'Susan',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'model',
    isMarried: false
};
console.log(susan)
console.log(susan.firstName)
console.log(susan['lastName'])
const z = 'birthYear'
console.log(susan[z])

susan.job = 'designer'
susan['isMarried'] = true
console.log(susan)

const jane = new Object()
jane.name = 'Jane'
jane.birthYear = 1969
jane['isCool'] = false

console.log("Jane:", jane)

console.log("-------------Objects & Methods--------------")

// **************************************************************************

//Object can hold any type of data, including functions ie Methods.

// jane.calcAge = (birthYear) => 2018 - birthYear;
// jane.calcAge = () => 2018 - this.birthYear;
// console.log(jane.calcAge(1990))
// console.log(jane.calcAge())
// console.log(jane)

jane.calcAge = () => {this.age = 2018 - this.birthYear};
console.log(jane.calcAge(), jane)

console.log("-------------Coding Challenge 4--------------")

// **************************************************************************

/*
Let's remember the first coding challenge where Mark and John compared their BMIs.
Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI.
Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI,
together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/



let phil = {
    fullName: "Phil Cooter",
    weight: 180,
    height: 72,
    calcBMI: function() {
        this.bmi = (this.weight / (this.height * this.height)) * 705;
        return this.bmi;
    }
};

let george = {
    fullName: "George Rickter",
    weight: 210,
    height: 74,
    calcBMI: function() {
        this.bmi = (this.weight / (this.height * this.height)) * 705;
        return this.bmi;
    }
    // calcBMI: () => {
    //     this.bmi = (this.weight / (this.height * this.height)) * 705;
    // }
};
console.log(phil.calcBMI(), phil)
console.log(george.calcBMI(), george)

console.log("-------------Objects & Methods--------------")

// **************************************************************************

// Loops and iteration
// Continue; continues through loop.  Break; ends at current iteration and exits loop.

for (let i = 1; i < 10; i++) {
    console.log(i)
}

for (let i = 0; i < gregg.length; i++) {
    console.log("1", gregg[i])
}

let i = 0;
while(i < gregg.length) {
    console.log("2", gregg[i]);
    i++;
}

// Loop backwards
for (let i = gregg.length - 1; i >= 0; i--){
    console.log("3", gregg[i])
}

console.log("-------------Coding Challenge 5--------------")

// **************************************************************************

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268,
$180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between
$50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts
(bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants.
The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between
$100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips.
HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0).
After you have the sum of the array, divide it by the number of elements in it
(that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/

const markBills = [77, 375, 110, 45]

const mTipCalculator = (bill) => {
    let mTips = []
    for (let i = 0; i < bill.length; i++) {
        if (bill[i] < 100) {
            mTips.push(bill[i] * .20)
        } else if (bill[i] <= 300) {
            mTips.push(bill[i] * .10) 
        } else {
            mTips.push(bill[i] * .25)
        }
    }
    return mTips
}

// const averager = (tips) => {
//     let average = 0;
//     for (let i = 0; i < tips.length; i ++) {
//         average += tips[i]
//     }
//     return average / tips.length
// }

const averager = (tips) => {
    return tips.reduce((prev, next) => prev + next) / tips.length;
}

const markTips = mTipCalculator(markBills);
const markTipAverage = averager(markTips);
console.log("Marks Average Tips", markTipAverage)

const heldo = {
    fullName: 'Heldo Scum',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];

        for (let i = 0; i < this.bills.length; i++) {
            let percentage;
            let bill = this.bills[i]
            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + (bill * percentage);
        }
    }
}
heldo.calcTips();
console.log(heldo)
