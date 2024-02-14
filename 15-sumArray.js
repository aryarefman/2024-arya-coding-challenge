// Coding Challange 2024 
// Day 15/366
// https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript

// const sumArray = array => {
//     if (array === null) return 0;
//     const sorted = array.sort((a, b) => a - b);
//     let result = 0;
//     for (let i = 1; i < sorted.length - 1; i++) {
//         result += sorted[i];
//     }
//     return result;
// }


// const sumArray = array => (array == null) ? 0 : array.sort((a, b) => a - b).slice(1, -1).reduce((prev, curr) => prev + curr, 0);


const sumArray = array => array ? array.sort((a, b) => a - b).slice(1, -1).reduce((prev, curr) => prev + curr, 0) : 0;

console.log(sumArray([ -6, -20, -1, -10, -12 ]));
console.log(sumArray([ ]));
console.log(sumArray(null))