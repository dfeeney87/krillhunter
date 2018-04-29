var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 500},
            debug: false
        }
    },
    scene: {
        key: 'main',
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var map;
var player;
var cursors;
var groundLayer, coinLayer;
var text;
var score = 0;

function preload() {
    // map made with Tiled in JSON format
    this.load.tilemapTiledJSON('map', 'assets/map.json');
    // tiles in spritesheet
    this.load.spritesheet('tiles', 'assets/tiles.png', {frameWidth: 70, frameHeight: 70});
    // simple coin image
    this.load.image('coin', 'assets/coinGold.png');
    // player animations
    this.load.atlas('player', 'assets/player.png', 'assets/player.json');
}

function create() {


    var config = {
        type: Phaser.AUTO,
        width: 1000,
        height: 600,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 50 },
                debug: false
            }
        },
        scene: {
            preload: preload,
            create: create,
            update: update
        }
    };

    let map, stage;
    let groundLayer, backgroundLayer;
    let cursors;
    let player;
    // let bombs;
    // let platforms;
    // let stars;
    // let score = 0;
    // let playerHealth = 100;
    // let playerHealthText;
    // let scoreText;
    // let krill;
    // let jellyFish;
    // let whaler;

    var game = new Phaser.Game(config);

    function preload ()
    {
        this.load.tilemap('tilemap', '/public/sampleMap.json', null, Phaser.Tilemap.TILED_JSON)
        this.load.image('tiles', '/public/fishTilesheet2.png')
        this.load.image('whale', '/public/narman.png');
}


    function create ()
    {
        // stage.backgroundColor = "#a9f0ff";
        map = game.add.tilemap('tilemap');
        map.addTilesetImage('fishTilesheet', 'tiles');

        backgroundlayer = map.createLayer('BackgroundLayer');
        groundLayer = map.createLayer('GroundLayer');

        // mapsetCollisionBetween(1, 100, true, 'GroundLayer')

        groundLayer.resizeWorld();

        // player = this.physics.add.sprite(400, 450, 'whale');

        // player.setBounce(0.2);
        // player.setCollideWorldBounds(true);

        // stars = this.physics.add.group({
        //     key: 'star',
        //     repeat: 11,
        //     setXY: { x: 12, y: 0, stepX: 70 }
        // });
        
        // stars.children.iterate(function (child) {
        //     child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
        // })

        // bombs = this.physics.add.group();

        // this.anims.create({
        //     key: 'left',
        //     frames: this.anims.generateFrameNumbers('whale', { start: 0, end: 3 }),
        //     frameRate: 10,
        //     repeat: -1
        // });

        // this.anims.create({
        //     key: 'turn',
        //     frames: [ { key: 'whale', frame: 4 } ],
        //     frameRate: 20
        // });

        // this.anims.create({
        //     key: 'right',
        //     frames: this.anims.generateFrameNumbers('whale', { start: 5, end: 8 }),
        //     frameRate: 10,
        //     repeat: -1
        // });

        // this.physics.add.collider(this.player, this.groundLayer);

        // this.physics.add.collider(stars, platforms);
        // this.physics.add.collider(bombs, platforms);


        // this.physics.add.overlap(player, stars, collectStarCB, null, this);

        // this.physics.add.collider(player, bombs, hitBombCB, null, this);


        // cursors = this.input.keyboard.createCursorKeys();
        
        // scoreText = this.add.text(330, 16, 'Score: 0', { fontSize: '24px', fill: '#000'});
        // playerHealthText = this.add.text(16, 16, 'Health: 100', {fontSize: '24px', fill: '#000'})
    }

    function update ()
    {
        // if (cursors.left.isDown) 
        //     {
        //         player.setVelocityX(-160);

        //         // player.anims.play('left', true);   
        //     }
        // else if (cursors.right.isDown)
        //     {
        //         player.setVelocityX(160);
                
        //         // player.anims.play('right', true);
        //     }
        // else 
        //     {
        //         player.setVelocityX(0);

        //         // player.anims.play('turn');
        //     }
        // if (cursors.up.isDown || cursors.space.isDown)
        //     {
        //         player.setVelocityY(-80);
        //         // player.setVelocityY(-50);
        //     }
        // if (cursors.down.isDown)
        // {
        //     player.setVelocityY(80);
        //     // player.setVelocityY(-50);
        // }
    }
    
    // function collectfishCB (player, star) {
    //         fish.disableBody(true, true);

    //         score += 10;
    //         if (playerHealth < 100) {
    //             playerHealth += 5;
    //             playerHealthText.setText(`Health: ${playerHealth}`);
    //         }
    //         scoreText.setText(`Score: ${score}`);

            // if (stars.countActive(true) === 0) {
                
            //     stars.children.iterate(child => {
            //         child.enableBody(true, child.x, 0, true, true);
            //     });
                
            //     var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

            //     var bomb = bombs.create(x, 16, 'bomb');
            //     bomb.setBounce(1);
            //     bomb.setCollideWorldBounds(true);
            //     bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
            //     bomb. allowGravity = false;
            // }
    //     }


    // function collectTreasure (player, star) {
    //         treasure.disableBody(true, true);

    //         score += 10;
    //         playerHealth = 100;
    //         playerHealthText.setText(`Health: ${playerHealth}`);
    //         scoreText.setText(`Score: ${score}`);

    //         if (stars.countActive(true) === 0) {
                
    //             stars.children.iterate(child => {
    //                 child.enableBody(true, child.x, 0, true, true);
    //             });
                
    //             var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

    //         //     var bomb = bombs.create(x, 16, 'bomb');
    //         //     bomb.setBounce(1);
    //         //     bomb.setCollideWorldBounds(true);
    //         //     bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
    //         //     bomb. allowGravity = false;
    //         // }
    //     }

        // function hitJellyFishCB (player, jelly) {

        //     if (playerHealth > 10) {
        //         playerHealth -= 10;
        //         playerHealthText.setText(`Health: ${playerHealth}`);
        //     }

        //     else if (playerHealth > 10) {
        //     playerHealth -= 10;
        //     playerHealthText.setText(`Health: ${playerHealth}`);
        //     this.physics.pause();

        //     player.setTint (0xff0000);

        //     player.anims.play('turn');

        //     gameOver = true;
            
        //     }
        // }

        // function getHarpedCB (player, harpoon) {
        //     playerHealth = 0;
        //     playerHealthText.setText(`Health: ${playerHealth}`);
        //     this.physics.pause();

        //     player.setTint (0xff0000);

        //     // player.anims.play('turn');

        //     gameOver = true;

        // }