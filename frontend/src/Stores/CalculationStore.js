//This store is for storing functions to calculate various forms of data

import { defineStore } from "pinia";
import { DataStore } from "./DataStore";
import { CalculatedResultsStore } from "./CalculatedResults";

export const CalculationStore = defineStore("calculation", () => {
  const calculatedData = ref([]);
  const years = ref([]);

  return { calculatedData, years };
});
