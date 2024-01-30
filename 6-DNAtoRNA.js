// Coding Challange 2024 
// Day 6/366
// https://www.codewars.com/kata/5556282156230d0e5e000089

// const DNAtoRNA = dna => {
//     let rna = '';
//     for (let i = 0; i < dna.length; i++) {
//         rna += (dna[i] === 'T') ? 'U' : dna[i];
//     }
//     return rna;
// }


// const DNAtoRNA = dna => dna.split('').map(e => (e === 'T' ? 'U' : e)).join('')


// const DNAtoRNA = dna => dna.replaceAll('T', 'U');


// const DNAtoRNA = dna => dna.replace(/T/g, 'U');


const DNAtoRNA = dna => dna.split('T').join('U');

console.log(DNAtoRNA("GCAT"));