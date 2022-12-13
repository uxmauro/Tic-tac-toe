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

let Playerx = true
let Playero = false

function Selected(number) {   
   
   
   const title = document.getElementById("titleText")
   
   
   
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
const elementSelection = (id, wasSelected) => {
     
} */

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


/* loop after each selection if array contains 

1 && 2 && 3 || 4 && 5 && 6 || 7 && 8 && 9 || 1 && 4 && 7 || 1 && 5 && 9 || 2 && 5 && 8 || 3 && 6 && 9 || 3 && 5 && 7
User wins
*/

/* if 1 - 9 are used and no winner then tie */



//Logic: if not selected set in array and mark on display

//Logic: show winner when a user connects three


// Logic for rounds

//winning secuences

/*  123
    456
    789 */

/* 123,147,159 , 258, 369, 753, 789 */

//how to know which user played

// X & O

//draw
/* If player X && player O did not win and there are no more fileds */

//1vs1, 1 vs Computer, 1 vs imposible



