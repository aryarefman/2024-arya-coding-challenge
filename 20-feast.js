// Coding Challange 2024
// Day 20/366
// https://www.codewars.com/kata/5aa736a455f906981800360d/train/javascript

// const feast = (beast, dish) => beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1];


const feast = (beast, dish) =>
  beast[0] === dish[0] && beast.slice(-1) === dish.slice(-1);

console.log(feast("great blue heron", "garlic naan"));
console.log(feast("brown bear", "bear claw"));
