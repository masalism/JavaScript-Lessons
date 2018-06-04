///////////////////////
// LECTURE: HOISTING //
///////////////////////


//functions
calculateAge(1965);

function calculateAge(year) { //function decralations
    console.log(2018 - year);
}

//calculateAge(1990);


//retirement(1990); //siuo atveju pries funkcija neveiks

var retirement = function(year) {
    console.log(65 - (2018 - year));
}

//variables

console.log(age); //undefined variable
var age = 23;
//console.log(age);

function foo() {
    console.log(age); //undefined
    var age = 65;
    console.log(age);
}

foo();
console.log(age);


//////////////////////
// LECTURE: SCOPING //
//////////////////////

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



//////////////////////////
// LECTURE: THIS KEYWORD//
//////////////////////////








