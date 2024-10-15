import { EventBus } from '../EventBus';
import {Scene} from 'phaser';
import Fish from '../Fish'
import organisms from '../organisms';

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
        this.fish = []
        this.initializeOrganisms()
        // this.fish = [new Fish(this, 100 + Math.floor(Math.random() * (this.scale.width - 200)), 100 + Math.floor(Math.random() * (this.scale.height - 200)), 'nassau_grouper')]

        EventBus.emit('current-scene-ready', this);
    }

    update () {
    }
    
    changeScene ()
    {
        this.scene.start('GameOver');
    }
    addOrganism(type) {
        this.fish.push(new Fish(this, Math.floor(Math.random() * (this.scale.width + 200)), Math.floor((Math.random() * (this.scale.height)) * 0.7) + 80, type))
        // console.log(this.organisms.children.getArray())
    }

    initializeOrganisms() {
        const fish = ['hawksbill_sea_turtle', 'nassau_grouper',]

        Object.keys(organisms).forEach((i) => {
            for(let j = 0; j < Math.ceil(organisms[i].number / 50); j++) {
                this.addOrganism(i)
            }
        })
    }
}
