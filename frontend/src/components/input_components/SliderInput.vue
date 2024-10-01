<script setup>
import Slider from "primevue/slider";
import { toRef } from "vue";
const props = defineProps({
  var: Object,
});
// toRef maintains reactivity with the prop var
// and prop var is from the store
// so this thing is reactive with the store
const slider = toRef(props.var);
</script>

<template>
  <div class="flex flex-col w-min">
    <div>
      <label :for="slider.name">{{ slider.name }}</label>
      <InputText v-model.number="slider.sliderValue" />
    </div>
    <Slider
      v-model="slider.sliderValue"
      :steps="slider.sliderSteps"
      :min="slider.minSliderValue"
      :max="slider.maxSliderValue"
      :id="slider.name"
      class="w-full"
    />
  </div>
</template>

<style lang="scss" scoped></style>
