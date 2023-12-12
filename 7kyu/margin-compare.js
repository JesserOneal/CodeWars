// Create a function close_compare that accepts 3 parameters: a, b, and an optional margin. 
// The function should return whether a is lower than, close to, or higher than b.
// Please note the following:
// When a is close to b, return 0.
// For this challenge, a is considered "close to" b if margin is greater than or equal to the 
// absolute distance between a and b.
// Otherwise...

// When a is less than b, return -1.

// When a is greater than b, return 1.

// If margin is not given, treat it as if it were zero.

// Assume: margin >= 0

function closeCompare(a, b, margin){
    const marginClose = (margin || 0) >= Math.abs(a-b) ? 0:false; 
    const aOrB = a < b ? -1:1;
    return marginClose === 0 ? marginClose:aOrB
  };


  //Test Cases//
  console.log(closeCompare(4, 5), -1);
  console.log(closeCompare(5, 5), 0);
  console.log(closeCompare(-6, -5), -1);




  


