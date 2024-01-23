// Coding Challange 2024 
// Day 2/366
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d/solutions/javascript


// const reverseSeq = n => {
//     const result = [];
//     for (let i = n; i >= 1; i--) {
//         result.push(i);
//     }
//     return result;
// }


// const reverseSeq = n => {
//     // return [...Array(n)];
//     return Array(n)
//       .fill()
//       .map( (e, i)=> i + 1 )
//       .reverse();
// }


// const reverseSeq = n => [...Array(n)].fill().map((e, i)=> i + 1 ).reverse();


const reverseSeq = n => [...Array(n)].fill().map((e, i)=> n - i);

console.log(reverseSeq(5));