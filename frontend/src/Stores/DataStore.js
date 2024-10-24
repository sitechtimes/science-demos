//This store is read only in terms of other stores. You shouldn't need to change anything here.

import { defineStore } from "pinia";
import { ref } from "vue";

export const DataStore = defineStore("data", () => {
  //Human activity
  const logging = ref(); //(runoff + eutrophication via soil erosion)
  const agriculture = ref(); //(runoff + eutrophication)
  const sewage = ref(); // (disease + eutrophication
  const fishing = ref();
  const netFishing = ref(); // (breaks coral / kills many other species with bycatch)

  //Disease
  const blackBandDisease = ref(false);
  const whiteBandDisease = ref(false);

  //Keystone Species
  const grouperSpecies = ref({
    population: 100, //placeholder
    species: "Keystone",
    info: "blah blah blah blah blah",
  });
  const snapperSpecies = ref({
    population: 100, //placeholder
    species: "Keystone",
    info: "blah blah blah blah blah",
  });
  const seaUrchinSpecies = ref({
    population: 100, //placeholder
    species: "Keystone",
    info: "blah blah blah blah blah",
  });

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
    name: "Water pH",
    sliderValue: 8.1,
    sliderMin: 7.6,
    sliderMax: 8.6,
    sliderStep: 0.1,
  }); // (acidity) 7.6-8.6 slider
  const waterSalinity = ref({
    name: "Water Salinity",
    sliderValue: 34.5,
    sliderMin: 33,
    sliderMax: 36,
    sliderStep: 0.1,
  }); // slider for salinity, 33-36. Used to adjust the carbon equations

  //invasive species
  const crownOfThornsStarfish = ref({
    population: 15,
    species: "Invasive",
    info: "blah blah blah blah blah",
    isPresent: false,
  });
  const redLionfish = ref({
    population: 20,
    species: "Invasive",
    info: "blah blah blah blah blah",
    isPresent: false,
  });

  const selectedYear = ref({
    name: "Current Year",
    sliderValue: 0,
    sliderMin: 0,
    sliderMax: 100,
    sliderStep: 1,
  });

  return {
    logging,
    agriculture,
    sewage,
    fishing,
    netFishing,
    blackBandDisease,
    whiteBandDisease,
    grouperSpecies,
    snapperSpecies,
    seaUrchinSpecies,
    oceanTemp,
    stormSeverity,
    waterPH,
    waterSalinity,
    crownOfThornsStarfish,
    redLionfish,
    selectedYear,
  };
});
