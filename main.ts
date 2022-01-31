basic.forever(function () {
    basic.showString("Umilikichiki y Carlottilla")
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
basic.forever(function () {
    music.playMelody("C5 B A G F E D C ", 500)
    music.playMelody("C D E F G A B C5 ", 500)
})
