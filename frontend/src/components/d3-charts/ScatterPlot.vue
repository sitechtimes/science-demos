<template>
    <div class="card">
        <div ref="chart"></div>
    </div>
</template>

<script setup>
import Plotly from 'plotly.js-dist';
import { ref, onMounted } from 'vue';

const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
    width: {
        type: Number,
        default: 640,
    },
    height: {
        type: Number,
        default: 400,
    },
    marginTop: {
        type: Number,
        default: 20,
    },
    marginRight: {
        type: Number,
        default: 20,
    },
    marginBottom: {
        type: Number,
        default: 30,
    },
    marginLeft: {
        type: Number,
        default: 40,
    },
    tooltip: {
        type: Boolean,
        default: true,
    },
});

const chart = ref(null);

var trace1 = {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    mode: 'markers',
    type: 'scatter'
};

var trace2 = {
    x: [2, 3, 4, 5],
    y: [16, 5, 11, 9],
    mode: 'lines',
    type: 'scatter'
};

var trace3 = {
    x: [1, 2, 3, 4],
    y: [12, 9, 15, 12],
    mode: 'lines+markers',
    type: 'scatter'
};

var data = [trace1, trace2, trace3];

onMounted(() => {
    Plotly.newPlot(chart.value, data);
});
</script>

<style lang="scss" scoped></style>