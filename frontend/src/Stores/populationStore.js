//This store is for storing calculated results

import { defineStore } from "pinia";

export const populationStore = defineStore("populationStore", () => {
  const species = ref({
<<<<<<< Updated upstream
    algae: {
      population: 27,
      img: path + 'algae.png',
      description: "blah blah blah blah blah",
      history: {}
    },
    boulderStarCoral: {
      population: 28, 
      img: path + 'boulderStarCoral.png',
      description: "blah blah blah blah blah",
      history: {}
    },
    crownOfThornsStarfish: {
      population: 0, 
      img: path + 'crownOfThornsStarfish.png',
      description: "blah blah blah blah blah",
      history: {}
    },
    hawksbillSeaTurtle: {
      population: 25, 
      img: path + 'hawksbillSeaTurtle.png',
      description: "blah blah blah blah blah",
      history: {}
    },
    longSpinedUrchin: {
      population: 1160, 
      img: path + 'longSpinedUrchin.png',
      description: "blah blah blah blah blah",
      history: {}
    },
    nassauGrouper: {
      population: 48, 
      img: path + 'nassauGrouper.png',
      description: "blah blah blah blah blah",
      history: {}
    },
    queenAngelfish: {
      population: 480, 
      img: path + 'queenAngelfish.png',
      description: "blah blah blah blah blah",
      history: {}
    },
    redLionfish: {
      population: 0, 
      img: path + 'redLionfish.png',
      description: "blah blah blah blah blah",
      history: {}
    },
    sponge: {
      population: 11, 
      img: path + 'sponge.png',
      description: "blah blah blah blah blah",
      history: {}
    },
    spotlightParrotfish: {
      population: 825, 
      img: path + 'spotlightParrotfish.png',
      description: "blah blah blah blah blah",
      history: {}
    },
    staghornCoral: {
    population: 21, 
    img: path + 'staghornCoral.png',
    description: "blah blah blah blah blah",
    history: {}
    },
    yellowtailSnapper: {
      population: 240, 
      img: path + 'yellowtailSnapper.png',
      description: "blah blah blah blah blah",
      history: {}
    }
  })

  function getValue(type) {
    return species[type]
  }
  function setValue(type, value) {
    species[type] = value
  }
=======
    staghornCoral: {
      population: 20,
      species: "Invasive",
      info: "blah blah blah blah blah",
      isPresent: false,
      history: {}
    },
    redLionfish: {
      population: 20,
      species: "Invasive",
      info: "blah blah blah blah blah",
      isPresent: false,
      history: {}
    }
  })
>>>>>>> Stashed changes
});
