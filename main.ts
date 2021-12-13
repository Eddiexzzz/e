input.onButtonPressed(Button.A, function () {
    mode = 1
})
function Yellow () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Yellow))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
input.onButtonPressed(Button.B, function () {
    mode = 2
})
function strange () {
    while (mode == 2) {
        Red()
        basic.pause(500)
        Green()
        basic.pause(500)
    }
}
function Green () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Green))
}
function Red () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
function GYR () {
    while (mode == 1) {
        Red()
        basic.pause(3000)
        Green()
        basic.pause(3000)
        Yellow()
    }
}
let range: neopixel.Strip = null
let mode = 0
let strip: neopixel.Strip = null
basic.showIcon(IconNames.Heart)
strip = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB)
strip.setBrightness(255)
basic.forever(function () {
    if (mode == 1) {
        GYR()
    } else if (mode == 2) {
        strange()
    }
})
