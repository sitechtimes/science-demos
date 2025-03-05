//This store is for storing calculated results

import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { DataStore } from "./DataStore";

export const populationStore = defineStore("populationStore", () => {
  const dataStore = DataStore();

  // Species objects and corresponding capacities
  const algae = ref({
    population: 27,
    img: path + "algae.png",
    description: "blah blah blah blah blah",
    history: {},
    maxCapacity: [],
    population: [] || 1,
  });
  const boulderStarCoral = ref({
    population: 28,
    img: path + "boulderStarCoral.png",
    description: "blah blah blah blah blah",
    history: {},
    maxCapacity: [],
    population: [] || 1,
  });
  const staghornCoral = ref({
    population: 21,
    img: path + "staghornCoral.png",
    description: "blah blah blah blah blah",
    history: {},
    maxCapacity: [],
    population: [] || 1,
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
    population: 0,
    img: path + "crownOfThornsStarfish.png",
    description: "blah blah blah blah blah",
    history: {},
    maxCapacity: [],
    population: [] || 1,
  });

  const crownOfThornsCapacity = computed(() => {
    let base = staghornCoralPopulation[index] + starCoralPopulation[index];
    crownOfThornsCapacity.push(base.toFixed(4));
    return base;
  });

  const hawksbillSeaTurtle = ref({
    population: 25,
    img: path + "hawksbillSeaTurtle.png",
    description: "blah blah blah blah blah",
    history: {},
    maxCapacity: [],
    population: [] || 1,
  });
  const longSpinedUrchin = ref({
    population: 1160,
    img: path + "longSpinedUrchin.png",
    description: "blah blah blah blah blah",
    history: {},
    maxCapacity: [],
    population: [] || 1,
  });
  const nassauGrouper = ref({
    population: 48,
    img: path + "nassauGrouper.png",
    description: "blah blah blah blah blah",
    history: {},
    maxCapacity: [],
    population: [] || 1,
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
    population: 480,
    img: path + "queenAngelfish.png",
    description: "blah blah blah blah blah",
    history: {},
    maxCapacity: [],
    population: [] || 1,
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
    population: 0,
    img: path + "redLionfish.png",
    description: "blah blah blah blah blah",
    history: {},
    maxCapacity: [],
    population: [] || 1,
  });
  const sponge = ref({
    population: 11,
    img: path + "sponge.png",
    description: "blah blah blah blah blah",
    history: {},
    maxCapacity: [],
    population: [] || 1,
  });

  const spongeCapacity = computed(() => {
    let base = staghornCoralPopulation[index] + starCoralPopulation[index];
    sponge.value.maxCapacity.push(Math.max(base, 1).toFixed(4));
    return base;
  });

  const spotlightParrotfish = ref({
    population: 825,
    img: path + "spotlightParrotfish.png",
    description: "blah blah blah blah blah",
    history: {},
    maxCapacity: [],
    population: [] || 1,
  });

  const spotlightParrotfishCapacity = computed(() => {
    let base =
      (staghornCoralPopulation[index] + starCoralPopulation[index]) / 2;
    spotlightParrotfish.value.maxCapacity.push(Math.min(base, 450).toFixed(4));
    return base;
  });

  const yellowtailSnapper = ref({
    population: 240,
    img: path + "yellowtailSnapper.png",
    description: "blah blah blah blah blah",
    history: {},
    maxCapacity: [],
    population: [] || 1,
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
    return currentYear.value - 1 || 0;
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
      (threshold) => dataStore.waterpH.sliderValue < threshold
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
    populationDensities,
    index,
    totalOrganisms,
    algalImpact,
    waterTempEffect,
    pHImpact,
  };
});
