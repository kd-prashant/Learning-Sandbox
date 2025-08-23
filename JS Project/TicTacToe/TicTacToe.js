

let turn = "O";
let totalTURN= 0;


let winingConditon= [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
];


let userIP= new Array(9).fill("E");

function checkWinner(){
    for(let [ind1, ind2, ind3] of winingConditon){
        if(userIP[ind1]!=="E" && userIP[ind1] === userIP[ind2] && userIP[ind1] === userIP[ind3])
            return true;

    }   
    return false;
}

// Add this at the start of your script or in window.onload
document.getElementById('imgplayer1').style.transform = "scale(1.3)"; // Player 1 starts big
document.getElementById('imgplayer2').style.transform = "scale(1)";   // Player 2 starts normal



const eventAction= (event)=>{
    // console.log(event.target.id);

    const print= event.target;
    const child= document.getElementById(event.target.id);
    
    if(userIP[child.id] === "E"){
        
        totalTURN++;
    
        if(turn === "O"){
            child.style.background= "linear-gradient(blue,crimson)";

            userIP[event.target.id]= "O";
            print.innerHTML= "O";

            if(checkWinner()){
                document.getElementById('winnerMSG').innerText= "Player 1 is Winner";

                document.querySelector('.board').removeEventListener('click', eventAction);
                
                return;
            }

            turn = "X";
            document.getElementById('imgplayer2').style.transform= "scale(1.8)";
            document.getElementById('imgplayer1').style.transform= "scale(1)";

        }
        else{
            child.style.background= "linear-gradient(green,purple)";

            userIP[event.target.id]= "X";
            print.innerHTML= "X";

            
            if(checkWinner()){
                document.getElementById('winnerMSG').innerText= "Player 2 is Winner";
                
                document.querySelector('.board').removeEventListener('click', eventAction);
                return;
            }
            turn= "O";
            document.getElementById('imgplayer1').style.transform= "scale(1.8)";
            document.getElementById('imgplayer2').style.transform= "scale(1)";

        }

        if(totalTURN == 9){
            document.getElementById('imgplayer1').style.transform= "scale(1)";
            document.getElementById('imgplayer2').style.transform= "scale(1)";
            document.getElementById('winnerMSG').innerText= "Match is Drawn";

        }

    }

}

document.querySelector('.board').addEventListener('click',  eventAction);





document.getElementById('restartButton').addEventListener('click', ()=>{
    // location.reload();


    let selectCELL= document.getElementsByClassName('cell');

    Array.from(selectCELL).forEach((val)=> {
        val.innerHTML= "";  
        val.style.background="cyan"; 

    });

    turn= "O";
    totalTURN= 0;
    userIP= new Array(9).fill("E");
    document.getElementById('winnerMSG').innerText= "";

    document.getElementById('imgplayer1').style.transform = "scale(1.3)";
    document.getElementById('imgplayer2').style.transform = "scale(1)";


    document.querySelector('.board').addEventListener('click',  eventAction);
});
