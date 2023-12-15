//Description

// Write a function that takes a list of at least four elements as 
// an argument and returns a list of the middle two or three elements in reverse order.

// My Solution
function reverseMiddle(array){
    const arrReversed = array.reverse()
    const isEven = arrReversed.length % 2 === 0;
    const mid = arrReversed == isEven ? Math.floor((arrReversed.length/2)-1) : Math.ceil((arrReversed.length/2)-1)
    return  isEven ? arrReversed.slice(mid,mid+2) : arrReversed.slice(mid - 1, mid + 2)
}

// Better Solution 
function reverseMiddle(array){
    let n = array.length, k = n >> 1
    return array.slice(k - 1, k + 1 + n % 2).reverse()
  }
//Test Cases

console.log(reverseMiddle([1, 2, 3, 4]),`Must Return [3,2]`);
console.log(reverseMiddle([1, 2, 3, 4, 5 ,6]),`Must Return [4,3]`);
console.log(reverseMiddle([1, 2, 3, 4, 5 ,6, 7]),`Must Return [5,4,3]`);