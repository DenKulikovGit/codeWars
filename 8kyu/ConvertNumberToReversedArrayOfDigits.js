// DESCRIPTION:
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]
//SOLUTION:
function digitize(n) {
    return  Array.from(String(n), Number).reverse()
}

console.log(digitize(125789));
console.log(digitize(0));