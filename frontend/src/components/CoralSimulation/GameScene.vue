<script setup>
import Phaser from 'phaser';
import { ref, toRaw } from 'vue';
import PhaserGame from './PhaserGame.vue';
import Button from 'primevue/button';

// The sprite can only be moved in the MainMenu Scene

//  References to the PhaserGame component (game and scene are exposed)
const phaserRef = ref();

const changeScene = () => {

    const scene = toRaw(phaserRef.value.scene);

    if (scene) {
        //  Call the changeScene method defined in the `MainMenu`, `Game` and `GameOver` Scenes
        scene.changeScene();
    }

}


function addOrganism(type) {
    const scene = toRaw(phaserRef.value.scene);

    scene.modifyOrganismCount('algae', 10)
}
function removeOrganism(type) {
    const scene = toRaw(phaserRef.value.scene);

    scene.modifyOrganismCount('algae', -10)
}

//  This event is emitted from the PhaserGame component:
</script>

<template>
    <PhaserGame ref="phaserRef" @current-active-scene="currentScene" />
    <div>
        <div>
            <Button @click="() => addOrganism('nassauGrouper')">Add Sprites</Button>
            <Button @click="() => removeOrganism('nassauGrouper')">Remove Sprites</Button>
        </div>
    </div>
</template>
