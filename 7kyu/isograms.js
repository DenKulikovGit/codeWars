//DESCRIPTION:
// An isogram is a word that has no repeating letters, consecutive or non-consecutive.
//     Implement a function that determines whether a string that contains only letters is an isogram.
//     Assume the empty string is an isogram. Ignore letter case.
//
// Example: (Input --> Output)
//
// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)
//
// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

//SOLUTION:
const string = "Dermatoglyphics"
const string2 = "moose"

function isIsogram(str) {
    str = str.toLowerCase();
    let letterMap = {};
    for (let i = 0; i < str.length; i++) {
        let letter = str[i];
        if (letterMap[letter]) {
            return false;
        } else {
            letterMap[letter] = true;
        }
    }
    return true;
}

console.log(isIsogram(string));
console.log(isIsogram(string2));