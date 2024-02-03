// Coding Challange 2024 
// Day 8/366
// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077

// const countSheep = num => {
//     let result = '';
//     for (let i = 1; i <= num; i++) {
//         result += `${i} sheep...`
//     }
//     return result;
// }


const countSheep = num => [...Array(num)].map((e, i) => `${i + 1} sheep...`).join('');
    
console.log(countSheep(3));