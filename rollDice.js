// This is a program for a function that takes two parameters, both an integer between 1 and 6 (inclusive).
// In other words, the user is giving two dice values. If you get double sixes, return 
// “Double sixes”. If you get a Yahtzee (1 and 2), return “Yahtzee”. For any other combination, return “Roll the dice again”.

let roll1 = 1
let roll2 = 2

const diceRoll4 = (dieOne4, dieTwo4) => {
    if (dieOne4 && dieTwo4 === 6) {
        return "Double sixes";
    } else if (dieOne4 === 1 && dieTwo4 === 2) {
        return "Yahtzee";
    } else if (dieOne4 ===2 && dieTwo4 === 1) {
        return "Yahtzee";
    } else {
        return "Roll the dice again";
    };
}


// This is a program for a function that takes no parameters.
// Inside the function, assign two variables a random dice number between 1 and 6 (inclusive).
// In other words, the computer rolls the dice now.  If you get double sixes, return “Double sixes”.
// If you get a Yahtzee (1 and 2), return “Yahtzee”. For any other combination, return “Roll the dice again”.


const diceRoll = () => {
    let dieOne = Math.floor(Math.random() * 6) + 1;
    let dieTwo = Math.floor(Math.random() * 6) + 1; 
    if (dieOne && dieTwo === 6) {
        return "Double sixes";
    } else if (dieOne === 1 && dieTwo === 2) {
        return "Yahtzee";
    } else if (dieOne ===2 && dieTwo === 1) {
        return "Yahtzee";
    } else {
        return "Roll the dice again";
    };
}
