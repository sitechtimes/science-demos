<template>
    <div class="bg-surface-900 w-fit p-2 rounded">
        <SelectButton v-model="chartType" :options="['Simulation', 'Population %', 'Population Count']" />
    </div>
    <div class="chart-slider-container">
        <div class="chart-container">
            <div class="card" v-if="chartType === 'Simulation'">
            </div>
            <div class="card" v-else>
                <CoralChart v-model="chartType" />
            </div>
        </div>
        <div class="slider-container">
            <div class="card">
                <SliderConditions />
            </div>
            <div class="card">
                <SliderYear />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import CoralChart from '@/components/CoralSimulation/CoralChart.vue';
import SliderConditions from "@/components/CoralSimulation/SliderConditions.vue";
import SliderYear from '@/components/CoralSimulation/SliderYear.vue';
import SelectButton from 'primevue/selectbutton';

const chartType = ref('Population %')
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