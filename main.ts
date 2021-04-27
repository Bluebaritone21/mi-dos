input.onButtonPressed(Button.A, function () {
    if (appLoaded == 0) {
        selectionForApps += -1
        if (selectionForApps < 1) {
            selectionForApps = 4
        }
    }
})
function Boot (times: number) {
    for (let index = 0; index < times; index++) {
        basic.showLeds(`
            . . . . #
            . . . # .
            . . # . .
            . # . . .
            # . . . .
            `)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.showLeds(`
            # . . . .
            . # . . .
            . . # . .
            . . . # .
            . . . . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    }
    basic.showLeds(`
        . . . . .
        # # # # #
        # # # # #
        # # # # #
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        . # # # .
        . # # # .
        . # # # .
        . # # # .
        . # # # .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.clearScreen()
}
input.onButtonPressed(Button.B, function () {
    if (appLoaded == 0) {
        selectionForApps += 1
        if (selectionForApps > 4) {
            selectionForApps = 1
        }
    }
})
let appLoaded = 0
let selectionForApps = 0
Boot(3)
selectionForApps = 1
appLoaded = 0
basic.forever(function () {
    // Weather
    if (appLoaded == 0 && selectionForApps == 1) {
        basic.showIcon(IconNames.Umbrella)
    }
    // Dodge
    if (appLoaded == 0 && selectionForApps == 2) {
        basic.showIcon(IconNames.Ghost)
    }
    // Paint
    if (appLoaded == 0 && selectionForApps == 3) {
        basic.showIcon(IconNames.Happy)
    }
    // RPG
    if (appLoaded == 0 && selectionForApps == 4) {
        basic.showIcon(IconNames.Sword)
    }
})
