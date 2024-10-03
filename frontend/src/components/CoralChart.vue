<template>
    <div class="chartType">
            <SelectButton v-model="chartType" :options="['Population %', 'Population Count']" />
        </div>
    <div>
        <Chart type="line" :data="chartInfo.chartData" :options="chartOptions" class="h-[30rem]"/>
    </div>
</template>

<script setup>
import Chart from 'primevue/chart';
import SelectButton from 'primevue/selectbutton';
import { ref, onMounted, watch } from "vue";
import {setChartData, setChartOptions} from '@/Stores/chartDataOptions';
import { useLayout } from '@/layout/composables/layout';

const rerenderKey = ref(0);
const chartType = ref('Population %');

const chartInfo = ref({
    chartData: setChartData(2, [{x: 0, y: 65}, // example datasets; replace with calculated data
                        {x: 1, y: 59},
                        {x: 12, y: 92},
                        ]),
    currentGraph: 0
}); 


onMounted(() => {
    chartOptions.value = setChartOptions(chartInfo.value.currentGraph, getStyles);
});

const chartOptions = ref();

function getStyles(){ // obtain current theme colors for chart options
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

watch([useLayout().isDarkTheme, /* selectedYear, */ chartType], ()=>{
    // rerenderKey.value++; // rerender the chart if theme changes so the labels are visible
    chartInfo.value.chartData = setChartData(2);
    switch(chartType.value){ // rerender with different axes if chart type changed
        case 'Population %':
            chartInfo.value.currentGraph = 0;
            chartInfo.value.chartData = setChartData(2, [{x: 0, y: 65}, // example datasets; replace with calculated data
                        {x: 1, y: 59},
                        {x: 12, y: 92},
                        ]);
            chartOptions.value = setChartOptions(chartInfo.value.currentGraph, getStyles());
            break;
        case 'Population Count':
        chartInfo.value.currentGraph = 1;
        chartInfo.value.chartData = setChartData(2, [{x: 0, y: 30}, // example datasets; replace with calculated data
                        {x: 1, y: 20},
                        {x: 12, y: 70},
                        {x: 20, y: 30},
                        ]);
            chartOptions.value = setChartOptions(chartInfo.value.currentGraph, getStyles());
            break;
    }
});
</script>

<style scoped>

</style>