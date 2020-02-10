{/* <div class="digit" id="secondTens">-</div>
<div class="digit" id="secondOnes">-</div>
<div class="digit" id="colon">:</div>
<div class="digit" id="msHundreds">-</div>
<div class="digit" id="msTens">-</div> */}

const places = ['#msTens', '#msHundreds', '#secondOnes', '#secondTens'];
let digits = [0,0,0,0];
let displayTime = document.querySelectorAll('.digit');

function updateDisplay(){
    digits.forEach(function(item,index){
        document.querySelector(places[index]).innerText = digits[index];
    });
}

function incRoll(i){
    if (digits[i] === 9){
        digits[i] = 0;
        incRoll(i+1);
        console.log('Done!');
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
        for (let i = 0; i < 5; i++){
            displayTime[i].style.color = 'red';
        }
    }
    updateDisplay();
}

updateDisplay();
setInterval(tick,10);