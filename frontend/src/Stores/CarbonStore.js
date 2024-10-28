//This store is purely for storing functions that calculate carbon in the water as well as pH

import { defineStore } from "pinia";
import { DataStore } from "./DataStore";
import { ref, computed } from "vue";

const dataStore = DataStore();

export const CarbonStore = defineStore("calculated", () => {
  const partialPressureCO2 = ref(356.8269697);

  //computed properties. They are read only and cannot be changed.
  const temperatureKelvins = computed(
    () => dataStore.oceanTemp.sliderValue + 273
  );
  const salinityCoefficient = computed(
    () => 0.0433 - 2.67 * Math.pow(10, -4) * temperatureKelvins.value
  );
  const salinityFactor = computed(
    () => (1 + salinityCoefficient.value) * dataStore.waterSalinity.sliderValue
  );
  // const henrysConstant = computed(
  //   () =>
  //     salinityFactor.value *
  //     12.59 *
  //     Math.pow(temperatureKelvins.value, -1.14) *
  //     Math.pow(10, -2700 / temperatureKelvins.value)
  // );

  const henrysConstant = computed(() => {
    const T = temperatureKelvins.value;
    const S = dataStore.waterSalinity.sliderValue;

    const KH = Math.exp(
      9345.17 / T -
        60.2409 +
        23.3585 * Math.log(T / 100) +
        S * (0.023517 - 0.00023656 * T + 0.0047036 * Math.pow(T / 100, 2))
    );

    console.log("Henry's constant (KH):", KH);
    return KH;
  });

  const carbonConcentration = computed(
    () => henrysConstant.value * (partialPressureCO2.value / 1e6)
  );
  const acidity = computed(() => {
    console.log("carbon =", carbonConcentration.value);
    const pK1 = 6.37;
    const K1 = Math.pow(10, -6.37);
    const pK2 = 10.33;
    const K2 = Math.pow(10, -pK2);
    const bicarbonateConcentration =
      (K1 * carbonConcentration.value) / (K2 + carbonConcentration.value);
    console.log("bicarb", bicarbonateConcentration);
    return (
      pK1 + Math.log10(bicarbonateConcentration / carbonConcentration.value)
    );
  });
  const hydrogenIons = computed(() => Math.pow(10, -acidity.value));

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
