// DESCRIPTION:
// Create a function that takes 2 integers in form of a string as an input,
//     and outputs the sum (also as a string):
//SOLUTION:

function sumStr(a,b) {
    return ((parseInt(a) || 0) + (parseInt(b) || 0)).toString();
}

console.log(sumStr('10', '10'));
console.log(sumStr('11', ''));
console.log(sumStr('', '15'));