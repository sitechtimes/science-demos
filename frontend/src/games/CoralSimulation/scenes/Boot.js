import {Scene} from 'phaser';

export class Boot extends Scene
{
    constructor ()
    {
        super('Boot');
    }

    preload ()
    {
        this.load.image('background', '/src/games/CoralSimulation/images/background.png');
    }

    create ()
    {
        this.scene.start('Preloader');
    }
}
