// Function constructor //

/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
    console.log(2018 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1968, 'designer');
var mark = new Person('Mark', 1949, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

// Object.create //

var personProto = {
    calculateAge: function() {
        console.log(2018 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.jon = 'teacher';

var jane = Object.create(personProto,
{
    name: { value: 'Jane'},
    yearOfBirth: { value: 1969},
    job: { value: 'artist' }
});



// Primitives vs objects //

//Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);


//Objects
var obj1 = {
    name: 'John',
    age: 28
};

var obj2 = obj1;
obj1.age = 30;

console.log(obj1.age);
console.log(obj2.age);

//Functions
var age = 27;
var obj = {
    name: 'Mantas',
    city: 'Kaunas'
};

function change(a, b) {
    a = 30;
    b.city = 'Vilnius';
}

change(age, obj);

console.log(age); //nesikeicia
console.log(obj.city); //keiciasi


/////////////////////////////////////////////
// Lecture: Passing functions as arguments //
/////////////////////////////////////////////

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length ; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}


//callback functions
function calculateAge(el) {
    return 2018 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {

    if(el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1
    }
}


var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge)
var rates = arrayCalc(ages, maxHeartRate);


console.log(ages);
console.log(fullAges);
console.log(rates);

////////////////////////////////////////////
// Lecture: functions returning functions //
////////////////////////////////////////////

function interviewQurstion(job) {
    if (job === 'designer') {
        return function(name) { //anonymous function
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject you teach, ' + name +'?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?')
        }
    }
}

var teacherQuestion = interviewQurstion('teacher');
var designerQuesstion = interviewQurstion('designer');

teacherQuestion('John');
designerQuesstion ('John');
designerQuesstion('Jane');
designerQuesstion('Mark');
designerQuesstion('Mike');

interviewQurstion('teacher')('Mark');




///////////////////
// Lecture: IIFE //
///////////////////


function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();


(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

//console.log(score);

(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 -
    goodLuck);
})(5);

*/

///////////////////////
// Lecture: Closures //
///////////////////////

function retirement (retirementAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2018 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);

//retirement(66)(1990);

//CHALENGE


/*
function interviewQurstion(job) {
    if (job === 'designer') {
        return function(name) { //anonymous function
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject you teach, ' + name +'?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?')
        }
    }
}
*/

function interviewQurstion(job) {
    return function(name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if (job === 'teacher') {
            console.log('What subject you teach, ' + name +'?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

interviewQurstion('teacher')('John');
interviewQurstion('designer')('Mike');
interviewQurstion('Builder')('Karius');
