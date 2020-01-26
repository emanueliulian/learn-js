// let firstName = 'John';
// let lastName = 'Smith';
// let age = 28;
//
// let fullAge = true;
//
// console.log(fullAge);
// console.log(firstName);
//
// // Type coercion
// console.log(firstName + age);
//
// let job, isMarried;
// job = 'teacher';
// isMarried = false;
// console.log(firstName + ' ' + age + ' years old' + '. Is is he married? ' + isMarried);
//
// // Variable mutation
// age = 'twenty eight';
// job = 'driver';
// alert(firstName + ' ' + age + ' years old' + '. Is is he married? ' + isMarried);
//
// var myName = prompt('what is it last name');
// console.log(firstName + ' ' + myName);


/********************************************
 * Basic operators
 */

// let year, yearJohn, yearDan;
// year = 2018;
// ageJohn = 28;
// ageDan = 33;
//
// //Math operators
// yearJohn = year - ageJohn;
// yearDan = year - ageDan;
//
// console.log(yearJohn);
//
// console.log(year + 2);
// console.log(year * 2);
// console.log(year / 10);
//
// // Logical operator
// let johnOlder = ageJohn > ageDan;
// console.log(johnOlder);
//
// // typeOf operator
// console.log(typeof yearDan);



/********************************************
 * Operator precedence
 */

// let now = 2020;
// let yearJohn = 1989;
// let fullAge = 18;
//
// let isFullAge = now - yearJohn >= fullAge;
// console.log(isFullAge);
//
// let ageJohn = now - yearJohn;
// let ageMark = 35;
// let average = (ageJohn + ageMark) / 2;
// console.log(average);
//
// // Multiple assigments
//
// let x, y;
// x = y= (3 + 5) * 4 - 6;
// console.log(x, y);


/********************************************
 * Coding challenge 1
 */

let markMass = 80;
let markHeight = 1.90;

let johnMass = 80;
let johnHeight = 1.80;

let markBmi = markMass / (markHeight * markHeight);
console.log(Math.floor(markBmi));

let johnBmi = johnMass / (johnHeight * johnHeight);

let bmiHigher = johnBmi > markBmi;
console.log(`Is John BMI higher than Marks? ${bmiHigher}`);