import Phaser from 'phaser'

class Textbox extends Phaser.GameObjects.Sprite {
    constructor(scene, x = 0, y = 0, texture = 'textbox', text) {
      super(scene, x, y, texture)
  
      scene.add.existing(this)
      this.setVisible(false)
      this.setScale(1.3)
      
      this.text = scene.add
        .text(x-150, y, text)
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
constructor( scene, x, y, texture ) {
    super(scene, x, y, texture)

    scene.add.existing(this)
    // scene.physics.add.existing(this)
    console.log(this.texture)
    this.setScale(0.5).setInteractive()
    this.on('pointerdown', () => {
    let text = this.texture.key
    if (this.popup) {
        this.deletePopup()
        this.popup = undefined
    } else {
        this.textbox = new Textbox(scene, x,y-200, 'textbox', text)
        this.addPopup()
    }
    })

    // scene.events.on('update', () => { this.update(scene) })

    // this.textbox = new Textbox(scene, x,y-200, 'textbox', text)
}

addPopup() {
    this.textbox.setVisible(!this.textbox.visible).setDepth(1)
    this.textbox.text.setVisible(!this.textbox.text.visible).setDepth(2)

}
deletePopup() {
    this.popupContainer.destroy()
}
}