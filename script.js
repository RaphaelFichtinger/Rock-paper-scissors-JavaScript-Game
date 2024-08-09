let computersOptions = ["scicssors", "stone", "paper"];

let heading = document.getElementById("headingContainer");
let computerContainer = document.getElementById("computerContainer");
let playerScore = document.getElementById("playerScore");
let computerScore = document.getElementById("computerScore");
let scicssors = document.getElementById("scicssorsItem");
let stone = document.getElementById("stoneItem");
let paper = document.getElementById("paperItem");
let computersResultHidden = true;
let playerCanClick = true;
let computersResult = "reslut";
let playersPick = "";
let computersPick= "";
let points = JSON.parse(localStorage.getItem("scoreboard"));

updateScores()

function scicssorsStonePaper() {
    setTimeout(() => {
        heading.innerHTML = '3'
        computerContainer.innerHTML = "3"
    }, 1000);
    setTimeout(() => {
        heading.innerHTML = '2'
        computerContainer.innerHTML = "2"
    }, 2000);
    setTimeout(() => {
        heading.innerHTML = '1'
        computerContainer.innerHTML = "1"
    }, 3000);
    setTimeout(() => {
        heading.innerHTML = ''
    }, 4000);
}

function playerChooseScicssors() {
    if (playerCanClick) {
        showTimer();
        playersPick = "scicssors";
        computersChoice();
    }
}

function playerChooseStone() {
    if (playerCanClick) {
    showTimer();
    playersPick = "stone";
    computersChoice();
    }
}

function playerChoosePaper() {
    if (playerCanClick) {
    showTimer();
    playersPick = "paper";
    computersChoice();
    }
}

function computersChoice(playersPick) {
    playerCanClick = false;
    let currentIndex = computersOptions.length;
    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [computersOptions[currentIndex], computersOptions[randomIndex]] = [
            computersOptions[randomIndex], computersOptions[currentIndex]];
      }
      setTimeout(() => {
        playersPick;
        computersPick = computersOptions[0];
        checkForWin();
        computerContainer.innerHTML = `${computersPick}`;
        playerCanClick = true;
      }, 3000);
}

function checkForWin() {
    if (playersPick == "scicssors" && computersPick == "paper") {
        points[0].playerPoints ++;
        setPoints();
    } else if (playersPick == "scicssors" && computersPick == "stone") {
        points[1].computersPoints ++;
        setPoints();
    } else if (playersPick == "scicssors" && computersPick == "scicssors") {
        // console.log("no one wins");
    } else if (playersPick == "paper" && computersPick == "scicssors") {
        points[1].computersPoints ++;
        setPoints();
    } else if (playersPick == "paper" && computersPick == "stone") {
        points[0].playerPoints ++; 
        setPoints();
    }  else if (playersPick == "paper" && computersPick == "paper") {
        // console.log("no one wins");
    }  else if (playersPick == "stone" && computersPick == "scicssors") {
        points[0].playerPoints ++;
        setPoints();
    } else if (playersPick == "stone" && computersPick == "stone") {
        // console.log("no one wins"); 
    } else if (playersPick == "stone" && computersPick == "paper") {
        points[1].computersPoints ++;
        setPoints();
    }
}

function updateScores() {
let scoreContainer = document.getElementById("scoresDiv");
let scoreContainer1 = document.getElementById("scoresDiv1");
scoreContainer.innerHTML = "";
scoreContainer.innerHTML = `Player Score: ${points[0].playerPoints}`;
scoreContainer1.innerHTML = `Computer Score: ${points[1].computersPoints}`;
}

function setPoints() {
    localStorage.setItem("scoreboard", JSON.stringify(points));
    updateScores();
}

function setEmptyArray() {
     points = [
        {playerPoints: 0},
        {computersPoints: 0}
    ];
    setPoints();

}

function showTimer() {
    setTimeout(() => {
        computerContainer.innerHTML = `3`
    }, 700);
    setTimeout(() => {
        computerContainer.innerHTML = `2`
    }, 1400);
    setTimeout(() => {
        computerContainer.innerHTML = `1`
    }, 2100);
}
