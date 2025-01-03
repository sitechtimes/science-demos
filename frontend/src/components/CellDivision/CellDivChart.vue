<template>
    <div>
        <Chart type="scatter" :data="chartInfo.chartData" :options="chartOptions" class="h-[30rem]" />
    </div>
</template>

<script setup>
import Chart from 'primevue/chart';
import { ref, onMounted, watch } from "vue";
import { useLayout } from '@/layout/composables/layout';
import { cellDivStore } from '@/Stores/CellDivStore';


const setChartData = () => {
    return {
        datasets: [
            {
                label: '# of Cells',
                data: cellDivStore().graphData,
                fill: true,
                borderColor: '#00aaaa',
                borderWidth: 2,
                pointRadius: 1
            }
        ]
    };
};

const axesLabels = {
    xAxis: ['Time (hours)', 'Time (days)'], // mitosis 60 min https://bionumbers.hms.harvard.edu/bionumber.aspx?s=n&v=4&id=112373 spermatogenesis 64 days https://www.aatbio.com/resources/faq-frequently-asked-questions/how-long-does-meiosis-take
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

const chartType = defineModel(); // track which dataset the user wants to see

const chartInfo = ref({
    chartData: setChartData(),
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

watch([useLayout().isDarkTheme, cellDivStore(), chartType], () => {
    switch (chartType.value) {
        case 'mitosis':
            chartInfo.value.currentGraph = 0;
            break;
        case 'meiosis':
            chartInfo.value.currentGraph = 1;
            break;
        default:
            chartInfo.value.currentGraph = 0;
    }
    chartOptions.value = setChartOptions(chartInfo.value.currentGraph, getStyles());
    chartInfo.value.chartData = setChartData();
}, {
    deep: true
});
</script>

<style scoped></style>