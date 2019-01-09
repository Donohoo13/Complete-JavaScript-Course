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
    if (job === 'designer')
}