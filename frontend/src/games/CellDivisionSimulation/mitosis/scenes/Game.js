import { EventBus } from "../EventBus";
import { Scene } from "phaser";
import { cellDivStore } from "@/Stores/celldiv/CellDivStore";
import Cell from "../Cell";
// import Textbox from "../Cell"; // why is this not used?
import { ref } from "vue";

export const limit = ref(false);
export class Game extends Scene {
  constructor() {
    super("Game");
    this.time_in_cycle = 0;
    this.year = 0;
  }
  restart() {
    limit.value = false;
    this.year = 0;
    this.time_in_cycle = 0;
    this.cells.forEach((cell) => cell.destroy());
    const cell = new Cell(this, 400, 300, "time0", "x")
      .setScale(0.5)
      .setDepth(0);
    this.cells = [cell];
    // console.log('restarted')
    // console.log(this.cells)
  }
  progressYear() {
    if (this.year < 31) {
      switch (this.time_in_cycle) {
        case 5:
          this.time_in_cycle = 0;
          this.year++;
          this.cells.forEach((cell) => cell.setTexture("time0"));
          for (let i in this.cells) {
            this.cells.push(
              new Cell(
                this,
                Math.floor(Math.random() * this.scale.width),
                Math.floor(Math.random() * this.scale.height),
                "time0"
              )
                .setScale(0.5)
                .setDepth(0)
            );
          }
          this.cells.forEach((cell) => cell.clearPopup());
          cellDivStore().addPoint();
          // console.log(this.time_in_cycle);
          break;
        default:
          this.time_in_cycle++;
          this.year++;
          this.cells.forEach((cell) =>
            cell.setTexture("time" + this.time_in_cycle)
          );
          this.cells.forEach((cell) => cell.clearPopup());
          cellDivStore().addTime("mitosis");
        // console.log(this.time_in_cycle);
      }
    }
    // console.log(this.time_in_cycle, this.year)
    if (this.year >= 30) {
      // console.log('ive hit my limit')
      limit.value = true;
      // console.log(limit)
    }
  }
  create() {
    // this.cameras.main.setBackgroundColor(0x00ff00);

    this.add.image(512, 384, "backgroundimg").setAlpha(1);

    this.cells = [
      new Cell(this, 400, 300, "time0", "x").setScale(0.5).setDepth(0),
    ];
    EventBus.emit("current-scene-ready", this);
  }

  update() {
    // if (this.organisms.getChildren() !== undefined) {
    //         const organisms = this.organisms.getChildren()
    //         // console.log(organism)
    //         organisms.forEach((organism) => {
    //             if(organism.x < this.scale.width) {
    //                 organism.x++
    //                 if(organism.popup){
    //                     organism.popup.x++
    //                 }
    //             }
    //             else {
    //                 organism.x = 0
    //                 if(organism.popup) {
    //                     organism.popup.x = 0
    //                 }
    //             }
    //         })
    //     }
  }

  changeScene() {
    this.scene.start("GameOver");
  }
  clearTextboxes(excluded) {
    this.cells.forEach((cell) => {
      if (cell.x !== excluded.x || cell.y !== excluded.y) {
        cell.clearPopup();
      }
    });
  }
  // addOrganism(type) {
  //     new Fish(this, Math.floor(Math.random() * this.scale.width), Math.floor(Math.random() * this.scale.height), 'fish', 'fish')
  //     // console.log(this.organisms.children.getArray())
  // }
  // progressYear(){
  //     // if year/7=0, make a new cell
  // }
}
