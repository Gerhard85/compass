input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    for (let index = 0; index < 2; index++) {
        basic.showString("" + (input.soundLevel()))
    }
})
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        basic.showString("" + (degrees))
    }
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 2; index++) {
        basic.showString("" + (input.lightLevel()))
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 2; index++) {
        basic.showString("" + (input.temperature()))
    }
})
let degrees = 0
bluetooth.startMagnetometerService()
bluetooth.startLEDService()
degrees = input.compassHeading()
basic.showString("KOMPASS")
basic.forever(function () {
    degrees = input.compassHeading()
    if (degrees < 45 || degrees > 315) {
        basic.showString("N")
    } else if (degrees < 135) {
        basic.showString("O")
    } else if (degrees < 225) {
        basic.showString("S")
    } else {
        basic.showString("W")
    }
})
