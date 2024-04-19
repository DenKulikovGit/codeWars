//DESCRIPTION:
// Check to see if a string has the same amount of 'x's and 'o's.
//     The method must return a boolean and be case insensitive. The string can contain any char.
//     Examples input/output:
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

//SOLUTION:
function XO(str) {
    str = str.toLowerCase();
    const countX = (str.match(/x/g) || []).length;
    const countO = (str.match(/o/g) || []).length;
    return countX === countO || (countX === 0 && countO === 0);
}

console.log(XO("ooxx"))
console.log(XO("xooxx"))
console.log(XO("zpzpzpp"))
