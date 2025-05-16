<template>
    <div class="chart-slider-container">
        <div class="chart-container card">
            <SelectButton v-model="toggleScene" :options="['demo', 'charts']" />
            <p v-if="toggleScene === 'demo'">unity scene placeholder</p>
            <WaterCharts v-else-if="toggleScene === 'charts'" />
        </div>
        <div class="slider-container card">
            <SliderConditions />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import SliderConditions from "@/components/WaterTest/SliderConditions.vue";
import WaterCharts from "@/components/WaterTest/WaterCharts.vue";
import { waterTestConditions } from "@/Stores/watertest/waterTestStore";
import SelectButton from "primevue/selectbutton";

const toggleScene = ref('charts');
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