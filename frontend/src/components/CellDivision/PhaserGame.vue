<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { EventBus } from '@/games/CellDivisionSimulation/EventBus';
import StartGame from '@/games/CellDivisionSimulation/main';

// Save the current scene instance
const scene = ref();
const game = ref();

const emit = defineEmits(['current-active-scene']);

onMounted(() => {

    game.value = StartGame('game-container');

    EventBus.on('current-scene-ready', (currentScene) => {

        emit('current-active-scene', currentScene);

        scene.value = currentScene;

    });

});
const size = ref({
    width: 0,
    height: 0
})
onUnmounted(() => {
    
    if (game.value)
    {
        game.value.destroy(true);
        game.value = null;
    }
    
});

defineExpose({ scene, game });
</script>

<template>
    <div id="game-container"></div>
</template>