//Get Elements
let one = document.getElementById("1")
let two = document.getElementById("2")
let three = document.getElementById("3")
let four = document.getElementById("4")
let five = document.getElementById("5")
let six = document.getElementById("6")
let seven = document.getElementById("7")
let eight = document.getElementById("8")
let nine = document.getElementById("9")

let modal = document.querySelector(".modal")
let modalX = document.getElementById("player-selection-x")
let modalO = document.getElementById("player-selection-o")
let modlaPlayerTitle = document.getElementById("modal-title-player")
let selectShapeTitle = document.getElementById("selectShape")

let restart = document.querySelector("#restart")
let back = document.querySelector("#back")


const title = document.getElementById("titleText")

//Event Listeners
one.addEventListener("click", () => Selected(1))
two.addEventListener("click", () => Selected(2)) 
three.addEventListener("click", () => Selected(3)) 
four.addEventListener("click", () => Selected(4)) 
five.addEventListener("click", () => Selected(5)) 
six.addEventListener("click", () => Selected(6)) 
seven.addEventListener("click", () => Selected(7)) 
eight.addEventListener("click", () => Selected(8)) 
nine.addEventListener("click", () => Selected(9)) 

back.addEventListener("click", () => window.location.reload())

let playername = document.getElementById("Player-name");
let next = document.getElementById('next')
let start = document.getElementById('start')
let gameboard = document.querySelector(".gameboard")
let chooseGame = document.querySelector(".chooseGame")

playername.addEventListener('input', CheckInput);

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


function verzus() {
   modal.style.display = "flex"
   next.style.backgroundImage = 'url(./assets/next.svg)'
   next.addEventListener('click', () => nextPlayerGameVersus())
}

function computer() {
   modal.style.display = "flex"
   next.style.backgroundImage = 'url(./assets/start.svg)'
   next.addEventListener('click', () => startGameComputer())
}

function impossible() {
   modal.style.display = "flex"
   next.style.backgroundImage = 'url(./assets/start.svg)'
   next.addEventListener('click', () => startGameImpossible())

}


let nextPlayerGameVersus = () => {
if (oSelected == true) {
   console.log('test')
}
 else if (xSelected == true) {
   console.log('testing x')
}
   playerOne.name = playername.value
   modalX.style.display = "none"
   modalO.style.display = "none"
   modlaPlayerTitle.src = ("./assets/playertwo-title.svg")
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
   startGameUI()
   console.log(playerTwo.name)
}

let startGameImpossible = () => {
   startGameUI()
}

let startGameComputer = () => {
   startGameUI()
   randomComputerLogic()
}

let randomComputer = false;

let randomComputerLogic = () => {
   randomComputer = true
  
}

let restartGame = () => {
   return
}
 

//Player Selection Modal
function selectX(selected){
      xSelected = true
      oSelected = false
      let x = document.getElementById(selected.id)
      x.style.backgroundImage = 'url(./assets/selected-shape-x.svg)'
      let o = document.getElementById('player-selection-o')
      o.style.backgroundImage = 'url(./assets/player-selection-o.svg)'
      modalSelection = true;
      CheckInput()
}

function selectO(selected){
      oSelected = true
      xSelected = false
      let o = document.getElementById(selected.id)
      o.style.backgroundImage = 'url(./assets/selected-shape-o.svg)'
      let x = document.getElementById('player-selection-x')
      x.style.backgroundImage = 'url(./assets/player-selection-x.svg)'
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
      modalO = 'url(./assets/player-selection-o.svg)'
      modalX = 'url(./assets/player-selection-x.svg)'

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
   


function Selected(number) {   
   if (randomComputer == true) {
      if (Playerx == true && Playero == false) {
         title.src = "./assets/oturn.svg"
         playerOne.Selection.push(number)
         Gameboard.game.push(number)
         console.log("PlayerOne" + " " + playerOne.Selection)
         console.log(playerOne)
         console.log("Gameboard = " + Gameboard.game)
         Playerx = false;
         Playero = true;
         console.log(Playerx +" "+ Playero)
         const pSelection = document.createElement("div");
         pSelection.classList.add('player-selection-x');
         document.getElementById(number).appendChild(pSelection)
         findWinner(playerOne.Selection, playerOne.name)
         tieGame(Gameboard.game)
         SelectRandom()
      }
      } else{
   document.getElementById(number).classList.add('already-selected')
   if (Playerx == true && Playero == false) {
      title.src = "./assets/oturn.svg"
      playerOne.Selection.push(number)
      Gameboard.game.push(number)
      console.log("PlayerOne" + " " + playerOne.Selection)
      console.log(playerOne)
      console.log("Gameboard = " + Gameboard.game)
      Playerx = false;
      Playero = true;
      console.log(Playerx +" "+ Playero)
      const pSelection = document.createElement("div");
      pSelection.classList.add('player-selection-x');
      document.getElementById(number).appendChild(pSelection)
      findWinner(playerOne.Selection, playerOne.name)
      tieGame(Gameboard.game)
      return playerOne.Selection      
   } else{
      title.src = "./assets/xturn.svg"
      playerTwo.Selection.push(number)
      Gameboard.game.push(number)
      console.log("PlayerTwo" + " " + playerTwo.Selection)
      console.log(playerTwo)
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

}}
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
         alert(player +"  Wins!")
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
        alert("tie!!!");
      }
    }
   }


//Background Music    
window.onload = function() {
   document.getElementById("track").play();
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









