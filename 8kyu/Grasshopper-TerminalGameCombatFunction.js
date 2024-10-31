// DESCRIPTION:
// Create a combat function that takes the player's current health and the amount of damage received, and returns the player's new health.
// Health can't be less than 0.


// SOLUTION:

function combat(health, damage) {
    if (health < damage) {
        return 0;
    } else {
        return health - damage;
    }
}

console.log(combat(15, 20))
console.log(combat(15, 10))