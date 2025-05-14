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
        type: Array,
        required: true,
    },
    layout: {
        type: Object,
        default: {},
    },
    config: {
        type: Object,
        default: {},
    },
});

const chart = ref(null);

onMounted(() => {
    Plotly.newPlot(chart.value, props.data, props.layout, props.config);
});
</script>

<style scoped></style>