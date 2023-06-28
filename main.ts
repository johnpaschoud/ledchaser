input.onButtonPressed(Button.A, function () {
    strip.clear()
    strip.show()
    direction = 1
    for (let index = 0; index <= strip.length(); index++) {
        strip.setPixelColor(index, neopixel.colors(NeoPixelColors.White))
        strip.show()
        basic.pause(100)
    }
})
input.onButtonPressed(Button.AB, function () {
    strip.clear()
    strip.show()
    direction = 1
    strip.setBrightness(128)
    strip.showRainbow(1, 360)
    while (true) {
        strip.rotate(direction)
        strip.show()
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    strip.clear()
    strip.show()
    direction = -1
    for (let index = 0; index <= strip.length(); index++) {
        downindex = Math.abs(index - strip.length())
        strip.setPixelColor(downindex, neopixel.colors(NeoPixelColors.White))
        strip.show()
        basic.pause(100)
    }
})
// Uses Adafruit Neopixel driver extension. Connect Din of strip to ZiP pin of Kitronik Create motor board (is micro:bit pin 8).
let downindex = 0
let direction = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P8, 32, NeoPixelMode.RGB)
basic.showIcon(IconNames.Heart)
direction = 1
strip.setBrightness(128)
strip.showRainbow(1, 360)
basic.pause(1000)
basic.showIcon(IconNames.Square)
