<template>
    <div class="chartType">
        <SelectButton v-model="chartType" :options="['Population %', 'Population Count']" />
    </div>
    <div class="card">
        <Chart v-if="chartType === 'Population %'" type="line" :data="chartInfo.chartData" :options="chartOptions" class="h-[30rem]"/>
    </div>
</template>

<script setup>
import Chart from 'primevue/chart';
import SelectButton from 'primevue/selectbutton';
import { ref, onMounted } from "vue";

const chartInfo = defineModel(); // receive chart data, chart axes titles

const chartType = ref('Population %');

onMounted(() => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref();
 
const setChartData = () => {
    return chartInfo.value.chartData;
};
const setChartOptions = () => { // return chart options
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--p-text-color'); // obtain current theme colors for chart options
    const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
    const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');
    return {
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
                text: chartInfo.value.chartTitle,
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
                    text: chartInfo.value.xAxis, // axes names
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
                    text: chartInfo.value.yAxis,
                    color: textColor
                }
            }
        }
    };
}
</script>

<style scoped>

</style>