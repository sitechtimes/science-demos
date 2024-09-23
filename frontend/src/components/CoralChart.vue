<template>
    <div>
        <Chart type="line" :data="chartInfo.chartData" :options="chartOptions" class="h-[30rem]"/>
    </div>
</template>

<script setup>
import Chart from 'primevue/chart';
import { ref, onMounted, watch } from "vue";

const chartInfo = defineModel(); // receive chart data, chart axes titles


onMounted(() => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions(chartInfo.value.currentGraph);
});

const chartData = ref();
const chartOptions = ref();
const chartRefNum = ref(0);
 
const setChartData = () => {
    return chartInfo.value.chartData;
};
const setChartOptions = (chartTypeNum) => { // return chart options
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--p-text-color'); // obtain current theme colors for chart options
    const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
    const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');
    const chartOptions = {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
            legend: {
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
                }
            }
        }
    };
    console.log(chartTypeNum)
    return chartOptions;
}
</script>

<style scoped>

</style>