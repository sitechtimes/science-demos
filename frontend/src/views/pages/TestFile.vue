<template>
    <div>
        <LinePlot :data="data" :tooltip="false" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import LinePlot from '@/components/d3-charts/ScatterPlot.vue'
import * as d3 from 'd3';

const data = ref(d3.ticks(-2, 2, 30).map(Math.sin));

/* function onMousemove(event) {
    const [x, y] = d3.pointer(event);
    data.value = data.value.slice(-200).concat(Math.atan2(y, x));
} */
</script>

<style lang="scss" scoped></style>