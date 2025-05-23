import { EventBus } from "../EventBus";
import { Scene } from "phaser";
import { cellDivStore } from "@/Stores/celldiv/CellDivStore";
import Cell from "../Cell";
import { ref } from "vue";

export const limit = ref(false);
export class Game extends Scene {
  constructor() {
    super("Game");
    this.cycleTime = 0;
    this.phase = 0;
  }
  restart() {
    limit.value = false;
    this.phase = 0;
    this.cycleTime = 0;
    this.cells.forEach((cell) => cell.destroy());
    const cell = new Cell(this, 400, 300, "time0", "x")
      .setScale(0.5)
      .setDepth(0);
    this.cells = [cell];
    // console.log('restarted')
    // console.log(this.cells)
  }
  progressPhase() {
    if (this.phase < 31) {
      switch (this.cycleTime) {
        case 4:
          this.cycleTime = 0;
          this.phase++;
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
          cellDivStore().progressState(0);
          // console.log(this.cycleTime);
          break;
        default:
          this.cycleTime++;
          this.phase++;
          this.cells.forEach((cell) =>
            cell.setTexture("time" + this.cycleTime)
          );
          this.cells.forEach((cell) => cell.clearPopup());
          cellDivStore().addTime("mitosis");
          cellDivStore().progressState(1);
        // console.log(this.cycleTime);
      }
    }
    // console.log(this.cycleTime, this.phase)
    if (this.phase >= 30) {
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
}
