const homeButton = document.getElementById('hb');
homeButton.addEventListener('click', () => {
  location.reload();
});

function digitalClock() {
  let time = new Date();
  let date = time.toDateString();
  document.getElementById('today').innerHTML = `Current: ${date}`;

  let hours = time.getHours();
  let hours1 = Math.floor(hours / 10);
  let hours2 = hours % 10;
  document.getElementById('hr1').innerHTML = `${hours1}`;
  document.getElementById('hr2').innerHTML = `${hours2}`;

  let minutes = time.getMinutes();
  let minutes1 = Math.floor(minutes / 10);
  let minutes2 = minutes % 10;
  document.getElementById('min1').innerHTML = `${minutes1}`;
  document.getElementById('min2').innerHTML = `${minutes2}`;

  let seconds = time.getSeconds();
  let seconds1 = Math.floor(seconds / 10);
  let seconds2 = seconds % 10;
  document.getElementById('sec1').innerHTML = `${seconds1}`;
  document.getElementById('sec2').innerHTML = `${seconds2}`;
}

digitalClock();
setInterval(digitalClock, 1000);

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

function STOPWATCH() {
  const sw = document.getElementById('stopwatch');
  sw.style.display = 'grid';

  sw.innerHTML = `
    <div id="time">
      <div id="sw_hr1">0</div>
      <div id="sw_hr2">0</div>
      <div id="colon1">:</div>
      <div id="sw_min1">0</div>
      <div id="sw_min2">0</div>
      <div id="colon2" style="align-items: end;">.</div>
      <div id="sw_sec1">0</div>
      <div id="sw_sec2">0</div>
    </div>
    <div id="date">
      <button id="Flag">Lap</button>
      <button id="Reset">Reset</button>
      <button id="Start">Start</button>
      <button id="Pause">Pause</button>
    </div>
    <div id="lap"></div>
  `;

  let minutes = 0, seconds = 0, milliseconds = 0;
  let intervalID;
  let mStr, sStr, msStr;
  let count = 0;
  let tempmStr = 0, tempsStr = 0, tempmsStr = 0;

  function digitalStopwatch() {
    mStr = Number(minutes.toString().padStart(2, '0'));
    sStr = Number(seconds.toString().padStart(2, '0'));
    msStr = Number(milliseconds.toString().padStart(2, '0'));

    document.getElementById('sw_hr1').innerHTML = `${Math.floor(mStr / 10)}`;
    document.getElementById('sw_hr2').innerHTML = `${mStr % 10}`;
    document.getElementById('sw_min1').innerHTML = `${Math.floor(sStr / 10)}`;
    document.getElementById('sw_min2').innerHTML = `${sStr % 10}`;
    document.getElementById('sw_sec1').innerHTML = `${Math.floor(msStr / 10)}`;
    document.getElementById('sw_sec2').innerHTML = `${msStr % 10}`;
  }

  digitalStopwatch();

  function runInterval() {
    intervalID = setInterval(() => {
      milliseconds += 1;
      if (milliseconds > 99) {
        milliseconds = 0;
        seconds += 1;
      }
      if (seconds > 59) {
        seconds = 0;
        minutes += 1;
      }
      digitalStopwatch();
    }, 10);
  }

  document.getElementById('Start').addEventListener('click', () => {
    clearInterval(intervalID);
    runInterval();
    document.getElementById('Start').style.zIndex = -5;
    document.getElementById('Reset').style.zIndex = -5;
    document.getElementById('Pause').style.zIndex = 0;
    document.getElementById('Flag').style.display = 'block';
  });

  document.getElementById('Pause').addEventListener('click', () => {
    clearInterval(intervalID);
    document.getElementById('Start').style.zIndex = 0;
    document.getElementById('Reset').style.zIndex = 0;
    document.getElementById('Flag').style.display = 'none';
  });

  document.getElementById('Reset').addEventListener('click', () => {    
    clearInterval(intervalID);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    digitalStopwatch();
    count = 0;
    document.getElementById('lap').innerHTML = '';
    document.getElementById('Start').style.zIndex = 0;
    document.getElementById('Pause').style.zIndex = -5;
    document.getElementById('Flag').style.display = 'none';
    document.getElementById('Reset').style.zIndex =-5;

  });

  document.getElementById('Flag').addEventListener('click', () => {
    count++;
    let lapEvent = document.createElement('div');
    lapEvent.id = 'lapEvent';

    let lapCount = document.createElement('div');
    lapCount.id = 'lapCount';
    lapCount.innerHTML = `${count}`;

    let lapTime = document.createElement('div');
    lapTime.id = 'lapTime';

    if (count === 1) {
      lapTime.innerHTML = `+ ${Math.floor(mStr / 10)}${mStr % 10} : ${Math.floor(sStr / 10)}${sStr % 10}.${Math.floor(msStr / 10)}${msStr % 10}`;
      tempmStr = mStr;
      tempsStr = sStr;
      tempmsStr = msStr;
    } 
    else {
      const diff = calculateLapDifference(mStr, sStr, msStr, tempmStr, tempsStr, tempmsStr);
      lapTime.innerHTML = `+ ${diff[0]} : ${diff[1]}.${diff[2]}`;
      tempmStr = mStr;
      tempsStr = sStr;
      tempmsStr = msStr;
    }

    const lapToT = document.createElement('div');
    lapToT.id = 'lapToT';
    lapToT.innerHTML = `${Math.floor(mStr / 10)}${mStr % 10} : ${Math.floor(sStr / 10)}${sStr % 10}.${Math.floor(msStr / 10)}${msStr % 10}`;

    lapEvent.appendChild(lapCount);
    lapEvent.appendChild(lapTime);
    lapEvent.appendChild(lapToT);

    document.getElementById('lap').prepend(lapEvent);
  });
}

const stopButton = document.getElementById('sb');
stopButton.addEventListener('click', () => {
  homeButton.style.background = 'linear-gradient(90deg, #2b5876 0%, #4e4376 100%)';
  stopButton.style.background = 'rgb(78, 67, 118)';
  document.getElementById('home').style.display = 'none';
  STOPWATCH();
});
