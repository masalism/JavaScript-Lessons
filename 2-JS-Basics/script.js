//////////////////////
//LECTURE: VARIABLES//
//////////////////////


var name = 'Mantas'; //string
console.log(name);

var lastName = 'Masalis';
console.log(lastName);

var age = 28;  //number
console.log(age);

var fullAge = true;  //bool
console.log(fullAge);

console.log('Hello world!');


////////////////////////
//LECTURE: VARIABLES 2//
////////////////////////


var name = 'Mantas';
var age = 28;

//console.log(name + age); //string
//console.log(age + age); //number

var job, isMarried; //undefined

//console.log(job);

job = 'coder';
isMarried = false;

console.log(name + ' is a ' + age + ' years ' + job + '. Is he married? ' + isMarried + '.');

age = 'Twenty eight';
job = 'programmer';

console.log(name + ' is a ' + age + ' years ' + job + '. Is he married? ' + isMarried + '.');

//var lastName = prompt('What is the last name?');
//console.log(lastName);

alert(name + ' is a ' + age + ' years ' + job + '. Is he married? ' + isMarried + '.'); //alert window


//////////////////////
//LECTURE: OPERATORS//
//////////////////////


var now = 2018;
var birthYear = now - 28;

birthYear = now - 28 * 2;

console.log(birthYear);

var ageMantas = 28;
var ageDarius = 28;

ageMantas = ageDarius = (3 + 5) * 4 - 6;

ageMantas++;
//ageMantas = ageMantas + 1;

ageDarius *= 2;
//ageDarius = ageDarius * 2;

console.log(ageMantas);
console.log(ageDarius);


///////////////////////////////
//LECTURE: IF/ELSE STATEMENTS//
///////////////////////////////


var name = 'Mantas';
var age = 28;
var isMarried = 'yes';

if (isMarried === 'yes') { // === comparison operator
    console.log(name + ' is married!');
} else {
    console.log(name + ' will hopefully married soon :)');
}

isMarried = true;


if( isMarried) {
    console.log('YES');
} else {
    console.log('NO');
}


if( isMarried) {
    console.log('YES');
}

if (23 == "23") { // == convertina abu
    console.log('something to print..')
}


/////////////////////////////////////
//LECTURE: BOOLEAN LOGIC AND SWITCH//
/////////////////////////////////////


var age = 20;

if (age < 20) {
    console.log('Mantas is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log('Mantas is a young man.');
} 
else {
    console.log('Mantas is a man.');
}

var job = 'teacher';

job = prompt('What does Mantas do?');

switch (job) {
    case 'teacher':
        console.log('Mantas teaches kids.');
        break;
    case 'driver':
        console.log('Mantas drives a cab');
        break;
    case 'cop':
        console.log('Mantas fights crime');
        break;
    default:
        console.log('Mantas does something else');
        break;
}



////////////////////////////
//LECTURE: CODING CHALENGE//
////////////////////////////


var johnAge = 26 * 5;
var mantasAge = 28 * 5;
var dariusAge = 25 * 5;

var johnHeight = 183;
var mantasHeight = 176;
var dariusHeight = 189;


var mantasScore = mantasAge + mantasHeight;
var johnScore = johnAge + johnHeight;
var dariusScore = dariusAge + dariusHeight;

if (mantasScore < johnScore) {
    console.log('John wins with ' + johnScore);
} else if (mantasScore > johnScore) {
    console.log('Mantas wins with ' + mantasScore);
} else {
    console.log('draw');
}

if (mantasScore > dariusScore && mantasScore > johnScore) {
    console.log('Mantas wins with ' + mantasScore);
} else if (dariusScore > mantasScore && dariusScore > johnScore) {
    console.log('Darius wins with ' + dariusScore);
} else if (johnScore > mantasScore && johnScore > dariusScore){
    console.log('John wins with ' + johnScore);
} else {
    console.log('It\'s draw');
}


//////////////////////
//LECTURE: FUNCTIONS//
//////////////////////

function calculateAge (yearOfBirth) {
    var age = 2018 - yearOfBirth;
    return age;
}

var ageMantas = calculateAge(1990);
var ageMike = calculateAge(1968);
var ageMary = calculateAge(1979);




function yearsUntilRetirement(name, year) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement >= 0) {
        console.log(name + ' retires in ' + retirement + ' years');
    } else {
        console.log(name + ' is already retired');
    }
    
}

