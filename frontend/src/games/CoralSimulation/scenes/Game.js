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
        // console.log(Object.keys(organisms))

        const fish = ['hawksbillSeaTurtle', 'nassauGrouper', 'queenAngelfish', 'redLionfish', 'spotlightParrotfish', 'yellowtailSnapper']

        Object.keys(organisms).forEach((i) => {
            for(let j = 0; j < Math.ceil(organisms[i].population ** (2/5)); j++) {
                if(fish.includes(i)) {
                    console.log(i)
                    const [location, index] = this.randomElement(this.locationsFish)
                    this.locationsFish.splice(index, 1)
                    this.addFish(i, location)
                    this.fishDisplayed[i] = (this.fishDisplayed[i] || 0) + 1
                } else {
                    const [location, index] = this.randomElement(this.locationsStaticOrganism)
                    this.locationsStaticOrganism.splice(index, 1)
                    this.addStaticOrganism(i, location)
                    this.fishDisplayed[i] = (this.fishDisplayed[i] || 0) + 1
                }
            }
        })
        console.log(this.fish.map((fish) => fish.texture.key))
    }

    modifyOrganismCount(organism, count) {
        const dataStore = DataStore()
        const fish = ['hawksbillSeaTurtle', 'nassauGrouper', 'queenAngelfish', 'redLionfish', 'spotlightParrotfish', 'yellowtailSnapper']
        if(count > 0) {
            for(let i = 0; i < count; i++) {
                if(fish.includes(organism)) {
                    const [location, index] = this.randomElement(this.locationsStaticOrganism)
                    this.locationsStaticOrganism.splice(index, 1)
                    this.addFish(organism, location)
                    this.fishDisplayed[organism] = (this.fishDisplayed[organism] || 0) + 1
                    dataStore.organisms[organism].population++
                } else {
                    const [location, index] = this.randomElement(this.locationsStaticOrganism)
                    this.locationsStaticOrganism.splice(index, organism)
                    this.addStaticOrganism(organism, location)
                    this.fishDisplayed[organism] = (this.fishDisplayed[organism] || 0) + 1
                    dataStore.organisms[organism].population++
                }
            }
        }
        else if(count < 0) {
            // const matchingFish = this.fish.filter((fish) => fish.texture.key === organism)
            let numRemoved = 0
            
            for(let i = 0; i < this.fish.length; i++) {
                if(numRemoved === (count * -1)) {
                    return
                }
                if(this.fish[i].texture.key === organism) {
                    this.fish[i].destroy()
                    this.fish.splice(i, 1)
                    numRemoved++
                }

            }
            console.log(this.fish)
        }
    }
    clearTextboxes(excluded) {
        this.fish.forEach((fish) => {
            if (fish.x !== excluded.x || fish.y !== excluded.y) {
                fish.clearPopup()
            }
        })
    }
}
