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
import hundredYearReg from '@/data/pCO2Reg';

const rerenderKey = ref(0);
const selectedYear = ref(30);
const chartType = ref('Population %');

watch([useLayout().isDarkTheme, selectedYear, chartType], ()=>{
    rerenderKey.value++; // rerender the chart if theme changes so the labels are visible
    dataInput.value.chartData = setChartData();
    switch(chartType.value){ // rerender with different axes if chart type changed
        case 'Population %':
            dataInput.value.currentGraph = 0;
            break;
        case 'Population Count':
            dataInput.value.currentGraph = 1;
            break;
    }
});

const setChartData = () => { // move to store later with input options for current selected year & species data
    return {
        datasets: [
            {
                label: 'Estimated CO2 Pressure',
                data: hundredYearReg(selectedYear.value),
                fill: false,
                borderColor: '#00aaaa',
                tension: 0.4,
                borderWidth: 1,
                yAxisID: 'y1',
                pointRadius: 0
            },
            {
                label: 'Staghorn Coral',
                data: [{x: 0, y: 65}, // example datasets; replace with calculated data
                        {x: 1, y: 59},
                        {x: 12, y: 92},
                        ],
                fill: false,
                borderColor: '#cc0234',
                tension: 0.4
            },
            {
                label: 'Stoplight parrotfish',
                data: [{x: 0, y: 28}, {x: 1, y: 48}],
                fill: false,
                borderColor: '#0b0bce',
                tension: 0.4
            },
            {
                label: 'Long-spined sea urchin',
                data: [{x: 0, y: 28}, {x: 1, y: 48}],
                fill: false,
                borderColor: '#ff48ff',
                tension: 0.4
            },
            {
                label: 'Boulder star coral',
                data: [{x: 0, y: 28}, {x: 1, y: 48}],
                fill: false,
                borderColor: '#686868',
                tension: 0.4
            },
            {
                label: 'Queen angelfish',
                data: [{x: 0, y: 28}, {x: 1, y: 48}],
                fill: false,
                borderColor: '#a348a3',
                tension: 0.4
            },
            {
                label: 'Hawksbill sea turtle',
                data: [{x: 0, y: 28}, {x: 1, y: 48}],
                fill: false,
                borderColor: '#ff9a34',
                tension: 0.4
            },
            {
                label: 'Sponges',
                data: [{x: 0, y: 28}, {x: 1, y: 48}],
                fill: false,
                borderColor: '#ffce9d',
                tension: 0.4
            },
            {
                label: 'Yellowtail snapper',
                data: [{x: 0, y: 28}, {x: 1, y: 48}],
                fill: false,
                borderColor: '#ffce9d',
                tension: 0.4
            },
            {
                label: 'Red lionfish',
                data: [{x: 0, y: 28}, {x: 1, y: 48}],
                fill: false,
                borderColor: '#ffce9d',
                tension: 0.4
            },
            {
                label: 'Algae',
                data: [{x: 0, y: 28}, {x: 1, y: 48}],
                fill: false,
                borderColor: '#11cf70',
                tension: 0.4
            },
            {
                label: 'Nassau grouper',
                data: [{x: 0, y: 28}, {x: 1, y: 48}],
                fill: false,
                borderColor: '#9d9d3c',
                tension: 0.4
            },
            {
                label: 'Crown-of-thorns starfish',
                data: [{x: 0, y: 28}, {x: 1, y: 48}],
                fill: false,
                borderColor: '#cfcf6f',
                tension: 0.4
            }
        ]
    };
};

const dataInput = ref({
    chartData: {},
    chartTitle: ['Percent of Population Remaining','Individuals of Population Remaining'],
    xAxis: ['Years', 'Years'],
    yAxis: ['Percent of Population Remaining', 'Individuals of Population Remaining'],
    currentGraph: 0
}) 

dataInput.value.chartData = setChartData();
</script>

<style scoped>

</style>