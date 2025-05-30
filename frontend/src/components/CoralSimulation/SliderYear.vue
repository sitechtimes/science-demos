<template>
  <div class="text-xl font-semibold">Year</div>
  <form @submit.prevent="submitForm" class="flex flex-col gap-4">
    <div class="flex items-center gap-2">
      <input
        type="number"
        v-model="popStore.currentYear"
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
        Set Year
      </button>
    </div>
  </form>
</template>

<script setup>
import { unityContext, updatePop } from "./unityContext.js";
import { populationStore } from "@/Stores/populationStore";
import { data } from "autoprefixer";

const popStore = populationStore();
console.log(popStore.currentYear)
function incrementYear() {
  if (popStore.currentYear < 100) {
    popStore.currentYear++;
  }
}

function decrementYear() {
  if (popStore.currentYear < 100) {
    popStore.currentYear--;
  }
}

function updateYear() {
  if (unityContext) {
    console.log(unityContext)
    unityContext.sendMessage(
      "FishManager",
      "updateYear",
      popStore.currentYear
    );
    updatePop(popStore)
  }
}
</script>

<style lang="scss" scoped></style>
