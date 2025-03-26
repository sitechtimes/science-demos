<script setup>
import Phaser from 'phaser';
import { ref, toRaw, watch } from 'vue';
import PhaserGame from './MiPhaserGame.vue';
import Button from 'primevue/button';
import { Game } from '@/games/CellDivisionSimulation/mitosis/scenes/Game.js'
import { limit } from '@/games/CellDivisionSimulation/mitosis/scenes/Game'
import { cellDivStore } from '@/Stores/celldiv/CellDivStore';
// The sprite can only be moved in the MainMenu Scene

//  References to the PhaserGame component (game and scene are exposed)
const phaserRef = ref();
const spritePosition = ref({ x: 0, y: 0 });
const changeScene = () => {

  const scene = toRaw(phaserRef.value.scene);

  if (scene) {
    //  Call the changeScene method defined in the `MainMenu`, `Game` and `GameOver` Scenes
    scene.changeScene();
  }

}
function handleClick() {
  const scene = toRaw(phaserRef.value.scene);
  scene.progressYear()
  // console.log(limit, limit.value)
}
function handleRestart() {
  const scene = toRaw(phaserRef.value.scene);
  scene.restart();
  cellDivStore().clearGraph();
}

// console.log(limit, limit.value)
watch(limit, async (newLimit) => {
  if (newLimit === true) {
    try {
      limit.value = newLimit
    } catch (error) {
      limit.value = 'Error! Could not reach the API. ' + error
    }
  }
})
//  This event is emitted from the PhaserGame component:
</script>

<template>
  <PhaserGame ref="phaserRef" @current-active-scene="currentScene" />
  <div>
    <div v-if="limit">
      <Button @click="handleRestart">Restart</Button>
    </div>
    <div v-else>
      <Button @click="handleClick">Progress Year</Button>
    </div>
  </div>
</template>