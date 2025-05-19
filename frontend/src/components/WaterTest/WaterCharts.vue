<template>
    <div>
        <p>{{ waterTestConditions().compliance[1] }}</p>
        <PlotlyChart :data="oxygenData" :config="{ displayModeBar: false }" :layout="oxygenLayout"
            :key="componentKey" />
        <PlotlyChart :data="heatmapData" :config="{ displayModeBar: false }" :layout="heatmapLayout"
            :key="componentKey" />
    </div>
</template>

<script setup>
import { ref, onBeforeMount, watch, toRef } from 'vue';
import { waterTestConditions } from '@/Stores/watertest/waterTestStore';
import { phOptions } from './chartOptions';
import { setPhData } from './chartData';
import PlotlyChart from '@/components/PlotlyChart.vue';
import { useLayout } from '@/layout/composables/layout';

const componentKey = ref(0);

const oxygenData = ref();
const heatmapData = ref();

const oxygenLayout = ref()
const heatmapLayout = ref();

function renderChanges() {
    // rerender with different axes if chart type changed
    heatmapData.value = setPhData();
    heatmapLayout.value = phOptions(getStyles());
    componentKey.value++;
}

onBeforeMount(() => { // load data and set chart options before mount to avoid Invalid prop on load  
    renderChanges();
});
watch([useLayout().layoutConfig, waterTestConditions()], () => {
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

<style scoped></style>