yearsUntilRetirement('Mantas', 1990);
yearsUntilRetirement('Mike', 1969);
yearsUntilRetirement('Mary', 1949);



///////////////////////////////////////
//LECTURE: STATEMENTS AND EXPRESSIONS//
///////////////////////////////////////

function someFun(par) { //statement
    //code
}

var someFun = function(par) { //expresion
    //code
}

//Expresions 

3 + 4;
var x = 3;

//Statements
if (x === 5) {
    //do something
}

///////////////////
//LECTURE: ARRAYS//
///////////////////

var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);
console.log(names[0]);
names[1] = 'Ben';
console.log(names);

var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue'); //push = adds element in array
john.unshift('Mr.'); //unshift = adds element in front
john.pop(); //pop = removes last element
john.shift(); //shift = removes first element

console.log(john);

//alert(john.indexOf('Smith')); //indexof = shows psoition in array

if (john.indexOf('teacher') === -1) {
    console.log('John is not a teacher');
}

////////////////////
//LECTURE: OBJECTS//
////////////////////

var john = {
    name: 'John', 
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false
};

//reading values out of object
console.log(john.lastName); 
console.log(john['lastName']);

var xyz = 'job'; //inserted job 
console.log(john[xyz]);

//data mutation
john.lastName = 'Miller';
john['job'] = 'programmer';

console.log(john);

var jane = new Object();

jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane.isMarried = true;

console.log(jane);



////////////////////////////////
//LECTURE: OBJECTS AND METHODS//
////////////////////////////////


//v1.0

var john = {
    name: 'John', 
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function() { //function expression
        return 2018 - this.yearOfBirth; //this = john
    }
};


//console.log(john.family[2]);
//console.log(john.calculateAge(1990));
console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;

console.log(john);


//v2.0
var john = {
    name: 'John', 
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function() { //function expression
        this.age = 2018 - this.yearOfBirth; //create new variable in john
    }
};

john.calculateAge();
console.log(john);

var mike = {
    name: 'Mike', 
    lastName: 'Smith',
    yearOfBirth: 1950,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function() { //function expression
        this.age = 2018 - this.yearOfBirth; //create new variable in john
    }
};

mike.calculateAge();
console.log(mike);


//////////////////
//LECTURE: LOOPS//
//////////////////

for (var i = 0; i < 10; i++) {
    console.log(i);
}

var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];


//For loops

for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

for (var i = 4; i >= 0; i--) {
    console.log(names[i]);
}

for (var i = names.length -1; i >= 0 ; i--) {
    console.log(names[i]);
}


//while loops

var i = 0;
while (i < names.length) {
    console.log(names[i]);
    i++
}

for (var i = 1; i <= 5; i++) {
    console.log(i);

    if (i === 3) { //breaks loop
        break;
    }
}

for (var i = 1; i <= 5; i++) {
    if (i === 3) { //breaks loop
        continue;
    }
    console.log(i);
}


//////////////////////////////
//LECTURE: CODING CHALENGE 2//
//////////////////////////////


function printFullAge(years) {
    var ages = [];
    var fullAges = [];
    for (var i = 0; i < years.length; i++) {
        ages[i] = 2018 - years[i];
    }
    
    for (var i = 0; i < ages.length; i++) {
        if (ages[i] >= 18) {
            console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is of full age.')
            fullAges.push(true);
        } else {
            console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is not of full age.')
            fullAges.push(false);
        }
    }
    return fullAges;
}

var years = [2001, 1985, 1994, 2014, 1973];
var full_1 = printFullAge(years);
var full_2 = printFullAge([2012, 1915, 1999]);
