<template>
    <div>
        <PlotlyChart :data="chartData" :layout="chartOptions" :config="{ displayModeBar: false }" :key="componentKey" />
    </div>
</template>

<script setup>
/* import PlotlyChart from "../PlotlyChart.vue";
import { ref, onMounted, watch } from "vue";
import { setChartData, setChartOptions } from '@/Stores/chartDataOptions';
import { useLayout } from '@/layout/composables/layout';
import { toRef } from "vue";
import { DataStore } from "@/Stores/DataStore";

const dataStore = DataStore();
const selectedYear = toRef(dataStore.selectedYear); // reactive source to watch

const chartType = defineModel(); // track which dataset the user wants to see

const chartInfo = ref({
    chartData: setChartData(selectedYear.value.sliderValue, [{ x: 0, y: 65 }, // example datasets; replace with calculated data
    { x: 1, y: 59 },
    { x: 12, y: 92 },
    ]),
    currentGraph: 0
});
const chartOptions = ref();

onMounted(() => {
    chartOptions.value = setChartOptions(chartInfo.value.currentGraph, getStyles);
});

function getStyles() { // obtain current theme colors for chart options
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--p-text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
    const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');
    return {
        textColor: textColor,
        textColorSecondary: textColorSecondary,
        surfaceBorder: surfaceBorder
    };
}

watch([useLayout().layoutConfig, selectedYear.value, chartType], () => {
    switch (chartType.value) { // rerender with different axes if chart type changed
        case 'Population %':
            chartInfo.value.currentGraph = 0;
            chartInfo.value.chartData = setChartData(selectedYear.value.sliderValue, [{ x: 0, y: 65 },
            { x: 1, y: 59 },
            { x: 12, y: 92 },
            ]);
            chartOptions.value = setChartOptions(chartInfo.value.currentGraph, getStyles());
            break;
        case 'Population Count':
            chartInfo.value.currentGraph = 1;
            chartInfo.value.chartData = setChartData(selectedYear.value.sliderValue, [{ x: 0, y: 30 },
            { x: 1, y: 20 },
            { x: 12, y: 70 },
            { x: 20, y: 30 },
            ]);
            chartOptions.value = setChartOptions(chartInfo.value.currentGraph, getStyles());
            break;
    }
});
 */
import PlotlyChart from "@/components/PlotlyChart.vue"
import { ref, toRef, onBeforeMount, watch } from "vue";
import { useLayout } from '@/layout/composables/layout';
import { cellDivStore } from '@/Stores/celldiv/CellDivStore';
import setChartOptions from '@/components/CoralSimulation/chartOptions.js'
import setChartData from "@/components/CoralSimulation/chartData.js";
import { populationStore } from "@/Stores/populationStore";

const props = defineProps({ chartType: String }); // pull charttype info from parent component

const chartData = ref();
const chartOptions = ref();
const componentKey = ref(0);

function getStyles() { // obtain current theme colors for chart options to change with theme
    const documentStyle = getComputedStyle(document.documentElement);
    return {
        textColor: documentStyle.getPropertyValue('--p-text-color'),
        textColorSecondary: documentStyle.getPropertyValue('--p-text-muted-color'),
        surfaceBorder: documentStyle.getPropertyValue('--p-content-border-color'),
        surfaceCard: documentStyle.getPropertyValue('--surface-card'),
        font: documentStyle.getPropertyValue('font-family'),
        primaryColor: documentStyle.getPropertyValue('--p-primary-color')
    };
}

function renderChanges() {
    chartOptions.value = setChartOptions(getStyles(), props.chartType);
    chartData.value = setChartData(cellDivStore().graphData);
    componentKey.value++;
}

onBeforeMount(() => {
    renderChanges()
});

watch([useLayout().layoutConfig, populationStore(), toRef(props.chartType)], () => { // watch for changes
    renderChanges()
});
</script>

<style scoped></style>