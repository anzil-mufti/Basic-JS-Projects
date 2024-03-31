let randomNumber=parseInt(Math.random()*100+1)
const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')
const p=document.createElement('p')

let prevGuess=[]
let numGuess=1

let playGame=true //always taken in the games

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess=parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess){
    //to check if the guess is valid, not alphabet, <1 or >500
    if(isNaN(guess))
    alert('Please enter a valid number')
    else if(guess<1)
    alert('Please enter a valid number more than 1')
    else if(guess>100)
    alert('Please enter a valid number')
    else{
        prevGuess.push(guess)
        if(numGuess===11){
            displayGuess(guess)
            displayMessage(`Game over, Random number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)

        }
    }

}
function checkGuess(guess){
    //checking if the guess is correct or not
        if (guess === randomNumber) {
        displayMessage(`You guessed it right`);
        endGame();
      } else if (guess < randomNumber) {
        displayMessage(`Number is TOOO low`);
      } else  if(guess > randomNumber) {
        displayMessage(`Number is TOOO High`);
      }
}
function displayGuess(guess){
    //display prevGuess and guessremaining--, empty the box
    userInput.value=''  //clearing up
    guessSlot.innerHTML+=` ${guess}`
    numGuess++;
    remaining.innerHTML=`${10-numGuess}`
}
function displayMessage(message){
   lowOrHi.innerHTML=`<h2>${message}</h2>`
}

function newGame(){
  //we'll create a start new game button
  const newGameBtn=document.querySelector('#newGame')
  newGameBtn.addEventListener('click',function(e){
    randomNumber=parseInt(Math.random()*100+1)
    prevGuess=[]
    numGuess=1
    guessSlot.innerHTML=''
    remaining.innerHTML=`${10-numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame=true
  })
}
function endGame(){
  userInput.value=''
  userInput.setAttribute('disabled','') //disabled is always set in key-value pair
  p.classList.add('button')
  p.innerHTML=`<h2 id="newGame">Start new Game</h2>`
  startOver.appendChild(p)
  playGame=false
  newGame()
}