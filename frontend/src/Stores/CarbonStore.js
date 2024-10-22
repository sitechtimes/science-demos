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
    () => 0.0433 - 2.67 * Math.pow(10, -4) * temperatureKelvins.value
  );
  const salinityFactor = computed(
    () => 1 + salinityCoefficient.value * dataStore.waterSalinity.sliderValue
  );
  const henrysConstant = computed(
    () =>
      salinityFactor.value *
      12.59 *
      Math.pow(temperatureKelvins.value, -1.14) *
      Math.pow(10, -2700 / temperatureKelvins.value)
  );
  const carbonConcentration = computed(
    () => henrysConstant.value * partialPressureCO2.value
  );
  const hydrogenIons = computed(() => Math.pow(10, -acidity));

  //variables that need to be changed during calc?
  const partialPressureCO2 = ref(0.2711885);
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
