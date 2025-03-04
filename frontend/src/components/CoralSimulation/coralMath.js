// make function shorter
// inputs -> current slider values
// outputs -> organism populations for this year (push into), current environments

import {Algae, Sponge, Parrotfish, Angelfish, SeaUrchin, CrownOfThorns, StaghornCoral, StarCoral} from './coralMathClass.js';

let CoralReef = function () {
  this.algae = new Algae();
  this.sponge = new Sponge();
  this.staghornCoral = new StaghornCoral();
  this.starCoral = new StarCoral();
  this.parrotfish = new Parrotfish();
  this.angelfish = new Angelfish();
  this.seaUrchin = new SeaUrchin(); 
  this.crownOfThorns = new CrownOfThorns(); 

  function advanceYear() {
    currentYear++;
    
    this.algae.updatePopulation();
    this.sponge.updatePopulation();
    this.staghornCoral.updatePopulation();
    this.starCoral.updatePopulation();
    this.parrotfish.updatePopulation();
    this.angelfish.updatePopulation();
    this.seaUrchin.updatePopulation(); 
    this.crownOfThorns.updatePopulation();

    // Update capacities if needed
    updateCapacities();
    drawGraphs();
  }

  function restartGame() {
    // reset everything
    if (
      ((currentYear = 0),
        resetPopulationValues(),
        updateSimulationInfo())
    ) {
      let currentTime;
      0.1 < ((currentTime = new Date().getTime()) - currentTimeElapsed) / 1e3 && 0.1, //checking if 0.1 is less than the elapsed time
        currentTimeElapsed = currentTime;
    }
  }

  let initialize = !((r = this).init = function () {

    totalPopulationValues = [0.21, 0.28, 0.11, 0.27, 8.25, 5.4, 2.4, 0.48, 11.6, 0.25, 1, 5];
    algaePositions = currentYear = 0
    simulationInfoMax = 685
    simulationInfoMin = 655

    initialPopulationValues = {
      parrotfish: this.partofish.population,
      angelfish: this.angelfish.population,
      turtle: this.turtle.population,
      grouper: this.grouper.population,
      snapper: this.snapper.population,
      lionfish: this.lionfish.population,
    }

    resetPopulationValues(),
      updateGraph();
  });

  let healthSummary = "";

  function updateSimulationInfo() {
    let healthSummary = "<center><b>Reef conditions</b></center>";
    healthSummary += "<br>Storm severity: " + textFields[0].obj.getValue() + "%";
    healthSummary += "<br>Ocean temperature: " + oceanTemperature + " °C";

    if (isReefHealthy()) {
      healthSummary += "Coral reef is healthy, with no bleaching or disease. Fish diversity is high. ";
    } else {
      assessCoralCover();
      assessDiseases();
      assessFishDiversity();
    }

    healthSummary += "</b>";

    function isReefHealthy() {
      return (
        25 <= oceanTemperature && oceanTemperature <= 29 &&
        7.9 <= textFields[2].obj.getValue() &&
        0 == textFields[9].obj.getValue() &&
        calculateCoralStress() < 0.1 &&
        400 < calculateTotalFishSpecies() &&
        40 < staghornCoralPopulation[stormSeverity] + starCoralPopulation[stormSeverity]
      );
    }

    function assessCoralCover() {
      const totalCoral = staghornCoralPopulation[stormSeverity] + starCoralPopulation[stormSeverity];
      if (totalCoral >= 40) {
        healthSummary += "Coral cover is high. ";
      } else if (totalCoral >= 20) {
        healthSummary += "Coral cover is medium. ";
      } else {
        healthSummary += "Coral cover is low. ";
      }
    }
  }

  function resetPopulationValues() {
    // Reset all population values and initialize with starter values
    currentYear = 0;
    totalPopulationValues = [];

    const initialPopulations = {
      algae: 400,
      sponge: 170,
      staghornCoral: 315,
      starCoral: 425,
      seaUrchin: 145, // Updated to use the new class
      parrotfish: 165,
      angelfish: 135,
      turtle: 25,
      grouper: 16,
      snapper: 120,
      lionfish: 0,
      crownOfThorns: 0 // Updated to use the new class
    };

    const populations = {};
    const covers = {};
    const capacities = {};

    for (const [key, value] of Object.entries(initialPopulations)) {
      populations[key + 'Population'] = [value];
      covers[key + 'Cover'] = [];
      capacities[key + 'Capacity'] = [];
    }

    // Update lionfish and crown of thorns based on checkbox status
    const lastIndex = domElements.checkBox1.getStatus() ? 1 : 0;
    const currentPopulation = domElements.checkBox2.getStatus() ? 1 : 0;

    populations.lionfishPopulation.push((5 * lastIndex).toFixed(4));
    populations.crownOfThornsPopulation.push((5 * currentPopulation).toFixed(4));

    totalPopulationValues.push(...Object.values(populations));

  }

  function updateCapacities(lastIndex) {
    // calculations for capacities
    let algaeCapacity, spongeCapacity;
    lastIndex = algaePopulation.length - 1
    maxAlgaeCapacity.push(1500),
      spongeCapacity.push(1 * Math.max(staghornCoralPopulation[lastIndex] + starCoralPopulation[lastIndex], 1).toFixed(4)),
      (algaeCapacity = 1500 - (algaePopulation[lastIndex] + spongePopulation[lastIndex] + starCoralPopulation[lastIndex])),
      staghornCoralCapacity.push(1 * Math.max(algaeCapacity, 1).toFixed(4)),
      (algaeCapacity = 1500 - (algaePopulation[lastIndex] + spongePopulation[lastIndex] + staghornCoralPopulation[lastIndex])),
      starCoralCapacity.push(1 * Math.max(algaeCapacity, 1).toFixed(4)),
      seaUrchinCapacity.push(1 * ((staghornCoralPopulation[lastIndex] + starCoralPopulation[lastIndex]) / 3).toFixed(4)),
      parrotfishCapacity.push(1 * Math.min((staghornCoralPopulation[lastIndex] + starCoralPopulation[lastIndex]) / 2, 450).toFixed(4)),
      angelfishCapacity.push(1 * ((spongePopulation[lastIndex] + staghornCoralPopulation[lastIndex] + starCoralPopulation[lastIndex]) / 3).toFixed(4)),
      turtleCapacity.push(1 * Math.min((spongePopulation[lastIndex] + staghornCoralPopulation[lastIndex] + starCoralPopulation[lastIndex]) / 10, 40).toFixed(4)),
      grouperCapacity.push(1 * Math.min((spongePopulation[lastIndex] + staghornCoralPopulation[lastIndex] + starCoralPopulation[lastIndex]) / 10, 50).toFixed(4)),
      snapperCapacity.push(1 * Math.min((spongePopulation[lastIndex] + staghornCoralPopulation[lastIndex] + starCoralPopulation[lastIndex]) / 2, 400).toFixed(4)),
      lionfishCapacity.push(100),
      crownOfThornsCapacity.push(1 * (staghornCoralPopulation[lastIndex] + starCoralPopulation[lastIndex]).toFixed(4));
  }

  function calculateAlgalImpact() {
    // calculations for algal impact
    return (
      (0.6 * textFields[3].obj.getValue() +
        0.3 * textFields[5].obj.getValue() +
        0.05 * textFields[4].obj.getValue() +
        0.05 * textFields[0].obj.getValue()) /
      100
    );
  }

  function calculateWaterTemperatureEffect() {
    // array of water temp effect on organism
    return [
      0.08, 0.13, 0.21, 0.32, 0.46, 0.6, 0.75, 0.88, 0.97, 1, 0.97, 0.88, 0.75,
      0.6, 0.46, 0.32, 0.21, 0.13, 0.08,
    ][Math.round(textFields[1].obj.getValue() - 18)];
  }

  function calculatePHImpact() {
    // calculations based on pH
    let impactValue, pHValue;
    return (
      7.6 <= (pHValue = textFields[2].obj.getValue()) && pHValue < 7.7
        ? (impactValue = 0.05)
        : 7.6 <= pHValue && pHValue < 7.7
          ? (impactValue = 0.11)
          : 7.7 <= pHValue && pHValue < 7.8
            ? (impactValue = 0.23)
            : 7.8 <= pHValue && pHValue < 7.9
              ? (impactValue = 0.42)
              : 7.9 <= pHValue && pHValue < 8
                ? (impactValue = 0.69)
                : 8 <= pHValue && pHValue < 8.1
                  ? (impactValue = 1)
                  : 8.1 <= pHValue && (impactValue = 1),
      impactValue
    );
  }

  function calculateCoralHealthImpact() {
    // calculations for coral health
    return (
      (0.2 * textFields[3].obj.getValue() +
        0.4 * textFields[5].obj.getValue() +
        0.3 * textFields[4].obj.getValue()) /
      100 +
      0.1
    );
  }

  function calculateCoralStress() {
    // calculate coral stress
    return (
      (calculateAlgalImpact() + calculateCoralHealthImpact() + algaePositions / 100 + calculateNutrientLoad() / 100 + 3 * (1 - calculateWaterTemperatureEffect()) + 3 * (1 - calculatePHImpact())) /
      10
    );
  }

  function calculateSedimentLoad() {
    return 500 * calculateAlgalImpact();
  }

  function calculateNutrientLoad() {
    return 40 * calculateCoralHealthImpact();
  }

  function calculateWaterClarity() {
    return 100 * (1 - (0.5 * calculateAlgalImpact() + 0.4 * calculateCoralHealthImpact() + (0.1 * textFields[0].obj.getValue()) / 100));
  }

  function calculateTotalFishSpecies() {
    let lastIndex, totalFishSpecies;
    return (
      (lastIndex = spongePopulation.length - 1),
      (totalFishSpecies =
        (totalFishSpecies =
          30 +
          (480 * (spongePopulation[lastIndex] / 2 + staghornCoralPopulation[lastIndex] + starCoralPopulation[lastIndex] + parrotfishPopulation[lastIndex] + angelfishPopulation[lastIndex] + turtlePopulation[lastIndex] + grouperPopulation[lastIndex] + snapperPopulation[lastIndex])) /
          1500 -
          2 * lionfishPopulation[lastIndex]) < 6
          ? 6
          : totalFishSpecies)
    );
  }

  function calculatePopulationDensity(species) {
    // calculate population density
    let density, lastIndex;
    switch (species) {
      case "parrotfish":
        (lastIndex = parrotfishPopulation.length), (density = parrotfishPopulation[lastIndex - 1] / 2500);
        break;
      case "angelfish":
        (lastIndex = angelfishPopulation.length), (density = angelfishPopulation[lastIndex - 1] / 2500);
        break;
      case "turtle":
      case "seaturtle":
        (lastIndex = turtlePopulation.length), (density = turtlePopulation[lastIndex - 1] / 1e3);
        break;
      case "grouper":
        (lastIndex = grouperPopulation.length), (density = grouperPopulation[lastIndex - 1] / 1e3);
        break;
      case "snapper":
        (lastIndex = snapperPopulation.length), (density = snapperPopulation[lastIndex - 1] / 1e3);
        break;
      case "lionfish":
        (lastIndex = lionfishPopulation.length), (density = lionfishPopulation[lastIndex - 1] / 1e3);
        break;
    }
    return density;
  }

  function calculateSpeciesPopulation(species) {
    // also density calculations but comparing to base value
    let calculatedDensity,
      randomValue,
      positionX,
      positionY = Math.round(((1.2 * (simulationInfoMax + 225)) / initialPopulationValues[species]) * calculatePopulationDensity(species.toLowerCase())),
      scale = "";

    for (let index = 0; index < positionY; index++) {
      switch (species) {
        case "ParrotFish":
          (scale = species), (randomValue = 0.35 + 0.02 * (Math.random() - 0.5));
          break;
        case "AngelFish":
          (scale = species), (randomValue = 0.3 + 0.03 * (Math.random() - 0.5));
          break;
        case "SeaTurtle":
          (scale = species), (randomValue = 0.39 + 0.05 * (Math.random() - 0.5));
          break;
        case "Grouper":
          (scale = species), (randomValue = 0.35 + 0.05 * (Math.random() - 0.5));
          break;
        case "Snapper":
        case "LionFish":
          (scale = species), (randomValue = 0.3 + 0.035 * (Math.random() - 0.5));
          break;
      }

      positionX = (0.1 + 0.8 * Math.random()) * globalResizeCalc(685) * 1.2 - 60;
      positionY = (0.2 + 0.55 * Math.random()) * globalResizeCalc(655) * 1.2 - 120;
      let scaleY = 0.3 + 0.02 * (Math.random() - 0.5) + ((positionY / globalResizeCalc(655) - 0.45) / 0.55) * 0.15;

      if (species === "SeaTurtle") scaleY *= 2.5;
      if (species === "Grouper") {
        scaleY = 0.37 + 0.05 * (Math.random() - 0.5) + ((positionY / simulationInfoMin - 0.45) / 0.55) * 0.17;
        if (0.66 <= (scaleY *= 1.25)) scaleY = 0.55;
      }

      Math.random() < 0.5 && (scaleY = -scaleY);
      positionY < globalResizeCalc(100) && (positionY = globalResizeCalc(100));
      positionY > globalResizeCalc(450) && (positionY = globalResizeCalc(450));

      let speciesData = {
        posX: positionX,
        posY: positionY,
        scaleX: scaleY,
        scaleY: Math.abs(scaleY),
        rotation: 10 * (Math.random() - 0.6),
      };

      if (species === "SeaTurtle") speciesData.name = "turtle";
      if (0 < positionX && positionX < simulationInfoMax) {
        positionX = 0.8 * Math.random() * simulationInfoMax;
        positionY = (0.2 + 0.55 * Math.random()) * simulationInfoMin;
      }
    }
  }
};