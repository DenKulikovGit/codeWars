// DESCRIPTION:
// You are given an array (which will have a length of at least 3, but could be very large) containing integers.
//     The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
//     Write a method that takes the array as an argument and returns this "outlier" N.

// SOLUTION:

function findOutlier(integers){
    let numOdd = []
    let numEven = []
    for (let i = 0; i < integers.length; i++) {
        if (integers[i] % 2 === 0) {
            numOdd.push(integers[i])
        } else if (integers[i] % 2 !== 0) {
            numEven.push(integers[i])
        }
    }
    if (numOdd.length === 1){
        return numOdd[0]
    } else if (numEven.length === 1){
        return numEven[0]
    }
}

console.log(findOutlier([0, 1, 2]));
console.log(findOutlier([1, 2, 3]));