<script setup>
import SliderInput from "./input_components/SliderInput.vue";
import { DataStore } from "../Stores/DataStore";

const dataStore = DataStore();
</script>

<template>
  <div>
    <SliderInput
      :storeValue="dataStore.oceanTemp.sliderValue"
      :sliderSteps="dataStore.oceanTemp.sliderStep"
      :minSliderValue="dataStore.oceanTemp.sliderMax"
      :maxSliderValue="dataStore.oceanTemp.sliderMin"
    />
  </div>
</template>
