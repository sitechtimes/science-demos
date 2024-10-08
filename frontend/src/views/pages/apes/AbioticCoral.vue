<template>
    <div class="chart-slider-container">
        <div class="chart-container">
            <GameScene/>
        <div class="card">
            <CoralChart/>
        </div>
    </div>
    <div class="slider-container">
        <div class="card">
            <SliderConditions/>
        </div>
        <div class="card">
            <SliderYear/>
        </div>
        </div>
    </div>
</template>

<script setup>
import CoralChart from '../../../components/coral/CoralChart.vue';
import SliderConditions from "../../../components/coral/SliderConditions.vue";
import SliderYear from '@/components/coral/SliderYear.vue';
import GameScene from '@/components/coral/game/GameScene.vue'

</script>

<style scoped>
.chart-slider-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
}
.chart-container {
    width: 100%;
}
.slider-container {
    width: 100%;
}
@media (min-width: 768px) {
    .chart-slider-container {
        grid-template-columns: 2fr 1fr;
    }
}
</style>