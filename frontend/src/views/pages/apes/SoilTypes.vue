<template>
    <SelectButton v-model="displayType" :options="['the jar test', 'ternary plot']" />
    <div class="chart-slider-container">
        <div class="chart-container">
            <div class="card p-0" v-if="displayType === 'ternary plot'">
                <PlotlyChart :data="chartData.soilPlot" :layout="chartOptions.ternaryLayout"
                    :config="{ displayModeBar: false }" :key="componentKey" />
            </div>
            <div class="card p-0" v-if="displayType === 'the jar test'">
                <PlotlyChart :data="chartData.soilProportion" :config="{ displayModeBar: false }"
                    :layout="chartOptions.proportionLayout" :key="componentKey" />
            </div>
        </div>
        <div class="slider-container">
            <Card>
                <template #title>create your soil type</template>
                <template #content>
                    <div>
                        <span id="Clay">Clay</span>
                        <Slider v-model="clayPoint" aria-label="Clay" />
                    </div>
                    <div>
                        <span id="Sand">Sand</span>
                        <Slider v-model="sandPoint" aria-label="Sand" />
                    </div>
                    <div>
                        <span id="Silt">Silt</span>
                        <Slider v-model="siltPoint" aria-label="Silt" />
                    </div>
                </template>
            </Card>
            <Card>
                <template #title>your soil:</template>
                <template #content>
                    <p v-for="(item, index) in findSoilType(clayPoint, sandPoint, siltPoint)" :key="index">{{ item }}
                    </p>
                </template>
            </Card>
            <Card v-if="displayType === 'the jar test'">
                <template #title>the jar test</template>
                <template #content>
                    <p>If you mix soil with water in a container and let it settle, it will form layers. </p>
                    <p>At the bottom, you will find the sand layer, which forms in about 1 minute. </p>
                    <p>The middle layer formed will be silt, forming in about 2 hours. </p>
                    <p>The top layer will be clay, forming in about 48 hours. </p>
                    <p>anything left at the top is water. </p>
                </template>
            </Card>
        </div>
    </div>
</template>

<script setup>
import { onBeforeMount, ref, watch } from "vue";
import { useLayout } from '@/layout/composables/layout';
import PlotlyChart from '@/components/PlotlyChart.vue';
import { findSoilType, setChartData } from "@/components/SoilType/soilCalcs";
import setChartOptions from "@/components/SoilType/chartOptions";
import Slider from 'primevue/slider';
import Card from "primevue/card";
import SelectButton from 'primevue/selectbutton';

const chartOptions = ref();
const chartData = ref();
const componentKey = ref(0); // idk why the layout isn't refreshing without this

const clayPoint = ref(50);
const sandPoint = ref(50);
const siltPoint = ref(50);
const displayType = ref('the jar test')

function renderChanges() {
    // rerender with different axes if chart type changed
    chartData.value = setChartData(clayPoint, sandPoint, siltPoint);
    chartOptions.value = setChartOptions(getStyles());
    componentKey.value++;
}

onBeforeMount(() => { // load data and set chart options before mount to avoid Invalid prop on load  
    renderChanges();
});
watch([useLayout().isDarkTheme, clayPoint, sandPoint, siltPoint], () => {
    renderChanges();
});

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