function intro(game) {
    console.warn("intro");
    
    function preload(){
//        game.load.spritesheet('exp', 'assets/EXPLO.png', 2000, 1200, 30);
        game.load.spritesheet('exp', 'assets/TITLE.png', 1500, 900);
        game.load.spritesheet('wing', 'assets/THELASTMED.png', 650, 800);
    }
    
    function create(){
        var melee = game.add.sprite(0, -200, 'exp');
        var walk = melee.animations.add('exp');
        melee.animations.add('exp', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47], 12, true);
        melee.animations.play('exp');
        
        var melee = game.add.sprite(0, -30, 'wing');
        var walk = melee.animations.add('wing');
        melee.animations.add('wing', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 12, true);
        melee.animations.play('wing');
        
        
    
        game.add.text(
          150, 600,  // x, y position
          "PRESS SPACE TO START", 
          { fontSize: "32px", fill: "#fff" }
        );
        
    }
    
    function update(){
        if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
          game.state.start("running");
        }
    }
    
    function render(){
    }
    
    return {
        preload,
        create,
        update,
        render
    }
}