// DESCRIPTION:
// You get an array of numbers, return the sum of all of the positives ones.
//
//     Example [1,-4,7,12] => 1 + 7 + 12 = 20
//
// Note: if there is nothing to sum, the sum is default to 0.
//     SOLUTION:

function positiveSum(num) {
    let sum = 0
    for(let i = 0; i < num.length; i++) {
        if (num[i] > 0) {
            sum += num[i]
        }
    }
    return sum
}
const arr = [1, -4, 7 ,12]
console.log(positiveSum(arr))