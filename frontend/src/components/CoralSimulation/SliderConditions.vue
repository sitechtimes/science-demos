<template>
  <div class="flex flex-col gap-4">
    <div v-for="variable in sliderVariables" :key="variable">
      <SliderInput :var="dataStore[variable]" />
    </div>
    <!-- return to original settings button here? will need store to have default value -->
    {{ carbonStore.temperatureKelvins }}

  </div>
</template>

<script setup>
import SliderInput from "../InputComponents/SliderInput.vue";
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
]);
// if we do include more conditions we will have to include a selectbutton or dropdown to switch between
</script>
