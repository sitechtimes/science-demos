<template>
    <div>
        <Plotly :data="chartData" :layout="chartOptions" :key="componentKey" />
    </div>
</template>

<script setup>
import Plotly from '@/components/chart/PlotlyChart.vue'
import { ref, watch } from "vue";
import { useLayout } from '@/layout/composables/layout';
import { toRef } from "vue";
import { DataStore } from "@/Stores/DataStore";

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
        plot_bgcolor: styles.surfaceGround,
        paper_bgcolor: styles.surfaceGround,
        showlegend: true,
        legend: { "orientation": "h" }
    };
    return layout;
}

function setChartData() {
    const data = [
        /*{
            name: 'Estimated CO2 Pressure',
            data: hundredYearReg(currentYear),
            marker: {
    color: '#00aaaa',
  },
            mode: 'lines+markers',
            borderWidth: 1,
            yAxisID: 'y1',
            pointRadius: 0
        },*/
        {
            name: 'Staghorn Coral',
            x: [0, 1, 12], // placeholder values, will be taking from store
            y: [65, 59, 92],
            marker: {
                color: '#cc0234',
            },
            mode: 'lines+markers'
        },
        {
            name: 'Stoplight parrotfish',
            x: [0, 1, 12],
            y: [65, 59, 92],
            marker: {
                color: '#0b0bce',
            },
            mode: 'lines+markers'
        },
        {
            name: 'Long-spined sea urchin',
            x: [0, 1, 12],
            y: [65, 59, 92],
            marker: {
                color: '#ff48ff',
            },
            mode: 'lines+markers'
        },
        {
            name: 'Boulder star coral',
            x: [0, 1, 12],
            y: [65, 59, 92],
            marker: {
                color: '#686868',
            },
            mode: 'lines+markers'
        },
        /*         {
                    name: 'Queen angelfish',
                    x: [0, 1, 12],
                    y: [65, 59, 92],
                    marker: {
                        color: '#a348a3',
                    },
                    mode: 'lines+markers'
                },
                {
                    name: 'Hawksbill sea turtle',
                    x: [0, 1, 12],
                    y: [65, 59, 92],
                    marker: {
                        color: '#ff9a34',
                    },
                    mode: 'lines+markers'
                },
                {
                    name: 'Sponges',
                    x: [0, 1, 12],
                    y: [65, 59, 92],
                    marker: {
                        color: '#ffce9d',
                    },
                    mode: 'lines+markers'
                },
                {
                    name: 'Yellowtail snapper',
                    x: [0, 1, 12],
                    y: [65, 59, 92],
                    marker: {
                        color: '#ffce9d',
                    },
                    mode: 'lines+markers'
                }, */
        {
            name: 'Red lionfish',
            x: [0, 1, 12],
            y: [65, 59, 92],
            marker: {
                color: '#ffce9d',
            },
            mode: 'lines+markers'
        },
        {
            name: 'Algae',
            x: [0, 1, 12],
            y: [65, 59, 92],
            marker: {
                color: '#11cf70',
            },
            mode: 'lines+markers'
        },
        /*         {
                    name: 'Nassau grouper',
                    x: [0, 1, 12],
                    y: [65, 59, 92],
                    marker: {
                        color: '#9d9d3c',
                    },
                    mode: 'lines+markers'
                }, */
        {
            name: 'Crown-of-thorns starfish',
            x: [0, 1, 12],
            y: [65, 59, 92],
            marker: {
                color: '#cfcf6f',
            },
            mode: 'lines+markers'
        }
    ]
    return data;
}

/* const ecosystemRoles = { // add legendgroup: 'group' with these categories to dataset (bc otherwise the legend overflows into the chart axis)
    primaryProducers: ["Algae"],
    reefBuilders: ["Staghorn Coral", "Boulder Star Coral"],
    filterFeedersAndNutrientCyclers: ["Sponges"],
    herbivores: ["Stoplight Parrotfish", "Long-spined Sea Urchin"],
    predatoryFish: ["Queen Angelfish", "Yellowtail Snapper", "Nassau Grouper"],
    invasiveSpecies: ["Red Lionfish", "Crown-of-thorns Starfish"],
    keystoneSpecies: ["Hawksbill Sea Turtle"]
}; */
</script>

<style scoped></style>