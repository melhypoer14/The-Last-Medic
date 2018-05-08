function intro(game) {
    console.warn("intro");
    
    function preload(){
//        game.load.spritesheet('exp', 'assets/EXPLO.png', 2000, 1200, 30);
        game.load.spritesheet('exp', 'assets/exxp.png', 1000, 600);
    }
    
    function create(){
        var melee = game.add.sprite(200, 0, 'exp');
        var walk = melee.animations.add('exp');
        melee.animations.add('exp', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29], 12, true);
        melee.animations.play('exp');
        
        
    
        game.add.text(
          80, 260,  // x, y position
          "Welcome to the menu state. Click to begin!", 
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