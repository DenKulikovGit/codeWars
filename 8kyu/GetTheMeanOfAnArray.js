// DESCRIPTION:
// It's the academic year's end, fateful moment of your school report.
//     The averages must be calculated.
//     All the students come to you and entreat you to calculate their
// average for them.Easy ! You just need to write a script.
//     Return the average of the given array rounded down to its nearest integer.
//     The array will never be empty.


// SOLUTION:
const arr = [1,2,3,4,5];
const arr2 = [1,1,1,1,1,1,1,2];

function getAverage(marks){
    let sum = marks.reduce((sum, mark) => sum + mark);
    return Math.trunc(sum / marks.length);
}

console.log(getAverage(arr));
console.log(getAverage(arr2));