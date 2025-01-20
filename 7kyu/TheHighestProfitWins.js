// DESCRIPTION:
// Task
// Write a function that returns both the minimum and maximum number of the given list/array.
//
// Examples (Input --> Output)
//     [1,2,3,4,5] --> [1,5]
//     [2334454,5] --> [5,2334454]
//     [1]         --> [1,1]
// Remarks
// All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.

// SOLUTION:
const array = [1, 2, 3, 4, 5]
const array2 = [2334454,5]
const array3 = [1]


function minMax(arr){
    return [Math.min(...arr), Math.max(...arr)]; // fix me!
}

console.log(minMax(array));
console.log(minMax(array2));
console.log(minMax(array3));
