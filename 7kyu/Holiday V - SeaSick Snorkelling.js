// Thanks to the effects of El Nino this year my holiday snorkelling trip was akin to being in a washing machine... Not fun at all.

// Given a string made up of '~' and '_' representing waves and calm respectively, your job is to check whether a person would become seasick.

// Changes from calm to wave or wave to calm will add to the effect (really wave peak to trough but this will do). 
//Find out how many changes in level the string has and if that number is more than 20% of the length of the string, 
// return "Throw Up", else return "No Problem".

// Solution

function seaSick(x){
    let count = 0;
    const array = x.split('');
    for(let i = 0; i < array.length; i++){
        let current = array[0];
       if(array[i] !== current){
        current = array[i];
        count += 1
       }
    }
    return (array.length * .2) < count ? "Throw Up" : "No Problem"
}

function seaSick(x){
    let count = 0;
    x.split('').forEach((e,i) => {
        return e[i] !==
    })
}

// Test Cases

console.log(seaSick("~"), "No Problem")
console.log(seaSick("_~~~~~~~_~__~______~~__~~_~~"), "Throw Up")
console.log(seaSick("______~___~_"), "Throw Up")