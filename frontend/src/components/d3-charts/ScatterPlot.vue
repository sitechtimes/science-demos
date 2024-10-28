<template>
    <svg :width="width" :height="height">
        <g ref="gx" :transform="`translate(0, ${height - marginBottom})`" />
        <g ref="gy" :transform="`translate(${marginLeft}, 0)`" />
        <g v-if="props.tooltip === true" fill="white" stroke="currentColor" stroke-width="1.5">
            <circle v-tooltip.top="`(${i}, ${d})`" v-for="(d, i) in data" :key="i" :cx="x(i)" :cy="y(d)" r="2.5"
                fill="white" />
        </g>
        <g v-else fill="white" stroke="currentColor" stroke-width="1.5">
            <circle v-for="(d, i) in data" :key="i" :cx="x(i)" :cy="y(d)" r="2.5" fill="white" />
        </g>
    </svg>
    <p>{{ hierarchy.data[0].children }}</p>
</template>

<script setup>
import * as d3 from 'd3';
import { ref, watch, onMounted } from 'vue';

const props = defineProps({
    data: {
        type: Array,
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

const gx = ref(null);
const gy = ref(null);

const x = d3.scaleLinear([0, props.data.length - 1], [props.marginLeft, props.width - props.marginRight]);
const y = d3.scaleLinear(d3.extent(props.data), [props.height - props.marginBottom, props.marginTop]);

const updateAxes = () => {
    d3.select(gy.value).call(d3.axisLeft(y));
    d3.select(gx.value).call(d3.axisBottom(x));
};

const datasets = {
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
            bordercolor: '#42c0c3',
            showLine: true,
            data: [
                { x: 321.978691, y: 94.27701674 },
                { x: 232.7853881, y: 96.71232877 },
            ]
        },
    ]
};

// Create a hierarchical structure
const root = datasets.datasets.map(dataset => ({
    name: dataset.label,
    color: dataset.color || dataset.bordercolor, // Use color or bordercolor
    showLine: dataset.showLine || false,
    children: dataset.data.map(point => ({
        name: `Point (${point.x}, ${point.y})`,
        x: point.x,
        y: point.y
    }))
}));

// Use d3.hierarchy to create a hierarchy from the root object
const hierarchy = d3.hierarchy(root);

// Log the hierarchy to see the structure


watch(() => props.data, updateAxes, { immediate: true });

onMounted(() => {
    updateAxes();
});
</script>

<style scoped>
/* Add any necessary styles here */
</style>