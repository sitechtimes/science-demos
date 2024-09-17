<template>
    <div>
        <PopulationChart :chartData="data" :xAxis="'Years'" :yAxis="'Percent of Population Remaining'"/>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import PopulationChart from '../../../components/PopulationChart.vue';

const documentStyle = getComputedStyle(document.documentElement);

const data = ref({
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'First Dataset',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: documentStyle.getPropertyValue('--p-cyan-500'),
                tension: 0.4
            },
            {
                label: 'Second Dataset',
                data: [28, 48, 40, 19, 86, 27, 90],
                fill: false,
                borderColor: documentStyle.getPropertyValue('--p-gray-500'),
                tension: 0.4
            }
        ]
    });
</script>

<style scoped>

</style>