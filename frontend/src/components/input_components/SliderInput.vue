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
  <div class="flex flex-col space-y-4">
  <div>
    <label :for="slider.name" class="block">{{ slider.name }}</label>
    <InputText v-model.number="slider.sliderValue" />
  </div>
  <Slider
    v-model="slider.sliderValue"
    :step="slider.sliderStep"
    :min="slider.sliderMin"
    :max="slider.sliderMax"
    :id="slider.name"
    class="w-full"
  />
</div>
</template>

<style lang="scss" scoped></style>
