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
    <div class="flex flex-col gap-2 text-center">
      <h2 class="underline text-xl">store debugging...</h2>
      <button @click="console.log(dataStore.oceanTemp, dataStore.stormSeverity, dataStore.WaterPH)">log sliders</button>
      <button @click="dataStore.oceanTemp.sliderValue++">increment oceanTemp</button>
    </div>
  </div>
</template>
