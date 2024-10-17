import Phaser from 'phaser'
import organisms from './organisms'

export default class Fish extends Phaser.Physics.Arcade.Sprite {
  constructor( scene, x, y, type) {
    super(scene, x, y, type)

    this.setScale(0.5)
    scene.add.existing(this)
    scene.physics.add.existing(this)

    this.setScale(0.25).setInteractive()
    this.on('pointerdown', () => {
      this.togglePopup(scene)
    })

    scene.events.on('update', () => { this.update(scene) })

    this.textbox = new Textbox(scene, 0, 0, 'textbox', type)
  }
  update(scene) {
    if(this.x < scene.scale.width + 100) {
      this.x++
    }
    else {
        this.x = -100   
    }
    this.textbox.follow(this)
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
  constructor(scene, x = 0, y = 0, texture = 'textbox', type) {
    super(scene, x, y, texture)
    // console.log(text)

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
  }

  follow(organism) {
    this.setX(organism.x)
    this.setY(organism.y - 100)
    this.text.setX(organism.x - 140)
    this.text.setY(organism.y - 120)
  }
}
