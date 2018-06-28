//////////////////////
//LECTURE: VARIABLES//
//////////////////////
/*

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


////////////////////////////////
//LECTURE: OPERATOR PRECEDENCE//
////////////////////////////////


var now = 2018;
var yearJohn = 1990;
var fullAge = 18;

//Multiple operators
var isFullAge = now - yearJohn >= fullAge; //true
console.log(isFullAge);

//grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

//Multiple assignments

var x, y;

x = y = (3+5) * 4 - 6; 
console.log(x, y);

//More operators

x *= 2;

console.log(x);
x += 10;
console.log(x);
x--;
console.log(x);



/////////////////////
//CODING CHALENGE 1//
/////////////////////


var johnHeight = 1.76;
var markHeight = 1.99;
var johnMass = 87;
var markMass = 100;

var johnBmi = johnMass / (johnHeight * johnHeight);
var markBmi = markMass / (markHeight * markHeight);

console.log(markBmi, johnBmi);

var markHigherBMI = markBmi > johnBmi;
console.log('IS Mark\'s BMI higher than John\'s?' + markHigherBMI);


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



var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon');
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon');
}

var johnHeight = 1.76;
var markHeight = 1.99;
var johnMass = 87;
var markMass = 100;

var johnBmi = johnMass / (johnHeight * johnHeight);
var markBmi = markMass / (markHeight * markHeight);

if (markBmi > johnBmi) {
    console.log('Mark\'s BMI is greater than John\'s')
} else {
    console.log('John\'s BMI is greater than Mark\'s')

}

// var markHigherBMI = markBmi > johnBmi;
// console.log('IS Mark\'s BMI higher than John\'s?' + markHigherBMI);



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


var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man');
} else {
    console.log(firstName + ' is a man');
}


////////////////////////////////////////////////////
// TRUTHY AND FALSY VALUES AND EQUALITY OPERATORS //
////////////////////////////////////////////////////


// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

var height;

height = 23;

if(height || height === 0) { 
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

//Equality operators
if (height == '23') {
    console.log('The == operator does type coercion!');
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



/////////////////////
//CODING CHALENGE 2//
/////////////////////

John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.
1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
GOOD LUCK 😀

var scoreJohn = (89 + 120 + 103) / 3;
var scoreMike = (116 + 94 + 123) / 3;
var scoreMarry = (97 + 134 + 105) / 3;

console.log(scoreJohn, scoreMike, scoreMarry);

if (scoreJohn > scoreMike && scoreJohn > scoreMarry) {
    console.log('Johns team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreMarry && scoreMike > scoreJohn) {
    console.log('Mikes team wins with ' + scoreMike + ' points');
} else if (scoreMarry > scoreJohn && scoreMarry >scoreMike) {
    console.log('Marrys team wins with ' + scoreMarry + ' points');
} else {
    console.log('There is a draw');
}

if (scoreJohn > scoreMike) {
    console.log('Johns team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn) {
    console.log('Mikes team wins with ' + scoreMike + ' points');
} else {
    console.log('There is a draw');
}

/////////////////////
//CODING CHALENGE 3//
/////////////////////

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.
To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).
(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
GOOD LUCK 😀
*/
/*

function tipCalculator (bill) {
    var percentage;
    if (bill < 50) {
        percentage = 0.2;
    } else if (bill >= 50 && bill < 200) {
        percentage = 0.15;
    } else {
        percentage = 0.1;
    }
    return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];

var fianlValues = [bills[0] + tips[0],
                    bills[1] + tips[1],
                    bills[2] + tips[2]];

console.log(tips, fianlValues);


/////////////////////
//CODING CHALENGE 4//
/////////////////////

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.
Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
GOOD LUCK 😀
*/

/*

var john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

var mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

if (john.calcBMI() > mark.bmi) {
    console.log(john.fullName + ' has a higher bmi of ' + john.bmi);
} else if (mark.calcBMI() > john.bmi) {
    console.log(mark.fullName + ' has a higher bmi of ' + mark.bmi);
} else {
    console.log('They have the same bmi');
}
*/
/////////////////////
//CODING CHALENGE 5//
/////////////////////

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!
This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.
EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).
5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average
*/

var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];

            if (bill < 50) {
                percentage = 0.2;
            } else if (bill >= 50 && bill < 200) {
                percentage = 0.15;
            } else {
                percentage = 0.1;
            }

            //Add results to the corresponding arrays

            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}


var mark = {
    fullName: 'Mark Miller',
    bills: [77, 475, 110, 45],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];

            if (bill < 100) {
                percentage = 0.2;
            } else if (bill >= 100 && bill < 300) {
                percentage = 0.1;
            } else {
                percentage = 0.25;
            }

            //Add results to the corresponding arrays

            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

//Do the calculations
john.calcTips();
mark.calcTips();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
    console.log(john.fullName + '\'s family pays higher tips with an average of ' + john.average);
} else if (mark.average > john.average) {
    console.log(mark.fullName + '\'s family pays higher tips with an average of ' + mark.average);

}