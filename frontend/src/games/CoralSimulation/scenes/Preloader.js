import {Scene} from 'phaser';
import { DataStore } from '@/Stores/DataStore';

export class Preloader extends Scene
{
    constructor ()
    {
        super('Preloader');
    }

    init ()
    {
        // Phaser loading bar
        this.add.image(512, 384, 'background');
        this.add.rectangle(512, 384, 468, 32).setStrokeStyle(1, 0xffffff);
        const bar = this.add.rectangle(512-230, 384, 4, 28, 0xffffff);
        this.load.on('progress', (progress) => {
            bar.width = 4 + (460 * progress);

        });
    }

    preload ()
    {        
        const organisms = DataStore().organisms
        
        // 
        Object.keys(organisms).forEach((key) => {
            this.load.image(key, organisms[key].img)
            console.log(key, organisms[key].img)
        })
        this.load.image('textbox', '/src/games/CoralSimulation/images/textbox.png')
    }

    create ()
    {
        //  When all the assets have loaded, it's often worth creating global objects here that the rest of the game can use.
        //  For example, you can define global animations here, so we can use them in other scenes.

        //  Move to the MainMenu. You could also swap this for a Scene Transition, such as a camera fade.
        this.scene.start('Game');
    }
}
