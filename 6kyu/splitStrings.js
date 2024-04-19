//DESCRIPTION:
// Complete the solution so that it splits the string into pairs of two characters.
//     If the string contains an odd number of characters then it should replace the missing
//     second character of the final pair with an underscore ('_').
//     Examples:
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

//SOLUTION:
const str1 = 'abc'
const str2 = 'abcdef'
function solution(str) {
    const pairs = [];
    for (let i = 0; i < str.length; i += 2) {
        let pair = str.slice(i, i + 2);
        if (pair.length === 1) {
            pair += '_';
        }
        pairs.push(pair);
    }
    return pairs;
}

console.log(solution(str1))
console.log(solution(str2))