import { defineStore } from "pinia";
import { ref } from "vue";

export const DataStore = defineStore("data", () => {
  // Environment input is an object with key properties
  // Ocean Conditions
  // - environment.oceanTemp: ocean temperature (°C)
  // - environment.stormSeverity: storm severity (0 to 1)
  // - environment.pH: ocean pH (acidity)
  // Land Use
  // - environment.logging, environment.agriculture, environment.sewage (0 to 1 scale)
  // Fishing
  // - environment.netFishing, environment.grouperFishing, environment.snapperFishing (0 to 1 scale)
  // Disease
  // - environment.blackBandDisease, environment.whiteBandDisease, environment.urchinDisease (0 to 1 scale)
  // Invasive Species (booleans for presence)
  // - environment.crownOfThorns, environment.redLionfish (true or false)

  //Disease

  //Keystone Species

  const path = "/src/games/CoralSimulation/images/";

  //Ocean Conditions
  const oceanTemp = ref({
    name: "Ocean Temperature (°C)",
    sliderValue: 27,
    sliderMin: 18,
    sliderMax: 36,
    sliderStep: 1,
  }); //°C 18-36 slider
  const stormSeverity = ref({
    name: "Storm Severity (%)",
    sliderValue: 20,
    sliderMin: 0,
    sliderMax: 100,
    sliderStep: 5,
  }); //% 0-100 slider
  const waterPH = ref({
    sliderValue: 8.1,
    sliderMin: 7.6,
    sliderMax: 8.6,
    sliderStep: 0.1,
  }); // (acidity) 7.6-8.6 slider

  const selectedYear = ref({
    name: "Current Year",
    sliderValue: 0,
    sliderMin: 0,
    sliderMax: 100,
    sliderStep: 1,
  }); // 0-100 slider

  const agriculture = ref({
    sliderValue: 0.5,
    sliderMin: 0,
    sliderMax: 1,
    sliderStep: 0.01,
  }); // 0-1 slider
  const sewage = ref({
    sliderValue: 0.5,
    sliderMin: 0,
    sliderMax: 1,
    sliderStep: 0.01,
  }); // 0-1 slider

  // Fishing
  const netFishing = ref({
    sliderValue: 0.5,
    sliderMin: 0,
    sliderMax: 1,
    sliderStep: 0.01,
  }); // 0-1 slider
  const grouperFishing = ref({
    sliderValue: 0.5,
    sliderMin: 0,
    sliderMax: 1,
    sliderStep: 0.01,
  }); // 0-1 slider
  const snapperFishing = ref({
    sliderValue: 0.5,
    sliderMin: 0,
    sliderMax: 1,
    sliderStep: 0.01,
  }); // 0-1 slider

  // Disease
  const blackBandDisease = ref({
    sliderValue: 0.5,
    sliderMin: 0,
    sliderMax: 1,
    sliderStep: 0.01,
  });
  const whiteBandDisease = ref({
    sliderValue: 0.5,
    sliderMin: 0,
    sliderMax: 1,
    sliderStep: 0.01,
  });
  const urchinDisease = ref({
    sliderValue: 0.5,
    sliderMin: 0,
    sliderMax: 1,
    sliderStep: 0.01,
  });

  // Invasive Species
  const crownOfThornsStarfish = ref(false);
  const redLionfish = ref(false);

  return {
    //logging,
    agriculture,
    sewage,
    //fishing,
    netFishing,
    grouperFishing,
    blackBandDisease,
    whiteBandDisease,

    oceanTemp,
    stormSeverity,
    waterPH,
    //waterSalinity,
    // crownOfThornsStarfish,
    // redLionfish,
    selectedYear,
    //organisms,
  };
});
