// Dice game 1 player
// Get the dices

let dice = document.getElementsByTagName("img");
let startAgain = document.querySelector("#startAgain")
let playerStatus = document.querySelector("#playerStatus")
let displayPoints = document.querySelector("#displayPoints")
let roll = document.querySelector("#roll")


//1 Roll the dice to begin game - event listener & math random 

roll.addEventListener("click", (event) => {
    roll = Math.floor(Math.random()*6) + 1;
    console.log(roll)
    //How to get img to nuumber? ah 
    // if (roll === 1) {
        
    // } else if (roll === 2) {
        
    // } else if (roll === 3) {

    // } else if (roll === 4) {

    // } else if (roll === 5) {

    // } else (roll === 2) {

    // }
});



//2 The dice appears on the first roll

//3 When a dice is rolled, the score adds up

//4 Once the score passed, 20, you win

//5 However, if you hit ‘1’ then you lose (if less than score of 20)

//6 If the player won or lost, the player can start the game again

//7 You may want to change the score to any number other than 20


