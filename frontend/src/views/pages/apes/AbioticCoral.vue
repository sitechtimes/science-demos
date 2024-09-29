<template>
    <div class="col-span-12 xl:col-span-6">
        <div class="card">
            <div class="chartType">
            <SelectButton v-model="chartType" :options="['Population %', 'Population Count']" />
        </div>
            <CoralChart v-model="dataInput" :key="rerenderKey"/>
        </div>
        <div>
            <p>{{ selectedYear }}</p>
            <div class="flex gap-5">
            <p>0</p>
            <InputNumber v-model="selectedYear" inputId="horizontal-buttons" showButtons buttonLayout="horizontal" :step="1">
                <template #incrementbuttonicon>
                    <span class="pi pi-plus" />
                </template>
                <template #decrementbuttonicon>
                    <span class="pi pi-minus" />
                </template>
            </InputNumber>
            <p>100</p>
        </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import CoralChart from '../../../components/CoralChart.vue';
import { useLayout } from '@/layout/composables/layout';
import SelectButton from 'primevue/selectbutton';
import InputNumber from 'primevue/inputnumber';
import setChartData from '@/Stores/chartDataFunc';

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

</style>