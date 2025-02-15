//import deafult
import Controls from "./controls.js"
//import named
import Timer from "./timer.js"

import {elements} from "./elements.js"

import Sounds from "./sounds.js"

import Events from "./events.js"

const {
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop,
    minutesDisplay,
    secondsDisplay
} = elements

const controls = Controls({
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop
});

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset,
})

const sound = Sounds();

Events({controls, timer, sound})


