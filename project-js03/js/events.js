import {
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonSoundOff,
    buttonSoundOn,
    buttonStop
} from "./elements.js"

export default function({controls, timer, sound}){
    buttonPlay.addEventListener('click', function(){
        controls.play();
        timer.countdown();
        sound.pressButton();

    });

    buttonPause.addEventListener('click', function(){
        controls.pause();
        timer.hold();
        sound.pressButton();
        
    });

    buttonStop.addEventListener('click', function(){
        controls.reset();
        timer.reset();
        sound.pressButton();
    })

    buttonSoundOn.addEventListener('click', function(){
        buttonSoundOn.classList.add('hide');
        buttonSoundOff.classList.remove('hide');
        sound.bgAudio.pause();
        
    })

    buttonSoundOff.addEventListener('click', function(){
        buttonSoundOn.classList.remove('hide');
        buttonSoundOff.classList.add('hide');
        sound.bgAudio.play();
    })

    buttonSet.addEventListener('click',function(){
        let newMinutes = controls.getMinutes();
            if (!newMinutes){
                timer.reset();
                return false
            }
            timer.updateDisplay(newMinutes,0);
            timer.updateMinutes(newMinutes);
            
            
    });

}