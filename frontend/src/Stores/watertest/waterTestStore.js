import { defineStore } from "pinia";
import { ref } from "vue";

export const waterTestConditions = defineStore("waterTest", () => {
  /* 
select type of water use
Agricultural runoff (% of land using fertilizers): 
Water temperature (°C, 0-40): 
  acid_rain = float(input("Acid rain contribution (% of area affected): "))
    mine_drainage = float(input("Acid mine drainage (% activity): "))
    ph = calculate_ph(acid_rain, mine_drainage)
    logging = float(input("Logging/deforestation (% of watershed area): "))
    turbidity = calculate_turbidity(logging) // gets sediment runoff due to less roots
    sewage = float(input("Untreated sewage input (% into water): "))
*/

  // water conditions for user to change
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
    sliderMin: 0,
    sliderMax: 40,
    sliderStep: 1,
  }); //°C slider
  const stormSeverity = ref({
    name: "Storm Severity (%)",
    sliderValue: 20,
    sliderMin: 0,
    sliderMax: 100,
    sliderStep: 5,
  }); //% 0-100 slider
  const waterPH = ref({
    name: "Water pH",
    sliderValue: 8.1,
    sliderMin: 7.6,
    sliderMax: 8.6,
    sliderStep: 0.1,
  }); // (acidity) 7.6-8.6 slider
  const waterSalinity = ref({
    name: "Water Salinity",
    sliderValue: 8.1,
    sliderMin: 33,
    sliderMax: 36,
    sliderStep: 0.1,
  });

  return {
    logging,
    agriculture,
    sewage,
    fishing,
    netFishing,
    blackBandDisease,
    whiteBandDisease,
    oceanTemp,
    stormSeverity,
    waterPH,
    waterSalinity,
  };
});
