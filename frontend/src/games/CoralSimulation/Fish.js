import Organism from "./Organism";

export default class Fish extends Organism {
  constructor(scene, x, y, type) {
    super(scene, x, y, type);
  }

  update(scene) {
    // if fish is not offscreen, move normall to the right
    if (this.x < scene.scale.width + 100) {
      this.x++;
    } else {
      // if fish is offscreen, teleport to other side of screen
      this.x = -100;
    }

    // move textbox with fish
    this.textbox.follow(this);
  }
}
