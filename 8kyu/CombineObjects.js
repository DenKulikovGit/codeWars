// DESCRIPTION:
// Your task is to write a function that takes two or more objects and returns a new object
// which combines all the input objects.
//     All input object properties will have only numeric values.
//     Objects are combined together so that the values of matching keys are added together.

// SOLUTION:
const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
const objC = { a: 18, c: 6, f: 18 }

function combine(...objects) {
    const result = {};
    for (const obj of objects) {
        for (let key in obj) {
            if (key in result) {
                result[key] += obj[key];
            } else {
                result[key] = obj[key]; //
            }
        }
    }
    return result;
}

console.log(combine(objA, objB));
console.log(combine(objA, objB, objC));
