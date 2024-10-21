import { EventBus } from '../EventBus';
import {Scene} from 'phaser';
import Cell from '../Cell'
import {ref} from 'vue'

export let time_in_cycle = ref(0)
export let year = ref(0)
export function progressYear(){

    if (time_in_cycle.value === 0){
        //dissolve nuclear membrane
        time_in_cycle.value++;
        year.value++
    }
    else if (time_in_cycle.value === 1){
        //centrosomes attach to chromosomes
        time_in_cycle.value++;
        year.value++
    }
    else if(time_in_cycle.value === 2){
        //centrosomes pull apart chromosomes, cell squishes in middle
        time_in_cycle.value++;
        year.value++
    }
    else if(time_in_cycle.value===3){
        //nuclear membrane develops around each set of chromosomes, cell squishes more
        time_in_cycle.value++;
        year.value++
    }
    else if(time_in_cycle.value===4){
        //cell separates
        time_in_cycle.value++;
        year.value++
    }
    else{
        time_in_cycle.value=0;
        year.value++
    }
    console.log(time_in_cycle.value, year.value)
}
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
        // this.add.image(400,300, "time0").setAlpha(1).setScale(0.5);
        // if( time_in_cycle.value === 0){
        //     this.add.image(400,300, "time0").setAlpha(1).setScale(0.5)
        // }
        // else if( time_in_cycle.value === 1){
        //     this.add.image(400,300, "time1").setAlpha(1).setScale(0.5)
        // }
        // else if( time_in_cycle.value === 2){
        //     this.add.image(400,300, "time2").setAlpha(1).setScale(0.5)
        // }
        // else if( time_in_cycle.value === 3){
        //     this.add.image(400,300, "time3").setAlpha(1).setScale(0.5)
        // }
        // else if( time_in_cycle.value === 4){
        //     this.add.image(400,300, "time4").setAlpha(1).setScale(0.5)
        // }
        // else{
        //     this.add.image(400,300, "time5").setAlpha(1).setScale(0.5)
        // }
        this.organisms = this.physics.add.staticGroup();
        this.cell = [new Cell(this, this.scale.width/2, this.scale.height/2), 'cell', 'cell']

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
    // progressYear(){
    //     // if year/7=0, make a new cell
    // }
}
