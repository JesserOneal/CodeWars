// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

//My Solutions
    //Brute force solution

// function doubleChar(str){
//     //create empty array to push each element from the forloop
//     const result =[];
//     //run a for loop and push the element to the result array 
//     for(let i = 0; i < str.length; i++){
//         result.push(str[i].repeat(2));
//     };
//     //return the array and join to return a single string
//     return result.join('')
// }

//Slightly more refined
function doubleChar(str){
    //convert the string to an array, map the array
    //add an additional element to each element then join and return
     return Array.from(str).map((e) => e + e).join('')
}
//Test Cases
console.log(doubleChar("abcd"), "aabbccdd")
console.log(doubleChar("Adidas"), "AAddiiddaass");
console.log(doubleChar("1337"), "11333377");