//Take an argument and encode for url

function generateLink(user) {
    //append encodeURIComponent with user to the url
    return `http://www.codewars.com/users/${encodeURIComponent(user)}`;
  };

//test cases

console.log(generateLink("user 1"));
console.log(generateLink("userTwo"));