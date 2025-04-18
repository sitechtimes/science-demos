<script setup>
import { ref, watch } from 'vue';
import Card from 'primevue/card';
import MiGameScene from '@/components/CellDivision/MiGameScene.vue'
import MeiGameScene from '@/components/CellDivision/MeiGameScene.vue'
import CellDivChart from '@/components/CellDivision/CellDivChart.vue';
import { cellDivStore } from '@/Stores/celldiv/CellDivStore';

import SelectButton from 'primevue/selectbutton';
const chartType = ref('Mitosis');
const componentKey = ref(0);
watch(chartType,
    () => {
        cellDivStore().clearGraph();
        componentKey.value++
    },
)

//mitosis:
//'progress time' button will go to the next phase
//starts w one cell -> dissolve nuclear membrane -> centrosomes attach to chromosomes -> centrosomes pull apart chromosomes, cell squishes in middle -> 
//nuclear membrane develops around each set of chromosomes, cell squishes more -> cell separates 
//max # of cells on screen, after you hit it 'progress time' button turns off

//meiosis:
//'progress time' button will go to the next phase
//starts w egg & sperm cells magnified -> sperm enters egg wall -> Meiosis I(two sets of chromosomes in egg cell (diploid zygote) -> 
//each set of chromosomes is duplicated -> homozygous chromosomes match up -> nuclear membrane dissolved -> centrosomes pull one short and one long pair to each side -> 
//nuclear membranes reform (two now) -> cell divides) --> Meiosis II(repeat meiosis I)
</script>
<template>
    <div class="sim-chart-container">
        <div class="sim-container">
            <SelectButton v-model="chartType" :options="['Mitosis', 'Meiosis']" />
            <div class="card" v-if="chartType === 'Mitosis'">
                <MiGameScene />
            </div>
            <div class="card" v-if="chartType === 'Meiosis'">
                <MeiGameScene />
            </div>
        </div>
        <div class="chart-container">
            <CellDivChart :chartType="chartType" :key="componentKey" />
            <Card>
                <template #title>{{ chartType }}</template>
                <template #content>
                    <p v-if="chartType === 'Mitosis'">One round of mitosis occurs in about 60 minutes. The interphase
                        period could be 6 hours or greater.In this demo, this time is omitted.</p>
                    <p v-else-if="chartType === 'Meiosis'">Meiosis is a two-stage division process. We assume
                        spermatogensis in this demo, which takes about 64 days a cycle.</p>
                </template>
            </Card>
        </div>
    </div>
</template>

<style scoped>
.sim-chart-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
}

.sim-container {
    width: 100%;
}

.chart-container {
    width: 100%;
}

@media (min-width: 950px) {
    .sim-chart-container {
        grid-template-columns: 2fr 1fr;
    }
}
</style>
