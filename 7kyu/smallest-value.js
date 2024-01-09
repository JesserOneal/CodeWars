
//Description
// Write a function that can return the smallest value of an array or the index of that value. 
// The function's 2nd parameter will tell whether it should return the value or the index.

// Assume the first parameter will always be an array filled with at least 1 number and no duplicates. 
// Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

//Solution 

function min(arr, toReturn) {
    const min = Math.min(...arr);
    const index = arr.indexOf(min);
    return toReturn === 'index' ? index:min
  };

  //Test Case
  console.log(min([1,2,3,4,5],'index'),0);
  console.log(min([1,2,3,4,5],'value'),1)

  //in this function we are given an array and a return prompt for a value or an index. 
  // first we can create a const variable and use the Math.Min() method and spread the array using the spread operator ("...") prepended to the array.
  //Next, we use the indexOf() method of the minimum value to determine the index.
  // Finally, we look at "toReturn" and return index if the "toReturn" value equals "index". Otherwise, we return the smallest value determined
  //in the "min" variable.