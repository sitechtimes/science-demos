import { Scene } from "phaser";
import { DataStore } from "@/Stores/DataStore";

export class Preloader extends Scene {
  constructor() {
    super("Preloader");
  }

  init() {
    // Phaser loading bar
    this.add.image(512, 384, "background");
    this.add.rectangle(512, 384, 468, 32).setStrokeStyle(1, 0xffffff);
    const bar = this.add.rectangle(512 - 230, 384, 4, 28, 0xffffff);
    this.load.on("progress", (progress) => {
      bar.width = 4 + 460 * progress;
    });
  }

  preload() {
    const organisms = DataStore().organisms;

    // load image for each organism typ
    Object.keys(organisms).forEach((key) => {
      this.load.image(key, organisms[key].img);
      // console.log(key, organisms[key].img)
    });

    this.load.image("textbox", "/demo-assets/cell-division/textbox.png");
  }

  create() {
    this.scene.start("Game");
  }
}
