<template>
    <div>
        <Chart type="scatter" :data="chartInfo.chartData" :options="chartOptions" class="h-[30rem]" />
    </div>
</template>

<script setup>
import Chart from 'primevue/chart';
import { ref, onMounted, watch } from "vue";
import { useLayout } from '@/layout/composables/layout';
import { toRef } from "vue";
import { DataStore } from "@/Stores/DataStore";



const setChartData = (currentYear) => { // move to store later with input options for current selected year & species data
    return { // either data variable has data points for all organisms, or we have an input varoab;e for each of the datasets
        datasets: [
            {
                label: '# of Cells',
                data: [{ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 3 }],
                fill: true,
                borderColor: '#00aaaa',
                borderWidth: 2,
                pointRadius: 1
            }
        ]
    };
};

const axesLabels = {
    xAxis: ['Time (hours)', 'Time (days)'],
};

const setChartOptions = (chartTypeNum, doc) => { // return chart options
    const chartOptions = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: { // it's possible to make it more minimalistic by having 1 button to disable/enable multiple datasets
                labels: {
                    color: doc.textColor
                },
                position: 'bottom'
            },
            title: {
                display: true,
                text: 'Number of Cells Present',
                color: doc.textColor
            },
        },
        scales: {
            x: {
                type: 'linear',
                ticks: {
                    color: doc.textColorSecondary
                },
                grid: {
                    color: doc.surfaceBorder
                },
                title: {
                    display: true,
                    text: axesLabels.xAxis[chartTypeNum], // axes names
                    color: doc.textColor
                }
            },
            y: {
                ticks: {
                    color: doc.textColorSecondary
                },
                grid: {
                    color: doc.surfaceBorder
                },
                title: {
                    display: true,
                    text: 'Number of Cells',
                    color: doc.textColor
                },
                type: 'linear',
                position: 'left',
            }
        }
    };
    return chartOptions;
}
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

watch([useLayout().isDarkTheme, selectedYear.value, chartType], () => {
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