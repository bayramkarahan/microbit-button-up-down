let deger = 5
basic.showNumber(deger)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        deger += 1
        basic.showNumber(deger)
    }
    if (input.buttonIsPressed(Button.B)) {
        deger += -1
        basic.showNumber(deger)
    }
})
