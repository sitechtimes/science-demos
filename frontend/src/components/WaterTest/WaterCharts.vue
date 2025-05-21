<template>
    <div>
        <p>{{ waterTestConditions().compliance[1] }}</p>
        <h2>Dissolved Oxygen: {{ waterTestConditions().compliance[1].DO.toFixed(2) }}</h2>
        <PlotlyChart :data="oxygenData" :config="{ displayModeBar: false }" :layout="oxygenLayout"
            :key="componentKey" />
        <h2>pH: {{ waterTestConditions().compliance[1].pH.toFixed(2) }}</h2>
        <PlotlyChart :data="phData" :config="{ displayModeBar: false }" :layout="phLayout" :key="componentKey" />
    </div>
</template>

<script setup>
import { ref, onBeforeMount, watch } from 'vue';
import { waterTestConditions } from '@/Stores/watertest/waterTestStore';
import { phOptions, oxygenOptions } from './chartOptions';
import { setPhData, setOxygenData } from './chartData';
import PlotlyChart from '@/components/PlotlyChart.vue';
import { useLayout } from '@/layout/composables/layout';

const componentKey = ref(0);

const oxygenData = ref();
const phData = ref();

const oxygenLayout = ref()
const phLayout = ref();

function renderChanges() {
    // rerender with different axes if chart type changed
    phData.value = setPhData();
    phLayout.value = phOptions(getStyles());
    oxygenData.value = setOxygenData();
    oxygenLayout.value = oxygenOptions(getStyles());
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