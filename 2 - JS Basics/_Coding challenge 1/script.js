/********************************************
 * Coding challenge 1
 */

let markMass = 80;
let markHeight = 1.90;

let johnMass = 80;
let johnHeight = 1.80;

let markBmi = markMass / (markHeight * markHeight);
let johnBmi = johnMass / (johnHeight * johnHeight);

let bmiHigher = johnBmi > markBmi;

// print out result
console.log(`Mark mass and heghy: ${markMass} || ${markHeight}`);
console.log(`John mass and height: ${johnMass} || ${johnHeight}`);

console.log(`Is John BMI higher than Marks? ${bmiHigher}`);