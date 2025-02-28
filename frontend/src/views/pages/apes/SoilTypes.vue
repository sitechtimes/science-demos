<template>
    <div class="chart-slider-container">
        <div class="chart-container">
            <div class="card">
                <PlotlyChart :data="data" :layout="layout" :key="componentKey" />
            </div>

        </div>
        <div class="slider-container">
            <div class="card">
                <SliderConditions />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import { useLayout } from '@/layout/composables/layout';
import { toRef } from "vue";
import { DataStore } from "@/Stores/DataStore";
import SliderConditions from "@/components/CoralSimulation/SliderConditions.vue";
import PlotlyChart from '@/components/PlotlyChart.vue';
import * as d3 from "d3";
// import SelectButton from 'primevue/selectbutton';


const url = {
    sand: [
        {
            clay: 0,
            sand: 100,
            silt: 0
        },
        {
            clay: 10,
            sand: 90,
            silt: 0
        },
        {
            clay: 0,
            sand: 90,
            silt: 10
        }
    ],
    loamy_sand: [

        {
            clay: 0,
            sand: 90,
            silt: 10
        },
        {
            clay: 10,
            sand: 90,
            silt: 0
        },
        {
            clay: 15,
            sand: 85,
            silt: 0
        },
        {
            clay: 0,
            sand: 70,
            silt: 30
        }
    ],
    sandy_loam: [
        {
            clay: 0,
            sand: 70,
            silt: 30
        },
        {
            clay: 15,
            sand: 85,
            silt: 0
        },
        {
            clay: 20,
            sand: 80,
            silt: 0
        },
        {
            clay: 20,
            sand: 53,
            silt: 32
        },
        {
            clay: 5,
            sand: 53,
            silt: 42
        },
        {
            clay: 5,
            sand: 45,
            silt: 50
        },
        {
            clay: 0,
            sand: 50,
            silt: 50
        }
    ],
    sandy_clay_loam: [
        {
            clay: 20,
            sand: 80,
            silt: 0
        },
        {
            clay: 35,
            sand: 65,
            silt: 0
        },
        {
            clay: 35,
            sand: 45,
            silt: 20
        },
        {
            clay: 28,
            sand: 45,
            silt: 27
        },
        {
            clay: 20,
            sand: 53,
            silt: 32
        }
    ],
    sandy_clay: [
        {
            clay: 35,
            sand: 65,
            silt: 0
        },
        {
            clay: 35,
            sand: 45,
            silt: 20
        },
        {
            clay: 55,
            sand: 45,
            silt: 0
        }],
    clay: [
        {
            clay: 55,
            sand: 45,
            silt: 0
        },
        {
            clay: 100,
            sand: 0,
            silt: 0
        },
        {
            clay: 60,
            sand: 0,
            silt: 40
        },
        {
            clay: 40,
            sand: 20,
            silt: 40
        },
        {
            clay: 40,
            sand: 45,
            silt: 15
        }
    ],
    clay_loam: [
        {
            clay: 40,
            sand: 45,
            silt: 15
        },
        {
            clay: 40,
            sand: 20,
            silt: 40
        },
        {
            clay: 28,
            sand: 20,
            silt: 52
        },
        {
            clay: 28,
            sand: 45,
            silt: 27
        }
    ],
    silty_clay: [
        {
            clay: 60,
            sand: 0,
            silt: 40
        },
        {
            clay: 40,
            sand: 0,
            silt: 60
        },
        {
            clay: 40,
            sand: 20,
            silt: 40
        }
    ],
    silty_clay_loam: [
        {
            clay: 28,
            sand: 0,
            silt: 72
        },
        {
            clay: 28,
            sand: 20,
            silt: 52
        },
        {
            clay: 40,
            sand: 20,
            silt: 40
        },
        {
            clay: 40,
            sand: 0,
            silt: 60
        }
    ],
    silty_loam: [
        {
            clay: 0,
            sand: 50,
            silt: 50
        },
        {
            clay: 28,
            sand: 22,
            silt: 50
        },
        {
            clay: 28,
            sand: 0,
            silt: 72
        },
        {
            clay: 12,
            sand: 0,
            silt: 88
        },
        {
            clay: 12,
            sand: 8,
            silt: 80
        },
        {
            clay: 0,
            sand: 20,
            silt: 80
        }
    ],
    silt: [
        {
            clay: 0,
            sand: 0,
            silt: 100
        },
        {
            clay: 0,
            sand: 20,
            silt: 80
        },
        {
            clay: 12,
            sand: 8,
            silt: 80
        },
        {
            clay: 12,
            sand: 0,
            silt: 88
        }

    ],
    loam: [
        {
            clay: 28,
            sand: 45,
            silt: 27
        },
        {
            clay: 28,
            sand: 22,
            silt: 50
        },
        {
            clay: 5,
            sand: 45,
            silt: 50
        },
        {
            clay: 5,
            sand: 53,
            silt: 42
        },
        {
            clay: 20,
            sand: 53,
            silt: 32
        }
    ]
};
const colors = ['#8dd3c7', '#ffffb3', '#bebada', '#fb8072', '#80b1d3', '#fdb462', '#b3de69', '#fccde5', '#d9d9d9', '#bc80bd', '#ccebc5', '#ffed6f'];

