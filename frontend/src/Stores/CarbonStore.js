//This store is purely for storing functions that calculate carbon in the water as well as pH

import { defineStore } from "pinia";
import { DataStore } from "./DataStore";
import { ref, computed } from "vue";

export const CarbonStore = defineStore("calculated", () => {
  const dataStore = DataStore();

  const partialPressureCO2 = ref();
  const temperatureKelvins = computed(
    () => dataStore.oceanTemp.sliderValue + 273
  );
  const carbonConcentration = ref();
  const salinityCoefficient = ref();
  const henrysConstant = ref();
  const acidity = ref();
  const hydrogenIons = ref();

  return {
    partialPressureCO2,
    temperatureKelvins,
    carbonConcentration,
    salinityCoefficient,
    henrysConstant,
    acidity,
    hydrogenIons,
  };
});
