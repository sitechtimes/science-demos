//This store is purely for storing functions that calculate carbon in the water as well as pH

import { defineStore } from "pinia";
import { DataStore } from "./DataStore";
import { ref, computed } from "vue";

const dataStore = DataStore();

export const CarbonStore = defineStore("calculated", () => {
  //computed properties. They are read only and cannot be changed.
  const temperatureKelvins = computed(
    () => dataStore.oceanTemp.sliderValue + 273
  );
  const salinityCoefficient = computed(
    () => 0.0433 - 2.67 * Math.pow(10, -4) * temperatureKelvins
  );
  const salinityFactor = computed(
    () => 1 + salinityCoefficient * dataStore.waterSalinity.sliderValue
  );
  const hydrogenIons = computed(() => Math.pow(10, -acidity));

  //variables that need to be changed during calc?
  const partialPressureCO2 = ref();
  const carbonConcentration = ref();
  const henrysConstant = ref(); //prob can be computed, will code it out later
  const acidity = ref();

  return {
    partialPressureCO2,
    temperatureKelvins,
    carbonConcentration,
    salinityFactor,
    salinityCoefficient,
    henrysConstant,
    acidity,
    hydrogenIons,
  };
});
