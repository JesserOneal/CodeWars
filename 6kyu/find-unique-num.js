// DESCRIPTION:
// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number (this kata)
// Find the unique string
// Find The Unique

//My Solution

function findUniq(arr) {
    let array1 = [];
    let array2 = [];
    //move through each element of the array and compare to the first as only 1 integer will ever differ. Push to new arrays
    arr.forEach(e => { return e === arr[0] ? array1.push(e):array2.push(e)      
    });
    //return the array with with lesser array length
    return array1.length < array2.length ? Number(array1):Number(array2)
  }

  //Test Cases
  console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]), ': Expected 2');
  console.log(findUniq([ 1, 3, 1, 1, 1, 1 ]), ': Expected 3');
  console.log(findUniq([ 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, ]), ': Expected 1')