import { defineStore } from "pinia";
import { ref, computed } from "vue";
import epaCompliance from "@/components/WaterTest/inputCalculations";

export const waterTestConditions = defineStore("waterTest", () => {
  // conditions for user to change
  const waterUse = ref({
    name: "water use type",
    inputSelected: { name: "Warm Aquatic Life", value: "warmAquaticLife" },
    inputList: [
      { name: "Cold Aquatic Life", value: "coldAquaticLife" },
      { name: "Warm Aquatic Life", value: "warmAquaticLife" },
      { name: "Recreation", value: "recreationWater" },
      { name: "Drinking Water", value: "drinkingWater" },
    ],
  });
  const waterTemp = ref({
    name: "Water Temperature (°C)",
    sliderValue: 24,
    sliderMin: 0, // lowest range should be -2?
    sliderMax: 40,
    sliderStep: 1,
    tooltip: "desginate the water temperature. ",
  }); //°C slider

  const acidRain = ref({
    // % of area affected
    name: "Acid Rain (%)",
    sliderValue: 0,
    sliderMin: 0,
    sliderMax: 100,
    sliderStep: 1,
    tooltip: "select amount of acid rain in percent. ",
  });
  const mineDrainage = ref({
    // % of activity
    name: "Mine Drainage (%)",
    sliderValue: 0,
    sliderMin: 0,
    sliderMax: 100,
    sliderStep: 1,
    tooltip: "select amount of mine drainage in percent. ",
  });
  const deforestation = ref({
    // % of watershed area
    name: "Deforestation (%)",
    sliderValue: 0,
    sliderMin: 0,
    sliderMax: 100,
    sliderStep: 1,
    tooltip: "select amount of deforestation in percent. ",
  });
  const untreatedSewage = ref({
    // % that inputs into water
    name: "Sewage (%)",
    sliderValue: 0,
    sliderMin: 0,
    sliderMax: 100,
    sliderStep: 1,
    tooltip: "select amount of sewage input into the water in percent. ",
  });
  const agricultureRunoff = ref({
    // % that inputs into water
    name: "Agricultural Runoff (%)",
    sliderValue: 0,
    sliderMin: 0,
    sliderMax: 100,
    sliderStep: 1,
    tooltip:
      "select amount of agricultural runoff into the water in percent. this contributes to nutrient amounts. ",
  });
  const compliance = computed(() =>
    epaCompliance(
      waterUse.value.inputSelected.value,
      waterTemp.value.sliderValue,
      acidRain.value.sliderValue,
      mineDrainage.value.sliderValue,
      deforestation.value.sliderValue,
      untreatedSewage.value.sliderValue,
      agricultureRunoff.value.sliderValue
    )
  );

  return {
    waterUse,
    waterTemp,
    acidRain,
    mineDrainage,
    deforestation,
    untreatedSewage,
    agricultureRunoff,
    compliance,
  };
});
