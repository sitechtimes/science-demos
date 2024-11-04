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
    layout: {
        type: Object,
        default: {},
    },
    config: {
        type: Object,
        default: { staticPlot: true },
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

function dataProcess(dataset) {
    const data = [];
    let xArray = [];
    let yArray = [];
    dataset.forEach((item) => {
        xArray = item.data.map(item => item.x);
        yArray = item.data.map(item => item.y);
        data.push({
            x: xArray,
            y: yArray,
            mode: item.mode,
            type: 'scatter'
        });
    });
    return data;
}

const data = dataProcess(props.data.datasets)

onMounted(() => {
    Plotly.newPlot(chart.value, data, props.layout, props.config);
});
</script>

<style lang="scss" scoped></style>