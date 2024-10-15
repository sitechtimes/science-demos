<script setup>
import Phaser from 'phaser';
import { ref, toRaw } from 'vue';
import PhaserGame from './PhaserGame.vue';
import Button from 'primevue/button';

// The sprite can only be moved in the MainMenu Scene

//  References to the PhaserGame component (game and scene are exposed)
const phaserRef = ref();
const spritePosition = ref({ x: 0, y: 0 });

const changeScene = () => {

    const scene = toRaw(phaserRef.value.scene);

    if (scene)
    {
        //  Call the changeScene method defined in the `MainMenu`, `Game` and `GameOver` Scenes
        scene.changeScene();
    }

}


// function addOrganism(type) {
//     // const fish = addSprite(type)
//     const scene = toRaw(phaserRef.value.scene);

//     scene.addOrganism(type, type + ' is the coolest fish')
// }

let time_in_cycle = ref(0)
let year = ref(0)
function progressYear(){
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
//  This event is emitted from the PhaserGame component:
</script>

<template>
    <PhaserGame ref="phaserRef" @current-active-scene="currentScene" />
    <div>
        <div>
            <Button @click="() => progressYear()">Progress Year</Button>
        </div>
    </div>
</template>
