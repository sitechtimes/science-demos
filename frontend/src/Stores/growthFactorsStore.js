//This store is for storing functions to calculate various forms of data

import { defineStore } from "pinia";
import { populationStore } from "./populationStore";
import { ref, computed } from "vue";

export const growthFactorsStore = defineStore("growthFactorsStore", () => {
  const popStore = populationStore();

  const algaeStats = computed(() => {
    return {
      growthRate:
        2.1 * popStore.nutrientLoad * (0.5 + 0.5 * popStore.waterClarity),
      mortalityRate: 0.001,
      competitionFactor: 0,
      symbiosisFactor: 0,
    };
  });

  const spongeStats = computed(() => {
    return {
      growthRate:
        0.3 * (0.8 + 0.25 * popStore.nutrientLoad - popStore.sedimentLoad),
      mortalityRate: 0.002,
      competitionFactor: 0,
      symbiosisFactor: 0,
    };
  });

  const staghornCoralStats = computed(() => {
    return {
      growthRate:
        0.3 *
        (1 - popStore.coralStress) *
        popStore.waterTempEffect *
        popStore.pHImpact *
        popStore.waterClarity *
        (1 - 0.5 * popStore.sedimentLoad),
      mortalityRate: 0.002,
      bleachingSensitivity: 0.5,
      diseaseSusceptibility: 0,
    };
  });

  const starCoralStats = computed(() => {
    return {
      growthRate:
        0.07 *
        (1 - popStore.coralStress / 2) *
        popStore.waterTempEffect *
        popStore.pHImpact *
        popStore.waterClarity *
        (1 - 0.5 * popStore.sedimentLoad),
      mortalityRate: 0.0008,
      thermalTolerance: 0.5,
      acidificationResistance: 0,
    };
  });

  const urchinStats = ref({
    growthRate: 0.0005,
    mortalityRate: 0.2,
    diseaseSpreadFactor: 0,
    predationImpact: 0,
  });

  const parrotFishStats = computed(() => {
    return {
      growthRate: 0.001,
      mortalityRate: 0.0015 + 0 / 100, // 0 stands for fishing pressure
      grazingEfficiency: 0.094,
      spawningSuccess: 0,
    };
  });

  const angelFishStats = computed(() => {
    return {
      growthRate: 0.0011, // Sponge consumption efficiency
      mortalityRate: 0.0014 + (0.71 * 0) / 100, // 0 stands for fishing pressure
      habitatPreference: 0.02,
      larvalSurvival: 0,
    };
  });

  const seaTurtleStats = ref({
    growthRate: 0.0004, // Sponge grazing efficiency
    mortalityRate: 0.025 + (0.45 * 0) / 100, // 0 stands for fishing pressure
    nestingSuccess: 0,
    bycatchRisk: 0,
  });

  const grouperStats = computed(() => {
    const grouperFishingImpact = (0 + 1.6 * 0) / 800; //first 0 stands for fishing impact, second 0 stands for grouperfishing slider
    return {
      growthRate: 0.002,
      mortalityRate: 0.0004 + grouperFishingImpact,
      apexPredatorBonus: 0.12,
      nurseryHabitat: 0,
    };
  });

  const snapperStats = computed(() => {
    const snapperFishingImpact = (0 + 0.9 * 0) / 300; //first 0 stands for fishing impact, second 0 stands for snapperfishing slider
    return {
      growthRate: 0.00049,
      mortalityRate: 0.002 + snapperFishingImpact,
      schoolSizeEffect: 0.0542,
      reefComplexityFactor: 0,
    };
  });

  const lionfishStats = computed(() => {
    return {
      growthRate: 0.0015,
      mortalityRate: 0.1 + 0 / 300, //0 stands for fishing pressure
      preyNaivete: 0,
      habitatGeneralization: 0,
    };
  });

  const crownOfThornsSstats = computed(() => {
    return {
      growthRate: 0.011 * popStore.nutrientLoad, // Nutrient-driven outbreaks
      mortalityRate: 0.1,
      coralPreference: 0,
      larvalDispersal: 0,
    };
  });

  return {
    algaeStats,
    spongeStats,
    staghornCoralStats,
    starCoralStats,
    urchinStats,
    parrotFishStats,
    angelFishStats,
    seaTurtleStats,
    grouperStats,
    snapperStats,
    lionfishStats,
    crownOfThornsSstats,
  };
});
