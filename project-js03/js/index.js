//
import "./controls"
import "./timer"
const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonStop = document.querySelector('.stop');
const buttonSet = document.querySelector('.set');
const buttonSoundOff = document.querySelector('.sound-off');
const buttonSoundOn = document.querySelector('.sound-on');
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut;

buttonPlay.addEventListener('click', function(){
    buttonPlay.classList.add('hide');
    buttonPause.classList.remove('hide');
    buttonSet.classList.add('hide');
    buttonStop.classList.remove('hide');

    countdown();

});

buttonPause.addEventListener('click', function(){
    buttonPause.classList.add('hide');
    buttonPlay.classList.remove('hide');
    clearTimeout(timerTimeOut);
});

buttonStop.addEventListener('click', function(){
    resetControls();
    resetTimer();
})

buttonSoundOn.addEventListener('click', function(){
    buttonSoundOn.classList.add('hide');
    buttonSoundOff.classList.remove('hide');
})

buttonSoundOff.addEventListener('click', function(){
    buttonSoundOn.classList.remove('hide');
    buttonSoundOff.classList.add('hide');
})

buttonSet.addEventListener('click',function(){
    let newMinutes = prompt('Digite os minutos!');
    if (!newMinutes){
        resetTimer();
        return
    }
    minutes = newMinutes;
    updateTimerDisplay(minutes, 0);
});

