<template>
    <div>
        <div>
            <p class="text-lg">Dissolved Oxygen: {{ waterTestConditions().compliance[1].DO.toFixed(2) }} mg/L</p>
            <PlotlyChart :data="oxygenData" :config="{ displayModeBar: false }" :layout="oxygenLayout"
                :key="componentKey" />
        </div>
        <div>
            <p class="text-lg">pH: {{ waterTestConditions().compliance[1].pH.toFixed(2) }}</p>
            <PlotlyChart :data="phData" :config="{ displayModeBar: false }" :layout="phLayout" :key="componentKey" />
        </div>
        <div class="flex">
            <div>
                <div>
                    <p class="text-lg">turbidity: {{ waterTestConditions().compliance[1].turbidity }} NTU</p>
                    <PlotlyChart :data="turbidityData" :config="{ displayModeBar: false }" :layout="turbidityLayout"
                        :key="componentKey" />
                </div>
                <div>
                    <p class="text-lg">fecal coliform: {{ waterTestConditions().compliance[1].fecal_coliform }}
                        CFU/100mL
                    </p>
                </div>
            </div>
            <div>
                <p class="text-lg">nitrogen: {{ waterTestConditions().compliance[1].nitrate.toFixed(2) }} mg/L</p>
                <p class="text-lg">phosphorus: {{ waterTestConditions().compliance[1].phosphorus.toFixed(2) }} mg/L</p>
                <PlotlyChart :data="nutrientData" :config="{ displayModeBar: false }" :layout="nutrientLayout"
                    :key="componentKey" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onBeforeMount, watch } from 'vue';
import { waterTestConditions } from '@/Stores/watertest/waterTestStore';
import { phOptions, oxygenOptions, turbidityOptions, nutrientOptions } from './chartOptions';
import { setPhData, setOxygenData, setTurbidityData, setNutrientData } from './chartData';
import PlotlyChart from '@/components/PlotlyChart.vue';
import { useLayout } from '@/layout/composables/layout';

const componentKey = ref(0);

const oxygenData = ref();
const phData = ref();
const turbidityData = ref();
const nutrientData = ref();

const oxygenLayout = ref()
const phLayout = ref();
const turbidityLayout = ref();
const nutrientLayout = ref();

function renderChanges() {
    // rerender with different axes if chart type changed
    phData.value = setPhData();
    phLayout.value = phOptions(getStyles());
    oxygenData.value = setOxygenData();
    oxygenLayout.value = oxygenOptions(getStyles());
    turbidityData.value = setTurbidityData();
    turbidityLayout.value = turbidityOptions(getStyles());
    nutrientData.value = setNutrientData();
    nutrientLayout.value = nutrientOptions(getStyles());
    componentKey.value++;
}

onBeforeMount(() => { // load data and set chart options before mount to avoid Invalid prop on load  
    renderChanges();
});
watch([useLayout().layoutConfig, waterTestConditions()], () => {
    renderChanges();
});

function getStyles() { // obtain current theme colors for chart options to change with theme
    const documentStyle = getComputedStyle(document.documentElement);
    console.log(documentStyle)
    return {
        textColor: documentStyle.getPropertyValue('--p-text-color'),
        textColorSecondary: documentStyle.getPropertyValue('--p-text-muted-color'),
        surfaceBorder: documentStyle.getPropertyValue('--p-content-border-color'),
        surfaceCard: documentStyle.getPropertyValue('--surface-card'),
        font: documentStyle.getPropertyValue('font-family')
    };
}
</script>

<style scoped></style>