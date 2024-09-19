<template>
    <div>
        <CoralChart v-model="dataInput" :key="rerenderKey"/>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import CoralChart from '../../../components/CoralChart.vue';
import { useLayout } from '@/layout/composables/layout';

const rerenderKey = ref(0);

watch(useLayout().isDarkTheme, ()=>{
    rerenderKey.value++;
})

const data = ref({
        datasets: [
            {
                label: 'Staghorn Coral',
                data: [{x: 0, y: 65}, // example datasets
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
    });

const dataInput = ref({
    chartData: data,
    chartTitle: ['Population Remaining Per Year'],
    xAxis: ['Years'],
    yAxis: ['Percent of Population Remaining']
}) 
</script>

<style scoped>

</style>