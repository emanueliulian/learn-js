/********************************************
 * Coding challenge 4
 */

let markInfo = {
    firstName: 'Mark',
    mass: 78,
    height: 1.80,
    bmiCalc: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

markInfo.bmiCalc();
console.log(markInfo.bmi);
console.log(markInfo);


let johnInfo = {
    firstName: 'John',
    mass: 92,
    height: 1.95,
    bmiCalc: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

johnInfo.bmiCalc();
console.log(johnInfo.bmi);

if(markInfo.bmiCalc() > johnInfo.bmiCalc()) {
    console.log(markInfo.firstName + ' is the winner with' + markInfo.bmi + ' BMI');
} else if(markInfo.bmi < johnInfo.bmi) {
    console.log(johnInfo.firstName + ' is the winner with' + johnInfo.bmi + ' BMI');
} else {
    console.log('its a draw');
}