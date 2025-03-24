<script setup>
import { DataStore } from "@/Stores/DataStore";

const dataStore = DataStore();
dataStore.selectedYear=0
</script>

<template>
  <div class="span">Year</div>
    <form @submit.prevent="submitForm" class="flex flex-col gap-4">
    <div class="counter">
      <input type="number" disabled  v-model="dataStore.selectedYear" />
      <button type="button" @click="dataStore.selectedYear--">-</button>
      <button type="button" @click="dataStore.selectedYear++">+</button>
    </div>
  </form>

</template>
