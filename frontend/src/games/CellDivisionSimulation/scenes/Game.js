import { EventBus } from '../EventBus';
import {Scene} from 'phaser';
import Cell from '../Cell'
import {ref} from 'vue'


export class Game extends Scene
{
    constructor ()
    {
        super('Game');
        this.time_in_cycle = 0
        this.year = 0
    }

    progressYear(){

        if (this.time_in_cycle === 0){
            //dissolve nuclear membrane
            this.time_in_cycle++;
            this.year++
            this.cells.forEach((cell)=>cell.setTexture('time1'))
        }
        else if (this.time_in_cycle === 1){
            //centrosomes attach to 
            // this.cell.setTexture('time1')
            this.time_in_cycle++;
            this.year++
            this.cells.forEach((cell)=>cell.setTexture('time2'))
        }
        else if(this.time_in_cycle === 2){
            //centrosomes pull apart chromosomes, cell squishes in middle
            this.time_in_cycle++;
            this.year++
            this.cells.forEach((cell)=>cell.setTexture('time3'))
        }
        else if(this.time_in_cycle===3){
            //nuclear membrane develops around each set of chromosomes, cell squishes more
            this.time_in_cycle++;
            this.year++
            this.cells.forEach((cell)=>cell.setTexture('time4'))
        }
        else if(this.time_in_cycle===4){
            //cell separates
            this.time_in_cycle++;
            this.year++
            this.cells.forEach((cell)=>cell.setTexture('time5'))
        }
        else{
            this.time_in_cycle=0;
            this.year++
            this.cells.forEach((cell)=>cell.setTexture('time0'))
            let temp_length = this.cells.length
            console.log(temp_length)
            for(let i in this.cells){
                this.cells.push(new Cell(this,  Math.floor(Math.random() * this.scale.width), Math.floor(Math.random() * this.scale.height), 'time0').setScale(0.5).setDepth(0))
                console.log(this.cells.length, temp_length)
            }
        }
        console.log(this.time_in_cycle, this.year)
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
        // this.cell = [new Cell(this, this.scale.width/2, this.scale.height/2), 'time0', 'cell']

        this.cells = [new Cell(this, 400,300, 'time0', 'x').setScale(0.5).setDepth(0)]
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
