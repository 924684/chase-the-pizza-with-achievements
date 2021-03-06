controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Achievements.resetAllAchievements()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    info.startCountdown(10)
    otherSprite.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
})
scene.setBackgroundColor(7)
let smiley = sprites.create(img`
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    5 5 5 5 5 f 5 5 5 f 5 5 5 5 5 . 
    5 5 5 5 5 f 5 5 5 f 5 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 f 5 5 5 5 5 5 5 f 5 5 5 . 
    . 5 5 5 f f 5 5 5 f f 5 5 5 . . 
    . 5 5 5 5 5 f f f 5 5 5 5 5 . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(smiley, 100, 100)
smiley.setStayInScreen(true)
let pizza = sprites.create(img`
    . . . . . . b b b b . . . . . . 
    . . . . . . b 4 4 4 b . . . . . 
    . . . . . . b b 4 4 4 b . . . . 
    . . . . . b 4 b b b 4 4 b . . . 
    . . . . b d 5 5 5 4 b 4 4 b . . 
    . . . . b 3 2 3 5 5 4 e 4 4 b . 
    . . . b d 2 2 2 5 7 5 4 e 4 4 e 
    . . . b 5 3 2 3 5 5 5 5 e e e e 
    . . b d 7 5 5 5 3 2 3 5 5 e e e 
    . . b 5 5 5 5 5 2 2 2 5 5 d e e 
    . b 3 2 3 5 7 5 3 2 3 5 d d e 4 
    . b 2 2 2 5 5 5 5 5 5 d d e 4 . 
    b d 3 2 d 5 5 5 d d d 4 4 . . . 
    b 5 5 5 5 d d 4 4 4 4 . . . . . 
    4 d d d 4 4 4 . . . . . . . . . 
    4 4 4 4 . . . . . . . . . . . . 
    `, SpriteKind.Food)
info.startCountdown(10)
info.setScore(0)
forever(function () {
    if (Achievements.checkForAchievement("the_eater", info.score() > 10)) {
        Achievements.showAchievement("The Eater", "Eat 10 slices of pizza!", img`
            . . . d d . . . 
            . . . 5 d d . . 
            . . 2 5 5 d d . 
            . . 5 5 5 5 d d 
            . 5 2 5 2 5 5 . 
            5 5 5 5 5 . . . 
            5 2 . . . . . . 
            . . . . . . . . 
            `)
    }
    pause(1000)
})
