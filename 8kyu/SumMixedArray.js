// DESCRIPTION:
// Given an array of integers as strings and numbers,
// return the sum of the array values as if all were numbers.
    // Return your answer as a number.


// SOLUTION:
const arr = [9, 3, '7', '3'];
const arr2 = [9, 3, '7', '3', 'lol'];

function sumMix(x){
    for (let i = 0; i < x.length; i++){
        if (isNaN(x[i]) === false){
            x = Array.from(x, Number);
            return x.reduce((acc, cur) => acc + cur);
        }
    }
}

console.log(sumMix(arr));
console.log(sumMix(arr2));