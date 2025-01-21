// DESCRIPTION:
// Complete the method which accepts an array of integers, and returns one of the following:
//     "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

// SOLUTION:

function isSortedAndHow(array) {
    if (array.indexOf(Math.min(...array)) === 0) {
        return "yes, ascending"
    } else if (array.indexOf(Math.max(...array)) === 0) {
        return "yes, descending"
    } else {
        return "no"
    }
}

console.log(isSortedAndHow([1, 2]));
console.log(isSortedAndHow([15, 7, 3, -8]));
console.log(isSortedAndHow([4, 0, 30]));
