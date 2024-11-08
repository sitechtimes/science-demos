<template>
    <div>
        <ScatterPlot :data="data" :layout="layout" :config="config" :key="componentKey" />
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useLayout } from '@/layout/composables/layout';
import ScatterPlot from '@/components/d3-charts/ScatterPlot.vue'

function getStyles() { // obtain current theme colors for chart options
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--p-text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
    const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');
    const surfaceGround = documentStyle.getPropertyValue('--surface-ground');
    const font = documentStyle.getPropertyValue('font-family');
    return {
        textColor: textColor,
        textColorSecondary: textColorSecondary,
        surfaceBorder: surfaceBorder,
        surfaceGround: surfaceGround,
        font: font
    };
}

function setChartOptions() {
    const layout = {
        title: 'Nitrate abababa',
        xaxis: {
            title: 'no biochar',
            showgrid: true,
            zeroline: true,
            showline: true,
            mirror: 'ticks',
            gridcolor: getStyles().surfaceBorder,
            gridwidth: 1,
            zerolinecolor: getStyles().textColorSecondary,
            zerolinewidth: 2,
            // linecolor: '#636363',
            // linewidth: 6
        },
        yaxis: {
            title: 'biochar',
            showgrid: true,
            zeroline: true,
            showline: true,
            mirror: 'ticks',
            gridcolor: getStyles().surfaceBorder,
            gridwidth: 1,
            zerolinecolor: getStyles().textColorSecondary,
            zerolinewidth: 2,
            // linecolor: '#636363',
            // linewidth: 6
        },
        //paper_bgcolor: "rgba(0,0,0)", //background color of the chart container space
        //plot_bgcolor: "rgba(0,0,0)", //background color of plot area
        font: {
            size: 10,
            color: getStyles().textColor,
            family: getStyles().font
        },
        plot_bgcolor: getStyles().surfaceGround,
        paper_bgcolor: getStyles().surfaceGround,
    };
    return layout;
}

const layout = ref({});
layout.value = setChartOptions();

const componentKey = ref(0);

watch([useLayout().isDarkTheme, useLayout().layoutConfig], () => {
    layout.value = setChartOptions();
    componentKey.value++;
});

const data = ref([
    {
        color: '#42c0c3',
        data: [
            { x: 321.98, y: 94.28 },
            { x: 232.79, y: 96.71 },
            { x: 146.33, y: 3.77 },
            { x: 3.37, y: -0.81 },
        ],
        mode: 'markers',
        name: 'week 1'
    },
    {
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
        mode: 'markers',
        name: 'week 2'
    },
    {
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
        mode: 'markers',
        name: 'week 5'
    },
]);

// Transform the datasets
data.value = data.value.map(dataset => {
    // Extract x and y values into separate arrays
    const xValues = dataset.data.map(point => point.x);
    const yValues = dataset.data.map(point => point.y);

    // Return a new dataset object without the data key
    return {
        label: dataset.label,
        borderColor: dataset.borderColor,
        color: dataset.color,
        x: xValues,
        y: yValues,
        mode: dataset.mode,
        name: dataset.name
    };
});

// Now data.value.datasets will have the transformed format

const config = ref({
    displayModeBar: false,
    responsive: true,

})
</script>

<style lang="scss" scoped></style>