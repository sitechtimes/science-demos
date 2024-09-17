<script setup>
import Slider from "primevue/slider";

let placeholderMaxDataValue = 100;
</script>

<template>
  <div>
    <Slider v-model="value" :step="placeholderMaxDataValue" class="w-56" />
  </div>
</template>

<style lang="scss" scoped></style>
