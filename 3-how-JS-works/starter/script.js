///////////////////////////////////////
// Lecture: Hoisting

// calculateAge(1995);
// calculateAge = (year) => {
//     console.log(2019 - year);
// }
// calculateAge() works before or after the function declaration is declared thanks to hoisting.
//But this only works with declared function() and var, not const or let.

retirement = (year) => {
    console.log(65 - (2019 - year))
}
retirement(1995)

///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword









