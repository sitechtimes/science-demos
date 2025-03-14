//This store is for storing functions to calculate various forms of data

import { defineStore } from "pinia";
import { populationStore } from "./populationStore";
import { ref, computed } from "vue";

const dataStore = dataStore();

export const growthFactorsStore = defineStore("growth", () => {
  const popStore = populationStore();
  const algaeGrowthRate =
    2.1 * popStore.nutrientLoad * (0.5 + 0.5 * popStore.waterClarity);
  const algaeMortalityRate = 0.001;
  speciesGrowthParams.algae = {
    growthRate: algaeGrowthRate,
    mortalityRate: algaeMortalityRate,
    competitionFactor: 0,
    symbiosisFactor: 0,
  };
  return {};
});
