// Q1- Write a function to extract unique characters from a string

let str = "abcdabcdefgggh";

function getUnique(str){
    let ans = " ";
    for(let i=0; i<str.length; i++){
        let currChar = str[i];
        if(ans.indexOf(currChar) == -1){
            ans += currChar;
        }
    }
    return ans;
}
console.log(getUnique(str));

// Q2 - Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.

let country = ["Austalia", "Germany", "United States of America"];

function longestName(country){
    let idx = 0;
    for(let i=0; i<country.length; i++){
        if(country[i].length > country[idx].length){
            idx=i;
        }
    }

    return country[idx];
}
console.log(longestName(country));


// Q3 - Write a JavaScript function to count the number of vowels in a String argument.

let str2 = "Hello, this is JavaScript";

function countVowels(str){
    let count = 0;

    for(let i=0; i<str.length; i++){
    if(
        str.charAt(i) == "a" ||
        str.charAt(i) == "e" ||
        str.charAt(i) == "i" ||
        str.charAt(i) == "o" ||
        str.charAt(i) == "u" 
    ){
        count++;
    }}
    return count;
}
console.log(countVowels(str2));


// Q4 - Write a JavaScript function to generate a  random number within a range (start,end).

let start = 100;
let end = 200;

function generateRandom(start, end){
    let diff = end-start;
    return Math.floor(Math.random() * diff)+start;
}
console.log(generateRandom(start, end));