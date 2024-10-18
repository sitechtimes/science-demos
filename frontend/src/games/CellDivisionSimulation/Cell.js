import Phaser from 'phaser'

class Textbox extends Phaser.GameObjects.Sprite {
    constructor(scene, x = 0, y = 0, texture = 'textbox') {
      super(scene, x, y, texture)
  
      scene.add.existing(this)
      this.setVisible(false)
      this.setScale(1.3)
      
      this.text = scene.add
        .text(10, 10, 'text text text text text text text text text text text text')
        .setColor('0x000000')
      this.text.setWordWrapWidth(290, false)
      this.text.setVisible(false)
    }
  
    // follow(organism) {
    //   this.setX(organism.x)
    //   this.setY(organism.y - 100)
    //   this.text.setX(organism.x - 140)
    //   this.text.setY(organism.y - 120)
    // }
  }

export default class Cell extends Phaser.Physics.Arcade.Sprite {
constructor( scene, x, y, texture, type ) {
    super(scene, x, y, texture)

    scene.add.existing(this)
    // scene.physics.add.existing(this)

    this.setScale(0.5).setInteractive()
    this.on('pointerdown', () => {
    if (this.popup) {
        this.deletePopup()
        this.popup = undefined
    } else {
        this.addPopup(scene, 'description', this.x, this.y, this)
    }
    })

    scene.events.on('update', () => { this.update(scene) })

    this.textbox = new Textbox(scene)
}
update(scene) {
    if(this.x < scene.scale.width) {
    this.x++
    }
    else {
        this.x = 0   
    }
    // this.textbox.follow(this)
}
addPopup(scene, description, x, y, organism) {
    this.textbox.setVisible(!this.textbox.visible)
    this.textbox.text.setVisible(!this.textbox.text.visible)

}
deletePopup() {
    this.popupContainer.destroy()
}
}