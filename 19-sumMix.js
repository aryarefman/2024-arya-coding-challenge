// Coding Challange 2024
// Day 19/366
// https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript

// const sumMix = x => x.map(e => +e).reduce((prev, curr) => prev + curr, 0);


const sumMix = x => x.map(Number).reduce((prev, curr) => prev + curr, 0);

console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]));