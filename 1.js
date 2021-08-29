let user_score=0
let comp_score=0
let comp_span = document.getElementById("comp-score")
const user_score_span= document.getElementById("user-score")
// const comp_score_span= document.getElementById("comp-score")
const result_p= document.querySelector(".result > p")
const scoreboard_div= document.querySelector(".score-board")
const rock_div= document.getElementById("r")
const paper_div= document.getElementById("p")
const scissor_div= document.getElementById("s")

function getcomputer(){
     const choices=['r', 'p', 's']
     const rand_nbr = Math.floor(Math.random()*3);
     return choices[rand_nbr]
}
function convertword(letter){
     if( letter=="r") return "Rock";
     if (letter == "p") return "Paper";
     return "Scissor";


}
function win(userchoice , compchoice){
     user_score++;
     // comp_score--;
     user_score_span.innerHTML=user_score;
     comp_span.innerHTML=comp_score
     // comp_span.innerHTML=comp_score;
     const smalluser= "(user)".fontsize(3).sub()
     const smallcomp= "(comp)".fontsize(3).sub()

     result_p.innerHTML= convertword(userchoice) + smalluser  + "  Beats " + convertword(compchoice)+ smallcomp + " You Win!"
     
}     
function loss(userchoice ,compchoice){
     user_score;
     comp_score++;
     user_score_span.innerHTML=user_score;
     comp_span.innerHTML=comp_score
     // comp_span.innerHTML=comp_score;
     const smalluser= "(user)".fontsize(3).sub()
     const smallcomp= "(comp)".fontsize(3).sub()

     result_p.innerHTML= convertword(userchoice) + smalluser  + "  lost to " + convertword(compchoice)+ smallcomp + " You loss!"
     
}     

function draw(userchoice,compchoice){
     user_score_span.innerHTML=user_score;
     comp_span.innerHTML=comp_score
     // comp_span.innerHTML=comp_score;
     const smalluser= "(user)".fontsize(3).sub()
     const smallcomp= "(comp)".fontsize(3).sub()

     result_p.innerHTML= convertword(userchoice) + smalluser  + "  equals" + convertword(compchoice)+ smallcomp + " Its Draw!"
     
}     


function Game(userchoice){
     const compchoice=getcomputer();
     switch (userchoice + compchoice){
          case "rs":
          case "pr":
          case "sp":
             win(userchoice, compchoice)
             break;
          case "sr":
          case "rp":
          case "ps":
             loss(userchoice,compchoice)
             break;    

          case "ss":
          case "rr":
          case "pp":
            draw(userchoice , compchoice)
            break;

     }



}    

function main() {

rock_div.addEventListener('click',function() {
          Game("r");
        })
paper_div.addEventListener('click',function() {
          Game("p");
        })
scissor_div.addEventListener('click',function() {
          Game("s");
        })
     }
main() 