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

  const algaePopulation = () => {};

  const sponge = ref({
    description: "blah blah blah blah blah",
    maxCapacity: [1100],
    population: [200],
  });

  const spongeCapacity = () => {};

  const spongePopulation = () => {};

  const staghornCoral = ref({
    description: "blah blah blah blah blah",
    maxCapacity: [1434],
    population: [21],
  });

  const staghornCoralCapacity = () => {};

  const staghornCoralPopulation = () => {};

  const boulderStarCoral = ref({
    description: "blah blah blah blah blah",
    maxCapacity: [1441],
    population: [28],
  });

  const boulderStarCoralCapacity = () => {};

  const boulderStarCoralPopulation = () => {};

  const longSpinedUrchin = ref({
    description: "blah blah blah blah blah",
    maxCapacity: [1200],
    population: [1160],
  });

  const longSpinedUrchinCapacity = () => {};

  const longSpinedUrchinPopulation = () => {};

  const spotlightParrotfish = ref({
    description: "blah blah blah blah blah",
    maxCapacity: [825],
    population: [825],
  });

  const spotlightParrotfishCapacity = () => {};

  const spotlightParrotfishPopulation = () => {};

  const queenAngelfish = ref({
    description: "blah blah blah blah blah",
    maxCapacity: [480],
    population: [480],
  });

  const queenAngelfishCapacity = () => {};

  const queenAngelfishPopulation = () => {};

  const crownOfThornsStarfish = ref({
    description: "blah blah blah blah blah",
    maxCapacity: [0],
    population: [0],
  });

  const crownOfThornsCapacity = () => {};

  const crownOfThornsPopulation = () => {};

  const hawksbillSeaTurtle = ref({
    description: "blah blah blah blah blah",
    maxCapacity: [25],
    population: [25],
  });

  const hawksbillSeaTurtleCapacity = () => {};

  const hawksbillSeaTurtlePopulation = () => {};

  const nassauGrouper = ref({
    description: "blah blah blah blah blah",
    maxCapacity: [48],
    population: [48],
  });

  const nassauGrouperCapacity = () => {};

  const nassauGrouperPopulation = () => {};

  const redLionfish = ref({
    description: "blah blah blah blah blah",
    maxCapacity: 100,
    population: [0],
  });

  const redLionfishCapacity = ref(100);

  const redLionfishPopulation = () => {};

  const yellowtailSnapper = ref({
    description: "blah blah blah blah blah",
    maxCapacity: [240],
    population: [240],
  });

  const yellowtailSnapperCapacity = () => {};

  const yellowtailSnapperPopulation = () => {};

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

  const algalImpact = computed(() => {});

  const coralHealthImpact = computed(() => {});

  const coralStress = computed(() => {});

  const sedimentLoad = computed(() => {});

  const nutrientLoad = computed(() => {});

  const waterClarity = computed(() => {});

  const waterTempEffect = computed(() => {
    // maybe this could work already for new model
    return [
      0.08, 0.13, 0.21, 0.32, 0.46, 0.6, 0.75, 0.88, 0.97, 1, 0.97, 0.88, 0.75,
      0.6, 0.46, 0.32, 0.21, 0.13, 0.08,
    ][Math.round(dataStore.oceanTemp.sliderValue - 18)];
  });

  const pHImpact = computed(() => {
    // maybe this could work already for new model
    const thresholds = [7.7, 7.8, 7.9, 8.0, 8.1, Infinity]; // Upper bounds
    const impactValues = [0.05, 0.11, 0.23, 0.42, 0.69, 1]; // Corresponding values

    const index = thresholds.findIndex(
      (threshold) => dataStore.waterPH.sliderValue < threshold
    );
    return impactValues[index]; // already is a decimal
  });

  const whiteBandDisease = computed(() => {});

  const blackBandDisease = computed(() => {});

  const coralBleaching = computed(() => {});

  const starCoralBleaching = computed(() => {});

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
        if (species.value.maxCapacity.length >= 1) {
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
