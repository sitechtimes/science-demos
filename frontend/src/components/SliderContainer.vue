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

const patchStore = (value) => {
  dataStore.sliderValue = value;
};
</script>

<template>
  <div>
    <div v-for="variable in sliderVariables" :key="variable">
      <SliderInput
        @storeUpdate="patchStore(number)"
        :key="variable"
        :storeValue="variable.defaultValue"
        :sliderSteps="variable.sliderStep"
        :minSliderValue="variable.sliderMax"
        :maxSliderValue="variable.sliderMin"
      />
    </div>
  </div>
</template>
