//This store is for storing calculated results

import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";
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
      if (species.value.maxCapacity === Array) {
        species.value.maxCapacity.splice(1, species.value.population.length);
      }
    });
  };
  // Species objects and corresponding capacities
  const algae = ref({
    description: "blah blah blah blah blah",
    maxCapacity: 1500,
    population: [27],
  });

  const algaeCapacity = ref(1500);

  const algaePopulation = () => {
    let additivePop =
      algae.value.population[index.value] +
      statStore.algaeStats.growthRate *
        algae.value.population[index.value] *
        (1 - algae.value.population[index.value] / algaeCapacity.value);
    let subtractivePop =
      (statStore.algaeStats.mortalityRate *
        algae.value.population[index.value] *
        (spotlightParrotfish.value.population[index.value] +
          3 * longSpinedUrchin.value.population[index.value])) /
      4;
    let newPopulation = Math.min(
      additivePop - subtractivePop,
      algaeCapacity.value
    );
    console.log("ALGAE", newPopulation);
    algae.value.population.push(parseFloat(newPopulation));
    return newPopulation;
  };

  const sponge = ref({
    description: "blah blah blah blah blah",
    maxCapacity: [1100],
    population: [200],
  });

  const spongeCapacity = () => {
    let base =
      staghornCoral.value.population[index.value] +
      boulderStarCoral.value.population[index.value];
    sponge.value.maxCapacity.push(Math.max(base, 1));
    return base;
  };

  const spongePopulation = () => {
    let additivePop =
      sponge.value.population[index.value] +
      statStore.spongeStats.growthRate *
        sponge.value.population[index.value] *
        (1 -
          sponge.value.population[index.value] /
            sponge.value.maxCapacity[index.value]);
    let subtractivePop =
      (statStore.spongeStats.mortalityRate *
        sponge.value.population[index.value] *
        (queenAngelfish.value.population[index.value] +
          2 * hawksbillSeaTurtle.value.population[index.value])) /
      2;
    let newPopulation = Math.min(
      additivePop - subtractivePop,
      sponge.value.maxCapacity[index.value]
    );
    sponge.value.population.push(parseFloat(newPopulation));
    return newPopulation;
  };

  const staghornCoral = ref({
    description: "blah blah blah blah blah",
    maxCapacity: [1434],
    population: [21],
  });

  const staghornCoralCapacity = () => {
    const staghornSpace =
      1500 -
      (algae.value.population[index.value] +
        sponge.value.population[index.value] +
        boulderStarCoral.value.population[index.value]);
    staghornCoral.value.maxCapacity.push(
      parseFloat(Math.max(staghornSpace, 1))
    );
  };

  const staghornCoralPopulation = () => {
    let additivePop =
      staghornCoral.value.population[index.value] *
        (1 - whiteBandDisease.value) *
        (1 - coralBleaching.value / 2) +
      statStore.staghornCoralStats.growthRate *
        staghornCoral.value.population[index.value] *
        (1 - coralBleaching.value) *
        (1 -
          staghornCoral.value.population[index.value] /
            staghornCoral.value.maxCapacity[index.value]);
    let subtractivePop;

    if (crownOfThornsStarfish.value.population[index.value] > 0) {
      subtractivePop =
        statStore.staghornCoralStats.mortalityRate *
        staghornCoral.value.population[index.value] *
        (crownOfThornsStarfish.value.population[index.value] +
          (dataStore.stormSeverity.sliderValue / 100) *
            staghornCoral.value.population[index.value]);
    } else {
      subtractivePop =
        statStore.staghornCoralStats.mortalityRate *
        staghornCoral.value.population[index.value] *
        (dataStore.stormSeverity.sliderValue / 100) *
        staghornCoral.value.population[index.value];
    }

    let newPopulation = additivePop - subtractivePop;
    staghornCoral.value.population.push(
      parseFloat(
        Math.min(newPopulation, staghornCoral.value.maxCapacity[index.value])
      )
    );
    return newPopulation;
  };

  const boulderStarCoral = ref({
    description: "blah blah blah blah blah",
    maxCapacity: [1441],
    population: [28],
  });

  const boulderStarCoralCapacity = () => {
    let starCoralSpace =
      1500 -
      (algae.value.population[index.value] +
        boulderStarCoral.value.population[index.value] +
        staghornCoral.value.population[index.value]);
    boulderStarCoral.value.maxCapacity.push(Math.max(starCoralSpace, 1));
    return starCoralSpace;
  };

  const boulderStarCoralPopulation = () => {
    let additivePop =
      boulderStarCoral.value.population[index.value] *
        (1 - blackBandDisease.value) *
        (1 - starCoralBleaching.value / 2) +
      statStore.starCoralStats.growthRate *
        boulderStarCoral.value.population[index.value] *
        (1 - starCoralBleaching.value) *
        (1 -
          boulderStarCoral.value.population[index.value] /
            boulderStarCoral.value.maxCapacity[index.value]);
    let subtractivePop =
      statStore.starCoralStats.mortalityRate *
        boulderStarCoral.value.population[index.value] *
        crownOfThornsStarfish.value.population[index.value] +
      ((dataStore.stormSeverity.sliderValue / 100) *
        boulderStarCoral.value.population[index.value]) /
        5;
    let newPopulation = additivePop - subtractivePop;
    console.log("boulderStarCoral", additivePop, subtractivePop);
    boulderStarCoral.value.population.push(
      parseFloat(
        Math.min(newPopulation, boulderStarCoral.value.maxCapacity[index.value])
      )
    );
  };

  const longSpinedUrchin = ref({
    description: "blah blah blah blah blah",
    maxCapacity: [1200],
    population: [1160],
  });

  const longSpinedUrchinCapacity = () => {
    let urchinCapacity =
      (staghornCoral.value.population[index.value] +
        boulderStarCoral.value.population[index.value]) /
      3;
    longSpinedUrchin.value.maxCapacity.push(parseFloat(urchinCapacity));
    return urchinCapacity;
  };

  const longSpinedUrchinPopulation = () => {
    let additivePop =
      longSpinedUrchin.value.population[index.value] * (1 - 0 / 100) + // 0 stands for a disease slider
      statStore.urchinStats.growthRate *
        longSpinedUrchin.value.population[index.value] *
        algae.value.population[index.value];
    let subtractivePop =
      statStore.urchinStats.mortalityRate *
      longSpinedUrchin.value.population[index.value];
    console.log("URCHIN", additivePop, subtractivePop);
    let newPopulation = Math.min(
      additivePop - subtractivePop,
      longSpinedUrchin.value.maxCapacity[index.value]
    );
    longSpinedUrchin.value.population.push(parseFloat(newPopulation));
    return newPopulation;
  };

  const spotlightParrotfish = ref({
    description: "blah blah blah blah blah",
    maxCapacity: [825],
    population: [825],
  });

  const spotlightParrotfishCapacity = () => {
    let base =
      (staghornCoral.value.population[index.value] +
        boulderStarCoral.value.population[index.value]) /
      2;
    spotlightParrotfish.value.maxCapacity.push(Math.min(base, 450));
    return base;
  };

  const spotlightParrotfishPopulation = () => {
    let additivePop =
      spotlightParrotfish.value.population[index.value] +
      statStore.parrotFishStats.growthRate *
        spotlightParrotfish.value.population[index.value] *
        algae.value.population[index.value];
    let subtractivePop =
      statStore.parrotFishStats.mortalityRate *
        spotlightParrotfish.value.population[index.value] -
      (nassauGrouper.value.population[index.value] +
        yellowtailSnapper.value.population[index.value] +
        5 * redLionfish.value.population[index.value]) *
        spotlightParrotfish.value.population[index.value] *
        statStore.parrotFishStats.predationRate; // parrotfish predation rate doesnt exist??
    let newPopulation = Math.min(
      additivePop - subtractivePop,
      spotlightParrotfish.value.maxCapacity[index.value]
    );
    spotlightParrotfish.value.population.push(parseFloat(newPopulation));
    return newPopulation;
  };

  const queenAngelfish = ref({
    description: "blah blah blah blah blah",
    maxCapacity: [480],
    population: [480],
  });

  const queenAngelfishCapacity = () => {
    let base =
      (sponge.value.population[index.value] +
        staghornCoral.value.population[index.value] +
        boulderStarCoral.value.population[index.value]) /
      3;
    queenAngelfish.value.maxCapacity.push(base);
    return base;
  };

  const queenAngelfishPopulation = () => {
    let additivePop =
      queenAngelfish.value.population[index.value] +
      statStore.angelFishStats.growthRate *
        queenAngelfish.value.population[index.value] *
        sponge.value.population[index.value];
    let subtractivePop =
      statStore.angelFishStats.mortalityRate *
        queenAngelfish.value.population[index.value] +
      (nassauGrouper.value.population[index.value] +
        yellowtailSnapper.value.population[index.value] +
        6 * redLionfish.value.population[index.value]) *
        queenAngelfish.value.population[index.value] *
        statStore.angelFishStats.predationRate; // predation rate doesnt exist?
    let newPopulation = Math.min(
      additivePop - subtractivePop,
      queenAngelfish.value.maxCapacity[index.value]
    );
    console.log("ANGEL", additivePop, subtractivePop);
    queenAngelfish.value.population.push(parseFloat(newPopulation));
    return newPopulation;
  };

  const crownOfThornsStarfish = ref({
    description: "blah blah blah blah blah",
    maxCapacity: [0],
    population: [0],
  });

  const crownOfThornsCapacity = () => {
    let base =
      staghornCoral.value.population[index.value] +
      boulderStarCoral.value.population[index.value];
    crownOfThornsStarfish.value.maxCapacity.push(base);
    return base;
  };

  const crownOfThornsPopulation = () => {
    let additivePop =
      crownOfThornsStarfish.value.population[index.value] +
      statStore.crownOfThornsStats.growthRate *
        crownOfThornsStarfish.value.population[index.value] *
        (staghornCoral.value.population[index.value] +
          boulderStarCoral.value.population[index.value]);
    let subtractivePop =
      statStore.crownOfThornsStats.mortalityRate *
      crownOfThornsStarfish.value.population[index.value];
    let newPopulation = Math.min(
      additivePop - subtractivePop,
      crownOfThornsStarfish.value.maxCapacity[index.value]
    );
    crownOfThornsStarfish.value.population.push(parseFloat(newPopulation));
    return newPopulation;
  };

  const hawksbillSeaTurtle = ref({
    description: "blah blah blah blah blah",
    maxCapacity: [25],
    population: [25],
  });

  const hawksbillSeaTurtleCapacity = () => {
    let base =
      (sponge.value.population[index.value] +
        staghornCoral.value.population[index.value] +
        boulderStarCoral.value.population[index.value]) /
      10;
    hawksbillSeaTurtle.value.maxCapacity.push(Math.min(base, 40));
    return base;
  };

  const hawksbillSeaTurtlePopulation = () => {
    let additivePop =
      hawksbillSeaTurtle.value.population[index.value] +
      statStore.seaTurtleStats.growthRate *
        hawksbillSeaTurtle.value.population[index.value] *
        sponge.value.population[index.value];
    let subtractivePop =
      statStore.seaTurtleStats.mortalityRate *
      hawksbillSeaTurtle.value.population[index.value];
    let newPopulation = Math.min(
      additivePop - subtractivePop,
      hawksbillSeaTurtle.value.maxCapacity[index.value]
    );
    hawksbillSeaTurtle.value.population.push(parseFloat(newPopulation));
    return newPopulation;
  };

  const nassauGrouper = ref({
    description: "blah blah blah blah blah",
    maxCapacity: [48],
    population: [48],
  });

  const nassauGrouperCapacity = () => {
    let base =
      (sponge.value.population[index.value] +
        staghornCoral.value.population[index.value] +
        boulderStarCoral.value.population[index.value]) /
      10;
    nassauGrouper.value.maxCapacity.push(Math.min(base, 50));
    return base;
  };

  const nassauGrouperPopulation = () => {
    let additivePop =
      nassauGrouper.value.population[index.value] +
      statStore.grouperStats.growthRate *
        nassauGrouper.value.population[index.value] *
        (spotlightParrotfish.value.population[index.value] +
          queenAngelfish.value.population[index.value] +
          yellowtailSnapper.value.population[index.value] / 3);
    let subtractivePop =
      statStore.grouperStats.mortalityRate *
      nassauGrouper.value.population[index.value] *
      (1 + 0 / 100); //0 stands for fishing pressure slider thing
    let newPopulation = Math.min(
      additivePop - subtractivePop,
      nassauGrouper.value.maxCapacity[index.value]
    );
    nassauGrouper.value.population.push(parseFloat(newPopulation));
    return newPopulation;
  };

  const redLionfish = ref({
    description: "blah blah blah blah blah",
    maxCapacity: 100,
    population: [0],
  });

  const redLionfishCapacity = ref(100);

  const redLionfishPopulation = () => {
    let additivePop =
      redLionfish.value.population[index.value] +
      statStore.lionfishStats.growthRate *
        redLionfish.value.population[index.value] *
        (spotlightParrotfish.value.population[index.value] +
          queenAngelfish.value.population[index.value] +
          nassauGrouper.value.population[index.value] +
          yellowtailSnapper.value.population[index.value]);
    let subtractivePop =
      statStore.lionfishStats.mortalityRate *
      redLionfish.value.population[index.value];
    let newPopulation = Math.min(
      additivePop - subtractivePop,
      redLionfishCapacity.value
    );
    redLionfish.value.population.push(parseFloat(newPopulation));
    return newPopulation;
  };

  const yellowtailSnapper = ref({
    description: "blah blah blah blah blah",
    maxCapacity: [240],
    population: [240],
  });

  const yellowtailSnapperCapacity = () => {
    let base =
      (sponge.value.population[index.value] +
        staghornCoral.value.population[index.value] +
        boulderStarCoral.value.population[index.value]) /
      2;
    yellowtailSnapper.value.maxCapacity.push(Math.min(base, 400));
    return base;
  };

  const yellowtailSnapperPopulation = () => {
    let additivePop =
      yellowtailSnapper.value.population[index.value] +
      statStore.snapperStats.growthRate *
        yellowtailSnapper.value.population[index.value] *
        (spotlightParrotfish.value.population[index.value] +
          queenAngelfish.value.population[index.value]);
    let subtractivePop =
      statStore.snapperStats.mortalityRate *
      yellowtailSnapper.value.population[index.value] *
      (nassauGrouper.value.population[index.value] / 10 +
        redLionfish.value.population[index.value] / 5);
    let newPopulation = Math.min(
      additivePop - subtractivePop,
      yellowtailSnapper.value.maxCapacity[index.value]
    );
    yellowtailSnapper.value.population.push(parseFloat(newPopulation));
    return newPopulation;
  };

  // math vars

  const currentYear = ref(0); // wherever you trigger the simulation, please add a for loop to increment currentYear by 1
  const index = computed(() => {
    let previousYear;
    currentYear.value - 1 < 0
      ? (previousYear = 0)
      : (previousYear = currentYear.value - 1);
    return previousYear;
  });

  const totalOrganisms = computed(() => {
    return (
      algae.value.population[index.value] +
      boulderStarCoral.value.population[index.value] +
      crownOfThornsStarfish.value.population[index.value] +
      hawksbillSeaTurtle.value.population[index.value] +
      longSpinedUrchin.value.population[index.value] +
      nassauGrouper.value.population[index.value] +
      queenAngelfish.value.population[index.value] +
      redLionfish.value.population[index.value] +
      sponge.value.population[index.value] +
      spotlightParrotfish.value.population[index.value] +
      staghornCoral.value.population[index.value] +
      yellowtailSnapper.value.population[index.value]
    );
  });

  const finalPopulations = computed(() => {
    return {
      algae: algae.value.population[index.value],
      boulderStarCoral: boulderStarCoral.value.population[index.value],
      crownOfThornsStarfish:
        crownOfThornsStarfish.value.population[index.value],
      hawksbillSeaTurtle: hawksbillSeaTurtle.value.population[index.value],
      longSpinedUrchin: longSpinedUrchin.value.population[index.value],
      nassauGrouper: nassauGrouper.value.population[index.value],
      queenAngelfish: queenAngelfish.value.population[index.value],
      redLionfish: redLionfish.value.population[index.value],
      sponge: sponge.value.population[index.value],
      spotlightParrotfish: spotlightParrotfish.value.population[index.value],
      staghornCoral: staghornCoral.value.population[index.value],
      yellowtailSnapper: yellowtailSnapper.value.population[index.value],
    };
  });

  const populationDensities = computed(() => {
    return {
      hawksbillSeaTurtle:
        hawksbillSeaTurtle.value.population[index.value] / 1e3,
      nassauGrouper: nassauGrouper.value.population[index.value] / 1e3,
      queenAngelfish: queenAngelfish.value.population[index.value] / 2500,
      redLionfish: redLionfish.value.population[index.value] / 1e3,
      spotlightParrotfish:
        spotlightParrotfish.value.population[index.value] / 2500,
      yellowtailSnapper: yellowtailSnapper.value.population[index.value] / 1e3,
    };
  });

  const algalImpact = computed(() => {
    return (
      //(0.6 * textFields[3].obj.getValue() + // logging
      (0.3 * dataStore.agriculture.sliderValue) / 100 +
      (0.05 * dataStore.sewage.sliderValue) / 100 +
      (0.05 * dataStore.stormSeverity.sliderValue) / 100 //
    );
  });

  const coralHealthImpact = computed(() => {
    // calculations for coral health
    return (
      //0.2 * textFields[3].obj.getValue() + logging
      ((0.4 * dataStore.agriculture.sliderValue) / 100 +
        (0.3 * dataStore.sewage.sliderValue) / 100) /
        100 +
      0.1
    );
  });

  const coralStress = computed(() => {
    // calculate coral stress
    return (
      (algalImpact.value +
        coralHealthImpact.value +
        //algaePositions / 100 + // no clue what this is
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
      (sedimentLoad.value +
        nutrientLoad.value +
        //currentStressLevel / 100 + //current stress level doesnt exist
        3 * (1 - waterClarity.value / 100)) /
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
      (sedimentLoad.value +
        nutrientLoad.value +
        //currentCoralStressLevel * 0.8 + //current coral stress doesnt eist
        2 * (1 - waterClarity.value / 100)) /
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
      (sedimentLoad.value +
        nutrientLoad.value +
        //currentCoralStressLevel / 100 + //current coral stress level doesnt exist
        3 * (1 - waterClarity.value / 100)) /
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
    const sedimentStress = sedimentLoad.value * 1.2; // 20% more sediment sensitive
    const combinedStress =
      (sedimentStress +
        nutrientLoad.value +
        //currentCoralStressLevel / 100 + // current coral stress level doesnt exist
        2 * (1 - waterClarity.value / 100)) /
      10;

    // Bleaching probability calculation
    const bleachingProbability =
      (0.5 + 0.5 * combinedStress) * Math.min(thermalStressFactor, 1);

    return Math.min(bleachingProbability, 1); // Maximum 100% bleaching
  });

  watch(currentYear, (newYear, oldYear) => {
    if (oldYear >= newYear) {
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
        species.value.population.pop();
        if (species.value.maxCapacity === Array) {
          species.value.maxCapacity.pop();
        }
      });
    } else {
      //populations
      algaePopulation();
      spongePopulation();
      staghornCoralPopulation();
      boulderStarCoralPopulation();
      longSpinedUrchinPopulation();
      spotlightParrotfishPopulation();
      queenAngelfishPopulation();
      crownOfThornsPopulation();
      hawksbillSeaTurtlePopulation();
      nassauGrouperPopulation();
      redLionfishPopulation();
      yellowtailSnapperPopulation();
      //capacities
      spongeCapacity();
      staghornCoralCapacity();
      boulderStarCoralCapacity();
      longSpinedUrchinCapacity();
      spotlightParrotfishCapacity();
      queenAngelfishCapacity();
      crownOfThornsCapacity();
      hawksbillSeaTurtleCapacity();
      nassauGrouperCapacity();
      yellowtailSnapperCapacity();
    }

    console.log("POPULATIONS:");
    console.log("algaepop", algae.value.population);
    console.log("spongepop", sponge.value.population);
    console.log("staghornpop", staghornCoral.value.population);
    console.log("boulderpop", boulderStarCoral.value.population);
    console.log("urchinpop", longSpinedUrchin.value.population);
    console.log("parrotfishpop", spotlightParrotfish.value.population);
    console.log("angelpop", queenAngelfish.value.population);
    console.log("crownpop", crownOfThornsStarfish.value.population);
    console.log("turtlepop", hawksbillSeaTurtle.value.population);
    console.log("grouperpop", nassauGrouper.value.population);
    console.log("lionfishpop", redLionfish.value.population);
    console.log("snapperpop", yellowtailSnapper.value.population);

    console.log("CAPACITIES:");
    console.log("algaecap", algae.value.maxCapacity);
    console.log("spongecap", sponge.value.maxCapacity);
    console.log("staghorncap", staghornCoral.value.maxCapacity);
    console.log("bouldercap", boulderStarCoral.value.maxCapacity);
    console.log("urchincap", longSpinedUrchin.value.maxCapacity);
    console.log("parrotfishcap", spotlightParrotfish.value.maxCapacity);
    console.log("angelcap", queenAngelfish.value.maxCapacity);
    console.log("crowncap", crownOfThornsStarfish.value.maxCapacity);
    console.log("turtlecap", hawksbillSeaTurtle.value.maxCapacity);
    console.log("groupercap", nassauGrouper.value.maxCapacity);
    console.log("lionfishcap", redLionfish.value.maxCapacity);
    console.log("snappercap", yellowtailSnapper.value.maxCapacity);
    console.log("year", index.value);

    console.log("ENV VARS");
    console.log("algalImpact", algalImpact.value);
    console.log("coralHealthImpact", coralHealthImpact.value);
    console.log("coralStress", coralStress.value);
    console.log("sedimentLoad", sedimentLoad.value);
    console.log("nutrientLoad", nutrientLoad.value);
    console.log("waterClarity", waterClarity.value);
    console.log("waterTempEffect", waterTempEffect.value);
    console.log("pHImpact", pHImpact.value);
    console.log("whiteBandDisease", whiteBandDisease.value);
    console.log("blackBandDisease", blackBandDisease.value);
    console.log("coralBleaching", coralBleaching.value);
    console.log("starCoralBleaching", starCoralBleaching.value);
    console.log("totalOrganisms", totalOrganisms.value);
    console.log("finalPopulations", finalPopulations.value);
    console.log("populationDensities", populationDensities.value);
    console.log("END OF YEAR");
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
    //species capacity calculation functions
    algaeCapacity,
    redLionfishCapacity,
    boulderStarCoralCapacity,
    hawksbillSeaTurtleCapacity,
    crownOfThornsCapacity,
    nassauGrouperCapacity,
    queenAngelfishCapacity,
    spongeCapacity,
    spotlightParrotfishCapacity,
    yellowtailSnapperCapacity,
    staghornCoralCapacity,
    longSpinedUrchinCapacity,
    //species population calculation functions
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
    resetSimulation,
  };
});
