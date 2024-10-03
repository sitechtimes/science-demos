<template>
    <div class="chart-slider-container">
        <div class="chart-container">
        <div class="card">
            <div class="chartType">
            <SelectButton v-model="chartType" :options="['Population %', 'Population Count']" />
        </div>
            <CoralChart v-model="dataInput" :key="rerenderKey"/>
        </div>
    </div>
    <div class="slider-container">
        <div class="card">
            <SliderConditions/>
        </div>
        <div class="card">
            <SliderYear/>
        </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import CoralChart from '../../../components/CoralChart.vue';
import { useLayout } from '@/layout/composables/layout';
import SelectButton from 'primevue/selectbutton';
import setChartData from '@/Stores/chartDataFunc';
import SliderConditions from "../../../components/SliderConditions.vue";
import SliderYear from '@/components/SliderYear.vue';

const rerenderKey = ref(0);
const selectedYear = ref(30);
const chartType = ref('Population %');

watch([useLayout().isDarkTheme, selectedYear, chartType], ()=>{
    rerenderKey.value++; // rerender the chart if theme changes so the labels are visible
    dataInput.value.chartData = setChartData(selectedYear.value);
    switch(chartType.value){ // rerender with different axes if chart type changed
        case 'Population %':
            dataInput.value.currentGraph = 0;
            dataInput.value.chartData = setChartData(selectedYear.value, [{x: 0, y: 65}, // example datasets; replace with calculated data
                        {x: 1, y: 59},
                        {x: 12, y: 92},
                        ]);
            break;
        case 'Population Count':
            dataInput.value.currentGraph = 1;
            dataInput.value.chartData = setChartData(selectedYear.value, [{x: 0, y: 30}, // example datasets; replace with calculated data
                        {x: 1, y: 20},
                        {x: 12, y: 70},
                        {x: 20, y: 30},
                        ]);
            break;
    }
});

const dataInput = ref({
    chartData: {},
    chartTitle: ['Percent of Population Remaining','Individuals of Population Remaining'],
    xAxis: ['Years', 'Years'],
    yAxis: ['Percent of Population Remaining', 'Individuals of Population Remaining'],
    currentGraph: 0
}) 

dataInput.value.chartData = setChartData(selectedYear.value, [{x: 0, y: 65}, // example datasets; replace with calculated data
                        {x: 1, y: 59},
                        {x: 12, y: 92},
                        ]);
</script>

<style scoped>
.chart-slider-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
}
.chart-container {
    width: 100%;
}
.slider-container {
    width: 100%;
}
@media (min-width: 768px) {
    .chart-slider-container {
        grid-template-columns: 2fr 1fr;
    }
}
</style>