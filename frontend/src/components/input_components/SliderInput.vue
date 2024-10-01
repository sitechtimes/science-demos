<script setup>
import Slider from "primevue/slider";
const props = defineProps([
  sliderSteps,
  minSliderValue,
  maxSliderValue,
  storeValue,
]);
</script>

<template>
  <div>
    <Slider
      v-model="storeValue"
      :steps="sliderSteps"
      :min="minSliderValue"
      :max="maxSliderValue"
      class="w-56"
    />
  </div>
</template>

<style lang="scss" scoped></style>
