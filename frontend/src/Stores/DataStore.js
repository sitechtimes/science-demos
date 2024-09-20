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
    defaultValue: 1,
    sliderValue: 1,
    sliderMin: 18,
    sliderMax: 36,
    sliderStep: 1,
  }); //°C 18-36 slider
  const stormSeverity = ref({
    defaultValue: 1,
    sliderValue: 1,
    sliderMin: 0,
    sliderMax: 100,
    sliderStep: 1,
  }); //% 0-100 slider
  const WaterPH = ref({
    defaultValue: 1,
    sliderValue: 1,
    sliderMin: 7.6,
    sliderMax: 8.6,
    sliderStep: 1,
  }); // (acidity) 7.6-8.6 slider

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
    WaterPH,
    crownOfThornsStarfish,
    redLionfish,
  };
});
