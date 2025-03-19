<template>
    <div class="chart-slider-container">
        <div class="chart-container">
            <div class="card p-0">
                <PlotlyChart :data="chartData" :layout="chartOptions" :config="{ displayModeBar: false }"
                    :key="componentKey" />
            </div>
            <div class="card p-0">
                <!-- <PlotlyChart :data="[{
                    x: ['your soil'],
                    y: [point1],
                    name: 'clay proportion',
                    type: 'bar'
                }, {
                    x: ['your soil'],
                    y: [point2],
                    name: 'sand proportion',
                    type: 'bar'
                }, {
                    x: ['your soil'],
                    y: [point3],
                    name: 'silt proportion',
                    type: 'bar'
                }]" :config="{ displayModeBar: false }" :layout="{ barmode: 'stack' }" /> -->
            </div>
        </div>
        <div class="slider-container">
            <Card>
                <template #title>create your soil type</template>
                <template #content>
                    <div>
                        <span id="Clay">Clay</span>
                        <Slider v-model="point1" aria-label="Clay" />
                    </div>
                    <div>
                        <span id="Sand">Sand</span>
                        <Slider v-model="point2" aria-label="Sand" />
                    </div>
                    <div>
                        <span id="Silt">Silt</span>
                        <Slider v-model="point3" aria-label="Silt" />
                    </div>
                </template>
            </Card>
            <Card>
                <template #title>your soil:</template>
                <template #content>
                    <p v-for="item in findSoilType(point1, point2, point3)">{{ item }}</p>
                </template>
            </Card>
        </div>
    </div>
</template>

<script setup>
import { onBeforeMount, ref, watch } from "vue";
import { useLayout } from '@/layout/composables/layout';
import PlotlyChart from '@/components/PlotlyChart.vue';
import soilData from '@/components/SoilType/soilData';
import findSoilType from "@/components/SoilType/pointCalcs";
import Slider from 'primevue/slider';
import Card from "primevue/card";
// import SelectButton from 'primevue/selectbutton'; // keeping this for future use as switching between chart and soil type preview?

const colors = [
    '#FFFFFF', // sand
    '#FFF0CC', // loamy sand
    '#D2B48C', // sandy loam
    '#FFC080', // sandy clay loam
    '#663300', // sandy clay
    '#452B1F', // clay
    '#FF9900', // clay loam
    '#5C514A', // silty clay
    '#786C3B', // silty clay loam
    '#C0C0C0', // silty loam
    '#C2C5B5', // silt
    '#A0522D', // loam
];

const chartOptions = ref();
const chartData = ref();
const componentKey = ref(0); // idk why the layout isn't refreshing without this

const point1 = ref(50); // clay
const point2 = ref(50); // sand
const point3 = ref(50); // silt

function renderChanges() {
    // rerender with different axes if chart type changed
    chartData.value = setChartData(soilData);
    chartOptions.value = setChartOptions(getStyles());
    componentKey.value++;
}

onBeforeMount(() => { // load data and set chart options
    renderChanges();
});
watch([useLayout().isDarkTheme, point1, point2, point3], () => {
    renderChanges();
});

function makeAxis(title, styles) { // styling for ternary plot
    return {
        title: {
            text: title
        },
        ticksuffix: '%',
        min: 0.01,
        linewidth: 2,
        ticks: 'outside',
        ticklen: 8,
        showgrid: true,
        gridcolor: styles.surfaceBorder,
        gridwidth: 1,
        zerolinecolor: styles.textColorSecondary,
    };
}

function getStyles() { // obtain current theme colors for chart options to change with theme
    const documentStyle = getComputedStyle(document.documentElement);
    return {
        textColor: documentStyle.getPropertyValue('--p-text-color'),
        textColorSecondary: documentStyle.getPropertyValue('--p-text-muted-color'),
        surfaceBorder: documentStyle.getPropertyValue('--p-content-border-color'),
        surfaceCard: documentStyle.getPropertyValue('--surface-card'),
        font: documentStyle.getPropertyValue('font-family')
    };
}

function setChartOptions(styles) { // set chart styles
    const layout = {
        ternary: {
            sum: 100,
            aaxis: makeAxis('Clay', styles),
            baxis: makeAxis('Sand', styles),
            caxis: makeAxis('Silt', styles)
        },
        title: "Soil Types",
        plot_bgcolor: styles.surfaceCard,
        paper_bgcolor: styles.surfaceCard,
        showlegend: false,
        margin: { // should change to computed margin
            t: 50,
            b: 50,
            l: 50,
            r: 50
        },
        font: {
            size: 10,
            color: styles.textColor,
            family: styles.font
        },
    };
    return layout;
}

function setChartData(rawData) { // var point is to store the user current selected value for soil
    const soilPlot = Object.keys(rawData).map(function (k, i) {
        let pts = rawData[k];
        pts = pts.concat(pts[0]);

        return {
            type: 'scatterternary',
            mode: 'lines',
            name: k,
            a: pts.map(function (d) { return d.clay }),
            b: pts.map(function (d) { return d.sand }),
            c: pts.map(function (d) { return d.silt }),
            line: { color: '#444' },
            fill: 'toself',
            fillcolor: colors[i],
            hoveron: 'fills+points'
        };
    });
    soilPlot.push({
        "type": "scatterternary",
        "mode": "markers",
        "text": ["your soil type"],
        "a": [point1.value],
        "b": [point2.value],
        "c": [point3.value],
        marker: {
            symbol: 100,
            color: '#fdff',
            size: 20,
            line: { width: 5 },
            symbol: "hexagon-dot"
        },
        "hoveron": "fills+points"
    })
    return soilPlot;
}
</script>

<style scoped>
.chart-slider-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
}

.chart-container {
    width: 100%;
}

.slider-container {
    width: 100%;
}

@media (min-width: 768px) {
    .chart-slider-container {
        grid-template-columns: 2fr 1fr;
    }
}
</style>