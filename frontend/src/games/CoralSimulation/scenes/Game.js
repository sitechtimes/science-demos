import { EventBus } from '../EventBus';
import {Scene} from 'phaser';
import Fish from '../Fish'

export class Game extends Scene
{
    constructor ()
    {
        super('Game');
    }

    create ()
    {
        // this.cameras.main.setBackgroundColor(0x00ff00);

        this.add.image(512, 384, 'background').setAlpha(1);
        this.organisms = this.physics.add.staticGroup();

        this.fish = []


        EventBus.emit('current-scene-ready', this);
    }

    update () {
    }
    
    changeScene ()
    {
        this.scene.start('GameOver');
    }
    addOrganism(type) {
        this.fish.push(new Fish(this, 100 + Math.floor(Math.random() * this.scale.width - 200), 100 + Math.floor(Math.random() * this.scale.height - 200), type))
        // console.log(this.organisms.children.getArray())
    }
}
