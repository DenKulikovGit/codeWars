// DESCRIPTION:
// Given an array of integers, remove the smallest value. Do not mutate the original array/list.
//     If there are multiple elements with the same value, remove the one with the lowest index.
//     If you get an empty array/list, return an empty array/list.
//
//     Don't change the order of the elements that are left.
//
// Examples
// * Input: [1,2,3,4,5], output = [2,3,4,5]
//     * Input: [5,3,2,1,4], output = [5,3,2,4]
//     * Input: [2,2,1,2,1], output = [2,2,2,1]

// SOLUTION:
const arr = [2, 2, 1, 2, 1]
const arr2 = [5, 3, 2, 1, 4]
const arr3 = [1, 2, 3, 4, 5]

function removeSmallest(numbers) {
    if (numbers.length === 0) return [];
    const minIndex = numbers.indexOf(Math.min(...numbers));
    return numbers.filter((_, index) => index !== minIndex);
}

console.log(removeSmallest(arr));
console.log(removeSmallest(arr2));
console.log(removeSmallest(arr3));