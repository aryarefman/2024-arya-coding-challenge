// Coding Challange 2024 
// Day 13/366
// https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript

// const points =  games => {
//     let result = 0;
//     for (let i = 0; i < games.length; i++) {
//         if (games[i][0] > games[i][2]) {
//             result += 3;
//         } else if (games[i][0] === games[i][2]) {
//             result += 1;
//         } else {
//             result += 0;
//         }
//     }
//     return result;
// }

const points = games => games.reduce((prev, [x, _, y]) => (x > y ? 3 : x === y ? 1 : 0) + prev, 0)

console.log(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]));