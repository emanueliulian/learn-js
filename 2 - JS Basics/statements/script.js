/********************************************
 * If / else
 */

let firstName = 'John';
let civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married');
} else {
    console.log(firstName + ' is not married');
}

let isMarried = true;

if (isMarried) {
    console.log(firstName + ' is married');
} else {
    console.log(firstName + ' is not married');
}


//

let markMass = 80;
let markHeight = 1.90;

let johnMass = 80;
let johnHeight = 1.80;

let markBmi = markMass / (markHeight * markHeight);
let johnBmi = johnMass / (johnHeight * johnHeight);

if (markBmi > johnBmi) {
    console.log('Mark\'s  bmi is higher than John\'s. ');
} else {
    console.log('John\'s bmi is higher than Mark\'s.');
}


/********************************************
 * Boolean logic
 */

firstName = 'John';
let age = 36;

if (age < 13) {
    console.log(firstName + ' is a boy');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man');
} else {
    console.log(firstName + ' is a man');
}


/********************************************
 * Ternary Operator
 */

age >= 18 ? console.log(firstName + ' drinks beer') : console.log(firstName + ' drinks juice');
let drink = age >= 18 ? 'beer' : 'juice';
console.log(firstName + ' drinks ' + drink);


/********************************************
 * Switch statement
 */

let job = 'instructor';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teachers kids');
        break;
    case 'drivers':
        console.log(firstName + ' drives a car');
        break;
    case 'designer':
        console.log(firstName + ' designs sites');
        break;
    default:
        console.log(firstName + ' does something else');
}

switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy');
        break;
    case age > 13 && age < 20:
        console.log(firstName + ' is a teenager');
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man');
        break;
    default:
        console.log(firstName + ' is a man');
}


/********************************************
 * True // false
 */

let height = 0;
if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable is NOT defined');
}

// Equality operators
if (height == '23') {
    console.log('Variable is NOT defined');
}
