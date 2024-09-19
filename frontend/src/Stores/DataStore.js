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
  const blackBandDisease = ref();
  const whiteBandDisease = ref();

  //Keystone Species
  const grouperSpecies = ref();
  const snapperSpecies = ref();
  const seaUrchinSpecies = ref();

  //Ocean Conditions
  const oceanTemp = ref(); //°C 18-36 slider
  const stormSeverity = ref(); //% 0-100 slider
  const WaterPH = ref(); // (acidity) 7.6-8.6 slider

  //invasive species
  const crownOfThornsStarfish = ref(false);
  const redLionfish = ref(false);

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
