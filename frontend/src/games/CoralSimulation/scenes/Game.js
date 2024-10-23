import { EventBus } from '../EventBus';
import {Scene} from 'phaser';
import Fish from '../Fish'
import StaticOrganism from '../StaticOrganism';
import organisms from '../organisms';
import { generateLocationsFish, generateLocationsStaticOrganism } from '../locationsScript';

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
    addFish(type, {x, y}) {
        const newFish = new Fish(this, x, y, type)
        this.fish.push(newFish)
    }
    addStaticOrganism(type) {
        const x = 20 + Math.floor(Math.random() * (this.scale.width - 40))
        const y = Math.floor(this.scale.height - (Math.random() * (this.scale.height * 0.1))) - 30

        const newStaticOrganism = new StaticOrganism(this, x, y, type)
        
        // this.fish.forEach((fish) => {
        //     if(Math.abs(newFish.x - fish.x) > 50) {
        //         newFish
        //     }
        // })

        this.fish.push(newStaticOrganism)
    }

    randomElement(arr) {
        const i = Math.floor(Math.random() * arr.length)
        return [arr[i], i]
    }

    initializeOrganisms() {
        const locationsFish = generateLocationsFish()
        const locationsStaticOrganism = generateLocationsStaticOrganism()
        console.log(locationsStaticOrganism)

        const fish = ['hawksbill_sea_turtle', 'nassau_grouper', 'queen_angelfish', 'red_lionfish', 'spotlight_parrotfish', 'yellowtail_snapper']
        // const staticOrganisms = ['algae', 'boulder_star_coral', 'crown_of_thorns_starfish', 'long_spined_urchin', 'sponge', 'staghorn_coral']

        Object.keys(organisms).forEach((i) => {
            for(let j = 0; j < Math.ceil(organisms[i].number ** (1/3)); j++) {
                if(fish.includes(i)) {
                    const [location, index] = this.randomElement(locationsFish)
                    locationsFish.splice(index, 1)
                    this.addFish(i, location)
                } else {
                    const [location, index] = this.randomElement(locationsStaticOrganism)
                    locationsStaticOrganism.splice(index, 1)
                    this.addStaticOrganism(i, location)
                }
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
