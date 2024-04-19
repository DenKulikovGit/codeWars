//DESCRIPTION:
//     Task
//     You will be given an array of numbers.
//     You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
//     Examples
//     [7, 1]  =>  [1, 7]
//     [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
//     [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

//SOLUTION:
const arr1 = [7, 1]
const arr2 = [5, 8, 6, 3, 4]
const arr3 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

function sortArray(array) {
    const oddNumbers = array.filter(num => num % 2 !== 0).sort((a, b) => a - b);
    return array.map(num => num % 2 !== 0 ? oddNumbers.shift() : num);
}

console.log(sortArray(arr1))
console.log(sortArray(arr2))
console.log(sortArray(arr3))