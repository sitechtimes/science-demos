import { defineStore } from "pinia";
import { DataStore } from "./DataStore";

export const CalculationStore = defineStore("calculation", () => {
  const calculatedData = ref([]);
  const years = ref([]);

  return { calculatedData, years };
});
