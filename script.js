
let modal = document.querySelector(".modal")
let modalBack = document.querySelector(".modalBack")
let endofgamemodal = document.querySelector(".end-game-modal")
let modalX = document.getElementById("player-selection-x")
let modalO = document.getElementById("player-selection-o")
let modalPlayerTitle = document.getElementById("modal-title-player")
let selectShapeTitle = document.getElementById("selectShape")
let WinnerplayerName = document.getElementById("player-winner-name")
let mainMenuButton = document.getElementById("main-menu")
let vs = document.getElementById("vs")
let computerButton = document.getElementById("computer")
let impossibleButton = document.getElementById("impossible")
let playAgainBtn = document.getElementById("play-again")
let mainMenu = document.getElementById("main-menu")
let gameMessage = document.getElementById("game-message")

let restart = document.querySelector("#restart")
let back = document.querySelector("#back")
const title = document.getElementById("titleText")
const squares =  document.querySelectorAll(".game-selection")

let playername = document.getElementById("Player-name");
let next = document.getElementById('next')
let start = document.getElementById('start')
let gameboard = document.querySelector(".gameboard")
let chooseGame = document.querySelector(".chooseGame")

squares.forEach(square => {
   square.addEventListener("click", () => 
   Selected(+square.id)  )
})


back.addEventListener("click", () => window.location.reload())
playername.addEventListener('input', CheckInput);
vs.addEventListener("click", () => verzus())
computerButton.addEventListener("click", () => computer())
impossibleButton.addEventListener("click", () => impossible())
modalBack.addEventListener("click", () => closeModal())
modalX.addEventListener("click", () => selectX())
modalO.addEventListener("click", () => selectO())
mainMenu.addEventListener("click", () => window.location.reload())
playAgainBtn.addEventListener("click", () => window.location.reload())


let Playerx = true
let Playero = false

let modalSelection = false;

let xSelected = false
let oSelected = false

//Set up Gameboard Array in gameboard object
let Gameboard = {
   game: []
}


let playerOne = {
   Selection: [],
   name: ""
}


let playerTwo = {
   Selection: [],
   name: ""
}

let gameOver = false;

function Gamestarted() {
   let startGame = false;
}

let showModal = () => {

   modal.style.display = "flex"
}

function verzus() {
   showModal()
   next.style.backgroundImage = 'url(./assets/next.svg)'
   next.addEventListener('click', () => nextPlayerGameVersus())
}

function computer() {
   showModal()
   next.style.backgroundImage = 'url(./assets/start.svg)'
   next.addEventListener('click', () => startGameComputer())
}

function impossible() {
   showModal()
   next.style.backgroundImage = 'url(./assets/start.svg)'
   next.addEventListener('click', () => startGameImpossible())
}

function EndGameModal(winner) {
   endofgamemodal.style.display = "flex"
   if(winner == "tie"){
      gameMessage.innerText = "It's a Tie"
   } else{
   WinnerplayerName.innerText = winner
   }
}


let nextPlayerGameVersus = () => {
/* if (oSelected == true) {
   console.log('test')
}
 else if (xSelected == true) {
   console.log('testing x')
} */
   playerOne.name = playername.value
   modalX.style.display = "none"
   modalO.style.display = "none"
   modalPlayerTitle.src = ("./assets/playertwo-title.svg")
   selectShapeTitle.style.display = "none"
   playername.value = "";
   next.style.display = "none"
   start.style.display = "flex"
   playername.addEventListener('input', () => enableStart ())
   playername.addEventListener('change', () => ChangePlayerTwo ())
   let enableStart = () => {
      start.style.cursor = "pointer"
      start.style.pointerEvents = "all"
      start.style.opacity = 100+"%"
   }
   let ChangePlayerTwo = () => {
      start.addEventListener("click", () => startGameVerzus())
      playerTwo.name = playername.value
   }
}



