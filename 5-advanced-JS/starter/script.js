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

