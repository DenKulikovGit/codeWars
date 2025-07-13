// DESCRIPTION:
// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
//     SOLUTION:

function between(a, b) {
    const array = []
    // if (Number.isInteger(a) === true && Number.isInteger(b) === true && a < b) {
    // }
    while (a < b + 1) {
        array.push(a++)
    }
    return array;
}

console.log(between(1,2))
console.log(between(-2,25))