<template>
    <div>
        <Chart type="line" :data="chartInfo.chartData" :options="chartOptions" class="h-[30rem]"/>
    </div>
</template>

<script setup>
import Chart from 'primevue/chart';
import { ref, onMounted } from "vue";

const chartInfo = defineModel(); // receive chart data, chart axes titles

onMounted(() => {
    chartOptions.value = setChartOptions(chartInfo.value.currentGraph);
});

const chartOptions = ref();

const setChartOptions = (chartTypeNum) => { // return chart options
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--p-text-color'); // obtain current theme colors for chart options
    const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
    const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');
    const chartOptions = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: { // it's possible to make it more minimalistic by having 1 button to disable/enable multiple datasets but that's a later problem for when we do mobile support (i dont want to)
                labels: {
                    color: textColor
                },
                position: 'bottom'
            },
            title: {
                display: true,
                text: chartInfo.value.chartTitle[chartTypeNum],
                color: textColor
            },
        },
        scales: {
            x: {
                type: 'linear',
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                },
                title: {
                    display: true,
                    text: chartInfo.value.xAxis[chartTypeNum], // axes names
                    color: textColor
                }
            },
            y: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                },
                title: {
                    display: true,
                    text: chartInfo.value.yAxis[chartTypeNum],
                    color: textColor
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
                    color: surfaceBorder
                    },
                    ticks: {
                    color: textColorSecondary
                    },
                    title: {
                        display: true,
                        text: 'CO₂ Pressure (µATM)',
                        color: textColor
                    },
                },
        }
    };
    return chartOptions;
}
</script>

<style scoped>

</style>