import { EventBus } from '../EventBus';
import {Scene} from 'phaser';
// import Fish from '../Fish'

export class Game extends Scene
{
    constructor ()
    {
        super('Game');
    }

    create ()
    {
        // this.cameras.main.setBackgroundColor(0x00ff00);

        this.add.image(512, 384, 'backgroundimg').setAlpha(1);
        this.organisms = this.physics.add.staticGroup();

        // this.fish = [new Fish(this, Math.floor(Math.random() * this.scale.width), Math.floor(Math.random() * this.scale.height), 'fish', 'fish')]

        EventBus.emit('current-scene-ready', this);
    }

    update () {
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
    
    changeScene ()
    {
        this.scene.start('GameOver');
    }
    // addOrganism(type) {
    //     new Fish(this, Math.floor(Math.random() * this.scale.width), Math.floor(Math.random() * this.scale.height), 'fish', 'fish') 
    //     // console.log(this.organisms.children.getArray())
    // }
}
