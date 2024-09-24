<script setup>
import Slider from "primevue/slider";
const props = defineProps({
  sliderSteps: Number,
  minSliderValue: Number,
  maxSliderValue: Number,
  storeValue: Number,
});
</script>

<template>
  <div>
    <Slider
      v-model="props.storeValue"
      :steps="props.sliderSteps"
      :min="props.minSliderValue"
      :max="props.maxSliderValue"
      class="w-56"
    />
  </div>
</template>

<style lang="scss" scoped></style>
