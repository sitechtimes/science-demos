import Phaser from 'phaser'

class Textbox extends Phaser.GameObjects.Sprite {
    constructor(scene, x = 0, y = 0, texture = 'textbox', text) {
      super(scene, x, y, texture)
  
      scene.add.existing(this)
      this.setVisible(false)
      this.setScale(0.5)
      
      this.text = scene.add
        .text(x-30, y, text)
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
    // console.log(this.texture)
    this.setScale(0.5).setInteractive()
    let text = this.texture.key
    this.textbox = new Textbox(scene, x,y-200, 'textbox', text).setDepth(2)
    this.textbox.visible = false
    this.on('pointerdown', () => {
      this.togglePopup(scene)
      this.textbox.text.setText(this.texture.key).setDepth(3)
      // if (this.popup) {
      //     this.deletePopup()
      //     this.popup = undefined
      // } else {
      //     this.addPopup()
      // }
    })

    // scene.events.on('update', () => { this.update(scene) })

    // this.textbox = new Textbox(scene, x,y-200, 'textbox', text)
}
  clearPopup(){
    this.textbox.setVisible(false)
    this.textbox.text.setVisible(false)
  }
  togglePopup(scene){
    scene.clearTextboxes(this)
    this.textbox.setVisible(!this.textbox.visible)
    this.textbox.text.setVisible(!this.textbox.text.visible)
  }
  addPopup() {
      this.textbox.setVisible(!this.textbox.visible).setDepth(2)
      this.textbox.text.setVisible(!this.textbox.text.visible).setDepth(3)

  }
  deletePopup() {
      this.popupContainer.destroy()
  }
}