// DESCRIPTION:
// Write a small function that returns the values of an array that are not odd.
//     All values in the array will be integers. Return the good values in the order they are given.

// SOLUTION:
function noOdds( values ){
    const array = []
    for ( let i = 0; i < values.length; i++ ) {
        if (values[i] % 2 === 0 ) {
            array.push(values[i]);
        }
    }
    return array
}

console.log(noOdds([0,1,2,3]))
console.log(noOdds([0,1]))