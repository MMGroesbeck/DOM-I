{/* <div class="digit" id="secondTens">-</div>
<div class="digit" id="secondOnes">-</div>
<div class="digit" id="colon">:</div>
<div class="digit" id="msHundreds">-</div>
<div class="digit" id="msTens">-</div> */}
document.querySelector('body').style.flexDirection = 'column';

const places = ['#msTens', '#msHundreds', '#secondOnes', '#secondTens'];
let digits = [0,0,0,0];
let displayTime = document.querySelectorAll('.digit');

var timerID;

function setColor(color){
    for (let i = 0; i < 5; i++){
        displayTime[i].style.color = color;
    }
}

function updateDisplay(){
    digits.forEach(function(item,index){
        document.querySelector(places[index]).innerText = digits[index];
    });
}

function timing(){
    timerID = setInterval(tick,10);
}

function stopTimer(){
    clearInterval(timerID);
}

function incRoll(i){
    if (digits[i] === 9){
        digits[i] = 0;
        incRoll(i+1);
    } else {
        digits[i] ++;
        console.log(digits);
    }
}

function tick(){
    if(digits[3]<1){
        incRoll(0);
    }
    if(digits[3] === 1){
        setColor('red');
        stopTimer();
    }
    updateDisplay();
}

updateDisplay();

const start = document.querySelector('#startButton');
start.innerText = 'Start';
start.addEventListener('click', event => {
    timing();
});

const reset = document.querySelector('#resetButton');
reset.innerText = 'Reset';
reset.addEventListener('click', event => {
    stopTimer();
    digits = [0,0,0,0];
    setColor('black');
    updateDisplay();
})