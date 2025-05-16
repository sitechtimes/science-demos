<template>
    <div>
        <p>{{ waterTestConditions().compliance[1] }}</p>
        <PlotlyChart :data="data" :config="{ displayModeBar: false }" :key="componentKey" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { waterTestConditions } from '@/Stores/watertest/waterTestStore';
import PlotlyChart from '@/components/PlotlyChart.vue';

const componentKey = ref(0);

const data = [{
    y: ['pH'],
    z: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]],
    type: 'heatmap'
}, {
    type: 'scatter',
    x: [7],
    y: ['pH'],
    mode: 'markers',
    name: 'Percent of estimated voting age population',
    marker: {
        color: 'rgba(156, 165, 196, 0.95)',
        line: {
            color: 'rgba(156, 165, 196, 1.0)',
            width: 1,
        },
        symbol: 'circle',
        size: 16
    }
}];


</script>

<style scoped></style>