let startGameUI = () => {
   closeModal()
   title.src = "./assets/xturn.svg"
   gameboard.style.display = "grid"
   chooseGame.style.display = "none"
   restart.style.display = "flex"
   back.style.display = "flex"
}

let startGameVerzus = () => {
   playerTwo.name = playername.value
   startGameUI()
   console.log(playerTwo.name)
}

let startGameImpossible = () => {
   playerOne.name = playername.value
   playerTwo.name = "Computer"
   startGameUI()
   ImpossibleComputer()
   ImpossibleComputer = true 
}

let startGameComputer = () => {
   playerOne.name = playername.value
   playerTwo.name = "Computer"
   startGameUI()
   randomComputer = true 
}

let randomComputer = false;
let ImpossibleComputer = false;




let restartGame = () => {
   return
}
 

//Player Selection Modal
function selectX(){
      xSelected = true
      oSelected = false
      modalX.style.backgroundImage = 'url(./assets/selected-shape-x.svg)'
      modalO.style.backgroundImage = 'url(./assets/player-selection-o.svg)'
      modalSelection = true;
      CheckInput()
}

function selectO(){
      oSelected = true
      xSelected = false
      modalO.style.backgroundImage = 'url(./assets/selected-shape-o.svg)'
      modalX.style.backgroundImage = 'url(./assets/player-selection-x.svg)'
      modalSelection = true;
      CheckInput()
}

function CheckInput() {
   if (playername.value != "" && modalSelection == true ) {
     next.style.cursor = "pointer"
     next.style.pointerEvents = "all"
     next.style.opacity = 100+"%"
   }
 }
 
function closeModal(){
      next.style.pointerEvents = "none"
      next.style.opacity = 10+"%"
      modal.style.display = "none"
      playername.value = "";
      modalX.style.backgroundImage = 'url(./assets/player-selection-x.svg)'
      modalO.style.backgroundImage = 'url(./assets/player-selection-o.svg)'
    }

let SelectRandom = () => {
let randomNumber
   if (Gameboard.game.length < 9 && !Gameboard.game.includes(randomNumber)) {
      randomNumber =  Math.floor(Math.random() * 9) + 1;} else {
         SelectRandom()
      }  
      if (Gameboard.game.includes(randomNumber)) {
         SelectRandom()
      } else{
         let number = randomNumber
         playerTwo.Selection.push(number)
         Gameboard.game.push(number)
         console.log("PlayerTwo" + " " + playerTwo.Selection)
         console.log("Gameboard = " + Gameboard.game)
         Playerx = true;
         Playero = false;
         addO(number)
         findWinner(playerTwo.Selection, playerTwo.name)   
         tieGame(Gameboard.game)
      }
   }
   

function addX(number) {
   document.getElementById(number).classList.add('already-selected')
   title.src = "./assets/oturn.svg"
   const Selection = document.createElement("div");
      Selection.classList.add('player-selection-x');
      document.getElementById(number).appendChild(Selection)
}   

function addO(number) {
   document.getElementById(number).classList.add('already-selected')
   title.src = "./assets/xturn.svg"
   const Selection = document.createElement("div");
   Selection.classList.add('player-selection-o');
   document.getElementById(number).appendChild(Selection)
}

function Selected(number) {      
   if (ImpossibleComputer == true) {
         playerOne.Selection.push(number)
         Gameboard.game.push(number)
         Playerx = false;
         Playero = true;
         addX(number)
         findWinner(playerOne.Selection, playerOne.name)
         tieGame(Gameboard.game)
         SelectRandom()
      }
   else if (randomComputer == true) {
      if (Playerx == true && Playero == false) {
         playerOne.Selection.push(number)
         Gameboard.game.push(number)
         Playerx = false;
         Playero = true;
         addX(number)
         findWinner(playerOne.Selection, playerOne.name)
         tieGame(Gameboard.game)
         SelectRandom()
       }
   } else {
   if (Playerx == true && Playero == false) {
      playerOne.Selection.push(number)
      Gameboard.game.push(number)
      Playerx = false;
      Playero = true;
      addX(number)
      findWinner(playerOne.Selection, playerOne.name)
      tieGame(Gameboard.game)
      return playerOne.Selection      
   } else{
      playerTwo.Selection.push(number)
      Gameboard.game.push(number)
      Playerx = true;
      Playero = false;
      addO(number)
      findWinner(playerTwo.Selection, playerTwo.name)   
      tieGame(Gameboard.game)
   }
 }
}

