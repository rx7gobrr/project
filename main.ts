let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . 3 . . . . . 
    . . . . . . . . . 3 3 . . . . . 
    . . . . . . . . . 3 . 3 . . . . 
    . . . . . . . . c . . 3 3 3 . . 
    . . . 3 3 3 c c 3 . . . c 3 . . 
    . . . . . c 3 . 3 c c c c 3 . . 
    . . . . c . c c c c c . . . . . 
    . . c c c c c c c c 3 3 . . . . 
    3 c 3 3 c c c c 3 . . 3 . . . . 
    c . . . c . . . c 3 3 3 . . . . 
    . . . . . . . . c . . . . . . . 
    . . . . . . . c . c c c c c . . 
    . . . . . . . c c . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
