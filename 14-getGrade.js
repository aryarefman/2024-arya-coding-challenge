// Coding Challange 2024 
// Day 14/366
// https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/javascript

// const getGrade = (s1, s2, s3) => {
//     let getEverage = (s1 + s2 + s3) / 3; 
    
//     if (getEverage >= 90) return 'A';
//     if (getEverage >= 80) return 'B';
//     if (getEverage >= 70) return 'C';
//     if (getEverage >= 60) return 'D';
//     return 'F';
// }

const getGrade = (...arr) => {
    let getEverage = arr.reduce((prev, curr) => (prev + curr)) / arr.length; 
    
    if (getEverage >= 90) return 'A';
    if (getEverage >= 80) return 'B';
    if (getEverage >= 70) return 'C';
    if (getEverage >= 60) return 'D';
    return 'F';
}

console.log(getGrade(95,90,93));