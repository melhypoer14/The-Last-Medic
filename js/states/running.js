function running(game) {
    console.warn("HALP");
    var cursors;
    var player;
    var platforms;
    var robots;
    var robot;
    var jumpAnimation;
    var tween;
    var sprites;
    var aKey;
    var sKey;
    var s;
    var zombies;
    var count;
    var hitZombieCount = 0; 

    var playerState = "IDLERIGHT";
//    var playState = "WALK_LEFT";
//    var playState = "WALK_RIGHT";
     gravity: { y: 300 };

    function preload() {
        game.load.image('city', 'assets/CITY.png');
        game.load.image('sidewalk', 'assets/sidewalk.png');
        game.load.image('Stuff', 'assets/Stuff.png');
        game.load.image('smalls', 'assets/smalls.png');
        game.load.image('jet', 'assets/jet.png');
        game.load.image('carf', 'assets/carf.png');
        game.load.image('amb', 'assets/amb.png');
        game.load.spritesheet('betcat', 'assets/betcat.png', 219, 168);
        game.load.spritesheet('car', 'assets/car.png', 938, 246);
        game.load.spritesheet('zom', 'assets/zom.png', 132, 147);
        game.load.spritesheet('exp', 'assets/EXPLO.png', 2000, 1200);
        game.load.audio('music', 'assets/dust.mp3');
        game.load.audio('shoot', 'assets/shoot.mp3');
     
    }

    function create() {
        
    var music = game.add.audio('music');
        music.play();
        
        game.world.setBounds(0, 0, 6400, 600);
        game.add.sprite(0, 50, 'city');

        var melee = game.add.sprite(0, 100, '');
        var walk = melee.animations.add('');
        melee.animations.add('', [0,], 12, true);
        melee.animations.play('');

        var melee = game.add.sprite(5400, 350, 'car');
        var walk = melee.animations.add('car');
        melee.animations.add('car', [0, 1, 2 , 3, 4, 5], 12, true);
        melee.animations.play('car');

       


        /*
        * Platforms
        */

        platforms = game.add.physicsGroup();
        platforms.create(5400, 350, 'carf');
        platforms.create(5990, 260, 'amb');
        platforms.create(0, 500, 'Stuff');
        platforms.create(500, 500, 'Stuff');
        platforms.create(1000, 500, 'Stuff');
        platforms.create(1500, 500, 'Stuff');
        platforms.create(2000, 500, 'Stuff');
        platforms.create(2500, 500, 'Stuff');
        platforms.create(3000, 500, 'Stuff');
        platforms.create(3500, 500, 'Stuff');
        platforms.create(4000, 500, 'Stuff');
        platforms.create(4500, 500, 'Stuff');
        platforms.create(5000, 500, 'Stuff');
        platforms.create(5500, 500, 'Stuff');
        platforms.create(6000, 500, 'Stuff');
        
        platforms.collideDown = false;{
    
        }



//
//        this.platforms = this.add.physicsGroup();
//        this.platforms.create(-300, 225, 'jet');
//        this.platforms.create(-300, 100, 'jet');
//        this.platforms.setAll('body.velocity.x', 1700);
//
//        this.platforms = this.add.physicsGroup();
//        this.platforms.create(-300, 200, 'jet');
//        this.platforms.create(-300, 125, 'jet');
//        this.platforms.setAll('body.velocity.x', 1800);
//
//        this.platforms = this.add.physicsGroup();
//        this.platforms.create(-300, 150, 'jet');
//        this.platforms.setAll('body.velocity.x', 1900);
//
//
//
//
//
//        this.platforms = this.add.physicsGroup();
//        this.platforms.create(-2000, 225, 'jet');
//        this.platforms.create(-2000, 100, 'jet');
//        this.platforms.setAll('body.velocity.x', 1780);
//
//        this.platforms = this.add.physicsGroup();
//        this.platforms.create(-2000, 200, 'jet');
//        this.platforms.create(-2000, 125, 'jet');
//        this.platforms.setAll('body.velocity.x', 1800);
//
//        this.platforms = this.add.physicsGroup();
//        this.platforms.create(-2000, 150, 'jet');
//        this.platforms.setAll('body.velocity.x', 1840);






        /*
        * Spawn
        */

        platforms.setAll('body.allowGravity', false);
        platforms.setAll('body.immovable', true);

        /*
        * Robots
        */
        zombies = game.add.physicsGroup();

        zombie = zombies.create(400, game.world.height - 600, 'zom');
        zombies.setAll('body.gravity.y', 1000);



        player = game.add.sprite(32, game.world.height - 600, 'betcat');
        game.physics.arcade.enable(player);
        player.body.setSize(150, 150, 10, 10);
        player.animations.add('idleright', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8, true);
        player.animations.add('idleleft', [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21], 8, true);
        player.animations.add('right', [22, 23, 24, 25, 26, 27, 28, 29, 30, 31], 12, true);
        player.animations.add('left', [32 ,33 ,34 ,35 ,36 ,37 ,38 ,39, 40, 41], 12, true);
        player.animations.add('jumpright', [42,43, 44, 45, 46, 47, 48, 49, 50, 49, 50, 49, 50], 8, false);
        player.animations.add('fallright', [45, 46, 47, 48, 49, 50, 49, 50, 49, 50], 8, true);
        player.animations.add('jumpleft', [51, 52, 53, 54, 55, 56, 57, 58, 59, 58, 59, 58, 59], 8, false);
        player.animations.add('fallleft', [54, 55, 56, 57, 58, 59, 58, 59, 58, 59], 8, true);
        player.animations.add('shootright', [60, 61, 62, 63, 64,65, 66], 16, true);
        player.animations.add('shootleft', [67, 68, 69, 70, 71, 72, 73], 16, true);
        player.animations.add('reloadright', [74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85], 16, true);
        player.animations.add('reloadleft', [86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97], 16, true);
        player.shoot = game.add.audio('shoot');
        
        game.input.touch.preventDefault = false;

        
        player.body.bounce.y = 0;
        player.body.gravity.y = 600;
        cursors = game.input.keyboard.createCursorKeys();
        aKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
        sKey = game.input.keyboard.addKey(Phaser.Keyboard.S);
        game.camera.follow(player);
    }
    
    

    function start() {

    sounds.shift();

    bass.loopFull(0.6);
    bass.onLoop.add(hasLooped, this);

    text.text = 'bass';

}
    
    function hitZombies(player, zombies) {
        hitZombieCount += 1;
        console.log(hitZombieCount);
        
        if(hitZombieCount % 30 == 0 ) {
            player.kill();
            game.state.start("intro");    
        }
        
        
    }
    
    function update() {
        game.physics.arcade.collide(player, platforms);
        game.physics.arcade.collide(zombies, platforms);

        game.physics.arcade.overlap(player, zombies, hitZombies, null, game);
        /*
        * State Transitions
        */
        
//        1. sprite is in the air
//          a. move left
//          b. move right
//        2. sprite is on the ground
//          a. move left
//          b. move right
//          b. jump (left or right)
//          b. idle (left or right)
        
        //if (player.body.touching.down) {
            // On the ground:
            // start jump left/right
        //    if (cursors.up.isDown )
            // walk left/right, 
            // idle left/right, 
        //} else {
            // In the air
            
        //}
        /*
        if (player.body.touching.down) {
            (cursors.up.isDown) {
            playerState = "JUMP_LEFT";
            player.body.velocity.x = 0;
        }
            else if 
                (cursors.up.isDown) {
            playerState = "JUMP_RIGHT";
        }
            else {
                if (playerState == "WALK_LEFT") {
                // we just finished walking left
                playerState = "IDLELEFT"
            } else if (playerState == "WALK_RIGHT") {
                
                playerState = "IDLERIGHT"
                       }
        }
        //___________________________________________________//
        */
        if (player.body.touching.down) {
            if (cursors.up.isDown) {
                //jump
                if (playerState == "WALK_LEFT" || playerState == "IDLELEFT" || playerState == "AIR_LEFT") {
                    playerState = "JUMP_LEFT";
                }
                else if (playerState == "WALK_RIGHT" || playerState == "IDLERIGHT" || playerState == "AIR_RIGHT"){
                    playerState = "JUMP_RIGHT"
                }
            } else if (cursors.right.isDown) {
                //move right
                playerState = "WALK_RIGHT"
            } else if (cursors.left.isDown) {
                //move left
                playerState = "WALK_LEFT"
            } else {
                //idle
                if (playerState == "WALK_LEFT" || playerState == "JUMP_LEFT" || playerState == "AIR_LEFT"){
                    // we just finished walking or jumping left
                    playerState = "IDLELEFT"
                } else if (playerState == "WALK_RIGHT" || playerState == "JUMP_RIGHT" || playerState == "AIR_RIGHT") {
                    playerState = "IDLERIGHT"
                }
            }
        } else {
      //what happens if the player is not on the ground?
           if (playerState == "WALK_LEFT" || playerState == "IDLELEFT") {
               playerState = "AIR_LEFT";
            }
            else if (playerState == "WALK_RIGHT" || playerState == "IDLERIGHT"){
                playerState = "AIR_RIGHT"
                }
        }
        
        
       
        if(aKey.isDown){
                 //shooting left 
                if (playerState == "WALK_LEFT" || playerState == "IDLELEFT" || playerState == "AIR_LEFT" || playerState == "RELOAD_LEFT") {
                    playerState = "SHOOT_LEFT";
                    count = 0;
//                    player.animations.play('shootleft');
                    player.shoot.play();
                    //shooting right 
                } else if (playerState == "WALK_RIGHT" || playerState == "IDLERIGHT" || playerState == "AIR_RIGHT" || playerState == "RELOAD_RIGHT") {
                    playerState = "SHOOT_RIGHT"; 
                    count = 0;
//                    player.animations.play('shootright');
                    player.shoot.play();
                } 
            } else if (sKey.isDown){
                if (playerState == "WALK_LEFT" || playerState == "IDLELEFT" || playerState == "AIR_LEFT" || playerState == "SHOOT_LEFT") {
                    playerState = "RELOAD_LEFT";
                    count = 0;
                } else if (playerState == "WALK_RIGHT" || playerState == "IDLERIGHT" || playerState == "AIR_RIGHT" || playerState == "SHOOT_RIGHT") {
                    playerState = "RELOAD_RIGHT";
                    count = 0;
                }
            }
        
        count++;
        if (playerState == "SHOOT_LEFT" || playerState == "SHOOT_RIGHT" || playerState == "RELOAD_LEFT" || playerState == "RELOAD_RIGHT") {
            if (playerState == "SHOOT_LEFT" && count == 30) {
                playerState = "IDLELEFT";
            } else if (playerState == "SHOOT_RIGHT" && count == 30) {
                playerState = "IDLERIGHT";
            } else if (playerState == "RELOAD_LEFT" && count == 45) {
                playerState = "IDLELEFT";
            } else if (playerState == "RELOAD_RIGHT" && count == 45) {
                playerState = "IDLERIGHT";
            }
        }
        
        
        

        /*
        * Handle player state
        */
        switch (playerState) {
            case "IDLELEFT":
                player.body.velocity.x = 0;
                player.body.velocity.y = 0;
                player.animations.play('idleleft');
                break;
                
            case "IDLERIGHT":
                player.body.velocity.x = 0;
                player.body.velocity.y = 0;
                player.animations.play('idleright');
                break;

            case "WALK_LEFT":
                player.body.velocity.x = -500;
                player.animations.play('left');
                break;

            case "WALK_RIGHT":
                player.body.velocity.x = 500;
                player.animations.play('right');
                break;

            case "JUMP_RIGHT":
                if (player.body.velocity.y == 0) {
                    player.body.velocity.y -= 500;
                }                
                player.animations.play('jumpright');
                break;
                
            case "JUMP_LEFT":
                if (player.body.velocity.y == 0) {
                    player.body.velocity.y -= 500;
                }
                player.animations.play('jumpleft');
                break;
                
            case "AIR_RIGHT":
                if (player.body.velocity.y == 500) {
                    player.body.velocity.y -= 0;
                }
                player.animations.play('fallright');
                break;
                
            case "AIR_LEFT":
                player.animations.play('fallleft');
                break;

            case "SHOOT_LEFT":
                player.animations.play('shootleft');
                player.body.velocity.x = 0;
                player.body.velocity.y = 0;                
                break;
                
            case "SHOOT_RIGHT":
                player.animations.play('shootright');
                player.body.velocity.x = 0;
                player.body.velocity.y = 0; 
                break;
                
            case "RELOAD_LEFT":
                player.animations.play('reloadleft');
                player.body.velocity.x = 0;
                player.body.velocity.y = 0;
                break;
                
            case "RELOAD_RIGHT":
                player.animations.play('reloadright');
                player.body.velocity.x = 0;
                player.body.velocity.y = 0;
                break;
                
            case "JUMP":
                break;
                
            default:
                throw new Error("Invalid player state: " + playerState);
        }

    }
    
    function render() {
    }
    
    return {
        preload,
        create,
        update,
        render
    }
}