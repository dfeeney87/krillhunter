// let map, stage;
// let groundLayer;
// let backgroundLayer;
// let fishLayer;
// let cursors;
// let player;
// let width;
// let height;
// let krills;
// let score = 0;
// let health = 100;
// let scoreText;
// let healthText;

// let playstate = {

// create: function () {
//         map = this.make.tilemap({key: 'map'});

//         var allTiles = map.addTilesetImage('fishTilesheet');

//         backgroundLayer = map.createDynamicLayer('backgroundlayer', allTiles, 0, 0);
//         fishLayer = map.createDynamicLayer('fishlayer', allTiles, 0, 0);
//         groundLayer = map.createDynamicLayer('groundlayer', allTiles, 0, 0);

//         this.physics.world.bounds.width = groundLayer.width;
//         this.physics.world.bounds.height = backgroundLayer.height;

//         groundLayer.setCollisionByExclusion([-1]);

//         player = this.physics.add.sprite(0, 800, 'narley');
//         player.scaleX = 2;
//         player.scaleY = 2;
//         player.anchor = (0.5, 0.5)
//         player.setBounce(0.3);
//         player.setCollideWorldBounds(true);

//          this.anims.create({
//             key: 'turn',
//             frames: [ { key: 'narley', frame: 4 } ],
//             frameRate: 20
//          });

//          this.anims.create({
//             key: 'right',
//             frames: this.anims.generateFrameNumbers('narley', { start: 0, end: 7 }),
//             frameRate: 10,
//             repeat: -1
//         });

//         this.anims.create({
//             key: 'left',
//             frames: this.anims.generateFrameNumbers('narley', { start: 0, end: 7 }),
//             frameRate: 10,
//             repeat: -1
//         });

//         this.anims.create({
//             key: 'up',
//             frames: [ { key: 'narley', frame: 5 } ],
//             frameRate: 10,
//             repeat: -1
//         });

//         this.anims.create({
//             key: 'down',
//             frames: [ { key: 'narley', frame: 3 } ],
//             frameRate: 10,
//             repeat: -1
//         });

//         krills = this.physics.add.group({
//             key: 'krill',
//             repeat: 20,
//             setXY: { x: 20, y: 0, stepX: 200}
//         })

//         krills.children.iterate(child => {
//             child.setBounce(1);
//             child.setCollideWorldBounds(true);
//             child.setVelocity(Phaser.Math.Between(-450, 450), Phaser.Math.Between(-250, 250));
//             child.body.allowGravity = false;
//             let rand = Phaser.Math.Between(1, 3)
//             child.scaleX = rand;
//             child.scaleY = rand;
//         })

//         // player.body.setSize(player.width - 4, player.height);

//         this.physics.add.collider(groundLayer, player);
//         this.physics.add.collider(groundLayer, krills);
//         this.physics.add.overlap(player, krills, collectKrillCB, null, this);
//         // this.mapsetCollisionBetween(1, 20, true, 'groundLayer')

//         // console.log('ground', groundLayer);
//         // console.log('background', backgroundlayer);

//     // make the camera follow the player
//         this.cameras.main.startFollow(player);
//         this.cameras.main.setBounds(0, 0, this.physics.world.bounds.width);
//         // console.log(krill)

//         cursors = this.input.keyboard.createCursorKeys();

//         scoreText = this.add.text(600, 16, 'Score: 0', { fontSize: '24px', fill: '#000'});
//         playerHealthText = this.add.text(16, 16, 'Health: 100', {fontSize: '24px', fill: '#000'})
//         scoreText.setScrollFactor(0);
//         playerHealthText.setScrollFactor(0);
//       },

//     update: function ()
//     {
//              if (cursors.left.isDown)
//             {
//                 player.setVelocityX(-260);
//                 if (player.scaleX > 0){
//                 player.scaleX = player.scaleX * -1}
//                 player.anims.play('left', true);
//             }

//         else if (cursors.right.isDown)
//             {
//                 player.setVelocityX(260);
//                 if (player.scaleX < 0){
//                 player.scaleX = player.scaleX * -1}
//                 player.anims.play('right', true);
//             }

//         else if (cursors.up.isDown || cursors.space.isDown)
//             {
//                 player.setVelocityY(-180);
//                 player.anims.play('up');
//             }

//         else if (cursors.down.isDown)
//         {
//             player.setVelocityY(180);
//             player.anims.play('down');
//         }
//         else
//             {
//                 player.setVelocityX(0);

//                 player.anims.play('turn');
//             }
//     },

//     collectKrillCB: function (player, krill) {
//             krill.disableBody(true, true);
//             let multiplier = Number(krill.scaleX);

//             score += multiplier;
//             // console.log(krill.scaleX);
//             if (health < 100) {
//                 health += 5;
//                 playerHealthText.setText(`Health: ${health}`);
//             }
//             scoreText.setText(`Score: ${score}`);

//             if (krills.countActive(true) === 0) {

//                 krills.children.iterate(child => {
//                     child.enableBody(true, child.x, 0, true, true);
//                     child.setBounce(1);
//                     child.setCollideWorldBounds(true);
//                     child.setVelocity(Phaser.Math.Between(-450, 450), Phaser.Math.Between(-250, 250));
//                     child.body.allowGravity = false;
//                     let rand = Phaser.Math.Between(1, 3)
//                     child.scaleX = rand;
//                     child.scaleY = rand;
//                 });

//                 // var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

//                 // var bomb = bombs.create(x, 16, 'bomb');
//                 // bomb.setBounce(1);
//                 // bomb.setCollideWorldBounds(true);
//                 // bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
//                 // bomb. allowGravity = false;
//             }
//         },

//         Win: function () {
//             game.state.start('win');
//         }
// }
