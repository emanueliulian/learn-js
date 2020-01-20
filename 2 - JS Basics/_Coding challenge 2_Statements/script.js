/********************************************
 * Coding challenge 2
 */

let teamJohnAverage = (89 + 120 + 103) / 3;
let teamMikeAverage = (116 + 94 + 123) / 3;
let teamMaryAverage = (97 + 134 + 105) / 3;

// let teamWin = teamJohnAverage > teamMikeAverage;
// switch (teamWin) {
//     case teamJohnAverage > teamMikeAverage:
//         console.log('John wins with ' + teamJohnAverage + ' points');
//         break;
//     case teamMikeAverage < teamJohnAverage:
//         console.log('Mike wins with ' + teamMikeAverage + ' points');
// }

if (teamJohnAverage > teamMikeAverage && teamJohnAverage > teamMaryAverage) {
    console.log('John wins with ' + teamJohnAverage + ' points');
} else if (teamMikeAverage > teamJohnAverage && teamMikeAverage > teamMaryAverage) {
    console.log('Mike wins with ' + teamMikeAverage + ' points');
} else if (teamMaryAverage > teamMikeAverage && teamMaryAverage > teamJohnAverage) {
    console.log('Mary wins with ' + teamMaryAverage + ' points');
}
else {
    console.log('its a draw with ' + teamMikeAverage + ' points');
}