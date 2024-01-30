// Coding Challange 2024 
// Day 5/366
// https://www.codewars.com/kata/5861d28f124b35723e00005e

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => distanceToPump / mpg <= fuelLeft;


const zeroFuel = (distanceToPump, mpg, fuelLeft) => mpg * fuelLeft >= distanceToPump;

console.log(zeroFuel(50, 25, 2));