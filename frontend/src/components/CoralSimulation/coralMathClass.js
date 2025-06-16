class Organism {
    constructor(initialPopulation, maxCapacity) {
      this.population = [initialPopulation]; 
      this.capacity = [maxCapacity]; 
    }
  
    updatePopulation(growthRate) {
      this.population.push(growthRate);
    }
  
    getCurrentPopulation() {
      return this.population[this.population.length - 1];
    }
  
    getCurrentCapacity() {
      return this.capacity[this.capacity.length - 1];
    }
  }
  
  class Algae extends Organism {
    constructor() {
      super(400, 1500); 
    }
  }
  
  class Sponge extends Organism {
    constructor() {
      super(170, 0); 
    }
  }
  
  class Coral extends Organism {
    constructor(initialPopulation, maxCapacity) {
      super(initialPopulation, maxCapacity);
    }
  }
  
  class Fish extends Organism {
    constructor(initialPopulation, maxCapacity) {
      super(initialPopulation, maxCapacity);
    }
  }
  
  class Parrotfish extends Fish {
    constructor() {
      super(165, 0);
    }
  }
  
  class Angelfish extends Fish {
    constructor() {
      super(135, 0);
    }
  }
  
  class SeaCreature extends Organism {
    constructor(initialPopulation, maxCapacity) {
      super(initialPopulation, maxCapacity);
    }
  }
  
  class SeaUrchin extends SeaCreature {
    constructor() {
      super(145, 0); 
    }
  }
  
  class CrownOfThorns extends SeaCreature {
    constructor() {
      super(0, 0); 
    }
  }
  
  class StaghornCoral extends Coral {
    constructor() {
      super(315, 0); 
    }
  }
  
  class StarCoral extends Coral {
    constructor() {
      super(425, 0); 
    }
  }
  
  export {
    Organism,
    Algae,
    Sponge,
    Coral,
    Fish,
    Parrotfish,
    Angelfish,
    SeaCreature,
    SeaUrchin,
    CrownOfThorns,
    StaghornCoral,
    StarCoral
  };