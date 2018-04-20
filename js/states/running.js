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

    var playerState = "IDLERIGHT";
//    var playState = "WALK_LEFT";
//    var platState = "WALK_RIGHT";
     gravity: { y: 300 }

    function preload() {
        game.load.image('citybackground', 'assets/citybackground.png');
        game.load.image('Stuff', 'assets/Stuff.png');
        game.load.image('smalls', 'assets/smalls.png');
        game.load.image('jet', 'assets/jet.png');
        game.load.image('star', 'assets/star.png');
        game.load.image('free', 'assets/free.png');
        game.load.spritesheet('Running', 'assets/Runstand.png', 50, 50);
        game.load.spritesheet('betcat', 'assets/betcat.png', 75, 75);
        game.load.spritesheet('clone', 'assets/clone.png', 100, 100);
        game.load.spritesheet('pop', 'assets/clone.png', 160, 160);



    }

    function create() {
        game.world.setBounds(0, 0, 1920, 600);
        game.add.sprite(-300, -300, '');



        var melee = game.add.sprite(300, 100, '');
        var walk = melee.animations.add('');
        melee.animations.add('', [0, 1, 2 , 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], 12, true);
        melee.animations.play('');

        var shoot = game.add.sprite(100, 100, '');
        shoot.animations.add('', [0, 1, 2 , 3, 4, 5, 6, 7], 14, true);
        shoot.animations.play('');

       


        /*
        * Platforms
        */

        platforms = game.add.physicsGroup();
        platforms.create(1200, 500, 'smalls');
        platforms.create(1200, 500, 'smalls');
        platforms.create(650, 645, 'smalls');
        platforms.create(400, 450, 'smalls');
        platforms.create(550, 450, 'smalls');
        platforms.create(600, 450, 'smalls');
        platforms.create(400, 450, 'smalls');
        platforms.create(00, 450, 'smalls');
        platforms.create(650, 450, 'smalls');
        platforms.create(200, 400, 'smalls');
        platforms.create(400, 300, 'smalls');
        platforms.create(600, 230, 'smalls');
        platforms.create(1300, 400, 'smalls');
        platforms.create(1000, 340, 'smalls');



        this.platforms = this.add.physicsGroup();
        this.platforms.create(-300, 225, 'jet');
        this.platforms.create(-300, 100, 'jet');
        this.platforms.setAll('body.velocity.x', 1700);

        this.platforms = this.add.physicsGroup();
        this.platforms.create(-300, 200, 'jet');
        this.platforms.create(-300, 125, 'jet');
        this.platforms.setAll('body.velocity.x', 1800);

        this.platforms = this.add.physicsGroup();
        this.platforms.create(-300, 150, 'jet');
        this.platforms.setAll('body.velocity.x', 1900);





        this.platforms = this.add.physicsGroup();
        this.platforms.create(-2000, 225, 'jet');
        this.platforms.create(-2000, 100, 'jet');
        this.platforms.setAll('body.velocity.x', 1780);

        this.platforms = this.add.physicsGroup();
        this.platforms.create(-2000, 200, 'jet');
        this.platforms.create(-2000, 125, 'jet');
        this.platforms.setAll('body.velocity.x', 1800);

        this.platforms = this.add.physicsGroup();
        this.platforms.create(-2000, 150, 'jet');
        this.platforms.setAll('body.velocity.x', 1840);






        platforms.create(650, 645, 'smalls');
        platforms.create(600, 680, 'Stuff');
        platforms.create(200, 680, 'Stuff');
        platforms.create(0, 680, 'Stuff');
        platforms.create(400, 680, 'Stuff');
        platforms.create(800, 680, 'Stuff');
        platforms.create(800, 600, 'Stuff');
        platforms.create(1000, 520, 'Stuff');
        platforms.create(1000, 520, 'Stuff');
        platforms.create(1200, 520, 'Stuff');
        platforms.create(800, 300, 'Stuff');
        /*
        * Spawn
        */
        platforms.create(0, 500, 'smalls');

        platforms.setAll('body.allowGravity', false);
        platforms.setAll('body.immovable', true);

        /*
        * Robots
        */
        robots = game.add.physicsGroup();

        robot = robots.create(200, game.world.height - 200, 'robot');
        robots.setAll('body.gravity.y', 1000);



        player = game.add.sprite(32, game.world.height - 300, 'betcat');
        game.physics.arcade.enable(player);
        player.body.setSize(20, 30, 10, 10);
        player.animations.add('left', [32, 33, 34, 35, 36, 37, 38, 39], 12, true);
        player.animations.add('right', [22, 23, 24, 25, 26, 27, 28, 29, 30, 31], 12, true);
        player.animations.add('idleleft', [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21], 8, true);
        player.animations.add('idleright', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8, true);
        player.animations.add('jumpright', [40, 41, 42, 43, 44, 45, 46, 47, 48, 47, 48, 47, 48], 8, false);
        player.animations.add('fallright', [43, 44, 45, 46 , 47], 8, false);
        player.animations.add('jumpleft', [49, 50, 51, 52, 53, 54, 55, 56, 57, 56 ,57, 56, 57], 8, false);
        player.animations.add('fallleft', [52, 53, 54, 55, 56, 57], 8, false);
//        player.body.setSize(20, 30, 20, 10);


        player.body.bounce.y = 0;
        player.body.gravity.y = 400;

        cursors = game.input.keyboard.createCursorKeys();
        game.camera.follow(player);

        tween = game.add.tween(robot).to( { x: 100 }, 2000,  Phaser.Easing.Linear.None, true);

    }

    function update() {
        game.physics.arcade.collide(player, platforms);
        game.physics.arcade.collide(robots, platforms);
        game.physics.arcade.collide(player, robots);

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
                if (playerState == "WALK_LEFT" || playerState == "IDLELEFT") {
                    playerState = "JUMP_LEFT";
                }
                else if (playerState == "WALK_RIGHT" || playerState == "IDLERIGHT"){
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
                if (playerState == "WALK_LEFT" || playerState == "JUMP_LEFT") {
                    // we just finished walking or jumping left
                    playerState = "IDLELEFT"
                } else if (playerState == "WALK_RIGHT" || playerState == "JUMP_RIGHT") {
                    playerState = "IDLERIGHT"
                }
            }
        } else {
            
            //what happens if the player is not on the ground?
            
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
                player.body.velocity.x = -150;
                player.animations.play('left');
                break;

            case "WALK_RIGHT":
                player.body.velocity.x = 150;
                player.animations.play('right');
                
                break;

            case "JUMP_RIGHT":
                if (player.body.velocity.y == 0) {
                    player.body.velocity.y -= 300;
                }                
                player.animations.play('jumpright')
                break;
                
            case "JUMP_LEFT":
                if (player.body.velocity.y == 0) {
                    player.body.velocity.y -= 300;
                }
                player.animations.play('jumpleft')
                break;
                
            case "AIR_RIGHT":
                player.animations.play('fallright')
                break;
                
            case "AIR_LEFT":
                player.animations.play('fallleft')
                break;


            case "JUMP":
                break;

            default:
                throw new Error("Invalid player state: " + playerState)
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