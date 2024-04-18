//DESCRIPTION:
// Given two integers a and b, which can be positive or negative,
//     find the sum of all the integers between and including them and return it.
//     If the two numbers are equal return a or b.
//     Note: a and b are not ordered!

//SOLUTION:
function getSum(a, b) {
    const min = Math.min(a, b);
    const max = Math.max(a, b);
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
}

console.log(getSum(5, -1));
console.log(getSum(0, -1));