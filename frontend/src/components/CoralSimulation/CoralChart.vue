<template>
    <!-- <div class="chartType">
            <SelectButton v-model="chartType" :options="['Population %', 'Population Count']" />
        </div> -->
    <div>
        <Chart type="line" :data="chartInfo.chartData" :options="chartOptions" class="h-[30rem]" />
    </div>
</template>

<script setup>
import Chart from 'primevue/chart';
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
</script>

<style scoped></style>