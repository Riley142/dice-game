// Dice game 1 player
let dice = document.getElementsByTagName("img");
let startAgain = document.querySelector("#startAgain")
let displayPoints = document.querySelector("#displayPoints")
let displayDice = document.querySelector("#displayDice")
let roll = document.querySelector("#roll")
let pointsCounter = 0;

startAgain.style.display = "none";
displayDice.style.display = "none";

roll.addEventListener("click", (event) => {
    play();
});

startAgain.addEventListener("click", (event) => { 
    pointsCounter = 0;
    play();
    startAgain.style.display = "none"
    roll.style.display = "block";
});


function play() {
    const diceRoll = Math.floor(Math.random()*6) + 1;
    displayDice.style.display = "block";

    if (diceRoll === 1) {
        displayDice.src = "img/dice1.png"
        displayPoints.innerText = "Game over";
        roll.style.display = "none";
        startAgain.style.display = "block";     
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

    
    if (pointsCounter >= 20 ){
        displayPoints.innerText = "You won!";
        play();
    }

    console.log(pointsCounter);
}