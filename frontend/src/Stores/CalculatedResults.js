//This store is for storing calculated results

import { defineStore } from "pinia";
import { DataStore } from "./DataStore";
import { CalculationStore } from "./CalculationStore";

export const CalculatedResultsStore = defineStore("calculated", () => {
  const calculatedData = ref([]);

  return { calculatedData };
});
