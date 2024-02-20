// Coding Challange 2024
// Day 17/366
// https://www.codewars.com/kata/5ab6538b379d20ad880000ab/train/javascript

const areaOrPerimeter = (l, w) => (l === w) ? Math.pow(l, 2) : 2 * (l + w);

console.log(areaOrPerimeter(3,  3));
console.log(areaOrPerimeter(6, 10));