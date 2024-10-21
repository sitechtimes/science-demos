import Phaser from 'phaser'
import organisms from './organisms'

export default class StaticOrganism extends Phaser.Physics.Arcade.Sprite {
  constructor( scene, x, y, type) {
    super(scene, x, y, type)

    this.setScale(0.5)
    scene.add.existing(this)
    scene.physics.add.existing(this)

    this.setScale(0.25).setInteractive()
    this.on('pointerdown', () => {
      this.togglePopup(scene)
    })

    this.textbox = new Textbox(scene, 0, 0, 'textbox', type, this)
    this.textbox.x = x
    this.textbox.y = y - 100
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
    console.log(type, organisms[type].description)

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
}
