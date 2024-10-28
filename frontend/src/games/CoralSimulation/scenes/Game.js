import { EventBus } from '../EventBus';
import {Scene} from 'phaser';
import Fish from '../Fish'
import StaticOrganism from '../StaticOrganism';
import { DataStore } from '@/Stores/DataStore';
import { generateLocationsFish, generateLocationsStaticOrganism } from '../locationsScript';

export class Game extends Scene
{
    constructor ()
    {
        super('Game');
    }

    create ()
    {

        this.add.image(512, 384, 'background').setAlpha(1);
        this.fish = []

        this.locationsFish = generateLocationsFish()
        this.locationsStaticOrganism = generateLocationsStaticOrganism()
        this.fishDisplayed = {}

        this.initializeOrganisms()

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
    addStaticOrganism(type, {x, y}) {
        const newStaticOrganism = new StaticOrganism(this, x, y, type)
        this.fish.push(newStaticOrganism)
    }

    randomElement(arr) {
        const i = Math.floor(Math.random() * arr.length)
        return [arr[i], i]
    }

    initializeOrganisms() {
        const dataStore = DataStore()
        const organisms = dataStore.organisms
        console.log(Object.keys(organisms))

        const fish = ['hawksbillSeaTurtle', 'nassauGrouper', 'queenAngelfish', 'redLionfish', 'spotlightParrotfish', 'yellowtailSnapper']
        // const staticOrganisms = ['algae', 'boulder_star_coral', 'crown_of_thorns_starfish', 'long_spined_urchin', 'sponge', 'staghorn_coral']

        Object.keys(organisms).forEach((i) => {
            for(let j = 0; j < Math.ceil(organisms[i].population ** (2/5)); j++) {
                if(fish.includes(i)) {
                    const [location, index] = this.randomElement(this.locationsFish)
                    this.locationsFish.splice(index, 1)
                    const fish = this.addFish(i, location)
                    console.log(fish)
                    this.fishDisplayed[i] = (this.fishDisplayed[i] || 0) + 1
                } else {
                    const [location, index] = this.randomElement(this.locationsStaticOrganism)
                    this.locationsStaticOrganism.splice(index, 1)
                    const staticOrganism = this.addStaticOrganism(i, location)
                    console.log(staticOrganism)
                    this.fishDisplayed[i] = (this.fishDisplayed[i] || 0) + 1
                }
            }
        })
        console.log(this.fishDisplayed)
    }

    clearTextboxes(excluded) {
        this.fish.forEach((fish) => {
            if (fish.x !== excluded.x || fish.y !== excluded.y) {
                fish.clearPopup()
            }
        })
    }
}
