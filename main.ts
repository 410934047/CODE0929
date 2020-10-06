let degree = 0
input.onButtonPressed(Button.A, function () {
    degree = randint(80, 100)
    basic.showNumber(degree)
    if (degree <= 85) {
        basic.showString("A-")
    } else if (degree <= 90) {
        basic.showString("A")
    } else if (degree <= 100) {
        basic.showString("A+")
    }
})
basic.forever(function () {
	
})
