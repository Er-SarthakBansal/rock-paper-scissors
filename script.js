
let scoreStr=localStorage.getItem('score');
let score=JSON.parse(scoreStr)||{
    won:0,
    lost:0,
    tie:0,
}
score.displayRecord = function () {
  return `WON: ${this.won}  LOST: ${this.lost}  TIE: ${this.tie}`;
};
// This line displays the saved score when the page loads
document.querySelector('#score').innerText =
  `TOTAL SCORE IS:- ${score.displayRecord()}.`;

function generateCompChoice(){
  let randomNum=Math.random()*3;

  if(randomNum<1 && randomNum<=1){
  return'ROCK';
  }
  else if(randomNum>1 && randomNum<=2){
  return'PAPER';
  }
  else{
  return'SCISSORS';
  }
}
function findResult(userChoice,botChoice){
  if(botChoice == userChoice){
    score.tie++;
    return `IT'S A TIE.`;
  }
    else if(botChoice == 'SCISSORS' && userChoice == 'ROCK'){
    score.won++;
    return 'USER HAS WON.';
  }
    else if(botChoice == 'ROCK' && userChoice == 'PAPER'){
    score.won++;
    return 'USER HAS WON.';
  }
  else if (botChoice == 'PAPER' && userChoice == 'SCISSORS'){
    score.won++;
    return 'USER HAS WON.'
  }
  else{
    score.lost++;
    return 'COMPUTER HAS WON.'
  }
}
function showResult(userChoice,botChoice,result){
  localStorage.setItem('score',JSON.stringify(score));
  document.querySelector('#user-move').innerText = 
  `YOU HAVE CHOOSEN THE ${userChoice}`
  document.querySelector('#comp-move').innerText = 
  `COMPUTER CHOICE IS ${botChoice}`
  document.querySelector('#result').innerText = 
  `SO, ${result}`
  document.querySelector('#score').innerText = 
  `TOTAL SCORE IS:- ${score.displayRecord()}`

}