<template>
    <div class="card">
        <Chart type="line" :data="chartInfo.chartData" :options="chartOptions" class="h-[30rem]"/>
    </div>
</template>

<script setup>
import Chart from 'primevue/chart'
import { ref, onMounted } from "vue";

const documentStyle = getComputedStyle(document.documentElement);

const chartInfo = defineModel();

onMounted(() => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref();
 
const setChartData = () => {
    return chartInfo.value.chartData;
};
const setChartOptions = () => {
    // const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--p-text-color');
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
            }
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
                    text: chartInfo.value.xAxis,
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