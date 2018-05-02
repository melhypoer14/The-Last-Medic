function running(game) {
    const menuState = {

      /**
       * Loads game assets (images, sounds, tilemaps, etc)
       */
      preload : function () {
           game.load.spritesheet('crash', 'assets/crashclone.png', 132, 147);
      },

      /**
       * Initializes variables and instantiates objects
       */
      create: function () {
        game.add.text(
          80, 260,  // x, y position
          "Welcome to the menu state. Click to begin!", 
          { fontSize: "32px", fill: "#fff" }
        );
      },

      /** 
       * Updates the screen each frame
       */
      update: function () {


        if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
          game.state.start("running");
        }
      }
    };
}