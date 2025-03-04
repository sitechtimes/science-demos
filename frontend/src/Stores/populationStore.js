//This store is for storing calculated results

import { defineStore } from "pinia";

export const populationStore = defineStore("populationStore", () => {

    const algae = ref({
      population: 27,
      img: path + 'algae.png',
      description: "blah blah blah blah blah",
      history: {},
      maxCapacity: [],
      population: [] || 1
    })
    const boulderStarCoral = ref({
      population: 28, 
      img: path + 'boulderStarCoral.png',
      description: "blah blah blah blah blah",
      history: {},
      maxCapacity: [],
      population: [] || 1
    })
    const crownOfThornsStarfish = ref({
      population: 0, 
      img: path + 'crownOfThornsStarfish.png',
      description: "blah blah blah blah blah",
      history: {},
      maxCapacity: [],
      population: [] || 1
    })
    const hawksbillSeaTurtle = ref({
      population: 25, 
      img: path + 'hawksbillSeaTurtle.png',
      description: "blah blah blah blah blah",
      history: {},
      maxCapacity: [],
      population: [] || 1
    })
    const longSpinedUrchin = ref({
      population: 1160, 
      img: path + 'longSpinedUrchin.png',
      description: "blah blah blah blah blah",
      history: {},
      maxCapacity: [],
      population: [] || 1
    })
    const nassauGrouper = ref({
      population: 48, 
      img: path + 'nassauGrouper.png',
      description: "blah blah blah blah blah",
      history: {},
      maxCapacity: [],
      population: [] || 1
    })
    const queenAngelfish = ref({
      population: 480, 
      img: path + 'queenAngelfish.png',
      description: "blah blah blah blah blah",
      history: {},
      maxCapacity: [],
      population: [] || 1
    })
    const redLionfish = ref({
      population: 0, 
      img: path + 'redLionfish.png',
      description: "blah blah blah blah blah",
      history: {},
      maxCapacity: [],
      population: [] || 1
    })
    const sponge = ref({
      population: 11, 
      img: path + 'sponge.png',
      description: "blah blah blah blah blah",
      history: {},
      maxCapacity: [],
      population: [] || 1
    })
    const spotlightParrotfish = ref({
      population: 825, 
      img: path + 'spotlightParrotfish.png',
      description: "blah blah blah blah blah",
      history: {},
      maxCapacity: [],
      population: [] || 1
    })
    const staghornCoral = ref({
    population: 21, 
    img: path + 'staghornCoral.png',
    description: "blah blah blah blah blah",
    history: {},
    maxCapacity: [],
    population: [] || 1
    })
    const yellowtailSnapper= ref({
      population: 240, 
      img: path + 'yellowtailSnapper.png',
      description: "blah blah blah blah blah",
      history: {},
      maxCapacity: [],
      population: [] || 1
    })

    return {
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
        yellowtailSnapper
    };
});
