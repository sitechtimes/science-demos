//This store is for storing calculated results

import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { DataStore } from "./DataStore";

export const populationStore = defineStore("populationStore", () => {
  const dataStore = DataStore();

  // Species objects and corresponding capacities
  const algae = ref({
    img: path + "algae.png",
    description: "blah blah blah blah blah",
    history: {},
    maxCapacity: [],
    population: [27],
  });
  const boulderStarCoral = ref({
    img: path + "boulderStarCoral.png",
    description: "blah blah blah blah blah",
    history: {},
    maxCapacity: [],
    population: [28],
  });
  const staghornCoral = ref({
    img: path + "staghornCoral.png",
    description: "blah blah blah blah blah",
    history: {},
    maxCapacity: [],
    population: [21],
  });

  const coralCapacity = computed(() => {
    let base =
      1500 -
      (algae.population[index] +
        boulderStarCoral.population[index] +
        staghornCoral.population[index]);
    staghornCoral.value.maxCapacity.push(1 * Math.max(base, 1).toFixed(4));
    starCoral.value.maxCapacity.push(1 * Math.max(base, 1).toFixed(4));
    algae.value.maxCapacity.push(1500);

    // i got lazy
    lionfishCapacity.push(100);

    return base;
  });

  const crownOfThornsStarfish = ref({
    img: path + "crownOfThornsStarfish.png",
    description: "blah blah blah blah blah",
    history: {},
    maxCapacity: [],
    population: [0],
  });

  const crownOfThornsCapacity = computed(() => {
    let base = staghornCoralPopulation[index] + starCoralPopulation[index];
    crownOfThornsCapacity.push(base.toFixed(4));
    return base;
  });

  const hawksbillSeaTurtle = ref({
    img: path + "hawksbillSeaTurtle.png",
    description: "blah blah blah blah blah",
    history: {},
    maxCapacity: [],
    population: [25],
  });
  const longSpinedUrchin = ref({
    img: path + "longSpinedUrchin.png",
    description: "blah blah blah blah blah",
    history: {},
    maxCapacity: [],
    population: [1160],
  });
  const nassauGrouper = ref({
    img: path + "nassauGrouper.png",
    description: "blah blah blah blah blah",
    history: {},
    maxCapacity: [],
    population: [48],
  });

  const nassauGrouperCapacity = computed(() => {
    let base =
      (spongePopulation[index] +
        staghornCoralPopulation[index] +
        starCoralPopulation[index]) /
      10;
    grouperCapacity.push(Math.min(base, 50).toFixed(4));
    return base;
  });

  const queenAngelfish = ref({
    img: path + "queenAngelfish.png",
    description: "blah blah blah blah blah",
    history: {},
    maxCapacity: [],
    population: [480],
  });

  const queenAngelfishCapacity = computed(() => {
    let base =
      (spongePopulation[index] +
        staghornCoralPopulation[index] +
        starCoralPopulation[index]) /
      3;
    queenAngelfish.value.maxCapacity.push(base).toFixed(4);
    return base;
  });

  const redLionfish = ref({
    img: path + "redLionfish.png",
    description: "blah blah blah blah blah",
    history: {},
    maxCapacity: [],
    population: [0],
  });
  const sponge = ref({
    img: path + "sponge.png",
    description: "blah blah blah blah blah",
    history: {},
    maxCapacity: [],
    population: [11],
  });

  const spongeCapacity = computed(() => {
    let base = staghornCoralPopulation[index] + starCoralPopulation[index];
    sponge.value.maxCapacity.push(Math.max(base, 1).toFixed(4));
    return base;
  });

  const spotlightParrotfish = ref({
    img: path + "spotlightParrotfish.png",
    description: "blah blah blah blah blah",
    history: {},
    maxCapacity: [],
    population: [825],
  });

  const spotlightParrotfishCapacity = computed(() => {
    let base =
      (staghornCoralPopulation[index] + starCoralPopulation[index]) / 2;
    spotlightParrotfish.value.maxCapacity.push(Math.min(base, 450).toFixed(4));
    return base;
  });

  const yellowtailSnapper = ref({
    img: path + "yellowtailSnapper.png",
    description: "blah blah blah blah blah",
    history: {},
    maxCapacity: [],
    population: [240],
  });

  const yellowtailSnapperCapacity = computed(() => {
    let base =
      (spongePopulation[index] +
        staghornCoralPopulation[index] +
        starCoralPopulation[index]) /
      2;
    snapperCapacity.push(Math.min(base, 400).toFixed(4));
    return base;
  });

  // math vars

  const currentYear = ref(0); // wherever you trigger the simulation, please add a for loop to increment currentYear by 1
  const index = computed(() => {
    return currentYear.value - 2 || 0;
  });

  const totalOrganisms = computed(() => {
    return (
      algae.population[index] +
      boulderStarCoral.population[index] +
      crownOfThornsStarfish.population[index] +
      hawksbillSeaTurtle.population[index] +
      longSpinedUrchin.population[index] +
      nassauGrouper.population[index] +
      queenAngelfish.population[index] +
      redLionfish.population[index] +
      sponge.population[index] +
      spotlightParrotfish.population[index] +
      staghornCoral.population[index] +
      yellowtailSnapper.population[index]
    );
  });

  const finalPopulations = computed(() => {
    return {
      algae: algae.value.population[index],
      boulderStarCoral: boulderStarCoral.value.population[index],
      crownOfThornsStarfish: crownOfThornsStarfish.value.population[index],
      hawksbillSeaTurtle: hawksbillSeaTurtle.value.population[index],
      longSpinedUrchin: longSpinedUrchin.value.population[index],
      nassauGrouper: nassauGrouper.value.population[index],
      queenAngelfish: queenAngelfish.value.population[index],
      redLionfish: redLionfish.value.population[index],
      sponge: sponge.value.population[index],
      spotlightParrotfish: spotlightParrotfish.value.population[index],
      staghornCoral: staghornCoral.value.population[index],
      yellowtailSnapper: yellowtailSnapper.value.population[index],
    };
  });

  const populationDensities = computed(() => {
    return {
      hawksbillSeaTurtle: hawksbillSeaTurtle.value.population[index] / 1e3,
      nassauGrouper: nassauGrouper.value.population[index] / 1e3,
      queenAngelfish: queenAngelfish.value.population[index] / 2500,
      redLionfish: redLionfish.value.population[index] / 1e3,
      spotlightParrotfish: spotlightParrotfish.value.population[index] / 2500,
      yellowtailSnapper: yellowtailSnapper.value.population[index] / 1e3,
    };
  });

  const algalImpact = computed(() => {
    return (
      (0.6 * textFields[3].obj.getValue() +
        0.3 * textFields[5].obj.getValue() +
        0.05 * textFields[4].obj.getValue() +
        0.05 * textFields[0].obj.getValue()) /
      100
    );
  });

  const waterTempEffect = computed(() => {
    return [
      0.08, 0.13, 0.21, 0.32, 0.46, 0.6, 0.75, 0.88, 0.97, 1, 0.97, 0.88, 0.75,
      0.6, 0.46, 0.32, 0.21, 0.13, 0.08,
    ][Math.round(dataStore.oceanTemp.sliderValue - 18)];
  });

  const pHImpact = computed(() => {
    const thresholds = [7.7, 7.8, 7.9, 8.0, 8.1, Infinity]; // Upper bounds
    const impactValues = [0.05, 0.11, 0.23, 0.42, 0.69, 1]; // Corresponding values

    const index = thresholds.findIndex(
      (threshold) => dataStore.waterPH.sliderValue < threshold
    );
    return impactValues[index];
  });

  return {
    // species objects
    algae,
    boulderStarCoral,
    crownOfThornsStarfish,
    hawksbillSeaTurtle,
    longSpinedUrchin,
    nassauGrouper,
    queenAngelfish,
    redLionfish,
    sponge,
    spotlightParrotfish,
    staghornCoral,
    yellowtailSnapper,
    //computed species vars
    coralCapacity,
    crownOfThornsCapacity,
    nassauGrouperCapacity,
    queenAngelfishCapacity,
    spongeCapacity,
    spotlightParrotfishCapacity,
    yellowtailSnapperCapacity,
    // math vars
    currentYear,
    index,
    algalImpact,
    waterTempEffect,
    pHImpact,
    // here you go angelina :D
    totalOrganisms,
    finalPopulations,
    populationDensities,
  };
});
