let mySprite = sprites.create(img`
    . . . . b 9 9 9 b . . . . . . . 
    . . . 9 9 . . . 9 b 3 . . . . . 
    . 9 9 b . . . . 9 3 b . . . . . 
    9 . . b . . . 9 9 9 . b . . . . 
    9 . . b . . 9 . 9 . 9 b 3 3 . . 
    9 . . b 3 3 9 9 9 9 9 9 9 9 9 . 
    9 . b b b 9 9 9 9 9 b 9 9 9 . . 
    9 . . 9 9 9 9 9 b 9 9 9 9 . . . 
    9 9 9 c 9 9 9 9 9 9 9 9 9 . . . 
    9 9 9 9 9 9 9 9 b 9 9 9 . . . . 
    c . . . c . . 9 9 9 9 9 9 9 9 . 
    . . . . . . b 9 9 9 9 9 9 9 9 . 
    . . . b b b 9 9 9 c 9 9 c c . . 
    . . . . . . . c c . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
