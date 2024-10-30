<template>
    <svg :width="width" :height="height">
        <g ref="gx" :transform="`translate(0, ${height - marginBottom})`" />
        <g ref="gy" :transform="`translate(${marginLeft}, 0)`" />
        <g v-for="(dataset, datasetIndex) in data.datasets" :key="datasetIndex">
            <circle v-tooltip.top="props.tooltip ? `(${point.x}, ${point.y})` : ''"
                v-for="(point, pointIndex) in dataset.data" :key="pointIndex" :cx="point.x" :cy="point.y" r="2.5"
                :fill="dataset.color || 'white'" />
        </g>
        <g ref="grid" />
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
const grid = ref(null);

function extrapolateData(data) {
    const xValues = [];
    const yValues = [];

    data.datasets.forEach(dataset => {
        dataset.data.forEach(point => {
            xValues.push(point.x);
            yValues.push(point.y);
        });
    });

    const minX = Math.min(...xValues);
    const maxX = Math.max(...xValues);
    const minY = Math.min(...yValues);
    const maxY = Math.max(...yValues);

    return {
        xExtent: [minX, maxX],
        yExtent: [minY, maxY],
    };
}

const dataRange = extrapolateData(props.data);

const x = d3.scaleLinear(dataRange.xExtent, [props.marginLeft, props.width - props.marginRight]);
const y = d3.scaleLinear(dataRange.yExtent, [props.height - props.marginBottom, props.marginTop]);

const updateAxes = () => {
    d3.select(gy.value).call(d3.axisLeft(y));
    d3.select(gx.value).call(d3.axisBottom(x));
    drawGrid();
};

const drawGrid = () => {
    const gridGroup = d3.select(grid.value);
    gridGroup.selectAll("*").remove(); // Clear previous grid lines

    // Draw vertical grid lines
    x.ticks().forEach(tick => {
        gridGroup.append("line")
            .attr("x1", x(tick))
            .attr("y1", props.marginTop)
            .attr("x2", x(tick))
            .attr("y2", props.height - props.marginBottom)
            .attr("stroke", "gray")
            .attr("stroke-width", 1);
    });

    // Draw horizontal grid lines
    y.ticks().forEach(tick => {
        gridGroup.append("line")
            .attr("x1", props.marginLeft)
            .attr("y1", y(tick))
            .attr("x2", props.width - props.marginRight)
            .attr("y2", y(tick))
            .attr("stroke", "#ccc")
            .attr("stroke-width", 1);
    });
};

watch(() => props.data, updateAxes, { immediate: true });

onMounted(() => {
    updateAxes();
});
</script>

<style scoped>
/* Add any necessary styles here */
</style>