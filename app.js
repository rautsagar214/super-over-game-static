// Q1 == vs ===
// Q2 dynamically typed vs statically typed
// Q3 math.floor ?
// Q4 Queryselector vs QuerySelectorall

// Get all Elements from html
const strike = document.getElementById("strike")
const reset = document.getElementById("reset")
const indscore = document.getElementById("ind-score")
const indwicket = document.getElementById("ind-wicket")
const pakscore = document.getElementById("pak-score")
const pakwicket = document.getElementById("pak-wicket")

let Team1Scores = 0;
let Team2Scores = 0;
let Team1Wickets = 0;
let Team2Wickets = 0;
let Turn = 1;
let Team1BallCount = 0;
let Team2BallCount = 0;

const runs = [0,1,2,3,4,5,6,"W"]

const gameoveraudio = new Audio("http://bit.ly/so-crowd-cheer");
const strikeaudio = new Audio("http://bit.ly/so-ball-hit");

function GameOver(){
    gameoveraudio.play()

    if(Team1Scores > Team2Scores){
        alert("India Won...!!!");
    }else if(Team1Scores < Team2Scores){
        alert("Pakistan Won...!!!");
    }else if(Team1Scores == Team2Scores){
        alert("Match Tied..!!");
    }
}

function UpdateScores(){

    indscore.textContent = Team1Scores;
    pakscore.textContent = Team2Scores;
    indwicket.textContent = Team1Wickets;
    pakwicket.textContent = Team2Wickets;
}

function strikefunction(){
    strikeaudio.pause();
    strikeaudio.currentTime = 0;
    strikeaudio.play();

    const randomnum = runs[Math.floor(Math.random()*runs.length)]
    console.log(randomnum)

    if (Turn == 2){
        //inc count
        //update the score in circle
        Team2BallCount++
        document.querySelector(`#Pakistan :nth-child(${Team2BallCount})`).textContent = randomnum
        
        if (randomnum == "W"){
            Team2Wickets++
            UpdateScores()

        }else{
            Team2Scores+=randomnum
            UpdateScores()
        }
        if ((Team2Wickets == 2) || (Team2BallCount == 6) || (Team2Scores > Team1Scores)){
            Turn = 3
            GameOver()
        }
    }
    else if(Turn == 1){
        Team1BallCount++
        document.querySelector(`#India :nth-child(${Team1BallCount})`).textContent = randomnum

        if (randomnum == "W"){
            Team1Wickets++
            
            
        }else{
            Team1Scores+=randomnum
            console.log(Team1Scores)
            
        }
        UpdateScores()
        if ((Team1Wickets == 2) || (Team1BallCount == 6)){
            Turn = 2
        }
        

    }
    // UpdateScores()
}   

function rest(){
    window.location.reload()
}