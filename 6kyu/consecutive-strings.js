// You are given an array(list) strarr of strings and an integer k. 
// Your task is to return the first longest string consisting of k consecutive strings taken in the array.
// If n (length of strarr array > k) return empty string
//My Solution


function longestConsec(strarr, k) {
    const n = strarr.length; 
    let result = [];
    let current;

    for(let i= 0; i < n; i++){
        current = strarr[0];
        if(strarr[i].length >= current.length){
            result.push(strarr[i]);
            current = strarr[i]
        }
    }
    result.shift();
    console.log(result)
    return (n === 0 || k > n || k <= 0) ? "" : result.slice(k).join('')
}

//Test Cases
//console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"],2))

//console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2), "abigailtheta")
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1), "oocccffuucccjjjkkkjyyyeehh")
//console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15), "")