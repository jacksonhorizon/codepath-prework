/*
This is your site JavaScript code - you can add interactivity and carry out processing
- Initially the JS writes a message to the console, and moves a button you can add from the README
*/


// global constants
const cluePauseTime = 1000; //how long to pause in between clues
const nextClueWaitTime = 2000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [6, 5, 6, 5, 6, 2, 4, 3, 1]; 
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var strikes = 0;

function startGame(){
  //initialize game variables
  playStartGameAudio();
  progress = 0;
  strikes = 0;
  gamePlaying = true;
  // generates random pattern
  for (var i = 0; i < 9; i++){
    pattern[i] = getRandomInt(6) + 1;
  }
  clearStrikes();
  
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  setTimeout(function(){
    playClueSequence();
  }, 3700);
}

function stopGame(){
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  clueHoldTime = 1000;
}

function getRandomInt(max) {
  // returns random int between 0 and max
  return Math.floor(Math.random() * max);
}

function lightButton(btn){
  // lights button
  document.getElementById("button"+btn).classList.add("lit");
}

function clearButton(btn){
  // un-lights button
  document.getElementById("button"+btn).classList.remove("lit");
}

function playSingleClue(btn){
  // plays single clue
  if(gamePlaying){
    lightButton(btn);
    if(btn == 1){
      playTwistitPrompt();
    } else if(btn == 2){
      playBopitPrompt();
    } else if(btn == 3){
      playSpinitPrompt();
    } else if(btn == 4){
      playFlickitPrompt();
    } else if(btn == 5){
      playShakeitPrompt();
    } else if(btn == 6){
      playPullitPrompt();
    }
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  // decreases clueHoldTime as a percentage of current hold time
  clueHoldTime -= 0.2 * clueHoldTime;
  guessCounter = 0;
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

function loseGame(){
  stopGame();
  playLoseGameAudio();
  setTimeout(function(){
 	alert("Game Over. You lost.");
}, 2000);//wait 2 seconds
}

function winGame(){
  stopGame();
  playWinGameAudio();
  setTimeout(function(){
 	alert("Game Over. You win!");
}, 2000);//wait 2 seconds
  clearStrikes();
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  } 
  
  if(pattern[guessCounter] != btn){
    strikes += 1;
    if (strikes < 3){
      console.log("strike: " + strikes);
      setTimeout(function(){playStrikeAudio()}, 1300);
      setTimeout(function(){lightStrike(strikes)}, 1300);
      return;
    }
    else{
      lightStrike(strikes);
      loseGame();
    }
  }
  
  guessCounter += 1;
  if (guessCounter >= pattern.length){
    winGame();
    return;
  } else if (progress == guessCounter - 1){
    progress += 1;
    playClueSequence();
  }
}

function lightStrike(btn){
  document.getElementById("strike"+ btn).classList.add("lit");
}

function clearStrikes(){
  document.getElementById("strike1").classList.remove("lit");
  document.getElementById("strike2").classList.remove("lit");
  document.getElementById("strike3").classList.remove("lit");
}




// Sound Synthesis Functions
function playStartGameAudio(){
  var start = document.getElementById("startGameAudio");
  start.play();
}

function playStrikeAudio(){
  var num = getRandomInt(8);
  var strike = document.getElementById("strikeAudio"+ num);
  strike.play();
}

function playLoseGameAudio(){
  var num = getRandomInt(3);
  var lose = document.getElementById("loseAudio"+ num);
  lose.play();
}

function playWinGameAudio(){
  var win = document.getElementById("winAudio");
  win.play();
}

var twist = document.getElementById("twistitPrompt"); 

function playTwistitPrompt() { 
  twist.play(); 
}

var bop = document.getElementById("bopitPrompt"); 

function playBopitPrompt() { 
  bop.play(); 
}

var spin = document.getElementById("spinitPrompt"); 

function playSpinitPrompt() { 
  spin.play(); 
}

var flick = document.getElementById("flickitPrompt"); 

function playFlickitPrompt() { 
  flick.play(); 
}

var shake = document.getElementById("shakeitPrompt"); 

function playShakeitPrompt() { 
  shake.play(); 
}

var pull = document.getElementById("pullitPrompt"); 

function playPullitPrompt() { 
  pull.play(); 
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)
