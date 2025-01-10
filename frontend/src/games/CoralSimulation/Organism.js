import Phaser from "phaser";
import { DataStore } from '@/Stores/DataStore'

export default class Organism extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, type) {
        super(scene, x, y, type)

        // Add sprite to game
        scene.add.existing(this)
        scene.physics.add.existing(this)

        this.setScale(0.2)
        
        // toggle popup on click
        this.setInteractive()
        this.on('pointerdown', () => {
            this.togglePopup(scene)
        })

        scene.events.on('update', () => { this.update(scene) })

        // initialize Textbox
        this.textbox = new Textbox(scene, 0, 0, 'textbox', type, this)
    }

    togglePopup(scene) {
        scene.clearTextboxes(this)
        this.textbox.setVisible(!this.textbox.visible)
        this.textbox.text.setVisible(!this.textbox.text.visible)
    }

    clearPopup() {
        this.textbox.setVisible(false)
        this.textbox.text.setVisible(false)
    }


}

class Textbox extends Phaser.GameObjects.Sprite {
    constructor(scene, x = 0, y = 0, texture = 'textbox', type, organism) {
      super(scene, x, y, texture)
  
      const organisms = DataStore().organisms
  
      scene.add.existing(this)
      this.setVisible(false)
      this.setScale(1.3)
      this.setDepth(10)
      
      this.text = scene.add
        .text(10, 10, organisms[type].description)
        .setColor('0x000000')
      this.text.setWordWrapWidth(290, false)
      this.text.setVisible(false)
      this.text.setDepth(11)
  
      this.text.x = organism.x - 140
      this.text.y = organism.y - 120
    }
    follow(organism) {
        this.setX(organism.x)
        this.setY(organism.y - 100)
        this.text.setX(organism.x - 140)
        this.text.setY(organism.y - 120)
    }
  }
  