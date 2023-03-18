
const modal = document.querySelector(".modal")
const modalBack = document.querySelector(".modalBack")
const endofgamemodal = document.querySelector(".end-game-modal")
const modalX = document.getElementById("player-selection-x")
const modalO = document.getElementById("player-selection-o")
const modalPlayerTitle = document.getElementById("modal-title-player")
const selectShapeTitle = document.getElementById("selectShape")
const WinnerplayerName = document.getElementById("player-winner-name")
const mainMenuButton = document.getElementById("main-menu")
const vs = document.getElementById("vs")
const computerButton = document.getElementById("computer")
const impossibleButton = document.getElementById("impossible")
const playAgainBtn = document.getElementById("play-again")
const mainMenu = document.getElementById("main-menu")
const gameMessage = document.getElementById("game-message")
const restart = document.querySelector("#restart")
const back = document.querySelector("#back")
const title = document.getElementById("titleText")
const squares =  document.querySelectorAll(".game-selection")
const playername = document.getElementById("Player-name");
const next = document.getElementById('next')
const start = document.getElementById('start')
const gameboard = document.querySelector(".gameboard")
const chooseGame = document.querySelector(".chooseGame")

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




let randomComputer = false;
let impossibleComputer = false;

let modalSelection = false;
let xSelected = false
let oSelected = false
let turn = ""
//Set up Gameboard Array in gameboard object
let Gameboard = {
   game: [],
   x: [],
   o: []
}


let playerOne = {
   Selection: [],
   name: "",
   shape: "",
}


let playerTwo = {
   Selection: [],
   name: "",
   shape: "",
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



const startGameUI = () => {
   closeModal()
   title.src = "./assets/xturn.svg"
   gameboard.style.display = "grid"
   chooseGame.style.display = "none"
   restart.style.display = "flex"
   back.style.display = "flex"
}

const startGameVerzus = () => {
   if (playerOne.shape == "x") {
      turn = "playerOne"
   }else if (playerOne.shape == "o") {
      turn = "playerTwo"
   }
   playerTwo.name = playername.value
   startGameUI()
}

const startGameImpossible = () => {
   if (playerOne.shape == "x") {
      turn = "playerOne"
   }else if (playerOne.shape == "o") {
      turn = "playerTwo"
   }
   impossibleComputer = true
   playerOne.name = playername.value
   playerTwo.name = "Computer"
   startGameUI() 
}

let startGameComputer = () => {
   if (playerOne.shape == "x") {
      turn = "playerOne"
   }else if (playerOne.shape == "o") {
      turn = "playerTwo"
      SelectRandom()
   }
   randomComputer = true
   playerOne.name = playername.value
   playerTwo.name = "Computer"
   startGameUI()
}




let restartGame = () => {
   return
}
 

//Player Selection Modal
function selectX(){
      playerOne.shape = "x",
      playerTwo.shape = "o"
      modalX.style.backgroundImage = 'url(./assets/selected-shape-x.svg)'
      modalO.style.backgroundImage = 'url(./assets/player-selection-o.svg)'
      modalSelection = true;
      CheckInput()
}

function selectO(){
      playerOne.shape = "o",
      playerTwo.shape = "x"
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
         Selected(number)
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
  if (turn == "playerOne"){
      playerOne.Selection.push(number)
      Gameboard.game.push(number)
      findWinner(playerOne.Selection, playerOne.name)
      tieGame(Gameboard.game)
      if (playerOne.shape == "x"){
      addX(number)
      }
      else{
      addO(number)
      }
      turn = "playerTwo"
      if (randomComputer == true) {
         SelectRandom();
      }
      if (impossibleComputer == true) {
         minimax();
      }
     return [playerOne.Selection, turn]
  }  
  if(turn == "playerTwo"){
      playerTwo.Selection.push(number)
      Gameboard.game.push(number)
      findWinner(playerTwo.Selection, playerTwo.name)   
      tieGame(Gameboard.game)
      if (playerTwo.shape == "x"){
         addX(number)
         }else{
         addO(number)
         }
      turn = "playerOne"
      return [playerTwo.Selection,turn]   
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

/*  
function minimax() {
   let randomNumber
   if (Gameboard.game.length < 9 && !Gameboard.game.includes(randomNumber)) {
      randomNumber =  Math.floor(Math.random() * 9) + 1;} else {
         minimax()
      }  
      if (Gameboard.game.includes(randomNumber)) {
         minimax()
      } else{
         let number = randomNumber
         Selected(number)
      }
   } */





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








