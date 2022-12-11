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


let setElement = false

//Event Listeners
one.addEventListener("click", () => Selected(1, setElement))
two.addEventListener("click", () => Selected(2, setElement)) 
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
 playerOne.Selection.push(number)
 console.log(number)
 console.log("PlayerOne" + " " + playerOne.Selection)
 console.log(playerOne)
 document.getElementById(number).classList.add('already-selected')
 if (Playerx == true && Playero == false) {
   Playerx = false;
   Playero = true;
   console.log(Playerx +" "+ Playero)
   const pSelection = document.createElement("div");
   pSelection.classList.add('player-selection-x');
   document.getElementById(number).appendChild(pSelection)

} else{
   Playerx = true;
   Playero = false;
   console.log(Playerx +" "+ Playero)

   const pSelection = document.createElement("div");
   pSelection.classList.add('player-selection-o');
   document.getElementById(number).appendChild(pSelection)
}


}
let playerOne = {
   Selection: []
}


let playerTwo = {
   Selection: []
}







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

