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
    addFish(type) {
        const x = Math.floor(Math.random() * (this.scale.width + 200))
        const y = Math.floor((Math.random() * (this.scale.height)) * 0.7) + 80

        const newFish = new Fish(this, x, y, type)
        
        this.fish.forEach((fish) => {
            if(Math.abs(newFish.x - fish.x) > 50) {
                newFish
            }
        })

        this.fish.push(newFish)
        // console.log(this.organisms.children.getArray())
    }

    initializeOrganisms() {
        // const fish = ['hawksbill_sea_turtle', 'nassau_grouper',]

        Object.keys(organisms).forEach((i) => {
            for(let j = 0; j < Math.ceil(organisms[i].number / 50); j++) {
                this.addFish(i)
            }
        })
    }

    clearTextboxes(excluded) {
        this.fish.forEach((fish) => {
            if (fish.x !== excluded.x && fish.y !== excluded.y) {
                fish.clearPopup()
            }
        })

    }
}
