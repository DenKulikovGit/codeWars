// DESCRIPTION:
// Create a function that checks if a number n is divisible by two numbers x AND y.
//     All inputs are positive, non-zero numbers.

//SOLUTION:
function isDivisible(n, x, y) {
    return n % x === 0 && n % y === 0;
}

console.log(isDivisible(3, 1, 3));
console.log(isDivisible(100, 5, 3));