function findWinner(array, player) {
      if(array.includes(1) && array.includes(2) && array.includes(3) 
      || array.includes(1) && array.includes(4) && array.includes(7) 
      || array.includes(1) && array.includes(5) && array.includes(9) 
      || array.includes(1) && array.includes(2) && array.includes(3)
      || array.includes(4) && array.includes(5) && array.includes(6)
      || array.includes(7) && array.includes(8) && array.includes(9)
      || array.includes(2) && array.includes(5) && array.includes(8)
      || array.includes(3) && array.includes(6) && array.includes(9)
      || array.includes(3) && array.includes(5) && array.includes(7)
      ){
         EndGameModal(player)
         return gameOver = true
      };
    }

    function tieGame(array) {
      if (gameOver == true) {
       return
      }else{
      let isTie = true;
      for (let i = 1; i <= 9; i++) {
        if (!array.includes(i)) {
          isTie = false;
          break;
        }
      }
      if (isTie) {
         EndGameModal("tie");
      }
    }
   }


//Impossible


// Create a function to get the indexes of all the empty cells:
function getAvailableMoves(numbers) {
   if (!numbers.every(number => number >= 1 && number <= 9)) {
      return [];
   }

   const fullSet = [1, 2, 3, 4, 5, 6, 7, 8, 9];
   const missingNumbers = fullSet.filter(number => !numbers.includes(number));
   return missingNumbers;
}

function applyMove(gameboard, move, player) {
   // Make a copy of the current gameboard
   var newGameboard = gameboard.slice();
   // Apply the move to the copy of the gameboard
   newGameboard[move] = player;
   // Return the updated gameboard
   return newGameboard;
 }
 

function minimax() {
   let randomNumberImposible
   if (Gameboard.game.length < 9 && !Gameboard.game.includes(randomNumberImposible)) {
      randomNumber =  Math.floor(Math.random() * 9) + 1;} else {
         minimax()
      }  
      if (Gameboard.game.includes(randomNumberImposible)) {
         minimax()
      } else{
         let number = randomNumberImposible
         title.src = "./assets/xturn.svg"
         playerTwo.Selection.push(number)
         Gameboard.game.push(number)
         console.log("PlayerTwo" + " " + playerTwo.Selection)
         console.log("Gameboard = " + Gameboard.game)
         Playerx = true;
         Playero = false;
         console.log(Playerx +" "+ Playero)
         const pSelection = document.createElement("div");
         pSelection.classList.add('player-selection-o');
         document.getElementById(number).appendChild(pSelection)
         findWinner(playerTwo.Selection, playerTwo.name)   
         tieGame(Gameboard.game)
         
      }
   }
   








let track = document.getElementById('track');
let controlBtn = document.getElementById('volume');
let audioImg = document.getElementById('audioImg'); 

function playPause() {
    if (track.paused) {
        track.play();
        audioImg.src = "./assets/volume.svg"
        //controlBtn.textContent = "Pause";
        controlBtn.className = "pause";
    } else { 
        track.pause();
         //controlBtn.textContent = "Play";
        controlBtn.className = "play";
        audioImg.src = "./assets/novolume.svg"
    }
}

controlBtn.addEventListener("click", playPause);
track.addEventListener("ended", function() {
  controlBtn.className = "play";
});



/* 
let player = (name, selection) => {
   let selection = selection;
   let lives = 3;
    return {name, selection, lives}
} */






