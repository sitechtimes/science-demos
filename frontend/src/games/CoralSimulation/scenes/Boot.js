import { Scene } from "phaser";

export class Boot extends Scene {
  constructor() {
    super("Boot");
  }

  preload() {
    this.load.image("background", "/demo-assets/cell-division/background.png");
  }

  create() {
    this.scene.start("Preloader");
  }
}
