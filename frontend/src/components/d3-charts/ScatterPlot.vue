<template>
    <svg :width="width" :height="height">
        <g ref="gx" :transform="`translate(0, ${height - marginBottom})`" />
        <g ref="gy" :transform="`translate(${marginLeft}, 0)`" />
        <g v-if="props.tooltip === true" fill="white" stroke="currentColor" stroke-width="1.5">
            <!-- create a tooltip with primevue directive if selected -->
            <g v-for="(dataset, datasetIndex) in data.datasets" :key="datasetIndex">
                <circle v-tooltip.top="`(${point.x}, ${point.y})`" v-for="(point, pointIndex) in dataset.data"
                    :key="pointIndex" :cx="point.x" :cy="point.y" r="2.5" :fill="dataset.color || 'white'" />
                <!-- for each data pair, make circles and attribute a color based on dataset -->
            </g>
        </g>
        <g v-else fill="white" stroke="currentColor" stroke-width="1.5">
            <g v-for="(dataset, datasetIndex) in data.datasets" :key="datasetIndex">
                <circle v-for="(point, pointIndex) in dataset.data" :key="pointIndex" :cx="point.x" :cy="point.y"
                    r="2.5" :fill="dataset.color || 'white'" />
            </g>
        </g>
    </svg>
</template>

<script setup>
import * as d3 from 'd3';
import { ref, watch, onMounted } from 'vue';

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

const gx = ref(null);
const gy = ref(null);

function extrapolateData(data) { // get min and max values to define axes minmax
    const xValues = [];
    const yValues = [];

    // Extract x and y values from the datasets
    data.datasets.forEach(dataset => {
        dataset.data.forEach(point => {
            xValues.push(point.x);
            yValues.push(point.y);
        });
    });

    // Calculate min and max for x and y
    const minX = Math.min(...xValues);
    const maxX = Math.max(...xValues);
    const minY = Math.min(...yValues);
    const maxY = Math.max(...yValues);

    // Return the extents
    const xExtent = [minX, maxX];
    const yExtent = [minY, maxY];

    return {
        xExtent,
        yExtent,
    };
}

const dataRange = extrapolateData(props.data);

const x = d3.scaleLinear(dataRange.xExtent, [props.marginLeft, props.width - props.marginRight]); // create axes
const y = d3.scaleLinear(dataRange.yExtent, [props.height - props.marginBottom, props.marginTop]);

const updateAxes = () => {
    d3.select(gy.value).call(d3.axisLeft(y));
    d3.select(gx.value).call(d3.axisBottom(x));
};

watch(() => props.data, updateAxes, { immediate: true });

onMounted(() => {
    updateAxes();
});
</script>

<style scoped>
/* Add any necessary styles here */
</style>