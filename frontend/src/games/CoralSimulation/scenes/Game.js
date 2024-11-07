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

        this.organisms = []

        this.locations = {
            fish: generateLocationsFish(),
            staticOrganisms: generateLocationsStaticOrganism()
        }

        this.initializeOrganisms()

        EventBus.emit('current-scene-ready', this);
    }

    update () {}
    
    // Adds organism, either with class Fish or StaticOrganism based on organism species
    addOrganism(type, {x, y}) {
        const fish = ['hawksbillSeaTurtle', 'nassauGrouper', 'queenAngelfish', 'redLionfish', 'spotlightParrotfish', 'yellowtailSnapper']

        // if organism is a fish, use Fish class, else, use StaticOrganism
        const newOrganism = fish.includes(type) ? new Fish(this, x, y, type) : new StaticOrganism(this, x, y, type)
        this.organisms.push(newOrganism)
    }

    // returns random element and index of element from an array
    randomElement(arr) {
        const i = Math.floor(Math.random() * arr.length)
        return [arr[i], i]
    }

    // Generate initial organisms, based on num in data store
    initializeOrganisms() {
        const organisms = DataStore().organisms

        const fishTypes = ['hawksbillSeaTurtle', 'nassauGrouper', 'queenAngelfish', 'redLionfish', 'spotlightParrotfish', 'yellowtailSnapper']

        Object.keys(organisms).forEach((fish) => {
            for(let i = 0; i < Math.ceil(organisms[fish].population ** (2/5)); i++) {
                // if organism is fish, use fish locations, else, use static organism locations
                const locations = fishTypes.includes(fish) ? this.locations.fish : this.locations.staticOrganisms

                // get random location from object and then splices it so it cannot be reused, prevents two organisms in same location
                const [location, index] = this.randomElement(locations)
                locations.splice(index, 1)

                this.addOrganism(fish, location)
            }
        })
    }

    modifyOrganismCount(organism, numToChange) {
        const fishTypes = ['hawksbillSeaTurtle', 'nassauGrouper', 'queenAngelfish', 'redLionfish', 'spotlightParrotfish', 'yellowtailSnapper']

        if(numToChange > 0) {
            for(let i = 0; i < numToChange; i++) {
                // if organism is fish, use fish locations, else, use static organism locations
                const locations = fishTypes.includes(organism) ? this.locations.fish : this.locations.staticOrganisms
                
                // get random location from object and then splices it so it cannot be reused, prevents two organisms in same location
                const [location, index] = this.randomElement(locations)
                locations.splice(index, 1)
                this.addOrganism(organism, location)
            }
        }
        else if(numToChange < 0) {
            let numChanged = 0
            
            for(let i = 0; i < this.organisms.length; i++) {
                if(numChanged === numToChange) {
                    return
                } else if(this.organisms[i].texture.key === organism) {
                    // destroy organism visual and remove from organisms array
                    this.organisms[i].destroy()
                    this.organisms.splice(i, 1)
                    numChanged--

                    // decrease i by 1 because the array is spliced, therefore the same i number that is used in this loop should also be used in the next loop due to the previous 
                    // value at i being removed and replaced by the next value in the array
                    i--
                }

            }
        }
    }
    // removes textboxes of all organisms other than the one clicked (to prevent duplicate textboxes)
    clearTextboxes(excluded) {
        // if organism is not at location of excluded one, remove textbox
        this.organisms.forEach((fish) => {
            if (fish.x !== excluded.x || fish.y !== excluded.y) {
                fish.clearPopup()
            }
        })
    }
}
