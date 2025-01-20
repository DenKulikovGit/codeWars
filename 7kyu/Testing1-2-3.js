// DESCRIPTION:
// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
// Write a function which takes a list of strings and returns each line prepended by the correct number.
//     The numbering starts at 1. The format is n: string. Notice the colon and space in between.
//     Examples: (Input --> Output)
//     [] --> []
//     ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

// SOLUTION:

const arr = ["a", "b", "c"]
const arr2 =  ['Q', 'F', 'r', 'z', 'y', 'f', 'L', 'Y', 'Z', 'G', 'L', 'w', '[', 'W', 'o', 'C', 'b', 'j', 'S', 'T', 'S', 'B', 'g', 'l', 'k', 'o', 'R', 'f', 'q', 't', 'a', 'o', 'R', 'h', 'R', 'w', 'J', 'o', 'Q', '{', 'Y', 'Y', 'N', 'N', 'P', 't', 'C', 'w', 'a', 'S', 'X', 'x', 'W', 'D', 't', 't', 'T', 'x', 'a', 'U', 'a', 'x', 'a', 'I', 'a', 'N', 'I', 'L', 'X', 'H', 'M', '{', 'L', 's', 'E', 'S', 'd', 'I', 'y', 'T', 'P', 'y', 'G', 'k', '[', 'e', 'u', 'E', 'O', 'j', 't', 'B', 'P', 'm', 'w', 'y', 'F', 'z', 'n', 'c']

const number = function(array){
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(`${+[i] + 1}: ${array[i]}`)
    }
    return newArray
}

console.log(number(arr))
console.log(number(arr2))