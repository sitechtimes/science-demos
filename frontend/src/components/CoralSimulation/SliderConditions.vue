<template>
  <div class="flex flex-col gap-4">
    <div v-for="variable in sliderVariables" :key="variable">
      <SliderInput :var="dataStore[variable]" />
    </div>
    <!-- return to original settings button here? will need store to have default value -->
    {{ carbonStore.temperatureKelvins }}

    <div>
      <button @click="popStore.currentYear = popStore.currentYear - 1">
        <
      </button>
      <p>{{ popStore.currentYear }}</p>
      <button @click="popStore.currentYear = popStore.currentYear + 1">
        >
      </button>
    </div>
  </div>
</template>

<script setup>
import SliderInput from "../input_components/SliderInput.vue";
import { DataStore } from "@/Stores/DataStore";
import { CarbonStore } from "@/Stores/CarbonStore";
import { ref, computed } from "vue";
import { populationStore } from "@/Stores/populationStore";

const dataStore = DataStore();
const carbonStore = CarbonStore();
const popStore = populationStore();
const sliderVariables = ref([
  "oceanTemp",
  "stormSeverity",
  "waterPH",
  "grouperFishing",
]);
// if we do include more conditions we will have to include a selectbutton or dropdown to switch between
</script>
