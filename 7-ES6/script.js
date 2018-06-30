////////////////////////////
// LECTURE: LET AND CONST //
////////////////////////////

/*
// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';

console.log(name5);

// ES6
const name6 = 'Jane Smith'; //const - unchangeable variable
let age6 = 23;  //let - changeable variable
name6 = 'Jane Miller';
console.log(name6);

// ES5
function driverLicense5(passedTest) {
    if (passedTest) {
        console.log(firstName);
        var firstName = 'John';
        var yearOfBirth = 1990;
    }

    console.log(firstName + ' born in ' + yearOfBirth + ' is now officialy allowed to drive a car');
}

driverLicense5(true);

// ES6
function driverLicense6(passedTest) {
    let firstName;
    const yearOfBirth = 1990;

    if (passedTest) {
        firstName = 'John';        
    }

    console.log(firstName + ' born in ' + yearOfBirth + ' is now officialy allowed to drive a car');
}

driverLicense6(true);

let i = 23;

for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);
*/

///////////////////////////////
// LECTURE: BLOCKS AND IIFES //
///////////////////////////////
/*
// ES5
(function () {
    var c = 3;
})();

//console.log(c);

// ES6
// Block scoped, not accesible
{
    const a = 1;
    let b = 2;
    var c = 3;
}

//console.log(a + b);
console.log(c);
*/

//////////////////////
// LECTURE: STRINGS //
//////////////////////

/*
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;
function calcAge(year) {
    return 2018 - year;
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today he is ' + calcAge(yearOfBirth) + ' years old.');

// ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));  //startsWith
console.log(n.endsWith('th'));   //endsWith
console.log(n.includes(' '));    //includes
console.log(`${firstName} `.repeat(5));   //repeating
*/

//////////////////////////////
// LECTURE: ARROW FUNCTIONS //
//////////////////////////////

const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function(el) {
    return 2018 - el;
});

console.log(ages5);

// ES6
//arrow function
let ages6 = years.map(el => 2018 - el); 

console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2018 - el}.`);

console.log(ages6)

ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`;
});

console.log(ages6);