var menuState = {
    create: function () {

        let titlePrompt = game.add.text(80, 80, 'Krill Hunter', {font: '50px Arial', fill: '#fffff'})

        let startPrompt = game.add.text(80, game.world.height - 80, 'Press SPACE to Swim', {font: '50px Arial', fill: '#fffff'})

        var space = game.input.keyboard.addKey(Phaser.Keyboard.space);

        this.add.image(600, 400, 'menuImage')

        space.onDown.addOnce(this.start, this);
    },
    start: function () {
        game.state.start('play');
    }
}
