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


