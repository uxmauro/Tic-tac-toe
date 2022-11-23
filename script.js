
let calculator = (() => {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;
  return {
    add,
    sub,
    mul,
    div,
  };
})();


console.log(calculator.mul(3,5));


let gameMechanics = (()=> {

const winRound = ([b]) => b;
return{
  winRound
}

})()

console.log(gameMechanics.winRound([90, 2]))



