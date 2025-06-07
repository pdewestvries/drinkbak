pins.touchSetMode(TouchTarget.LOGO, TouchTargetMode.Capacitive)
let TDS_vuil = 400
basic.forever(function () {
    soroban.showNumber(pins.analogReadPin(AnalogPin.P0))
    if (TDS_vuil < pins.analogReadPin(AnalogPin.P0)) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(5000)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
    while (input.logoIsPressed()) {
        soroban.showNumber(TDS_vuil)
        if (input.buttonIsPressed(Button.A)) {
            soroban.showNumber(TDS_vuil)
            TDS_vuil += 1
            basic.pause(100)
        }
        if (input.buttonIsPressed(Button.B)) {
            soroban.showNumber(TDS_vuil)
            TDS_vuil += -1
            basic.pause(100)
        }
    }
})
