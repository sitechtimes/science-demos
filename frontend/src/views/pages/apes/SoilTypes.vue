<template>
    <div class="chart-slider-container">
        <div class="chart-container">
            <div class="card p-0">
                <PlotlyChart :data="chartData" :layout="chartOptions" :config="{ displayModeBar: false }"
                    :key="componentKey" />
            </div>

        </div>
        <div class="slider-container">
            <InputNumber />
            <InputNumber />
            <InputNumber />
            <div class="card">
                <SliderConditions />
            </div>
        </div>
    </div>
</template>

<script setup>
import { onBeforeMount, ref, watch } from "vue";
import { useLayout } from '@/layout/composables/layout';
import SliderConditions from "@/components/CoralSimulation/SliderConditions.vue";
import PlotlyChart from '@/components/PlotlyChart.vue';
import soilData from '@/components/SoilType/soilData';
import InputNumber from "primevue/inputnumber";
// import SelectButton from 'primevue/selectbutton'; // keeping this for future use as switching between chart and soil type preview?

const colors = ['#8dd3c7', '#ffffb3', '#bebada', '#fb8072', '#80b1d3', '#fdb462', '#b3de69', '#fccde5', '#d9d9d9', '#bc80bd', '#ccebc5', '#ffed6f'];

const chartOptions = ref();
const chartData = ref();
const componentKey = ref(0); // idk why the layout isn't refreshing without this

onBeforeMount(() => { // load data and set chart options
    chartOptions.value = setChartOptions(getStyles());
    chartData.value = setChartData(soilData);
});
watch([useLayout().isDarkTheme,/*  should watch the point change too */], () => {
    // rerender with different axes if chart type changed
    chartData.value = setChartData(soilData);
    chartOptions.value = setChartOptions(getStyles());
    componentKey.value++;
    // console.log('watched')
});

function makeAxis(title, styles) {
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

function getStyles() { // obtain current theme colors for chart options
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

function setChartData(rawData, point) { // var point is to store the user current selected value for soil
    const data = Object.keys(rawData).map(function (k, i) {
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
    return data;
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