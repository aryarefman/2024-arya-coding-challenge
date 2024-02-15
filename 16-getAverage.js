// Coding Challange 2024
// Day 16/366
// https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript

// const getAverage = marks => {
//     let result = 0;
//     for (e of marks) {
//         result += e;
//     }
//     return Math.floor(result / marks.length);
// }


// const getAverage = marks => Math.floor(marks.reduce((prev, curr) => prev + curr) / marks.length);


const getAverage = (marks) =>
  marks
    .join('')
    .substr(Math.ceil(marks.length / 2 - 1), marks.length % 2 === 0 ? 2 : 1)
    .split('')
    .map(Number)
    .reduce((prev, curr) => (prev + curr) / 2);

console.log(getAverage([1, 2, 3, 4, 5]));
console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]));
