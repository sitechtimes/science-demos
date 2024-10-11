
<script setup>
import { ref } from 'vue';
import CoralChart from '@/components/CoralSimulation/CoralChart.vue';
import SliderConditions from "@/components/CoralSimulation/SliderConditions.vue";
import SliderYear from '@/components/CoralSimulation/SliderYear.vue';
import GameScene from '@/components/CellDivision/GameScene.vue'
import SelectButton from 'primevue/selectbutton';
const chartType = ref('Mitosis')

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
    <div class="bg-surface-900 w-fit p-2 rounded">
            <SelectButton v-model="chartType" :options="['Mitosis', 'Meiosis']" />
        </div>
    <div class="chart-slider-container">
        <div class="chart-container">
            <div class="card" v-if="chartType === 'Mitosis'">
                <GameScene/>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>