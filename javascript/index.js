// delete all occurances of element num in a given array

const arr = [1, 2, 3, 4, 5, 6, 2, 3];
const num = 2;

console.log(arr);

for(let i=0; i<arr.length; i++){
    if(arr[i] == num){
        arr.splice(i, 1);
    }
}
console.log(arr);


// Find the no of digits in a number

let number = 287152;
let count = 0;

let copy = number;

while(copy>0){
    copy = Math.floor(copy/10);
    count++;
}

console.log(count);


// Find sum of digits in a number

// let number2 = 287152;
// let sum = 0;

// while(number2 > 0){
//     let rem = number2 %10;
//     sum+=rem;
//     number2 = Math.floor(number2/10);
// }