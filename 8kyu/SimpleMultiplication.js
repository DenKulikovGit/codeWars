// DESCRIPTION:
//     This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
//
//     SOLUTION:
function simpleMultiplication(number){
    if(number % 2) {
        return number * 9
    } else {
        return number * 8
    }
}

console.log(simpleMultiplication(15))