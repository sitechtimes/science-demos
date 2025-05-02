import { defineStore } from "pinia";
import { ref } from "vue";

export const waterTestConditions = defineStore("waterTest", () => {
  // conditions for user to change
  const waterUse = ref({
    name: "water use type",
    inputSelected: "Warm Aquatic Life",
    inputList: [
      "Cold Aquatic Life",
      "Warm Aquatic Life",
      "Recreation",
      "Drinking Water",
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
  });
  const mineDrainage = ref({
    // % of activity
    name: "Mine Drainage (%)",
    sliderValue: 0,
    sliderMin: 0,
    sliderMax: 100,
    sliderStep: 1,
  });
  const deforestation = ref({
    // % of watershed area
    name: "Deforestation (%)",
    sliderValue: 0,
    sliderMin: 0,
    sliderMax: 100,
    sliderStep: 1,
  });
  const untreatedSewage = ref({
    // % that inputs into water
    name: "Sewage (%)",
    sliderValue: 0,
    sliderMin: 0,
    sliderMax: 100,
    sliderStep: 1,
  });

  return {
    waterUse,
    waterTemp,
    acidRain,
    mineDrainage,
    deforestation,
    untreatedSewage,
  };
});
