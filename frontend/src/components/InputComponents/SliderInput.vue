<script setup>
import Slider from "primevue/slider";
import InputText from "primevue/inputtext";
const props = defineProps(['var']);
// props.var is a ref from the store, so it's already reactive
// make it so it takes input of unit % nothing years etc
const slider = props.var;
</script>

<template>
  <div class="flex flex-col space-y-4">
    <div>
      <label :for="slider.name" class="block">{{ slider.name }}</label>
      <InputText :aria-label="slider.name" v-model.number="slider.sliderValue" />
    </div>
    <Slider v-model="slider.sliderValue" :step="slider.sliderStep" :min="slider.sliderMin" :max="slider.sliderMax"
      :id="slider.name" class="w-full" v-tooltip.top="`${slider.tooltip}`" v-if="slider.tooltip !== undefined" />
    <Slider v-model="slider.sliderValue" :step="slider.sliderStep" :min="slider.sliderMin" :max="slider.sliderMax"
      :id="slider.name" class="w-full" v-else />
  </div>
</template>

<style scoped></style>
