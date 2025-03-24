<script setup>
import { DataStore } from "@/Stores/DataStore";

const dataStore = DataStore();
dataStore.selectedYear = 0;
</script>

<template>
  <div class="text-xl font-semibold">Year</div>
  <form @submit.prevent="submitForm" class="flex flex-col gap-4">
    <div class="flex items-center gap-2">
      <input
        type="number"
        disabled
        v-model="dataStore.selectedYear"
        class="w-20 text-center border rounded-lg p-2 text-lg"
      />
      <button
        type="button"
        @click="dataStore.selectedYear--"
        class="button px-3 py-1 border rounded-lg text-lg"
      >
        -
      </button>
      <button
        type="button"
        @click="dataStore.selectedYear++"
        class=" button px-3 py-1 border rounded-lg  text-lg"
      >
        +
      </button>
    </div>
  </form>
</template>

<style lang="scss" scoped></style>
