//This store is for storing functions to calculate various forms of data

import { defineStore } from "pinia";
import { DataStore } from "./DataStore";
import { CalculatedResultsStore } from "./CalculatedResults";
import { CarbonStore } from "./CarbonStore";
import { ref } from "vue";

const dataStore = dataStore();
const carbonStore = CarbonStore();

export const CalculationStore = defineStore("calculation", () => {
  const years = ref([]); // moving to datastore

  const survivalRateCalc = (baseSurvival, sensitivityFactor) => {
    baseSurvival *
      Math.exp(
        -1 *
          sensitivityFactor *
          carbonStore.hydrogenIons *
          DataStore.years.sliderValue
      );
  };

  return { years, survivalRateCalc };
});
