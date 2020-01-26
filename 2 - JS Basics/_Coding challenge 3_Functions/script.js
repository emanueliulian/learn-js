/********************************************
 * Coding challenge 3
 */

let tipsArray = [20, 15, 10];
let billsArray = [124, 48, 268];

const tipCalculator = (bill) => {
    if (bill < 50) {
        return bill * tipsArray[0] / 100;
    } else if (bill >= 50 && bill <= 200) {
        return bill * tipsArray[1] / 100;
    } else {
        return bill * tipsArray[2] / 100;
    }
};

const totalPay = (bill) => {
    return tipCalculator(bill) + bill;
};


const totalTips = [tipCalculator(billsArray[0]), tipCalculator(billsArray[1]), tipCalculator(billsArray[2])];
const payTotal = [totalPay(billsArray[0]), totalPay(billsArray[1]), totalPay(billsArray[2])];

console.log(totalTips);
console.log(payTotal);