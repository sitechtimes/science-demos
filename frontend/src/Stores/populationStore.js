//This store is for storing calculated results

import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { DataStore } from "./DataStore";
import { growthFactorsStore } from "./growthFactorsStore";

export const populationStore = defineStore("populationStore", () => {
  const dataStore = DataStore();
  const statStore = growthFactorsStore();

  // function

  const resetSimulation = () => {
    currentYear.value = 0;
    algae.value.population.splice(1, algae.value.population.length);
    boulderStarCoral.value.population.splice(
      1,
      boulderStarCoral.value.population.length
    );
    crownOfThornsStarfish.value.population.splice(
      1,
      crownOfThornsStarfish.value.population.length
    );
    hawksbillSeaTurtle.value.population.splice(
      1,
      hawksbillSeaTurtle.value.population.length
    );
    longSpinedUrchin.value.population.splice(
      1,
      longSpinedUrchin.value.population.length
    );
    nassauGrouper.value.population.splice(
      1,
      nassauGrouper.value.population.length
    );
    queenAngelfish.value.population.splice(
      1,
      queenAngelfish.value.population.length
    );
    redLionfish.value.population.splice(1, redLionfish.value.population.length);
    sponge.value.population.splice(1, sponge.value.population.length);
    spotlightParrotfish.value.population.splice(
      1,
      spotlightParrotfish.value.population.length
    );
    staghornCoral.value.population.splice(
      1,
      staghornCoral.value.population.length
    );
    yellowtailSnapper.value.population.splice(
      1,
      yellowtailSnapper.value.population.length
    );
  };
  // Species objects and corresponding capacities
  const algae = ref({
    description: "blah blah blah blah blah",
    maxCapacity: 1500,
    population: [27],
  });

  const algaeCapacity = ref(1500);

  const algaePopulation = computed(() => {
    let additivePop =
      algae.value.population[index] +
      statStore.algaeStats.growthRate *
        algae.value.population[index] *
        (1 - algae.value.population[index] / algaeCapacity.value);
    let subtractivePop =
      (statStore.algaeStats.mortalityRate *
        algae.value.population[index] *
        (spotlightParrotfish.value.population[index] +
          3 * longSpinedUrchin.value.population[index])) /
      4;
    let newPopulation = additivePop - subtractivePop;
    algae.value.population.push(
      parseFloat(newPopulation.toFixed(decimalPrecision))
    );
    return newPopulation;
  });

  const sponge = ref({
    description: "blah blah blah blah blah",
    maxCapacity: [],
    population: [11],
  });

  const spongeCapacity = computed(() => {
    let base = staghornCoralPopulation[index] + starCoralPopulation[index];
    sponge.value.maxCapacity.push(Math.max(base, 1).toFixed(4));
    return base;
  });

  const spongePopulation = computed(() => {
    let additivePop =
      sponge.value.population[index] +
      statStore.spongeStats.growthRate *
        sponge.value.population[index] *
        (1 - sponge.value.population[index] / spongeCapacity.value);
    let subtractivePop =
      (statStore.spongeStats.mortalityRate *
        sponge.value.population[index] *
        (queenAngelfish.value.population[index] +
          2 * hawksbillSeaTurtle.value.population[index])) /
      2;
    let newPopulation = additivePop - subtractivePop;
    sponge.value.population.push(parseFloat(newPopulation.toFixed(4)));
    return newPopulation;
  });

  const staghornCoral = ref({
    description: "blah blah blah blah blah",
    maxCapacity: [],
    population: [21],
  });

  const staghornCoralPopulation = computed(() => {
    currentSpeciesParams = speciesGrowthParams.staghorn;
    currentPopulation = staghornCoralPopulation[previousYearIndex];
    newPopulation =
      currentPopulation *
        (1 - calculateWhiteBandDisease()) *
        (1 - calculateCoralBleaching() / 2) +
      currentSpeciesParams.growthRate *
        currentPopulation *
        (1 - calculateCoralBleaching()) *
        (1 - currentPopulation / staghornCarryingCapacity[previousYearIndex]) -
      (currentSpeciesParams.mortalityRate *
        currentPopulation *
        crownOfThornsPopulation[previousYearIndex] +
        calculateStormSeverity() * currentPopulation);
    staghornCoralPopulation.push(
      parseFloat(newPopulation.toFixed(decimalPrecision))
    );

    let additivePop = staghornCoral.value.population[index];
  });

  const boulderStarCoral = ref({
    description: "blah blah blah blah blah",
    maxCapacity: [],
    population: [28],
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
    description: "blah blah blah blah blah",
    maxCapacity: [],
    population: [0],
  });

  const crownOfThornsCapacity = computed(() => {
    let base = staghornCoralPopulation[index] + starCoralPopulation[index];
    crownOfThornsCapacity.push(base.toFixed(4));
    return base;
  });

  const hawksbillSeaTurtle = ref({
    description: "blah blah blah blah blah",
    maxCapacity: [],
    population: [25],
  });
  const longSpinedUrchin = ref({
    description: "blah blah blah blah blah",
    maxCapacity: [],
    population: [1160],
  });
  const nassauGrouper = ref({
    description: "blah blah blah blah blah",
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
    description: "blah blah blah blah blah",
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
    description: "blah blah blah blah blah",
    maxCapacity: [],
    population: [0],
  });

  const spotlightParrotfish = ref({
    description: "blah blah blah blah blah",
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
    description: "blah blah blah blah blah",
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
      //(0.6 * textFields[3].obj.getValue() + // logging
      (0.3 * dataStore.agriculture.sliderValue +
        0.05 * dataStore.sewage.sliderValue +
        0.05 * dataStore.stormSeverity.sliderValue) / //
      100
    );
  });

  const coralHealthImpact = computed(() => {
    // calculations for coral health
    return (
      //0.2 * textFields[3].obj.getValue() + logging
      (0.4 * dataStore.agriculture.sliderValue +
        0.3 * dataStore.sewage.sliderValue) /
        100 +
      0.1
    );
  });

  const coralStress = computed(() => {
    // calculate coral stress
    return (
      (algalImpact.value +
        coralHealthImpact.value +
        algaePositions / 100 + // no clue what this is
        nutrientLoad.value / 100 +
        3 * (1 - waterTempEffect.value) +
        3 * (1 - pHImpact.value)) /
      10
    );
  });

  const sedimentLoad = computed(() => {
    return 500 * algalImpact.value;
  });

  const nutrientLoad = computed(() => {
    return 40 * coralHealthImpact.value;
  });

  const waterClarity = computed(() => {
    return (
      100 *
      (1 -
        (0.5 * algalImpact.value +
          0.4 * coralHealthImpact.value +
          (0.1 * dataStore.stormSeverity.sliderValue) / 100))
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
    coralHealthImpact,
    coralStress,
    sedimentLoad,
    nutrientLoad,
    waterClarity,
    waterTempEffect,
    pHImpact,
    // here you go angelina :D
    totalOrganisms,
    finalPopulations,
    populationDensities,
  };
});
