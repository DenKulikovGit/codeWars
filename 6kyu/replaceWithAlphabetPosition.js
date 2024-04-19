//DESCRIPTION:
// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
//     If anything in the text isn't a letter, ignore it and don't return it.
// "a" = 1, "b" = 2, etc.
//     Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
//SOLUTION:

function alphabetPosition(text) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let char of text.toLowerCase()) {
        if (alphabet.includes(char)) {
            const position = alphabet.indexOf(char) + 1;
            result += position + ' ';
        }
    }
    return result.trim();
}

const text = "The sunset sets at twelve o' clock.";
console.log(alphabetPosition(text));