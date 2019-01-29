// Function constructor.

const john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

// Always have function constructors start with capital letter.
//Can't be written in ES6.
const Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
    console.log(2019 - this.yearOfBirth)
}

Person.prototype.lastName = 'Cools'

const lucy = new Person('Lucy', 1988, 'Dancer');
console.log(john, lucy.lastName);

lucy.calculateAge();


// Object.create
/* ************************************************************************* */

const personProto = {
    calculatePoop: function() {
        console.log(8 + this.lastPoop);
    }
};

const tillie = Object.create(personProto);
tillie.name = "Tillie";
tillie.lastPoop = 56;
tillie.job = "Sweeper";

const meg = Object.create(personProto, {
    name: { value: 'Jane' },
    lastPoop: { value: 1995 },
    job: { value: 'Organ Player' },
})

// Primitives vs Objects
/* ************************************************************************* */

// Primitives = strings, booleans, null
let a = 23;
let b = a;
a = 46
console.log(a, b)

// Objects
const obj1 = {
    name: 'Conner',
    age: 23
};

const obj2 = obj1;
obj1.age = 30;
console.log(obj1.age, obj2.age)

// Functions
let age = 27;
const obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

const change = (a, b) => {
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);
console.log(age, obj.city)

// Passing functions as arguments
/* ************************************************************************* */

const years = [1990, 1965, 1937, 2005, 1998];

const arrayCalc = (arr, fn) => {
    const arrRes = [];
    for(let i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

const calcAge = (el) => {
    return 2018 - el;
}

console.log(arrayCalc(years, calcAge))

// Functions returning functions
/* ************************************************************************* */

const interviewQuestion = (job) => {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?')
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

const teacherQuestion = interviewQuestion('teacher');
const designerQuestion = interviewQuestion('designer');
teacherQuestion('John')
designerQuestion('John')
interviewQuestion('janitor')('Phillip')

// IIFE
/* ************************************************************************* */

// For data privacy

// Closures
/* ************************************************************************* */

// Due to the scope chain and execution stack, applying variables one after another will work.
const retirement = (retirementAge) => {
    const a = ' years left until retirement.';
    return function(yearOfBirth) {
        const age = 2018 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}
const retirementUS = retirement(69);
retirementUS(1995);
const retirementGermany = retirement(65);
retirementGermany(1995);
const retirementIceland = retirement(67);
retirementIceland(1995);

retirement(66)(1995);

// Bind, Call & Apply
/* ************************************************************************* */

const conrad = {
    name: 'Conrad',
    age: 26,
    job: 'Coder',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log(`Good ${timeOfDay}, ladies and gentlemen! I'm ${this.name}.  
            I'm a ${this.job} and I'm ${this.age} years old.`);
    } else if (style === 'friendly') {
        console.log(`Hey, what's up?  I'm ${this.name}.  
        I'm a ${this.job} and I'm ${this.age} years old.  
        Have a nice ${timeOfDay}.`);
}
    }
}

conrad.presentation('friendly', 'evening')

const christine = {
    name: 'Christine',
    age: 21,
    job: 'Dancer'
};
conrad.presentation.call(christine, 'friendly', 'afternoon');
conrad.presentation.apply(christine, ['friendly', 'afternoon']);

// Coding Challenge
/* ************************************************************************* */

/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one 
(choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers 
(each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. 
The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor 
(Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. 
So make sure that all your code is private and doesn't interfere with the other programmers code 
(Hint: we learned a special technique to do exactly that).
*/




/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends 
(Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. 
So include the option to quit the game if the user writes 'exit' instead of the answer. 
In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, 
add 1 point to the score (Hint: I'm going to use the power of closures for this, 
but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/