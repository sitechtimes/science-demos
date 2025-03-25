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
    [
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
    ].forEach((species) => {
      species.value.population.splice(1, species.value.population.length);
      species.value.maxCapacity.splice(1, species.value.population.length);
    });
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
    let base =
      staghornCoral.value.population[index] +
      boulderStarCoral.value.population[index];
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

  const staghornCoralCapacity = computed(() => {
    const staghornSpace =
      1500 -
      (algae.value.population[index] +
        sponge.value.population[index] +
        boulderStarCoral.value.population[index]);
    staghornCoral.value.maxCapacity.push(
      parseFloat(Math.max(staghornSpace, 1).toFixed(4))
    );
  });

  const staghornCoralPopulation = computed(() => {
    let newPopulation =
      staghornCoral.value.population[index] *
        (1 - whiteBandDisease) *
        (1 - coralBleaching / 2) +
      statStore.staghornCoralStats.growthRate *
        staghornCoral.value.population[index] *
        (1 - coralBleaching) *
        (1 -
          staghornCoral.value.population[index] /
            staghornCoral.value.maxCapacity[index]) -
      (statStore.staghornCoralStats.mortalityRate *
        staghornCoral.value.population[index] *
        crownOfThornsStarfish.value.population[index] +
        stormSeverity * staghornCoral.value.population[index]);
    staghornCoral.value.population.push(parseFloat(newPopulation.toFixed(4)));
    return newPopulation;
  });

  const boulderStarCoral = ref({
    description: "blah blah blah blah blah",
    maxCapacity: [],
    population: [28],
  });

  const boulderStarCoralCapacity = computed(() => {
    let starCoralSpace =
      1500 -
      (algae.population[index] +
        boulderStarCoral.population[index] +
        staghornCoral.population[index]);
    starCoral.value.maxCapacity.push(
      1 * Math.max(starCoralSpace, 1).toFixed(4)
    );
    return starCoralSpace;
  });

  const boulderStarCoralPopulation = computed(() => {
    let newPopulation =
      boulderStarCoral.value.population[index] *
        (1 - blackBandDisease) *
        (1 - starCoralBleaching / 2) +
      statStore.starCoralStats.growthRate *
        boulderStarCoral.value.population[index] *
        (1 - starCoralBleaching) *
        (1 -
          boulderStarCoral.value.population[index] /
            boulderStarCoral.value.maxCapacity[index]) -
      (statStore.starCoralStats.mortalityRate *
        boulderStarCoral.value.population[index] *
        crownOfThornsStarfish.value.population[index] +
        (stormSeverity * boulderStarCoral.value.population[index]) / 5);
    boulderStarCoral.value.population.push(
      parseFloat(newPopulation.toFixed(4))
    );
  });

  const longSpinedUrchin = ref({
    description: "blah blah blah blah blah",
    maxCapacity: [],
    population: [1160],
  });

  const longSpinedUrchinCapacity = computed(() => {
    let urchinCapacity =
      (staghornCoral.value.population[index] +
        boulderStarCoral.value.population[index]) /
      3;
    longSpinedUrchin.value.maxCapacity.push(
      parseFloat(urchinCapacity.toFixed(4))
    );
    return urchinCapacity;
  });

  const longSpinedUrchinPopulation = computed(() => {
    let additivePop =
      longSpinedUrchin.value.population[index] * (1 - 0 / 100) + // 0 stands for a disease slider
      statStore.urchinStats.growthRate *
        longSpinedUrchin.value.population[index] *
        algae.value.population[index];
    let subtractivePop =
      statStore.urchinStats.mortalityRate *
      longSpinedUrchin.value.population[index];

    let newPopulation = additivePop - subtractivePop;
    longSpinedUrchin.value.population.push(
      parseFloat(newPopulation.toFixed(4))
    );
    return newPopulation;
  });

  const spotlightParrotfish = ref({
    description: "blah blah blah blah blah",
    maxCapacity: [],
    population: [825],
  });

  const spotlightParrotfishCapacity = computed(() => {
    let base =
      (staghornCoral.value.population[index] +
        boulderStarCoral.value.population[index]) /
      2;
    spotlightParrotfish.value.maxCapacity.push(Math.min(base, 450).toFixed(4));
    return base;
  });

  const spotlightParrotfishPopulation = computed(() => {
    let additivePop =
      spotlightParrotfish.value.population +
      statStore.parrotFishStats.growthRate *
        currentPopulation *
        algae.value.population[index];
    let subtractivePop =
      statStore.parrotFishStats.mortalityRate *
        spotlightParrotfish.value.population[index] -
      (nassauGrouper.value.population[index] +
        yellowtailSnapper.value.population[index] +
        5 * redLionfish.value.population[index]) *
        spotlightParrotfish.value.population[index] *
        statStore.parrotFishStats.predationRate;
    let newPopulation = additivePop - subtractivePop;
    spotlightParrotfish.value.population.push(
      parseFloat(newPopulation.toFixed(4))
    );
    return newPopulation;
  });

  const queenAngelfish = ref({
    description: "blah blah blah blah blah",
    maxCapacity: [],
    population: [480],
  });

  const queenAngelfishCapacity = computed(() => {
    let base =
      (sponge.value.population[index] +
        staghornCoral.value.population[index] +
        boulderStarCoral.value.population[index]) /
      3;
    queenAngelfish.value.maxCapacity.push(base).toFixed(4);
    return base;
  });

  const queenAngelfishPopulation = computed(() => {
    let additivePop =
      queenAngelfish.value.population[index] +
      statStore.queenAngelfishStats.growthRate *
        queenAngelfish.value.population[index] *
        sponge.value.population[index];
    let subtractivePop =
      statStore.queenAngelfishStats.mortalityRate *
        queenAngelfish.value.population[index] -
      (nassauGrouper.value.population[index] +
        yellowtailSnapper.value.population[index] +
        6 * redLionfish.value.population[index]) *
        queenAngelfish.value.population[index] *
        statStore.queenAngelfishStats.predationRate;
    let newPopulation = additivePop - subtractivePop;
    queenAngelfish.value.population.push(parseFloat(newPopulation.toFixed(4)));
    return newPopulation;
  });

  const crownOfThornsStarfish = ref({
    description: "blah blah blah blah blah",
    maxCapacity: [],
    population: [0],
  });

  const crownOfThornsCapacity = computed(() => {
    let base =
      staghornCoral.value.population[index] +
      boulderStarCoral.value.population[index];
    crownOfThornsStarfish.value.maxCapacity.push(base.toFixed(4));
    return base;
  });

  const crownOfThornsPopulation = computed(() => {
    let additivePop =
      crownOfThornsStarfish.value.population[index] +
      statStore.crownOfThornsStats.growthRate *
        crownOfThornsStarfish.value.population[index] *
        (staghornCoral.value.population[index] +
          boulderStarCoral.value.population[index]);
    let subtractivePop =
      statStore.crownOfThornsStats.mortalityRate *
      crownOfThornsStarfish.value.population[index];
    let newPopulation = additivePop - subtractivePop;
    crownOfThornsStarfish.value.population.push(
      parseFloat(newPopulation.toFixed(4))
    );
    return newPopulation;
  });

  const hawksbillSeaTurtle = ref({
    description: "blah blah blah blah blah",
    maxCapacity: [],
    population: [25],
  });

  const hawksbillSeaTurtleCapacity = computed(() => {
    let base =
      (sponge.value.population[index] +
        staghornCoral.value.population[index] +
        boulderStarCoral.value.population[index]) /
      10;
    hawksbillSeaTurtle.value.maxCapacity.push(Math.min(base, 40).toFixed(4));
    return base;
  });

  const hawksbillSeaTurtlePopulation = computed(() => {
    let additivePop =
      hawksbillSeaTurtle.value.population[index] +
      statStore.hawksbillSeaTurtleStats.growthRate *
        hawksbillSeaTurtle.value.population[index] *
        sponge.value.population[index];
    let subtractivePop =
      statStore.hawksbillSeaTurtleStats.mortalityRate *
      hawksbillSeaTurtle.value.population[index];
    let newPopulation = additivePop - subtractivePop;
    hawksbillSeaTurtle.value.population.push(
      parseFloat(newPopulation.toFixed(4))
    );
    return newPopulation;
  });

  const nassauGrouper = ref({
    description: "blah blah blah blah blah",
    maxCapacity: [],
    population: [48],
  });

  const nassauGrouperCapacity = computed(() => {
    let base =
      (sponge.value.population[index] +
        staghornCoral.value.population[index] +
        boulderStarCoral.value.population[index]) /
      10;
    nassauGrouper.value.capacity.push(Math.min(base, 50).toFixed(4));
    return base;
  });

  const nassauGrouperPopulation = computed(() => {
    let additivePop =
      nassauGrouper.value.population[index] +
      statStore.grouperStats.growthRate *
        nassauGrouper.value.population[index] *
        (parrotFish.value.population[index] +
          queenAngelfish.value.population[index] +
          yellowtailSnapper.value.population[index] / 3);
    let subtractivePop =
      statStore.grouperStats.mortalityRate *
      nassauGrouper.value.population[index] *
      (1 + 0 / 100); //0 stands for fishing pressure slider thing
    let newPopulation = additivePop - subtractivePop;
    nassauGrouper.value.population.push(parseFloat(newPopulation.toFixed(4)));
    return newPopulation;
  });

  const redLionfish = ref({
    description: "blah blah blah blah blah",
    maxCapacity: 100,
    population: [0],
  });

  const redLionfishCapacity = ref(100);

  const redLionfishPopulation = computed(() => {
    let additivePop =
      redLionfish.value.population[index] +
      statStore.redLionfishStats.growthRate *
        redLionfish.value.population[index] *
        (parrotFish.value.population[index] +
          queenAngelfish.value.population[index] +
          nassauGrouper.value.population[index] +
          yellowtailSnapper.value.population[index]);
    let subtractivePop =
      statStore.redLionfishStats.mortalityRate *
      redLionfish.value.population[index];
    let newPopulation = additivePop - subtractivePop;
    redLionfish.value.population.push(parseFloat(newPopulation.toFixed(4)));
    return newPopulation;
  });

  const yellowtailSnapper = ref({
    description: "blah blah blah blah blah",
    maxCapacity: [],
    population: [240],
  });

  const yellowtailSnapperCapacity = computed(() => {
    let base =
      (sponge.value.population[index] +
        staghornCoral.value.population[index] +
        boulderStarCoral.value.population[index]) /
      2;
    yellowtailSnapper.value.capacity.push(Math.min(base, 400).toFixed(4));
    return base;
  });

  const yellowtailSnapperPopulation = computed(() => {
    let additivePop =
      yellowtailSnapper.value.population[index] +
      statStore.snapperStats.growthRate *
        yellowtailSnapper.value.population[index] *
        (spotlightParrotfish.value.population[index] +
          queenAngelfish.value.population[index]);
    let subtractivePop =
      statStore.snapperStats.mortalityRate *
      yellowtailSnapper.value.population[index] *
      (nassauGrouper.value.population[index] / 10 +
        redLionfish.value.population[index] / 5);
    let newPopulation = additivePop - subtractivePop;
    yellowtailSnapper.value.population.push(
      parseFloat(newPopulation.toFixed(4))
    );
    return newPopulation;
  });

  // math vars

  const currentYear = ref(0); // wherever you trigger the simulation, please add a for loop to increment currentYear by 1
  const index = computed(() => {
    let previousYear = currentYear.value - 2;
    previousYear < 0 ? (previousYear = 0) : previousYear;
    return previousYear;
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

  const whiteBandDisease = computed(() => {
    // Calculate disease prevalence based on environmental stress
    const baseStressLevel =
      (sedimentLoad +
        nutrientLoad +
        currentStressLevel / 100 + //current stress level doesnt exist
        3 * (1 - waterClarity)) /
      10;

    // Temperature-dependent outbreak probability
    const temperatureFactor =
      Math.exp(dataStore.oceanTemp.sliderValue - 27) / 700;

    // Combine factors with current disease status
    const diseasePrevalence =
      (0.6 + 0.4 * baseStressLevel) *
      Math.min(temperatureFactor, 1) *
      (dataStore.whiteBandDisease.sliderValue / 100);

    return Math.min(diseasePrevalence, 1); // Cap at 100% prevalence
  });

  const blackBandDisease = computed(() => {
    // Base stress calculation combines chronic environmental factors
    const environmentalStress =
      (sedimentLoad +
        nutrientLoad +
        currentCoralStressLevel * 0.8 + //current coral stress doesnt eist
        2 * (1 - waterClarity)) /
      10;

    // Temperature modulates disease progression rate
    const thermalEffect = Math.exp(dataStore.oceanTemp.sliderValue - 27) / 1500;

    // Combine factors with human-controlled disease presence
    const diseaseSpread =
      (0.6 + 0.4 * environmentalStress) *
      Math.min(thermalEffect, 1) *
      (dataStore.blackBandDisease.sliderValue / 100);

    return Math.min(diseaseSpread, 1); // Maximum 100% prevalence
  });

  const coralBleaching = computed(() => {
    // Calculate thermal stress component
    const thermalStressExponent = dataStore.oceanTemp.sliderValue - 27;
    const thermalStressFactor = Math.exp(thermalStressExponent) / 700;

    // Combine environmental stress factors
    const environmentalStress =
      (sedimentLoad +
        nutrientLoad +
        currentCoralStressLevel / 100 + //current coral stress level doesnt exist
        3 * (1 - waterClarity)) /
      10;

    // Calculate bleaching probability with temperature emphasis
    const bleachingProbability =
      (0.6 + 0.4 * environmentalStress) * Math.min(thermalStressFactor, 1);

    return Math.min(bleachingProbability, 1); // Cap at 100% bleaching
  });

  const starCoralBleaching = computed(() => {
    // Star corals have higher thermal tolerance but are more sediment-sensitive
    const thermalStressExponent = dataStore.oceanTemp.sliderValue - 28; // 28°C baseline
    const thermalStressFactor = Math.exp(thermalStressExponent) / 1500; // Slower rise than staghorn

    // Environmental stress components
    const sedimentStress = sedimentLoad * 1.2; // 20% more sediment sensitive
    const combinedStress =
      (sedimentStress +
        nutrientLoad +
        currentCoralStressLevel / 100 + // current coral stress level doesnt exist
        2 * (1 - waterClarity)) /
      10;

    // Bleaching probability calculation
    const bleachingProbability =
      (0.5 + 0.5 * combinedStress) * Math.min(thermalStressFactor, 1);

    return Math.min(bleachingProbability, 1); // Maximum 100% bleaching
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
    //computed species capacities
    algaeCapacity,
    boulderStarCoralCapacity,
    hawksbillSeaTurtleCapacity,
    crownOfThornsCapacity,
    nassauGrouperCapacity,
    queenAngelfishCapacity,
    spongeCapacity,
    spotlightParrotfishCapacity,
    yellowtailSnapperCapacity,
    redLionfishCapacity,
    staghornCoralCapacity,
    longSpinedUrchinCapacity,
    //computed species populations
    algaePopulation,
    spongePopulation,
    staghornCoralPopulation,
    boulderStarCoralPopulation,
    longSpinedUrchinPopulation,
    spotlightParrotfishPopulation,
    queenAngelfishPopulation,
    crownOfThornsPopulation,
    hawksbillSeaTurtlePopulation,
    nassauGrouperPopulation,
    redLionfishPopulation,
    yellowtailSnapperPopulation,
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
    whiteBandDisease,
    blackBandDisease,
    coralBleaching,
    starCoralBleaching,
    // here you go angelina :D
    totalOrganisms,
    finalPopulations,
    populationDensities,
  };
});
