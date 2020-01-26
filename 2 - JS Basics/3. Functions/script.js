/********************************************
 * Functions
 */

function calculateAge(birthYear) {
    return 2018 - birthYear;
 }

let ageJohn = calculateAge(1990);
let ageMike = calculateAge(1948);
let ageJane = calculateAge(1969);

console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
    let age = calculateAge(year);
    let retirement = 65 - age;
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years');
    } else {
        console.log(firstName + ' is retired');
    }
};

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Dan');
yearsUntilRetirement(1964, 'Mike');


/********************************************
 * Function Statements and expressions
 */

let whatDoYouDo = (job, firstName) => {
    switch (job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' teaches people how to drive';
        case 'designer':
            return firstName + ' designs websites';
        default:
            return firstName + ' does something else';
    }
};

console.log(whatDoYouDo('driver', 'Jon'));
console.log(whatDoYouDo('designer', 'Dan'));
console.log(whatDoYouDo('retired', 'Mark'));


/********************************************
 * Array
 */

// New array
let names = ['Jon', 'Mark', 'Jane'];
let years = new Array(1990, 1969, 1956);

console.log(names[1]);
console.log(names.length);

// Mutated data
names[1] = 'Bem';
names[names.length] = 'Mary';
console.log(names);

// Different data types
let john = ['John', 'Smith', 1990, 'teacher', false, 'designer'];

// adds to array at bottom
john.push('blue');

// adds to array at front
john.unshift('Mr.');

// removes last array
// john.pop();
// john.pop();

// removes first array
john.shift();

console.log(john);

let isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);