<template>
    <div>
        <ScatterPlot :data="data" :tooltip="true" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import ScatterPlot from '@/components/d3-charts/ScatterPlot.vue'

const data = ref({
    datasets: [
        {
            label: 'name',
            color: '#42c0c3',
            data: [
                { x: 321.978691, y: 94.27701674 },
                { x: 232.7853881, y: 96.71232877 },
            ]
        },
        {
            label: 'name2',
            color: '#422',
            showLine: true,
            data: [
                { x: 150.978691, y: 94.27701674 },
                { x: 232.7853881, y: 34.71232877 },
            ]
        },
    ]
});
</script>

<style lang="scss" scoped></style>