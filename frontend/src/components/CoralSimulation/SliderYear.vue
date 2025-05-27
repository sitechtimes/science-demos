<template>
  <div class="text-xl font-semibold">Year</div>
  <form @submit.prevent="submitForm" class="flex flex-col gap-4">
    <div class="flex items-center gap-2">
      <input
        type="number"
        v-model="dataStore.selectedYear"
        class="w-20 text-center border rounded-lg p-2 text-lg [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      />
      <button
        type="button"
        @click="decrementYear()"
        class="button px-3 py-1 border rounded-lg text-lg"
      >
        -
      </button>
      <button
        type="button"
        @click="incrementYear()"
        class="button px-3 py-1 border rounded-lg text-lg"
      >
        +
      </button>
    </div>
    <div>
      <button
        type="button"
        @click="updateYear()"
        class="button px-3 py-1 border rounded-lg text-lg"
      >
        Update Year
      </button>
    </div>
  </form>
</template>

<script setup>
import { DataStore } from "@/Stores/DataStore";
import { unityContext } from "./unityContext.js";
import { populationStore } from "@/Stores/populationStore";

const dataStore = DataStore();
const popStore = populationStore();

function incrementYear() {
  if (dataStore.selectedYear < 100) {
    dataStore.selectedYear++;
  }
}

function decrementYear() {
  if (dataStore.selectedYear < 100) {
    dataStore.selectedYear--;
  }
}

function updateYear() {
  if (unityContext) {
    console.log(dataStore.selectedYear)
    unityContext.sendMessage("FishManager","yearUpdate",dataStore.selectedYear)
    Object.keys(popStore.finalPopulations).forEach((key) => {
      const combined = `${key}|${popStore.finalPopulations[key]}`;
      unityContext.sendMessage("FishManager", "UpdatePop", combined);
    });

    unityContext.sendMessage("FishManager", "initializeScene");
  }
}
</script>

<style lang="scss" scoped></style>
