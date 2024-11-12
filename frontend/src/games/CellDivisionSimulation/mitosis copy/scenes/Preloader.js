import {Scene} from 'phaser';

export class Preloader extends Scene
{
    constructor ()
    {
        super('Preloader');
    }

    init ()
    {
        //  We loaded this image in our Boot Scene, so we can display it here

        //  A simple progress bar. This is the outline of the bar.
        this.add.rectangle(512, 384, 468, 32).setStrokeStyle(1, 0xffffff);

        //  This is the progress bar itself. It will increase in size from the left based on the % of progress.
        const bar = this.add.rectangle(512-230, 384, 4, 28, 0xffffff);

        //  Use the 'progress' event emitted by the LoaderPlugin to update the loading bar
        this.load.on('progress', (progress) => {

            //  Update the progress bar (our bar is 464px wide, so 100% = 464px)
            bar.width = 4 + (460 * progress);

        });
    }

    preload ()
    {
        //  Load the assets for the game - Replace with your own assets
        this.load.image('time0', "/src/games/CellDivisionSimulation/images/time0.jfif")
        this.load.image('time1', "/src/games/CellDivisionSimulation/images/time1.png")
        this.load.image('time2', "/src/games/CellDivisionSimulation/images/time2.png")
        this.load.image('time3', "/src/games/CellDivisionSimulation/images/time3.png")
        this.load.image('time4', "/src/games/CellDivisionSimulation/images/time4.png")
        this.load.image('time5', "/src/games/CellDivisionSimulation/images/time5.png")

        this.load.image('textbox', "/src/games/CellDivisionSimulation/images/textbox.png")
        
    }

    create ()
    {
        //  When all the assets have loaded, it's often worth creating global objects here that the rest of the game can use.
        //  For example, you can define global animations here, so we can use them in other scenes.

        //  Move to the MainMenu. You could also swap this for a Scene Transition, such as a camera fade.
        this.scene.start('Game');
        // this.add.image('time0', "/src/games/CellDivisionSimulation/images/time0.jfif")
    }
}
