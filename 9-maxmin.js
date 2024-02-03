// Coding Challange 2024 
// Day 9/366
// https://www.codewars.com/kata/577a98a6ae28071780000989

// const min = list => {
//     let minValue = list[0];
//     for (let i = 0; i <= list.length; i++) {
//         (minValue > list[i]) ? minValue = list[i] : minValue;
//     }
//     return minValue;
// }

// const max = list => {
//     let maxValue = list[0];
//     for (let i = 0; i <= list.length; i++) {
//         (maxValue < list[i]) ? maxValue = list[i] : maxValue;
//     }
//     return maxValue;
// }


// const min = list => list.sort((a, b) => a - b)[0];

// const max = list => list.sort((a, b) => b - a)[0];


const min = list => Math.min(...list);

const max = list => Math.max(...list);

console.log(min([4,6,2,1,9,63,-134,566]));
console.log(max([4,6,2,1,9,63,-134,566]));