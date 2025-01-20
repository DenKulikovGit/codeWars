// DESCRIPTION:
// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.
//     You can assume all values in the array are numbers.

// SOLUTION:

function smallEnough(a, limit) {
    for (let item of a) {
        if (item > limit) {
            return false;
        }
    }
    return true;
}

console.log(smallEnough([66, 100], 101))
console.log(smallEnough([101, 45, 75, 105, 99, 107], 102))

