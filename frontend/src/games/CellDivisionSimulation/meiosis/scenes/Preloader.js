import { Scene } from "phaser";

export class Preloader extends Scene {
  constructor() {
    super("Preloader");
  }

  init() {
    //  We loaded this image in our Boot Scene, so we can display it here

    //  A simple progress bar. This is the outline of the bar.
    this.add.rectangle(512, 384, 468, 32).setStrokeStyle(1, 0xffffff);

    //  This is the progress bar itself. It will increase in size from the left based on the % of progress.
    const bar = this.add.rectangle(512 - 230, 384, 4, 28, 0xffffff);

    //  Use the 'progress' event emitted by the LoaderPlugin to update the loading bar
    this.load.on("progress", (progress) => {
      //  Update the progress bar (our bar is 464px wide, so 100% = 464px)
      bar.width = 4 + 460 * progress;
    });
  }

  preload() {
    //  Load the assets for the game - Replace with your own assets
    this.load.image(
      "mei-time-0",
      "/demo-assets/cell-division/meiosis/mei-time-0.png"
    );
    this.load.image(
      "mei-time-1",
      "/demo-assets/cell-division/meiosis/mei-time-1.png"
    );
    this.load.image(
      "mei-time-2",
      "/demo-assets/cell-division/meiosis/mei-time-2.png"
    );
    this.load.image(
      "mei-time-3",
      "/demo-assets/cell-division/meiosis/mei-time-3.png"
    );
    this.load.image(
      "mei-time-4",
      "/demo-assets/cell-division/meiosis/mei-time-4.png"
    );
    this.load.image(
      "mei-time-5",
      "/demo-assets/cell-division/meiosis/mei-time-5.png"
    );
    this.load.image(
      "mei-time-6",
      "/demo-assets/cell-division/meiosis/mei-time-6.png"
    );
    this.load.image(
      "mei-time-7",
      "/demo-assets/cell-division/meiosis/mei-time-7.png"
    );
    this.load.image(
      "mei-time-8",
      "/demo-assets/cell-division/meiosis/mei-time-8.png"
    );
    this.load.image(
      "mei-time-9",
      "/demo-assets/cell-division/meiosis/mei-time-9.png"
    );
    this.load.image(
      "mei-time-10",
      "/demo-assets/cell-division/meiosis/mei-time-10.jpg"
    );

    this.load.image("textbox", "/demo-assets/cell-division/textbox.png");
  }

  create() {
    //  When all the assets have loaded, it's often worth creating global objects here that the rest of the game can use.
    //  For example, you can define global animations here, so we can use them in other scenes.

    //  Move to the MainMenu. You could also swap this for a Scene Transition, such as a camera fade.
    this.scene.start("Game");
    // this.add.image('time0', "/src/games/CellDivisionSimulation/images/time0.jfif")
  }
}
