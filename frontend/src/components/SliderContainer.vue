<script setup>
import SliderInput from "./input_components/SliderInput.vue";
import { DataStore } from "../Stores/DataStore";
import { ref } from "vue";

const dataStore = DataStore();
const sliderVariables = ref([
  dataStore.oceanTemp,
  dataStore.stormSeverity,
  dataStore.WaterPH,
]);
</script>

<template>
  <div>
    <div v-for="variable in sliderVariables" :key="variable">
      <InputText v-model.number="variable.sliderValue" />
      <SliderInput
        :key="variable"
        :storeValue="variable.sliderValue"
        :sliderSteps="variable.sliderStep"
        :minSliderValue="variable.sliderMax"
        :maxSliderValue="variable.sliderMin"
      />
    </div>
  </div>
</template>
