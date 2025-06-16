<template>
    <div>
    </div>
    <div class="card p-0">
        <PlotlyChart :data="chartData" :layout="chartOptions" :config="{ displayModeBar: false }" :key="componentKey" />
    </div>
</template>

<script setup>
import PlotlyChart from "@/components/PlotlyChart.vue"
import { ref, toRef, onBeforeMount, watch } from "vue";
import { useLayout } from '@/layout/composables/layout';
import { cellDivStore } from '@/Stores/celldiv/CellDivStore';
import { setChartOptions, setChartData } from '@/components/CellDivision/chartOptions.js'

const props = defineProps({ chartType: String }); // pull charttype info from parent component

const chartData = ref();
const chartOptions = ref();
const componentKey = ref(0);

function getStyles() { // obtain current theme colors for chart options to change with theme
    const documentStyle = getComputedStyle(document.documentElement);
    return {
        textColor: documentStyle.getPropertyValue('--p-text-color'),
        textColorSecondary: documentStyle.getPropertyValue('--p-text-muted-color'),
        surfaceBorder: documentStyle.getPropertyValue('--p-content-border-color'),
        surfaceCard: documentStyle.getPropertyValue('--surface-card'),
        font: documentStyle.getPropertyValue('font-family'),
        primaryColor: documentStyle.getPropertyValue('--p-primary-color')
    };
}

function renderChanges() {
    chartOptions.value = setChartOptions(getStyles(), props.chartType);
    chartData.value = setChartData(cellDivStore().graphData, getStyles());
    componentKey.value++;
}

onBeforeMount(() => {
    renderChanges()
});

watch([useLayout().layoutConfig, cellDivStore(), toRef(props.chartType)], () => { // watch for changes
    renderChanges()
});
</script>

<style scoped></style>