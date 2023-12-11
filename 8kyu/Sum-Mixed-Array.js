// Given an array of integers as strings and numbers, 
// return the sum of the array values as if all were numbers.

// Return your answer as a number.

//My Solution

function sumMix(x){
    return x.map(e => Number(e)).reduce((acc,c)=> acc + c)
  }

//test cases

console.log(sumMix([1,2,'3']), `equals 6`);
console.log(sumMix(['6','3','3']), `equals 12`);
console.log(sumMix(['1',7,'3']), `equals 11`)