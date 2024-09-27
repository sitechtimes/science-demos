<script setup>
import Slider from "primevue/slider";
import { ref, watch, defineEmits } from "vue";
const props = defineProps({
  sliderSteps: Number,
  minSliderValue: Number,
  maxSliderValue: Number,
  storeValue: Number,
});
const emit = defineEmits(["storeUpdate"]);
const sliderValue = ref(props.storeValue);

watch(sliderValue, () => {
  emit("storeUpdate", sliderValue.value);
});
</script>

<template>
  <div>
    <InputText v-model.number="sliderValue" />
    <Slider
      v-model="sliderValue"
      :steps="props.sliderSteps"
      :min="props.minSliderValue"
      :max="props.maxSliderValue"
      class="w-56"
    />
  </div>
</template>

<style lang="scss" scoped></style>
