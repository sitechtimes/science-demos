<template>
    <div class="chart-slider-container">
        <div class="chart-container card">
            <p>unity scene placeholder</p>
            <p>{{ waterTestConditions().compliance }}</p>
            <p>{{ waterTestConditions().eutrophicationRisk }}</p>
        </div>
        <div class="slider-container card">
            <SliderConditions />
        </div>
    </div>
</template>

<script setup>
import { onBeforeMount, ref, watch } from "vue";
import { useLayout } from '@/layout/composables/layout';
import SliderConditions from "@/components/WaterTest/SliderConditions.vue";
import { waterTestConditions } from "@/Stores/watertest/waterTestStore";
import PlotlyChart from '@/components/PlotlyChart.vue';
import Slider from 'primevue/slider';
import Card from "primevue/card";

const chartOptions = ref();
const chartData = ref();
const componentKey = ref(0); // idk why the layout isn't refreshing without this

const displayType = ref('the jar test')

function renderChanges() {
    // rerender with different axes if chart type changed
    //chartData.value = setChartData(clayPoint, sandPoint, siltPoint);
    // chartOptions.value = setChartOptions(getStyles());
    componentKey.value++;
}

onBeforeMount(() => { // load data and set chart options before mount to avoid Invalid prop on load  
    renderChanges();
});
watch([useLayout().layoutConfig], () => {
    renderChanges();
});

function getStyles() { // obtain current theme colors for chart options to change with theme
    const documentStyle = getComputedStyle(document.documentElement);
    return {
        textColor: documentStyle.getPropertyValue('--p-text-color'),
        textColorSecondary: documentStyle.getPropertyValue('--p-text-muted-color'),
        surfaceBorder: documentStyle.getPropertyValue('--p-content-border-color'),
        surfaceCard: documentStyle.getPropertyValue('--surface-card'),
        font: documentStyle.getPropertyValue('font-family')
    };
}
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