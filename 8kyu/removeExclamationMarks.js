// DESCRIPTION:
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
//     SOLUTION:

function removeExclamationMarks(s) {
    return s.replaceAll('!', '');
}

console.log(removeExclamationMarks('Hello! World!'));
console.log(removeExclamationMarks('!!!!JS!!!!'));
