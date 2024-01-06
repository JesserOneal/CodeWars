//description

// The magic sum of 3s is calculated on an array by summing up odd numbers which include the digit 3. 
// Write a function magic_sum which accepts an array of integers and returns the sum.

// Example: [3, 12, 5, 8, 30, 13] results in 16 (3 + 13)

// If the sum cannot be calculated, 0 should be returned.

//My Solution
function magicSum(arr){
    let array = [];
    const useNums = arr.forEach((num) => {
        return (num%2 !== 0) && num.toString().includes(3) ? array.push(num) : 0
    })
    return array.reduce((acc,c) => {
        return acc + c
    },0)
}

//More refined solution - "Not mine, just for review"
// function magicSum(a) {
//     return Array.isArray(a) ? a.reduce((a,b)=>a+((''+b).includes('3') && b%2 ? b : 0),0) : 0
//   }

//Test Cases
console.log(magicSum([3, 13]), 16);
console.log(magicSum([30, 34, 330]), 0);
console.log(magicSum([3, 12, 5, 8, 30, 13]), 16);