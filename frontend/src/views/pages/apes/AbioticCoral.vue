<template>
    <div class="chart-slider-container">
        <div class="chart-container">
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
// import { ref } from 'vue';
import CoralChart from '../../../components/CoralChart.vue';
import SliderConditions from "../../../components/SliderConditions.vue";
import SliderYear from '@/components/SliderYear.vue';

// const rerenderKey = ref(0);
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