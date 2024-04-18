//DESCRIPTION:
// Simple, given a string of words, return the length of the shortest word(s).
//     String will never be empty and you do not need to account for different data types.

//SOLUTION:
const string = "How can mirrors be real if our eyes aren't real"

function findShort(s) {
    const words = s.split(' ');
    let shortestLength = Infinity;
    for (let word of words) {
        if (word.length < shortestLength) {
            shortestLength = word.length;
        }
    }
    return shortestLength;
}

console.log(findShort(string));
