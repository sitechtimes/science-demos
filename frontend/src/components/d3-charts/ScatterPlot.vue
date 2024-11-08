<template>
    <div class="card">
        <div ref="chart"></div>
    </div>
</template>

<script setup>
import Plotly from 'plotly.js-dist';
import { ref, onMounted, watch } from 'vue';

const props = defineProps({
    data: {
        type: Array,
        required: true,
    },
    layout: {
        type: Object,
        default: {},
    },
    config: {
        type: Object,
        default: { staticPlot: true },
    },
});

const chart = ref(null);

const chartOptions = ref();

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

const setChartOptions = (doc) => { // return chart options
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
                text: axesLabels.chartTitle[chartTypeNum],
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
                    text: axesLabels.yAxis[chartTypeNum],
                    color: doc.textColor
                },
                type: 'linear',
                position: 'left',
            },
            y1: {
                type: 'linear',
                display: true,
                position: 'right',
                grid: {
                    drawOnChartArea: false,
                    color: doc.surfaceBorder
                },
                ticks: {
                    color: doc.textColorSecondary
                },
                title: {
                    display: true,
                    text: 'CO₂ Pressure (µATM)',
                    color: doc.textColor
                },
            },
        }
    };
    return chartOptions;
}

/* watch([useLayout().isDarkTheme, selectedYear.value, chartType], () => {
    chartOptions.value = setChartOptions(chartInfo.value.currentGraph, getStyles);
}); */

onMounted(() => {
    // chartOptions.value = setChartOptions(chartInfo.value.currentGraph, getStyles);
    Plotly.newPlot(chart.value, props.data, props.layout, props.config);
});
</script>

<style lang="scss" scoped></style>