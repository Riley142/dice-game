// Dice game 1 player
// Get the dices

let dice = document.getElementsByTagName("img");
let startAgain = document.querySelector("#startAgain")
let playerStatus = document.querySelector("#playerStatus")
let displayPoints = document.querySelector("#displayPoints")
let displayDice = document.querySelector("#displayDice")
let roll = document.querySelector("#roll")
let pointsCounter = 0;


//1 Roll the dice to begin game - event listener & math random 

roll.addEventListener("click", (event) => {
    const diceRoll = Math.floor(Math.random()*6) + 1;


    // need to display points counter?
    if (diceRoll === 1) {
        displayDice.src = "img/dice1.png"
        displayPoints.innerText = "Game over";
        pointsCounter == 0; // Otherwise even when player lost the game program will add the points
    } else if (diceRoll === 2) {
        displayDice.src = "img/dice2.png"
        displayPoints.innerText = pointsCounter;
        pointsCounter += diceRoll;
    } else if (diceRoll === 3) {
        displayDice.src = "img/dice3.png"
        displayPoints.innerText = pointsCounter;
        pointsCounter += diceRoll;
    } else if (diceRoll === 4) {
        displayDice.src = "img/dice4.png"
        displayPoints.innerText = pointsCounter;
        pointsCounter += diceRoll;
    } else if (diceRoll === 5) {
        displayDice.src = "img/dice5.png"
        displayPoints.innerText = pointsCounter;
        pointsCounter += diceRoll;
    } else  {
        displayDice.src = "img/dice6.png"
        displayPoints.innerText = pointsCounter;
        pointsCounter += diceRoll;
    }


    console.log(pointsCounter);

    if (pointsCounter >= 20 ){
        displayPoints.innerText = "You won!";
        pointsCounter === 0;

        //display none on roll
        //start again appears
    }
       

});


//4 Once the score passed, 20, you win

//5 However, if you hit ‘1’ then you lose (if less than score of 20)

//6 If the player won or lost, the player can start the game again

//7 You may want to change the score to any number other than 20


