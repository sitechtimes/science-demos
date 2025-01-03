<template>
    <div>
        <Chart type="scatter" :data="chartData" :options="chartOptions" class="h-[30rem]" />
    </div>
</template>

<script setup>
import Chart from 'primevue/chart';
import { ref, onMounted, watch } from "vue";
import { useLayout } from '@/layout/composables/layout';
import { cellDivStore } from '@/Stores/CellDivStore';

const setChartData = () => { // return data options
    return {
        datasets: [
            {
                label: '# of Cells',
                data: cellDivStore().graphData, // pull data from store
                fill: true,
                borderColor: '#00aaaa',
                borderWidth: 2,
                pointRadius: 1
            }
        ]
    };
};

// mitosis 60 min https://bionumbers.hms.harvard.edu/bionumber.aspx?s=n&v=4&id=112373
// spermatogenesis (sperm meiosis) 64 days https://www.aatbio.com/resources/faq-frequently-asked-questions/how-long-does-meiosis-take

const setChartOptions = (doc) => { // return chart options
    const chartOptions = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
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
                    display: true, // change x axsis name based on celldiv type
                    text: props.chartType === 'Mitosis' ? "Time (hours)" : props.chartType === "Meiosis" ? "Time (Days)" : "time", // axes names
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

const props = defineProps(['chartType']); // pull charttype info from parent component

const chartData = ref();
const chartOptions = ref();

onMounted(() => {
    chartOptions.value = setChartOptions(getStyles);
    chartData.value = setChartData();
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

watch([useLayout().isDarkTheme, cellDivStore(), props.chartType], () => { // watch for changes
    chartOptions.value = setChartOptions(getStyles());
    chartData.value = setChartData();
});
</script>

<style scoped></style>