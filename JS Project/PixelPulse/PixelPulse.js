const homeButton= document.getElementById('hb');
homeButton.addEventListener('click',()=>{
    location.reload()
})
function digitalClock(){
//Date
let time= new Date();
let date= time.toDateString();
document.getElementById('today').innerHTML= `Current: ${date}`;


//hours
let hours= time.getHours();
let hours1= Math.floor(hours/10);
let hours2= hours%10;
document.getElementById('hr1').innerHTML=   `${hours1}`;
document.getElementById('hr2').innerHTML=   `${hours2}`;

//minutes
let minutes= time.getMinutes();
let minutes1= Math.floor(minutes/10);
let minutes2= minutes%10;
document.getElementById('min1').innerHTML=   `${minutes1}`;
document.getElementById('min2').innerHTML=   `${minutes2}`;

// //seconds
let seconds= time.getSeconds();
let seconds1= Math.floor(seconds/10);
let seconds2= seconds%10;
document.getElementById('sec1').innerHTML=   `${seconds1}`;
document.getElementById('sec2').innerHTML=   `${seconds2}`;
}

digitalClock();
setInterval(digitalClock,1000);






function STOPWATCH(){
// Stopwatch
let minutes= 0;
let seconds= 0;
let milliseconds= 0;

let intervalID;
let mStr,sStr,msStr;
function updateStopwatch(){

    function digitalStopwatch(){
            milliseconds += 1; 

            if (milliseconds > 99) {
                milliseconds = 0;
                seconds += 1;
            }
            if (seconds > 59) {
                seconds = 0;
                minutes += 1;
            }

            mStr = Number( minutes.toString().padStart(2, '0'));
            sStr = Number(seconds.toString().padStart(2, '0'));
            msStr = Number(milliseconds.toString().padStart(2, '0'));
            document.getElementById('hr1').innerHTML=   `${Math.floor(mStr/10)}`;
            document.getElementById('hr2').innerHTML=   `${mStr%10}`;
            document.getElementById('min1').innerHTML=   `${Math.floor(sStr/10)}`;
            document.getElementById('min2').innerHTML=   `${sStr%10}`;
            document.getElementById('sec1').innerHTML=   `${Math.floor(msStr/10)}`;
            document.getElementById('sec2').innerHTML=   `${msStr%10}`;
    }
    digitalStopwatch();
    intervalID= setInterval(digitalStopwatch, 10);

}


const startWatch= document.getElementById('Start');
startWatch.addEventListener('click',()=>{
    // document.getElementById('hr1').style.borderStyle= "outset";
    // document.getElementById('hr2').style.borderStyle= "outset";
    // document.getElementById('min1').style.borderStyle= "outset";
    // document.getElementById('min2').style.borderStyle= "outset";
    // document.getElementById('sec1').style.borderStyle= "outset";
    // document.getElementById('sec2').style.borderStyle= "outset";

    updateStopwatch();
    startWatch.style.zIndex= -5; 
    document.getElementById('Reset').style.zIndex= -5; 
    document.getElementById('Pause').style.zIndex= 0; 
    document.getElementById('Flag').style.display= "block"; 
});

const resetWatch= document.getElementById('Reset');
resetWatch.addEventListener('click',()=>location.reload());

const pauseWatch= document.getElementById('Pause');
pauseWatch.addEventListener('click', ()=>{
    startWatch.style.zIndex= 0;
    document.getElementById('Flag').style.display= "none"; 
    document.getElementById('Reset').style.zIndex= 0; 

    clearInterval(intervalID);
})


//Lap 
let count= 0;
let tempmStr;
let tempsStr;
let tempmsStr;
function calculateLapDifference(currentM, currentS, currentMs, prevM, prevS, prevMs) {
  let lapM = currentM - prevM;
  let lapS = currentS - prevS;
  let lapMs = currentMs - prevMs;

  if (lapMs < 0) {
    lapS -= 1;
    lapMs += 100;
  }

  if (lapS < 0) {
    lapM -= 1;
    lapS += 60;
  }
  let formattedM = lapM.toString().padStart(2, '0');
  let formattedS = lapS.toString().padStart(2, '0');
  let formattedMs = lapMs.toString().padStart(2, '0');

  return [formattedM, formattedS, formattedMs];
}

const lapWatch= document.getElementById('Flag');
lapWatch.addEventListener('click', ()=>{
    count++;
    
    let lapEvent= document.createElement('div');
    lapEvent.id= "lapEvent";

    let lapCount= document.createElement('div');
    lapCount.id= "lapCount";
    lapCount.innerHTML= `${count}`;

    let lapTime= document.createElement('div');
    lapTime.id= "lapTime";
    

    if(count == 1){
        lapTime.innerHTML= `+ ${minutes} : ${seconds}.${milliseconds}`;
        tempmStr= mStr, tempsStr= sStr, tempmsStr= msStr;
    }
    else{
        let diff= calculateLapDifference(mStr, sStr, msStr, tempmStr, tempsStr, tempmsStr);
        lapTime.innerHTML= `+ ${diff[0]} : ${diff[1]}.${diff[2]}`
        
        tempmStr=mStr;
        tempsStr=sStr;
        tempmsStr=msStr;
    }

    let lapToT= document.createElement('div');
    lapToT.id= "lapToT";
    lapToT.innerHTML= `${mStr} : ${sStr}.${msStr}`;

    lapEvent.appendChild(lapCount);
    lapEvent.appendChild(lapTime);
    lapEvent.appendChild(lapToT);

    document.getElementById('lap').prepend(lapEvent);
})


}


const stopButton= document.getElementById('sb');
stopButton.addEventListener('click',()=>{
    homeButton.style.background="linear-gradient(90deg, #2b5876 0%, #4e4376 100%)";

    stopButton.style.background="rgb(78, 67, 118)";

    document.getElementById('home').style.display= "none";

    const sw=document.getElementById('stopwatch');
    sw.style.display="grid";

    STOPWATCH();

    sw.innerHTML= `
                <div id="time">
                    <div id="hr1">H</div>
                    <div id="hr2">H</div>
                    <div id="colon1">:</div>
                    <div id="min1">M</div>
                    <div id="min2">M</div>
                    <div id="colon2">:</div>
                    <div id="sec1">S</div>
                    <div id="sec2">S</div>
                </div>
                <div id="date">
                    
                    
                </div>        
    `
})








