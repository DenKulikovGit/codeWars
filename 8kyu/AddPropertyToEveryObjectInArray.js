// DESCRIPTION:
// Your task is to add a new property usersAnswer to every object in the array questions.
//     The value of usersAnswer should be set to null.solution should work for array of any length.

// SOLUTION:
let questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];

function addElement(array) {
    for (let i = 0; i < array.length; i++) {
        array[i].usersAnswer = null;
    }
    return array;
}

console.log(addElement(questions));
