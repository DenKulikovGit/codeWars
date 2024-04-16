// DESCRIPTION:
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
//
// For example,
//
//     [true,  true,  true,  false,
//         true,  true,  true,  true ,
//         true,  false, true,  false,
//         true,  false, false, true ,
//         true,  true,  true,  true ,
//         false, false, true,  true]

// The correct answer would be 17.
//SOLUTION:
const arr = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]


function countSheeps(sheep) {
    let sum = 0
    for(i = 0; i < sheep.length; i++) {
        if(sheep[i] === true) {
            sum++
        }
    }
    return sum
}

console.log(countSheeps(arr));