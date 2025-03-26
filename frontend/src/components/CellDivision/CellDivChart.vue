<template>
    <div>
    </div>
    <div class="card p-0">
        <PlotlyChart :data="chartData" :layout="chartOptions" :config="{ displayModeBar: false }" :key="componentKey" />
    </div>
</template>

<script setup>
import Chart from 'primevue/chart';
import PlotlyChart from "@/components/PlotlyChart.vue"
import { ref, onMounted, watch } from "vue";
import { useLayout } from '@/layout/composables/layout';
import { cellDivStore } from '@/Stores/celldiv/CellDivStore';

const setChartData = () => { // return data options
    return [{
        ...cellDivStore().graphData,
        name: "cell number",
        fill: 'tozeroy',
        type: 'scatter'

    }];
};

// mitosis 60 min https://bionumbers.hms.harvard.edu/bionumber.aspx?s=n&v=4&id=112373
// spermatogenesis (sperm meiosis) 64 days https://www.aatbio.com/resources/faq-frequently-asked-questions/how-long-does-meiosis-take

const setChartOptions = (styles, cellType) => { // return chart options
    console.log('asdgasdgaw', cellType)
    const chartOptions = {
        "title": "Number of Cells",
        plot_bgcolor: styles.surfaceCard,
        paper_bgcolor: styles.surfaceCard,
        "margin": {
            "t": 50,
            "b": 50,
            "l": 50,
            "r": 50
        },
        font: {
            size: 10,
            color: styles.textColor,
            family: styles.font,
        },
        xaxis: {
            title: {
                text: cellType === 'Mitosis' ? 'time (hours)' : cellType === 'Meiosis' ? 'time (days)' : 'undefined'
            },
            zeroline: false
        },
        yaxis: {
            title: {
                text: 'number of cells'
            },
        },
        "showlegend": false
    };
    return chartOptions;
}

const props = defineProps(['chartType']); // pull charttype info from parent component

const chartData = ref();
const chartOptions = ref();
const componentKey = ref(0);

onMounted(() => {
    chartOptions.value = setChartOptions(getStyles(), props.chartType);
    chartData.value = setChartData();
    componentKey.value++;
});

function getStyles() { // obtain current theme colors for chart options to change with theme
    const documentStyle = getComputedStyle(document.documentElement);
    return {
        textColor: documentStyle.getPropertyValue('--p-text-color'),
        textColorSecondary: documentStyle.getPropertyValue('--p-text-muted-color'),
        surfaceBorder: documentStyle.getPropertyValue('--p-content-border-color'),
        surfaceCard: documentStyle.getPropertyValue('--surface-card'),
        font: documentStyle.getPropertyValue('font-family')
    };
}

watch([useLayout().isDarkTheme, cellDivStore(), props.chartType], () => { // watch for changes
    chartOptions.value = setChartOptions(getStyles(), props.chartType);
    chartData.value = setChartData();
    componentKey.value++;
});
</script>

<style scoped></style>