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

while(number>0){
    number = Math.floor(number % 10);
    count++;
}

console.log(number);