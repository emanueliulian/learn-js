/********************************************
 * Objects and props
 */

let john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['jane', 'mark', 'bob', 'emily'],
    job: 'teacher',
    isMarried: false
};

console.log(john.firstName);
console.log(john['lastName']);
let x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);


/********************************************
 * Objects and methods
 */

john = {
    age: '',
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1989,
    family: ['jane', 'mark', 'bob', 'emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2018 - this.birthYear;
    }
};

john.calcAge();

console.log(john);