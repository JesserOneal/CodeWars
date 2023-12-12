//Description

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, 
// pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. 
// It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.

//My Solution

function likes(names) {
    let commentArray = [
        `no one likes this`,
        `${names[0]} likes this`,
        `${names[0]} and ${names[1]} like this`,
        `${names[0]}, ${names[1]} and ${names[2]} like this`,
        `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    ];
    if(names.length === 0) return commentArray[0];
    return names.length <= 3 ? commentArray[names.length] : commentArray[4]
  }

  //Test Cases

  console.log(likes(['Danny','Bob','Mom','Wayne']));
  console.log(likes(['Ozzy O','Alice C', 'Gene S']));
  console.log(likes(['James B','Cindy L']));
  console.log(likes(['Wayne B']));
  console.log(likes([]))