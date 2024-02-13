// Coding Challange 2024 
// Day 12/366
// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript

// const arrayPlusArray = (arr1, arr2) => arr1.concat(arr2).reduce((prev, curr) => prev + curr, 0);


const arrayPlusArray = (arr1, arr2) => [...arr1, ...arr2].reduce((prev, curr) => prev + curr, 0);

console.log(arrayPlusArray([100, 200, 300], [400, 500, 600]));