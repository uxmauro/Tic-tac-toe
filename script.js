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

back.addEventListener("click", () => window.location.reload() )

let playername = document.getElementById("Player-name");
let next = document.getElementById('next')
let start = document.getElementById('start')
let gameboard = document.querySelector(".gameboard")
let chooseGame = document.querySelector(".chooseGame")

playername.addEventListener('input', CheckInput);

let Playerx = true
let Playero = false

let modalSelection = false;

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
   next.addEventListener('click', () => startGameImpossible())
}

function impossible() {
   modal.style.display = "flex"
   next.style.backgroundImage = 'url(./assets/start.svg)'
   next.addEventListener('click', () => startGameImpossible())

}

let nextPlayerGameVersus = () => {
   modalX.style.display = "none"
   modalO.style.display = "none"
   modlaPlayerTitle.src = ("./assets/playertwo-title.svg")
   selectShapeTitle.style.display = "none"
   playername.value = "";
   next.style.display = "none"
   start.style.display = "flex"
   playername.addEventListener('input', () => ChangePlayerTwo ())
   let ChangePlayerTwo = () => {
      start.style.cursor = "pointer"
      start.style.pointerEvents = "all"
      start.style.opacity = 100+"%"
      start.addEventListener("click", () => startGameImpossible() )
   }
 
 
}

let startGameImpossible = () => {
   closeModal()
   title.src = "./assets/xturn.svg"
   gameboard.style.display = "grid"
   chooseGame.style.display = "none"
   restart.style.display = "flex"
   back.style.display = "flex"
}



 

//Player Selection Modal
function selectX(selected){
      let x = document.getElementById(selected.id)
      x.style.backgroundImage = 'url(./assets/selected-shape-x.svg)'
      let o = document.getElementById('player-selection-o')
      o.style.backgroundImage = 'url(./assets/player-selection-o.svg)'
      modalSelection = true;
      CheckInput()
}

function selectO(selected){
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



function Selected(number) {   
   console.log(number)
   document.getElementById(number).classList.add('already-selected')
   if (Playerx == true && Playero == false) {
      title.src = "./assets/oturn.svg"
      playerOne.Selection.push(number)
      console.log("PlayerOne" + " " + playerOne.Selection)
      console.log(playerOne)
      Playerx = false;
      Playero = true;
      console.log(Playerx +" "+ Playero)
      const pSelection = document.createElement("div");
      pSelection.classList.add('player-selection-x');
      document.getElementById(number).appendChild(pSelection)

      findWinner(playerOne.Selection, "PlayerOne")
      return playerOne.Selection      
   } else{
      title.src = "./assets/xturn.svg"
      playerTwo.Selection.push(number)
      console.log("PlayerTwo" + " " + playerTwo.Selection)
      console.log(playerTwo)
      
   Playerx = true;
   Playero = false;
   console.log(Playerx +" "+ Playero)


   const pSelection = document.createElement("div");
   pSelection.classList.add('player-selection-o');
   document.getElementById(number).appendChild(pSelection)

   findWinner(playerTwo.Selection, "PlayerTwo")   
}




}
let playerOne = {
   Selection: []
}


let playerTwo = {
   Selection: []
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
         alert(player +"  Wins!")
      };
    }




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

//Set up Gameboard Array in gameboard object

let Gameboard = {
     game: [1,2,3,4,5,6,7,8,9]
}

console.log(Gameboard.game)





