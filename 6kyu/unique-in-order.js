//Description:

// Implement the function unique_in_order which takes as argument a sequence and returns a 
//list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]


const uniqueInOrder = function(iterable){
    //create new array
    let result = [];
    //iterate througth "iterable"
    for(let i = 0; i < iterable.length; i++){
        //if current index is not equal to the next character/integer, push the current character/integer
      if(iterable[i] !== iterable[i+1]){
        //push to new array
        result.push(iterable[i])
      }
    }
    //return the result array
    return result
  }

  //Test Cases
  console.log(uniqueInOrder('AAAABBBCCDAABBB'), `: ['A', 'B', 'C', 'D', 'A', 'B']`);
  console.log(uniqueInOrder('ABBCcAD'), `: ['A', 'B', 'C', 'c', 'A', 'D']`);
  console.log(uniqueInOrder([1,2,2,3,3]), `: [1,2,3]`)