//This store is purely for storing functions that calculate carbon in the water as well as pH

import { defineStore } from "pinia";
import { DataStore } from "./DataStore";

export const CalculatedResultsStore = defineStore("calculated", () => {
  const partialPressureCO2 = ref();
  const TemperatureKelvins = ref(DataStore.oceanTemp.sliderValue + 273);
  const carbonConcentration = ref();
  const salinityCoefficient = ref();
  const henrysConstant = ref();
  const acidity = ref();
  const hydrogenIons = ref();

  return {
    partialPressureCO2,
    TemperatureKelvins,
    carbonConcentration,
    salinityCoefficient,
    henrysConstant,
    acidity,
    hydrogenIons,
  };
});
