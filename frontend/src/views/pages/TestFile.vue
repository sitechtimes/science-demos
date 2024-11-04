<template>
    <div>
        <ScatterPlot :data="data" :layout="layout" :config="config" :tooltip="false" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import ScatterPlot from '@/components/d3-charts/ScatterPlot.vue'

const data = ref({
    datasets: [
        {
            label: 'wk1',
            borderColor: '#42c0c3',
            color: '#42c0c3',
            data: [
                { x: 321.98, y: 94.28 },
                { x: 232.79, y: 96.71 },
                { x: 146.33, y: 3.77 },
                { x: 3.37, y: -0.81 },
            ],
            mode: 'markers'
        },
        {
            label: 'wk2',
            borderColor: '#a873d0',
            color: '#a873d0',
            data: [
                { x: 538.24, y: 495.82 },
                { x: 477.64, y: 474.61 },
                { x: 466.42, y: 0.17 },
                { x: 0.18, y: -0.22 },
                { x: 1.05, y: 1.38 },
                { x: 2.49, y: 793.09 },
                { x: 584.00, y: 1197.03 },
                { x: 580.36, y: 1123.09 },
                { x: 840.36, y: 0.02 },
                { x: -0.56, y: -0.66 },
                { x: -0.22, y: -0.59 },
                { x: -0.68, y: 200.06 },
                { x: 272.79, y: 123.70 },
            ],
            mode: 'markers'
        },
        {
            label: 'wk5',
            borderColor: '#a72d82',
            color: '#a72d82',
            data: [
                { x: 153.54, y: 200.00 },
                { x: 86.29, y: 142.57 },
                { x: 146.61, y: 9.80 },
                { x: -0.09, y: 0.36 },
                { x: 1.82, y: 2.08 },
                { x: 2.01, y: 423.38 },
                { x: 284.85, y: 475.32 },
                { x: 4.40, y: -2.60 },
                { x: -2.60, y: -0.36 },
                { x: -0.09, y: 2.55 },
                { x: -0.12, y: 0.94 },
                { x: 0.04, y: -0.13 },
            ],
            mode: 'markers'
        },
    ]
});

const layout = ref({
    title: 'Nitrate abababa',
    xaxis: { title: 'no biochar' },
    yaxis: { title: 'biochar' },
});

const config = ref({
    displayModeBar: false,
})
</script>

<style lang="scss" scoped></style>