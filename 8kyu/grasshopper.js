// Messi goals function
// Messi is a soccer player with goals in three leagues:

// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.

// Note: the input will always be valid.

// Solution
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
  };

// Test Cases

console.log(goals(0,0,0), 0);
console.log(goals(43, 10, 5), 58);
console.log(goals(1,1,1), 3);


// function minPerWeek(minPerWeek, volumeIncrease){
//     const minIncrease = (minPerWeek * (volumeIncrease/100))
//     const minTotal =  minIncrease + minPerWeek;
//     return `
//     ${minTotal} minutes represents a ${(volumeIncrease)}% increase over ${minPerWeek} minutes. 
//     This would be a ${minIncrease} min increase over ${minPerWeek} minutes.`;
// }

// console.log(minPerWeek(150, 10))
