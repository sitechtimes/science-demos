<template>
    <div>
        <CoralChart v-model="dataInput" v-if="useLayout().isDarkTheme.value === false"/>
        <CoralChart v-model="dataInput" v-if="useLayout().isDarkTheme.value === true"/>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import CoralChart from '../../../components/CoralChart.vue';
import { useLayout } from '@/layout/composables/layout';

const documentStyle = ref(getComputedStyle(document.documentElement));

console.log(useLayout().isDarkTheme.value)

const data = ref({
        labels: ['January', 'February', 'March0', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'First Dataset',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: documentStyle.value.getPropertyValue('--p-cyan-500'),
                tension: 0.4
            },
            {
                label: 'Second Dataset',
                data: [28, 48, 40, 19, 86, 27, 90],
                fill: false,
                borderColor: documentStyle.value.getPropertyValue('--p-gray-500'),
                tension: 0.4
            }
        ]
    });

const dataInput = ref({
    chartData: data,
    chartTitle: 'Population Remaining Per Year',
    xAxis: 'Years',
    yAxis: 'Percent of Population Remaining'
}) 
</script>

<style scoped>

</style>