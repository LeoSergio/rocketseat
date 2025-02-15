export default function(){
    const buttonPressAudio = new Audio();
    const kitchenTimer = new Audio("./audios/cuckoo-9-94258.mp3");
    const bgAudio = new Audio("./audios/Pufino - Sentimental (freetouse.com).mp3");

    bgAudio.loop

    function pressButton(){
        buttonPressAudio.play();
    }

    function timeEnd(){
        kitchenTimer.play()

    }
    return {
        pressButton,
        timeEnd,
        bgAudio
    }
}