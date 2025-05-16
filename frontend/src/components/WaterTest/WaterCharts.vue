<template>
    <div>
        <p>{{ waterTestConditions().compliance[1] }}</p>
        <PlotlyChart :data="trace1" :layout="layout" :config="{ displayModeBar: false }" :key="componentKey" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { waterTestConditions } from '@/Stores/watertest/waterTestStore';
import PlotlyChart from '@/components/PlotlyChart.vue';

const componentKey = ref(0);

const country = ['pH'];
const votingPop = [7];
const trace1 = [{
    type: 'scatter',
    x: votingPop,
    y: country,
    mode: 'markers',
    name: 'Percent of estimated voting age population',
    marker: {
        color: 'rgba(156, 165, 196, 0.95)',
        line: {
            color: 'rgba(156, 165, 196, 1.0)',
            width: 1,
        },
        symbol: 'circle',
        size: 16
    }
}];

const layout = {
    title: {
        text: 'Votes cast for ten lowest voting age population in OECD countries',
        font: {
            color: 'rgb(204, 204, 204)'
        }
    },
    xaxis: {
        showgrid: true,
        showline: true,
        linecolor: 'rgb(102, 102, 102)',
        tickfont: {
            font: {
                color: 'rgb(102, 102, 102)'
            }
        },
        tickmode: 'linear',
        dtick: 10,
        ticks: 'outside',
        tickcolor: 'rgb(102, 102, 102)',
        range: [0, 14]
    },
    margin: {
        l: 50,
        r: 50,
        b: 50,
        t: 50
    },
    legend: {
        font: {
            size: 10,
        },
        yanchor: 'middle',
        xanchor: 'right'
    },
    width: 600,
    height: 600,
    paper_bgcolor: 'rgb(254, 247, 234)',
    plot_bgcolor: 'rgb(254, 247, 234)',
    hovermode: 'closest'
};
</script>

<style scoped></style>