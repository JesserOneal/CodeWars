//Description
// This is the first part. You can solve the second part here when you are done with this. Multiply two numbers! Simple!

// The arguments are passed as strings.
// The numbers may be way very large
// Answer should be returned as a string
// The returned "number" should not start with zeros e.g. 0123 is invalid


//Solution Attempt
function multiply(a, b) {
    let value = Number(a) * Number(b);
    return BigInt(value).toString()
  }
  
  //Test Cases
  console.log(multiply("58608473622772837728372827", "7586374672263726736374"), "444625839871840534925759054526609729933979680768");
  console.log(multiply("9007199254740991", "9007199254740991"), "81129638414606663681390495662081");
  console.log(multiply("98765", "56894"), "5619135910")
  