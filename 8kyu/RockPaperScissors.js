// DESCRIPTION:
// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.
// Examples(Input1, Input2 --> Output):
// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"


// SOLUTION:
const getMsg = (n) => `Player ${n} won!`;
const rps = (p1, p2) => {
    if (typeof p1 === 'number' && p2 === undefined) {
        return p1 === 1 ? getMsg(1) : getMsg(2);
    }
    if (p1 === 'paper' && p2 === 'rock' || p1 === 'rock' && p2 === 'scissors' || p1 === 'scissors' && p2 === 'paper') {
        return getMsg(1);
    } else if (p1 === p2) {
        return 'Draw!';
    } else {
        return getMsg(2);
    }
}

console.log(getMsg(2));
console.log(rps('rock', 'scissors'))
console.log(rps('paper', 'scissors'))
console.log(rps('rock', 'rock'))