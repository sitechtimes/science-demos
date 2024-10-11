<script setup>
import Phaser from 'phaser';
import { ref, toRaw } from 'vue';
import PhaserGame from './PhaserGame.vue';
import Fish from '@/games/CoralSimulation/Fish'
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


function addOrganism(type) {
    // const fish = addSprite(type)
    const scene = toRaw(phaserRef.value.scene);

    scene.addOrganism(type)
}

//  This event is emitted from the PhaserGame component:
</script>

<template>
    <PhaserGame ref="phaserRef" @current-active-scene="currentScene" />
    <div>
        <div>
            <Button @click="() => addOrganism('nassau_grouper')">Add New Sprite</Button>
        </div>
    </div>
</template>
