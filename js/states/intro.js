function intro(game) {
    console.warn("intro");
    
    function preload(){
        
    }
    
    function create(){
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