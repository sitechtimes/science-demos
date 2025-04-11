<script setup>
import { ref, watch } from 'vue';
import Card from 'primevue/card';
import Stepper from 'primevue/stepper';
import StepList from 'primevue/steplist';
import StepPanels from 'primevue/steppanels';
import StepItem from 'primevue/stepitem';
import Step from 'primevue/step';
import Button from 'primevue/button';
import Popover from 'primevue/popover'
import MiGameScene from '@/components/CellDivision/MiGameScene.vue'
import MeiGameScene from '@/components/CellDivision/MeiGameScene.vue'
import CellDivChart from '@/components/CellDivision/CellDivChart.vue';
import { cellDivStore } from '@/Stores/celldiv/CellDivStore';

import SelectButton from 'primevue/selectbutton';
const chartType = ref('Mitosis');
const componentKey = ref(0);

const op = ref();
const toggle = (event) => {
    op.value.toggle(event);
}
watch(chartType,
    () => {
        cellDivStore().clearGraph();
        componentKey.value++
    },
)

</script>
<template>
    <Popover ref="op">
        <div class="flex flex-col gap-4 w-[25rem]">
            <p>"Progress phase" will advance the cells to the next phase of their cell division. </p>
            <p>After you hit the max number of cells on the screen, you will no longer be able to progress phases. The
                button will allow you to restart the demo. </p>
        </div>
    </Popover>
    <div class="sim-chart-container">
        <div class="sim-container">
            <Button type="button" icon="pi pi-question-circle" aria-label="how does this demo work?" @click="toggle" />
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
                    <div v-if="chartType === 'Mitosis'">
                        <p>This demo will start with one cell. </p>
                        <p class="font-semibold">stages</p>
                        <ol class="list-decimal">
                            <li> Nuclear membrane dissolves </li>
                            <li> Centrosomes attach to chromosomes </li>
                            <li>centrosomes pull apart chromosomes</li>
                            <li> nuclear membrane develops around each set of chromosomes </li>
                            <li> cell separates </li>
                        </ol>
                        <p>One round of mitosis occurs in
                            about 60 minutes. The interphase period could be 6 hours or greater. In this demo, this time
                            is omitted. </p>
                        <p>The resulting cells are diploid- the entire gene set is preserved. These cells can keep
                            dividing. </p>
                    </div>
                    <div v-else-if="chartType === 'Meiosis'">
                        <p>This demo will start with one cell. Meiosis is a two-stage division process. the below stages
                            occur twice:</p>
                        <p class="font-semibold">stages</p>
                        <ol class="list-decimal">
                            <li> Nuclear membrane dissolves </li>
                            <li> Centrosomes attach to chromosomes </li>
                            <li>centrosomes pull apart chromosomes</li>
                            <li> nuclear membrane develops around each set of chromosomes </li>
                            <li> cell separates </li>
                        </ol>
                        <p>We assume
                            spermatogensis in this demo, which takes about 64 days a cycle. </p>
                        <p>The resulting cells are
                            haploid-
                            only half of the entire gene set. These haploid cells don't keep dividing.</p>
                    </div>
                </template>
            </Card>
        </div>
    </div>

    <div v-if="chartType === 'Mitosis'">
        <Stepper :value="`${cellDivStore().currentState}`" linear class="basis-[50rem] card flex justify-center">
            <StepList>
                <Step value="0">Interphase</Step>
                <Step value="1">Prophase</Step>
                <Step value="2">Metaphase</Step>
                <Step value="3">Anaphase</Step>
                <Step value="4">Telophase & Cytokinesis</Step>
            </StepList>
        </Stepper>
    </div>
    <div v-else-if="chartType === 'Meiosis'" class="card">
        <Stepper :value="`${cellDivStore().currentState}`" linear class="basis-[50rem] flex justify-center">
            <StepList>
                <Step value="0">Interphase</Step>
                <Step value="1">Prophase I</Step>
                <Step value="2">Metaphase I</Step>
                <Step value="3">Anaphase I</Step>
                <Step value="4">Telophase I & Cytokinesis</Step>
            </StepList>
        </Stepper>
        <Stepper :value="`${cellDivStore().currentState}`" linear class="basis-[50rem] flex justify-center">
            <StepList>
                <Step value="5">Prophase II</Step>
                <Step value="6">Metaphase II</Step>
                <Step value="7">Anaphase II</Step>
                <Step value="8">Telophase II & Cytokinesis</Step>
                <Step value="9">Haploid Cell</Step>
            </StepList>
        </Stepper>
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
