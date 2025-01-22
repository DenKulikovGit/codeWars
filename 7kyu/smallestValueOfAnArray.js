// DESCRIPTION:
// Write a function that can return the smallest value of an array or the index of that value.
//     The function's 2nd parameter will tell whether it should return the value or the index.
// Assume the first parameter will always be an array filled with at least 1 number and no duplicates.
//     Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

// SOLUTION:
function min(arr, toReturn) {
    if (toReturn === 'value') {
        return Math.min(...arr)
    } else if (toReturn === 'index') {
        return arr.indexOf(Math.min(...arr))
    }
}

console.log(min([1,2,3,4,5], 'value'))
console.log(min([1,2,3,4,5], 'index'))