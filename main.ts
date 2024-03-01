let listchallenge: number[] = []
function intro () {
    music.play(music.stringPlayable("E B A A E G B F ", 120), music.PlaybackMode.LoopingInBackground)
    animationsprite = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 5 5 f f f . . . . 
        . . . f f f 5 5 5 5 f f f . . . 
        . . f f f 5 5 5 5 5 5 f f f . . 
        . . f f 5 5 5 5 5 5 5 5 5 f . . 
        . . f 5 5 f f f f f f 5 5 f . . 
        . . f f f f d d d d f f f f . . 
        . f f f f d f d d f d f f f f . 
        . f f f d d f d d f d d f f f . 
        . . f d d 1 d d d d 1 d f . . . 
        . . . f d d 1 1 1 1 d d f . . . 
        . . d d f 2 2 2 2 2 2 f d d . . 
        . . d d f 2 2 2 2 2 2 f d d . . 
        . . d d f 8 8 8 8 8 8 f d d . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    story.printText("   To begin playing answer the question", 100, 8, 15, 1, story.TextSpeed.Fast)
    pause(500)
    story.printText("Luffy is the main character of what anime?", 100, 8, 15, 1, story.TextSpeed.Normal)
    story.showPlayerChoices("One Piece", "Demon Slayer", "Tokyo Ghoul", "Erased")
    if (story.checkLastAnswer("One Piece")) {
        story.printText("Welcome to the game. You answered the question correctly.", 20, 10, 15, 1, story.TextSpeed.Slow)
        game_calculator(1, 1)
        scene.setBackgroundColor(15)
    }
    if (story.checkLastAnswer("Demon Slayer")) {
        story.printText("Sorry this answer is completely wrong.", 20, 10, 15, 1)
        game.reset()
    } else if (story.checkLastAnswer("Tokyo Ghoul")) {
        story.printText("Nope.", 20, 10, 15, 1)
        game.reset()
    } else if (story.checkLastAnswer("Erased")) {
        story.printText("Try again.", 20, 10, 15, 1)
        game.reset()
    }
}
function game_calculator (level: number, challenge: number) {
    let list: number[] = []
    game.splash("Hi")
    if (level == 0) {
        story.printText("Choose a level", 20, 10, 15, 1, story.TextSpeed.Slow)
        story.showPlayerChoices("LV1", "LV2", "LV3")
        for (let value of listchallenge) {
        	
        }
    }
    if (level == 2 && challenge == list[2] - 1) {
    	
    }
    if (level == 3 && challenge == list[2] - 0) {
        for (let index = 0; index <= 2; index++) {
            let listchallenge3: number[] = []
            listchallenge3[0] = 0
            listchallenge3[1] = 0
            listchallenge3[2] = 0
        }
    }
}
let animationsprite: Sprite = null
info.setScore(0)
intro()
let levelmap = [
tiles.createMap(tilemap`level1`),
tiles.createMap(tilemap`level11`),
tiles.createMap(tilemap`level3`),
tiles.createMap(tilemap`level12`)
]
