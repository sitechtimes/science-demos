<script setup>
import SliderInput from "./input_components/SliderInput.vue";
import { DataStore } from "../Stores/DataStore";
import { ref } from "vue";

const dataStore = DataStore();
const sliderVariables = ref(["oceanTemp", "stormSeverity", "WaterPH"]);
</script>

<template>
  <div class="flex flex-col gap-4">
    <div v-for="variable in sliderVariables" :key="variable">
      <SliderInput :var="dataStore[variable]" />
    </div>
    <!-- return to original settings button? will need store to have default value -->
  </div>
</template>
