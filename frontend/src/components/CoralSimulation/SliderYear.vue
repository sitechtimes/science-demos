<script setup>
import SliderInput from "../InputComponents/SliderInput.vue";
import { DataStore } from "@/Stores/DataStore";

const dataStore = DataStore();
</script>

<template>
  <div class="flex flex-col gap-4">
    <div>
      <SliderInput :var="dataStore.selectedYear" />
    </div>
  </div>
</template>
