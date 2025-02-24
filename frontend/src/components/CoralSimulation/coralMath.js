// make function shorter
// inputs -> current slider values
// outputs -> organism populations for this year (push into), current environments

let CoralReef = function () {
  let invasiveSpeciesPresent, sliderComponents, textFields, domElements, coralPlots, currentYear, algaePositions, algaePopulation, spongePopulation, staghornCoralPopulation, starCoralPopulation, seaUrchinPopulation, parrotfishPopulation, angelfishPopulation, turtlePopulation, grouperPopulation, snapperPopulation, lionfishPopulation, crownOfThornsPopulation, maxAlgaeCapacity, spongeCapacity, staghornCoralCapacity, starCoralCapacity, seaUrchinCapacity, parrotfishCapacity, angelfishCapacity, turtleCapacity, grouperCapacity, snapperCapacity, lionfishCapacity, crownOfThornsCapacity, totalPopulationValues, currentTimeElapsed, simulationInfoText, simulationInfoMax, simulationInfoMin = 4;

  // Function to advance the year
  function advanceYear(e) {
    // ***run all functions upon each year update
    let algaeGrowthRate, spongeGrowthRate, staghornCoralGrowthRate, starCoralGrowthRate;
    currentYear++;
    domElements.simulationInfo.setText("Year: " + currentYear.toFixed(0));
    updatePopulationValues();
    totalPopulationValues = [staghornCoralPopulation, starCoralPopulation, spongePopulation, algaePopulation, parrotfishPopulation, angelfishPopulation, snapperPopulation, turtlePopulation, lionfishPopulation, crownOfThornsPopulation];
    
    // Update algae population
    algaePositions = [];
    let lastAlgaeIndex = algaePopulation.length - 1;
    let algaeGrowth = algaePopulation[lastAlgaeIndex];
    algaeGrowthRate = algaePositions[0] * algaeGrowth * (1 - algaeGrowth / maxAlgaeCapacity[lastAlgaeIndex]) - (algaePositions[1] * algaeGrowth * (parrotfishPopulation[lastAlgaeIndex] + 3 * seaUrchinPopulation[lastAlgaeIndex])) / 4;
    algaePopulation.push(1 * algaeGrowthRate.toFixed(4));

    // Update sponge population
    spongeGrowthRate = spongePopulation[lastAlgaeIndex];
    spongeGrowthRate = spongeGrowthRate + algaePositions[0] * spongeGrowthRate * (1 - spongeGrowthRate / spongeCapacity[lastAlgaeIndex]) - (algaePositions[1] * spongeGrowthRate * (angelfishPopulation[lastAlgaeIndex] + 2 * turtlePopulation[lastAlgaeIndex])) / 2;
    spongePopulation.push(1 * spongeGrowthRate.toFixed(4));

    // Update staghorn coral population
    staghornCoralGrowthRate = staghornCoralPopulation[lastAlgaeIndex];
    staghornCoralGrowthRate = staghornCoralGrowthRate * (1 - calculateAlgalImpact()) * (1 - calculateSpongeImpact() / 2) + algaePositions[0] * staghornCoralGrowthRate * (1 - calculateSpongeImpact()) * (1 - staghornCoralGrowthRate / staghornCoralCapacity[lastAlgaeIndex]) - (algaePositions[1] * staghornCoralGrowthRate * crownOfThornsPopulation[lastAlgaeIndex] + calculateCrownOfThornsImpact() * staghornCoralGrowthRate);
    staghornCoralPopulation.push(1 * staghornCoralGrowthRate.toFixed(4));

    // Update star coral population
    starCoralGrowthRate = starCoralPopulation[lastAlgaeIndex];
    starCoralGrowthRate = starCoralGrowthRate * (1 - calculateAlgalImpact()) * (1 - calculateSpongeImpact() / 2) + algaePositions[0] * starCoralGrowthRate * (1 - calculateSpongeImpact()) * (1 - starCoralGrowthRate / starCoralCapacity[lastAlgaeIndex]) - (algaePositions[1] * starCoralGrowthRate * crownOfThornsPopulation[lastAlgaeIndex] + (calculateCrownOfThornsImpact() * starCoralGrowthRate) / 5);
    starCoralPopulation.push(1 * starCoralGrowthRate.toFixed(4));

    // Update sea urchin population
    let seaUrchinGrowthRate = seaUrchinPopulation[lastAlgaeIndex];
    seaUrchinGrowthRate = seaUrchinGrowthRate * (1 - textFields[11].obj.getValue() / 100) + algaePositions[2] * seaUrchinGrowthRate * algaePopulation[lastAlgaeIndex] - algaePositions[3] * seaUrchinGrowthRate;
    seaUrchinPopulation.push(1 * seaUrchinGrowthRate.toFixed(4));

    // Update parrotfish population
    let parrotfishGrowthRate = parrotfishPopulation[lastAlgaeIndex];
    parrotfishGrowthRate = parrotfishGrowthRate + algaePositions[2] * parrotfishGrowthRate * algaePopulation[lastAlgaeIndex] - algaePositions[3] * parrotfishGrowthRate - (grouperPopulation[lastAlgaeIndex] + snapperPopulation[lastAlgaeIndex] + 5 * lionfishPopulation[lastAlgaeIndex]) * parrotfishGrowthRate * algaePositions[1];
    parrotfishPopulation.push(1 * parrotfishGrowthRate.toFixed(4));

    // Update angelfish population
    let angelfishGrowthRate = angelfishPopulation[lastAlgaeIndex];
    angelfishGrowthRate = angelfishGrowthRate + algaePositions[2] * angelfishGrowthRate * spongePopulation[lastAlgaeIndex] - algaePositions[3] * angelfishGrowthRate - (grouperPopulation[lastAlgaeIndex] + snapperPopulation[lastAlgaeIndex] + 6 * lionfishPopulation[lastAlgaeIndex]) * angelfishGrowthRate * algaePositions[1];
    angelfishPopulation.push(1 * angelfishGrowthRate.toFixed(4));

    // Update turtle population
    let turtleGrowthRate = turtlePopulation[lastAlgaeIndex];
    turtleGrowthRate = turtleGrowthRate + algaePositions[2] * turtleGrowthRate * spongePopulation[lastAlgaeIndex] - algaePositions[3] * turtleGrowthRate;
    turtlePopulation.push(1 * turtleGrowthRate.toFixed(4));

    // Update grouper population
    let grouperGrowthRate = grouperPopulation[lastAlgaeIndex];
    grouperGrowthRate = grouperGrowthRate + algaePositions[2] * grouperGrowthRate * (parrotfishPopulation[lastAlgaeIndex] + angelfishPopulation[lastAlgaeIndex] + snapperPopulation[lastAlgaeIndex] / 3) - algaePositions[3] * grouperGrowthRate;
    grouperPopulation.push(1 * grouperGrowthRate.toFixed(4));

    // Update snapper population
    let snapperGrowthRate = snapperPopulation[lastAlgaeIndex];
    snapperGrowthRate = snapperGrowthRate + algaePositions[2] * snapperGrowthRate * (parrotfishPopulation[lastAlgaeIndex] + angelfishPopulation[lastAlgaeIndex]) - (algaePositions[3] * snapperGrowthRate * grouperPopulation[lastAlgaeIndex]) / 10 - (algaePositions[3] * lionfishPopulation[lastAlgaeIndex]) / 5;
    snapperPopulation.push(1 * snapperGrowthRate.toFixed(4));

    // Update lionfish population
    let lionfishGrowthRate = lionfishPopulation[lastAlgaeIndex];
    lionfishGrowthRate = lionfishGrowthRate + algaePositions[2] * lionfishGrowthRate * (parrotfishPopulation[lastAlgaeIndex] + angelfishPopulation[lastAlgaeIndex] + grouperPopulation[lastAlgaeIndex] + snapperPopulation[lastAlgaeIndex]) - algaePositions[3] * lionfishGrowthRate;
    lionfishPopulation.push(1 * lionfishGrowthRate.toFixed(4));

    // Update crown of thorns population
    let crownOfThornsGrowthRate = crownOfThornsPopulation[lastAlgaeIndex];
    crownOfThornsGrowthRate = crownOfThornsGrowthRate + algaePositions[2] * crownOfThornsGrowthRate * (staghornCoralPopulation[lastAlgaeIndex] + starCoralPopulation[lastAlgaeIndex]) - algaePositions[3] * crownOfThornsGrowthRate;
    crownOfThornsPopulation.push(1 * crownOfThornsGrowthRate.toFixed(4));

    // Update capacities and limits
    updateCapacities(lastAlgaeIndex);
    drawGraphs();
    updateSimulationInfo();
  }

  function restartGame(e) {
    // reset everything
    if (
      ((currentYear = 0),
      resetPopulationValues(),
      domElements.simulationInfo.setText("Year: " + currentYear.toFixed(0)),
      updateSimulationInfo())
    ) {
      let currentTime, elapsedTime;
      0.1 < (elapsedTime = ((currentTime = new Date().getTime()) - currentTimeElapsed) / 1e3) && (elapsedTime = 0.1),
        (currentTimeElapsed = currentTime);
    }
  }

  let initialize = !((r = this).init = function () {
    domElements.advanceBtn.addEventListener("click", advanceYear), // runs the main function when year is advanced
      domElements.restartBtn.addEventListener("click", restartGame), // reset everything
      domElements.exportBtn.addEventListener("click", exportToCSV), // export as csv
      (invasiveSpeciesPresent = []),
      sliderComponents = [{ id: "sliderComp1", obj: domElements.sliderComp1 }, { id: "sliderComp2", obj: domElements.sliderComp2 }, { id: "sliderComp3", obj: domElements.sliderComp3 }, { id: "sliderComp4", obj: domElements.sliderComp4 }, { id: "sliderComp5", obj: domElements.sliderComp5 }, { id: "sliderComp6", obj: domElements.sliderComp6 }, { id: "sliderComp7", obj: domElements.sliderComp7 }, { id: "sliderComp8", obj: domElements.sliderComp8 }, { id: "sliderComp9", obj: domElements.sliderComp9 }, { id: "sliderComp10", obj: domElements.sliderComp10 }, { id: "sliderComp11", obj: domElements.sliderComp11 }, { id: "sliderComp12", obj: domElements.sliderComp12 }];
      textFields = [{ id: "tField1", obj: domElements.tField1 }, { id: "tField2", obj: domElements.tField2 }, { id: "tField3", obj: domElements.tField3 }, { id: "tField4", obj: domElements.tField4 }, { id: "tField5", obj: domElements.tField5 }, { id: "tField6", obj: domElements.tField6 }, { id: "tField7", obj: domElements.tField7 }, { id: "tField8", obj: domElements.tField8 }, { id: "tField9", obj: domElements.tField9 }, { id: "tField10", obj: domElements.tField10 }, { id: "tField11", obj: domElements.tField11 }, { id: "tField12", obj: domElements.tField12 }];
      coralPlots = [{ id: "plotStaghorn", obj: domElements.plotStaghorn, color: "#CC0033" }, { id: "plotStarCoral", obj: domElements.plotStarCoral, color: "#666666" }, { id: "plotSponge", obj: domElements.plotSponge, color: "#FFCC99" }, { id: "plotAlgae", obj: domElements.plotAlgae, color: "#00CC66" }, { id: "plotParrotfish", obj: domElements.plotParrotfish, color: "#0000CC" }, { id: "plotAngelfish", obj: domElements.plotAngelfish, color: "#993399" }, { id: "plotSnapper", obj: domElements.plotSnapper, color: "#CC9966" }, { id: "plotGrouper", obj: domElements.plotGrouper, color: "#999933" }, { id: "plotUrchin", obj: domElements.plotUrchin, color: "#FF33FF" }, { id: "plotTurtle", obj: domElements.plotTurtle, color: "#FF9933" }, { id: "plotLionfish", obj: domElements.plotLionfish, color: "#00CCCC" }, { id: "plotCrownOfThorns", obj: domElements.plotCrownOfThorns, color: "#CCCC66" }];
      totalPopulationValues= [0.21, 0.28, 0.11, 0.27, 8.25, 5.4, 2.4, 0.48, 11.6, 0.25, 1, 5];
    
    for (let index = 0; index < 12; index++) invasiveSpeciesPresent.push(Number(textFields[index].obj.getValue()));
    invasiveSpeciesPresent.push(domElements.checkBox1.getStatus(), domElements.checkBox2.getStatus());
    
    for (let index = 0; index < coralPlots.length; index++) coralPlots[index].obj.addEventListener("change", updateGraph);
    
    (algaePositions = currentYear = 0),
      (simulationInfoText = []),
      (simulationInfoMax = []),
      (simulationInfoMin = []),
      (simulationInfoText = []),
      (simulationInfoMax = []),
      (simulationInfoMin = []),
      (initialPopulationValues = {
        parrotfish: 60,
        angelfish: 60,
        turtle: 24,
        grouper: 33.3 * 1.2,
        snapper: 80.16,
        lionfish: 60,
      }),
      (initialPopulationValuesCapitalized = {
        ParrotFish: 60,
        AngelFish: 60,
        SeaTurtle: 24,
        Grouper: 33.3 * 1.2,
        Snapper: 80.16,
        LionFish: 60,
      }),
      (simulationInfoMax = 685),
      (simulationInfoMin = 655),
      resetPopulationValues(),
      updateGraph();
  });

  let healthSummary = "";
  
  function updateSimulationInfo() {
    // * stores independent let to display + if statements describing current simulation
    let stormSeverity, oceanTemperature, oceanPH;
    (oceanTemperature = textFields[1].obj.getValue()),
      (stormSeverity = totalPopulationValues.length - 1),
      (healthSummary = "<center><b>Reef conditions</b></center>"),
      (healthSummary += "<br>Storm severity: " + textFields[0].obj.getValue() + "%"),
      (healthSummary += "<br>Ocean temperature: " + oceanTemperature + " °C"),
      (healthSummary += "<br>Ocean pH: " + textFields[2].obj.getValue()),
      (healthSummary += "<br>Sediment load: " + calculateSedimentLoad().toFixed(0) + " ppt"),
      (healthSummary += "<br>Nutrient load: " + calculateNutrientLoad().toFixed(0) + " ppt"),
      (healthSummary += "<br>Water clarity: " + calculateWaterClarity().toFixed(0) + "%"),
      (healthSummary += "<br>Coral cover: " + (staghornCoralPopulation[stormSeverity] + starCoralPopulation[stormSeverity]).toFixed(0) + "%"),
      (healthSummary += "<br>Coral stress: " + (100 * calculateCoralStress()).toFixed(0) + "%"),
      (healthSummary += "<br>Total fish species: " + calculateTotalFishSpecies().toFixed(0)),
      (healthSummary += "<br><br><br><center><b>Summary</center><br>"),
      (healthSummary = ""),
      25 <= oceanTemperature &&
        oceanTemperature <= 29 &&
        7.9 <= textFields[2].obj.getValue() &&
        0 == textFields[9].obj.getValue() &&
        calculateCoralStress() < 0.1 &&
        400 < calculateTotalFishSpecies() &&
        40 < staghornCoralPopulation[stormSeverity] + starCoralPopulation[stormSeverity] &&
        ((healthSummary +=
          "Coral reef is healthy, with no bleaching or disease. Fish diversity is high. "),
        (healthSummary +=
          "Coral reef is healthy, with no bleaching or disease. Fish diversity is high. ")),
      40 <= staghornCoralPopulation[stormSeverity] + starCoralPopulation[stormSeverity]
        ? ((healthSummary += "Coral cover is high. "), (healthSummary += "Coral cover is high. "))
        : 20 <= staghornCoralPopulation[stormSeverity] + starCoralPopulation[stormSeverity] &&
          ((healthSummary += "Coral cover is medium. "), (healthSummary += "Coral cover is medium. ")),
      staghornCoralPopulation[stormSeverity] + starCoralPopulation[stormSeverity] < 20 &&
        ((healthSummary += "Coral cover is low. "), (healthSummary += "Coral cover is low. ")),
      20 < spongePopulation[stormSeverity] &&
        ((healthSummary += "Sponge cover is high. "), (healthSummary += "Sponge cover is high. ")),
      0 < textFields[9].obj.getValue() &&
        ((healthSummary += "Black-band disease is present. "),
        (healthSummary += "Black-band disease is present. ")),
      0 < textFields[10].obj.getValue() &&
        ((healthSummary += "White-band disease is present. "),
        (healthSummary += "White-band disease is present. ")),
      0 < textFields[11].obj.getValue() &&
        ((healthSummary += "Sea urchin disease is present. "),
        (healthSummary += "Sea urchin disease is present. ")),
      calculateTotalFishSpecies() < 200 &&
        ((healthSummary += "Fish diversity is low. "), (healthSummary += "Fish diversity is low. ")),
      0 < lionfishPopulation[stormSeverity] &&
        ((healthSummary += "Lionfish are present. "), (healthSummary += "Lionfish are present. ")),
      0 < crownOfThornsPopulation[stormSeverity] &&
        ((healthSummary += "Crown-of-thorns starfish are present. "),
        (healthSummary += "Crown-of-thorns starfish are present. ")),
      50 < algaePopulation[stormSeverity] &&
        ((healthSummary += "Algae cover is high. "), (healthSummary += "Algae cover is high. ")),
      0.2 < calculateCoralStress() &&
        ((healthSummary += "Bleaching is occurring due to high temperatures. "),
        (healthSummary += "Bleaching is occurring due to high temperatures. ")),
      textFields[2].obj.getValue() < 7.9 &&
        ((healthSummary += "pH is low. "), (healthSummary += "pH is low. ")),
      staghornCoralPopulation[stormSeverity] < 0.1 &&
        ((healthSummary += "Staghorn coral has died out. "),
        (healthSummary += "Staghorn coral has died out. ")),
      starCoralPopulation[stormSeverity] < 0.1 &&
        ((healthSummary += "Star coral has died out. "),
        (healthSummary += "Star coral has died out. ")),
      (healthSummary += "</b>"),
      domElements.summaryMessage.setText(healthSummary);
  }

  function resetPopulationValues() {
    // resets entire function, might have all starter values
    let lastIndex, currentPopulation;
    (currentYear = 0),
      (totalPopulationValues = []),
      domElements.graph1.cleanAll(),
      (algaePopulation = []),
      (spongePopulation = []),
      (staghornCoralPopulation = []),
      (starCoralPopulation = []),
      (seaUrchinPopulation = []),
      (parrotfishPopulation = []),
      (angelfishPopulation = []),
      (turtlePopulation = []),
      (grouperPopulation = []),
      (snapperPopulation = []),
      (lionfishPopulation = []),
      (crownOfThornsPopulation = []),
      (algaePopulation = []).push(400),
      spongePopulation.push(170),
      staghornCoralPopulation.push(315),
      starCoralPopulation.push(425),
      seaUrchinPopulation.push(145),
      parrotfishPopulation.push(165),
      angelfishPopulation.push(135),
      turtlePopulation.push(25),
      grouperPopulation.push(16),
      snapperPopulation.push(120),
      (lastIndex = domElements.checkBox1.getStatus() ? 1 : 0),
      (currentPopulation = domElements.checkBox2.getStatus() ? 1 : 0),
      lionfishPopulation.push(1 * (5 * lastIndex).toFixed(4)),
      crownOfThornsPopulation.push(1 * (5 * currentPopulation).toFixed(4)),
      (algaeCover = []),
      (spongeCover = []),
      (staghornCoralCover = []),
      (starCoralCover = []),
      (seaUrchinCover = []),
      (parrotfishCover = []),
      (angelfishCover = []),
      (turtleCover = []),
      (grouperCover = []),
      (snapperCover = []),
      (lionfishCover = []),
      (crownOfThornsCover = []),
      (maxAlgaeCapacity = []),
      (spongeCapacity = []),
      (staghornCoralCapacity = []),
      (starCoralCapacity = []),
      (seaUrchinCapacity = []),
      (parrotfishCapacity = []),
      (angelfishCapacity = []),
      (turtleCapacity = []),
      (grouperCapacity = []),
      (snapperCapacity = []),
      (lionfishCapacity = []),
      (crownOfThornsCapacity = []),
      (maxAlgaeCapacity = []),
      (spongeCapacity = []),
      (staghornCoralCapacity = []),
      (starCoralCapacity = []),
      (seaUrchinCapacity = []),
      (parrotfishCapacity = []),
      (angelfishCapacity = []),
      (turtleCapacity = []),
      (grouperCapacity = []),
      (snapperCapacity = []),
      (lionfishCapacity = []),
      (crownOfThornsCapacity = []),
      totalPopulationValues.push(staghornCoralPopulation, starCoralPopulation, spongePopulation, algaePopulation, parrotfishPopulation, angelfishPopulation, turtlePopulation, grouperPopulation, snapperPopulation, lionfishPopulation, crownOfThornsPopulation),
      updateGraph(),
      updateSimulationInfo();
  }

  function updateCapacities(lastIndex) {
    // calculations for capacities
    let algaeCapacity, spongeCapacity;
    (lastIndex = algaePopulation.length - 1),
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

  function drawGraphs() {
    // draw graph
    let graphData;
    domElements.graph1.cleanAll();
    for (let index = 0; index < coralPlots.length; index++)
      if (coralPlots[index].obj.getStatus()) {
        graphData = [];
        for (let yearIndex = 0; yearIndex < totalPopulationValues[index].length; yearIndex++)
          graphData.push({ x: yearIndex, y: totalPopulationValues[index][yearIndex] / totalPopulationValues[index] });
        domElements.graph1.drawLines({ id: index, data: graphData, color: coralPlots[index].color });
      }
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
      positionY = Math.round(((1.2 * (simulationInfoMax + 225)) / initialPopulationValuesCapitalized[species]) * calculatePopulationDensity(species.toLowerCase())),
      scale = "";
    
    for (let index = 0; index < positionY; index++) {
      switch (species) {
        case "ParrotFish":
          (scale = "parrotfish"), (randomValue = 0.35 + 0.02 * (Math.random() - 0.5));
          break;
        case "AngelFish":
          (scale = "angelfish"), (randomValue = 0.3 + 0.03 * (Math.random() - 0.5));
          break;
        case "SeaTurtle":
          (scale = "seaTurtle"), (randomValue = 0.39 + 0.05 * (Math.random() - 0.5));
          break;
        case "Grouper":
          (scale = "grouper"), (randomValue = 0.35 + 0.05 * (Math.random() - 0.5));
          break;
        case "Snapper":
          (scale = "snapper"), (randomValue = 0.3 + 0.035 * (Math.random() - 0.5));
          break;
        case "LionFish":
          (scale = "lionfish"), (randomValue = 0.3 + 0.035 * (Math.random() - 0.5));
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

let undefinedVariable = void 0;

(this.getter = function () {
    let returnObject = new Object();
    return (
      (returnObject.caption = "GizmoObject"),
      (returnObject.common = !1),
      (returnObject.componentname = "CoralReef"),
      (returnObject.values = {}),
      (returnObject.values.years = currentYear),
      (returnObject.values.dataObj = totalPopulationValues),
      (returnObject.values._algae = algaePopulation),
      (returnObject.values._sponge = spongePopulation),
      (returnObject.values._staghorn = staghornCoralPopulation),
      (returnObject.values._star = starCoralPopulation),
      (returnObject.values._urchin = seaUrchinPopulation),
      (returnObject.values._parrot = parrotfishPopulation),
      (returnObject.values._angel = angelfishPopulation),
      (returnObject.values._turtle = turtlePopulation),
      (returnObject.values._grouper = grouperPopulation),
      (returnObject.values._snapper = snapperPopulation),
      (returnObject.values._lion = lionfishPopulation),
      (returnObject.values._thorns = crownOfThornsPopulation),
      (returnObject.values._algaeCover = algaeCover),
      (returnObject.values._spongeCover = spongeCover),
      (returnObject.values._staghornCover = staghornCoralCover),
      (returnObject.values._starCover = starCoralCover),
      (returnObject.values._urchinPop = seaUrchinCapacity),
      (returnObject.values._parrotPop = parrotfishCapacity),
      (returnObject.values._angelPop = angelfishCapacity),
      (returnObject.values._turtlePop = turtleCapacity),
      (returnObject.values._grouperPop = grouperCapacity),
      (returnObject.values._snapperPop = snapperCapacity),
      (returnObject.values._lionPop = lionfishCapacity),
      (returnObject.values._thornsPop = crownOfThornsCapacity),
      (returnObject.values._algaeCap = maxAlgaeCapacity),
      (returnObject.values._spongeCap = spongeCapacity),
      (returnObject.values._staghornCap = staghornCoralCapacity),
      (returnObject.values._starCap = starCoralCapacity),
      (returnObject.values._urchinCap = seaUrchinCapacity),
      (returnObject.values._parrotCap = parrotfishCapacity),
      (returnObject.values._angelCap = angelfishCapacity),
      (returnObject.values._turtleCap = turtleCapacity),
      (returnObject.values._grouperCap = grouperCapacity),
      (returnObject.values._snapperCap = snapperCapacity),
      (returnObject.values._lionCap = lionfishCapacity),
      (returnObject.values._thornsCap = crownOfThornsCapacity),
      (returnObject.values._coefMatrix = coefficientMatrix),
      (returnObject.values._isPaused = isPaused),
      (returnObject.values.currentPopulation = (function () {
        let populationData, percentageData, rawData, speciesNames, speciesIndex;
        (populationData = new Array()),
          (percentageData = []),
          (rawData = []),
          (speciesNames = [
            "Staghorn coral",
            "Boulder star coral",
            "Sponges",
            "Algae",
            "Stoplight parrotfish",
            "Queen angelfish",
            "Yellowtail snapper",
            "Nassau grouper",
            "Long-spined sea urchin",
            "Hawkbill sea turtle",
            "Red lionfish",
            "Crown-of-thorns starfish",
          ]),
          populationData.push(percentageData),
          populationData.push(rawData),
          percentageData.push("Percentage data"),
          rawData.push("Year"),
          percentageData.push("");
        for (let index = 0; index < coralPlots.length; index++) rawData.push(speciesNames[index]), speciesIndex.push(index), percentageData.push("");
        for (let yearIndex = 0; yearIndex <= currentYear; yearIndex++) {
          populationData.push(new Array());
          for (let index = 0; index < speciesIndex.length; index++)
            populationData[yearIndex + 2].push(
              1 * (totalPopulationValues[speciesIndex[index]][yearIndex] / totalPopulationValues[speciesIndex[index]]).toFixed(0)
            );
          populationData[yearIndex + 2].push("");
        }
        rawData.push(""), percentageData.push("Raw data");
        for (let index = 0; index < speciesIndex.length; index++) rawData.push(speciesNames[speciesIndex[index]]);
        for (let yearIndex = 0; yearIndex <= currentYear; yearIndex++)
          for (let index = 0; index < speciesIndex.length; index++)
            populationData[yearIndex + 2].push(1 * totalPopulationValues[speciesIndex[index]][yearIndex].toFixed(0));
        for (let lastEntry = populationData.pop(), percentageList = [], rawDataList = [], speciesCounter = 0, index = 0; index < 12; index++)
          percentageList.push({ name: speciesNames[speciesCounter], percentage: lastEntry[index] }), speciesCounter++;
        speciesCounter = 0;
        for (let index = 13; index < 25; index++) rawDataList.push({ name: speciesNames[speciesCounter], number: lastEntry[index] }), speciesCounter++;
        return { percentage: percentageList, rawData: rawDataList };
      })()),
      (returnObject.values.healthOfCoral = healthSummary),
      (speciesIndex = starCoralPopulation.length - 1),
      (returnObject.values.StormSeverity = 1 * textFields[0].obj.getValue()),
      (returnObject.values.OceanTemperature = 1 * textFields[1].obj.getValue()),
      (returnObject.values.OceanpH = 1 * textFields[2].obj.getValue()),
      (returnObject.values.SedimentLoad = 1 * calculateSedimentLoad().toFixed(0)),
      (returnObject.values.NutrientLoad = 1 * calculateNutrientLoad().toFixed(0)),
      (returnObject.values.WaterClarity = 1 * calculateWaterClarity().toFixed(0)),
      (returnObject.values.CoralCover = 1 * (staghornCoralPopulation[speciesIndex] + starCoralPopulation[speciesIndex]).toFixed(0)),
      (returnObject.values.CoralStress = 1 * (100 * calculateCoralStress()).toFixed(0)),
      (returnObject.values.TotalFishSpecies = 1 * calculateTotalFishSpecies().toFixed(0)),
      (returnObject.values.currentIdentity = undefinedVariable),
      (returnObject.values.informationClosed = isInformationClosed),
      (returnObject.settable = !0),
      (returnObject.enabled = !0),
      (returnObject.visible = !0),
      returnObject
    );
  }),

  (this.setter = function (inputObject) {
    let buttonType = "" + buttonState;
    resetSimulation({ btnType: "reset" }),
      resetSimulation({ btnType: buttonType }),
      inputObject.values &&
        (restartGame(),
        (currentYear = inputObject.values.years),
        (isPaused = inputObject.values._isPaused),
        (isPaused = "" + buttonState != "play"),
        (isInformationClosed = inputObject.values.informationClosed),
        (totalPopulationValues = inputObject.values.dataObj),
        (algaePopulation = inputObject.values._algae),
        (spongePopulation = inputObject.values._sponge),
        (staghornCoralPopulation = inputObject.values._staghorn),
        (starCoralPopulation = inputObject.values._star),
        (seaUrchinPopulation = inputObject.values._urchin),
        (parrotfishPopulation = inputObject.values._parrot),
        (angelfishPopulation = inputObject.values._angel),
        (turtlePopulation = inputObject.values._turtle),
        (grouperPopulation = inputObject.values._grouper),
        (snapperPopulation = inputObject.values._snapper),
        (lionfishPopulation = inputObject.values._lion),
        (crownOfThornsPopulation = inputObject.values._thorns),
        (algaeCover = inputObject.values._algaeCover),
        (spongeCover = inputObject.values._spongeCover),
        (staghornCoralCover = inputObject.values._staghornCover),
        (starCoralCover = inputObject.values._starCover),
        (seaUrchinCapacity = inputObject.values._urchinPop),
        (parrotfishCapacity = inputObject.values._parrotPop),
        (angelfishCapacity = inputObject.values._angelPop),
        (turtleCapacity = inputObject.values._turtlePop),
        (grouperCapacity = inputObject.values._grouperPop),
        (snapperCapacity = inputObject.values._snapperPop),
        (lionfishCapacity = inputObject.values._lionPop),
        (crownOfThornsCapacity = inputObject.values._thornsPop),
        (maxAlgaeCapacity = inputObject.values._algaeCap),
        (spongeCapacity = inputObject.values._spongeCap),
        (staghornCoralCapacity = inputObject.values._staghornCap),
        (starCoralCapacity = inputObject.values._starCap),
        (seaUrchinCapacity = inputObject.values._urchinCap),
        (parrotfishCapacity = inputObject.values._parrotCap),
        (angelfishCapacity = inputObject.values._angelCap),
        (turtleCapacity = inputObject.values._turtleCap),
        (grouperCapacity = inputObject.values._grouperCap),
        (snapperCapacity = inputObject.values._snapperCap),
        (lionfishCapacity = inputObject.values._lionCap),
        (crownOfThornsCapacity = inputObject.values._thornsCap),
        (coefficientMatrix = inputObject.values._coefMatrix),
        updatePopulationData(),
        calculateSpeciesPopulation("ParrotFish"),
        calculateSpeciesPopulation("AngelFish"),
        calculateSpeciesPopulation("SeaTurtle"),
        calculateSpeciesPopulation("Grouper"),
        calculateSpeciesPopulation("Snapper"),
        calculateSpeciesPopulation("LionFish"),
        drawGraphs(),
        domElements.simulationInfo.setText("Year: " + currentYear.toFixed(0)),
        updateSimulationInfo(),
        (undefinedVariable = inputObject.values.currentIdentity),
        (healthSummary = inputObject.values.healthOfCoral)),
      getterSetter.isFromReset && (domElements.messageBox.show(), (isInformationClosed = !1));
  });
}; 