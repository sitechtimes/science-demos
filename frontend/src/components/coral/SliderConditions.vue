<script setup>
import SliderInput from "../input_components/SliderInput.vue";
import { DataStore } from "@/Stores/DataStore";
import { CarbonStore } from "@/Stores/CarbonStore";
import { ref } from "vue";

const dataStore = DataStore();
const carbonStore = CarbonStore();
const sliderVariables = ref([
  "oceanTemp",
  "stormSeverity",
  "waterPH",
  "waterSalinity",
]);
// if we do include more conditions we will have to include a selectbutton or dropdown to switch between
</script>

<template>
  <div class="flex flex-col gap-4">
    <div v-for="variable in sliderVariables" :key="variable">
      <SliderInput :var="dataStore[variable]" />
    </div>
    <!-- return to original settings button here? will need store to have default value -->
    {{ carbonStore.acidity }}
  </div>
</template>
