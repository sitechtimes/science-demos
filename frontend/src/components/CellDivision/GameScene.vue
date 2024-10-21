<script setup>
import Phaser from 'phaser';
import { ref, toRaw } from 'vue';
import PhaserGame from './PhaserGame.vue';
import Button from 'primevue/button';
import {progressYear, time_in_cycle, year} from '@/games/CellDivisionSimulation/scenes/Game.js'

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
// let cell = this.add.sprite(192, 512, "time0.jfif");
// const time0 = this.add.sprite(192,512, "time0.jfif")
// const time1 = this.add.sprite(192,512, "time1.png")
// const time2 = this.add.sprite(192,512, "time2.png")
// const time3 = this.add.sprite(192,512, "time3.png")
// const time4 = this.add.sprite(192,512, "time4.png")
// const time5 = this.add.sprite(192,512, "time5.png")



//  This event is emitted from the PhaserGame component:
</script>

<template>
    <PhaserGame ref="phaserRef" @current-active-scene="currentScene" />
    <div>
        <div>
            <Button @click="progressYear()">Progress Year</Button>
        </div>
    </div>
</template>
