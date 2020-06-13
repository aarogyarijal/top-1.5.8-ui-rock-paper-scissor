let playerScore = 0;
let computerScore = 0;


play();

function play(){
    console.log("start!")
    let playerSelectionhc="";
    let computerSelectionhc="";

    let round = 0;
    let resultCounter = 0;


    let resultclm = document.querySelector("#result1");
    



    const selectionsList = document.querySelectorAll(".selections-list")
    selectionsList.forEach(selections => selections.addEventListener('click', playerPlay));

    function playerPlay(e){
        rawSelection = e.target.id;
        if(!rawSelection) return;
        playerSelectionhc=rawSelection.toUpperCase();
        console.log(`S:${playerSelectionhc}`);
        game();
    }

    function computerPlay(){
        let randomizedNum = Math.random()*3

        if(randomizedNum<=1){
            console.log("Rock");
            return "ROCK";
            
        }
        else if(randomizedNum<=2){
            console.log("Paper");
            return "PAPER"; 
        }
        else{
            console.log("Scissor");
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
    function game(){
        round++;
        computerSelectionhc = computerPlay();

        let results = play(computerSelectionhc, playerSelectionhc);
        if(results==="Player"){
            playerScore++;
            
        }
        else if(results==="Computer"){
            computerScore++;
        }
        
        console.log(`ROUND ${round}--Computer:${computerScore}  Player:${playerScore}`)

        document.getElementById("player").textContent = playerScore;
        document.getElementById("comp").textContent = computerScore;

        if (resultCounter>5){resultclm = document.querySelector("#result2");}
       

        if(computerScore+playerScore===5 && computerScore>playerScore){
            if(confirm("Computer Wins! Press 'OK' to Play Again.")){
                location=location;
            }
            else{
                return;
            }
        }
        else if(computerScore+playerScore===5 && computerScore<playerScore){
            if(confirm("Hurray! You Win! Press 'OK' to Play Again.")){
                location=location;
            }
            else{
                return;
            }
        }

        
    }
    return;
}




