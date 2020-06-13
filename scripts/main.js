let playerScore = 0; //Stores Player's Score
let computerScore = 0; //Stores Computer's Score

console.log("start!")
let playerSelectionhc="";  //Player's Selection in Higher Case
let computerSelectionhc=""; //Computer's Selection in Higher Case

let round = 0;  //Number of rounds played
let resultCounter = 0;  //Number of results displayed


let resultclm = document.querySelector("#result1");  //Selecting 1st Column for displaying result

let compImage = document.querySelector('#comp-img');  //Computer's Selection's Image
let playerImage = document.querySelector('#player-img');  //Player's Selection's Image


const selectionsList = document.querySelectorAll(".selections-list") //Selects all buttons (Rock, Paper, Scissor)
selectionsList.forEach(selections => selections.addEventListener('click', playerPlay));  //Adds EventListner for all above mentioned buttons

function playerPlay(e) //After one of the options is clicked, this funcion finds out which button was pressed
{
    rawSelection = e.target.id;  //Finding which option was selected via ID
    if(!rawSelection) return;    //If selection is empty, no option is clicked, return
    playerSelectionhc=rawSelection.toUpperCase(); 
    console.log(`S:${playerSelectionhc}`);
    changeImageplayer(playerSelectionhc);  //Changes player Image to current selection
    game();  //starts game
}

function changeImagecomp(imageof){
        
        if(imageof === 'rock') {
            compImage.setAttribute ('src','./images/rock.png');
        }else if(imageof === 'paper') {
            compImage.setAttribute ('src','./images/paper.png'); 
        }else {
            compImage.setAttribute ('src','./images/scissor.png');
        }
}
function changeImageplayer(imageof){
    
    if(imageof === 'ROCK') {
        playerImage.setAttribute ('src','./images/rock.png');
    }else if(imageof === 'PAPER') {
        playerImage.setAttribute ('src','./images/paper.png'); 
    }else {
        playerImage.setAttribute ('src','./images/scissor.png');
    }


function game(){
    round++;
    computerSelectionhc = computerPlay(); //Randomly Selects Computer's Move

    let results = play(computerSelectionhc, playerSelectionhc);  //Finds out who won
    if(results==="Player"){
        playerScore++;
        
    }
    else if(results==="Computer"){
        computerScore++;
    }

    function computerPlay(){  //Randomly Selecting Computer's move
        let randomizedNum = Math.random()*3

        if(randomizedNum<=1){
            console.log("Rock");
            changeImagecomp("rock");
            return "ROCK";
            
        }
        else if(randomizedNum<=2){
            console.log("Paper");
            changeImagecomp("paper");
            return "PAPER"; 
        }
        else{
            console.log("Scissor");
            changeImagecomp("scissor");
            return "SCISSOR";
        }
    }

    function play(computerSelectionhc, playerSelectionhc){  

        console.log(`selections:Computer->${computerSelectionhc}----Player->${playerSelectionhc}`)

        if(computerSelectionhc==="ROCK" && playerSelectionhc==="PAPER"){
            console.log("Yayy! You Win!");
            resultclm.insertAdjacentHTML("afterbegin", `<p>Round-${round}:Computer->${computerSelectionhc}----Player->${playerSelectionhc}<br>Yayy! You Win!<p><br>`);
            resultCounter++;
            return "Player";
        }else if(computerSelectionhc==="PAPER" && playerSelectionhc==="SCISSOR"){
            console.log("Yayy! You Win!");
            resultclm.insertAdjacentHTML("afterbegin", `<p>Round-${round}:Computer->${computerSelectionhc}----Player->${playerSelectionhc}<br>Yayy! You Win!<p><br>`);
            resultCounter++;
            return "Player";
        }else if(computerSelectionhc==="SCISSOR" && playerSelectionhc==="ROCK"){
            console.log("Yayy! You Win!");
            resultclm.insertAdjacentHTML("afterbegin", `<p>Round-${round}:Computer->${computerSelectionhc}----Player->${playerSelectionhc}<br>Yayy! You Win!<p><br>`);
            resultCounter++;
            return "Player";
        }else if(computerSelectionhc===playerSelectionhc){
            console.log("Argg!! A Draw");
            resultclm.insertAdjacentHTML("afterbegin", `<p>Round-${round}:Computer->${computerSelectionhc}----Player->${playerSelectionhc}<br>Argg! A Draw!<p><br>`);
            resultCounter++;
            return "Draw";
        }
        else{
            console.log("Ahh! Computer Wins!");
            resultclm.insertAdjacentHTML("afterbegin", `<p>Round-${round}:Computer->${computerSelectionhc}----Player->${playerSelectionhc}<br>Ahh! You Lose!<p><br>`);
            resultCounter++;
            return "Computer";    
        }

    }
    
        
        console.log(`ROUND ${round}--Computer:${computerScore}  Player:${playerScore}`)

        document.getElementById("player").textContent = playerScore;  //Updates Player Score
        document.getElementById("comp").textContent = computerScore;  //Updates Computer Score


        if (resultCounter>5){resultclm = document.querySelector("#result2");} //Starts displaying results in column 2 after column 1 is filled
       
        playAgain(); //Asks if you want to play again

        function playAgain(){
            if(computerScore+playerScore===5 && computerScore>playerScore){
                if(confirm("Computer Wins! Press 'OK' to Play Again.")){
                    location=location; //Refreshes Page
                }
                else{
                    return;
                }
            }
            else if(computerScore+playerScore===5 && computerScore<playerScore){
                if(confirm("Hurray! You Win! Press 'OK' to Play Again.")){
                    location=location; //Refreshes Page
                }
                else{
                    return;
                }
            }
        }

        
    }
    return;
}