let data = plot(url);

let layout = {
    ternary: {
        sum: 100,
        aaxis: makeAxis('Clay'),
        baxis: makeAxis('Sand'),
        caxis: makeAxis('Silt')
    },
    showlegend: false,
    width: 700,
    annotations: [{
        showarrow: false,
        text: 'Soil Types Fill Plot',
        x: 0.15,
        y: 1.1
    }]
};


function makeAxis(title) {
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
    };
}

function plot(rawData) {
    var data = Object.keys(rawData).map(function (k, i) {
        var pts = rawData[k];
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

    // Plotly.newPlot('myDiv', data, layout);
    return data;
}

const dataStore = DataStore();
const selectedYear = toRef(dataStore.selectedYear); // reactive source to watch

const chartType = defineModel(); // track which dataset the user wants to see

const chartOptions = ref(setChartOptions(chartType.value, getStyles()));
const chartData = ref(setChartData()); // props for chart

const componentKey = ref(0); // idk why the layout isn't refreshing without this

function getStyles() { // obtain current theme colors for chart options
    const documentStyle = getComputedStyle(document.documentElement);
    return {
        textColor: documentStyle.getPropertyValue('--p-text-color'),
        textColorSecondary: documentStyle.getPropertyValue('--p-text-muted-color'),
        surfaceBorder: documentStyle.getPropertyValue('--p-content-border-color'),
        surfaceGround: documentStyle.getPropertyValue('--surface-ground'),
        font: documentStyle.getPropertyValue('font-family')
    };
}

watch([useLayout().isDarkTheme, selectedYear.value, chartType], () => {
    // rerender with different axes if chart type changed
    chartData.value = setChartData();
    chartOptions.value = setChartOptions(chartType.value, getStyles());
    componentKey.value++;
    console.log('watched')
});

function setChartOptions(yaxis, styles) {
    const layout = {
        title: yaxis,
        xaxis: {
            title: 'Years',
            showgrid: true,
            zeroline: true,
            showline: true,
            mirror: 'ticks',
            gridcolor: styles.surfaceBorder,
            gridwidth: 1,
            zerolinecolor: styles.textColorSecondary,
            zerolinewidth: 2,
        },
        yaxis: {
            title: yaxis,
            showgrid: true,
            zeroline: true,
            showline: true,
            mirror: 'ticks',
            gridcolor: styles.surfaceBorder,
            gridwidth: 1,
            zerolinecolor: styles.textColorSecondary,
            zerolinewidth: 2,
        },
        font: {
            size: 10,
            color: styles.textColor,
            family: styles.font
        },
        margin: { // should change to computed margin
            t: 20,
            b: 20,
            l: 20,
            r: 20
        },
        plot_bgcolor: styles.surfaceGround,
        paper_bgcolor: styles.surfaceGround,
        showlegend: true,
        legend: { "orientation": "h" }
    };
    return layout;
}

function setChartData() {
    const data = [
        {
            name: 'Staghorn Coral',
            x: [0, 1, 12],
            y: [65, 59, 92],
            marker: {
                color: '#cc0234',
            },
            mode: 'lines+markers'
        }
    ]
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