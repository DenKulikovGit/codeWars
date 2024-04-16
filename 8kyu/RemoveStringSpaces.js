// DESCRIPTION:
// Write a function that removes the spaces from the string, then return the resultant string.

//SOLUTION:
const string = '8 j 8   mBliB8g  imjB8B8  jl  B'
function noSpace(x){
    return x.replace(/ /g, '')
}

console.log(noSpace(string));
