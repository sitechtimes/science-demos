// make function shorter
// inputs -> current slider values
// outputs -> organism populations for this year (push into), current environments

let CoralReef = function () {
  let currentYear, // checkbox status
    sliderComponents, // arr of { id: "sliderComp1", obj: l.sliderComp1 }
    textFields, // arr of { id: "tField1", obj: l.tField1 }
    domManipulation, // stores dom manipulation
    coralPlots, // arr of { id: "plotStaghorn", obj: l.plotStaghorn, color: "#CC0033" }
    yearIncrement, // 0, incremented on advanced year
    algaePositions, // arr algae positions
    algaePopulation, // [400]
    spongePopulation, // [170] arr sponge
    staghornCoralPopulation, // [315] arr staghorn
    starCoralPopulation, // [425] arr star coral
    seaUrchinPopulation, // [145]
    parrotfishPopulation, // [165] arr parrotfish
    angelfishPopulation, // [135] arr angelfish
    turtlePopulation, // [25] arr turtle
    grouperPopulation, // [16] arr grouper
    snapperPopulation, // [120] arr snapper
    lionfishPopulation, // huh is this lionfish
    crownOfThornsPopulation, // push(1 * (5 * a).toFixed(4)) Pe; checks if lionfishPopulation is not null or undefined
    invasiveCrownOfThornsPopulation, // push(1 * (5 * a).toFixed(4)) Pe()
    invasiveSeaUrchinPopulation, // .push(1 * ((100 * algaePopulation[e]).toFixed(4))) Ue
    invasiveSpongePopulation, // .push(1 * ((100 * spongePopulation[e]).toFixed(4))) Ue
    invasiveStaghornPopulation, // .push(1 * ((100 * staghornCoralPopulation[e]).toFixed(4))) Ue
    invasiveStarCoralPopulation, // .push(1 * ((100 * starCoralPopulation[e]).toFixed(4))) Ue
    invasiveSeaUrchinCover, // .push(1 * (8 * seaUrchinPopulation[e]).toFixed(4)) Ue
    invasiveParrotfishPopulation, // .push(1 * (5 * parrotfishPopulation[e]).toFixed(4)) Ue
    invasiveAngelfishPopulation, // .push(1 * (4 * angelfishPopulation[e]).toFixed(4)) Ue
    invasiveTurtlePopulation, // .push(1 * turtlePopulation[e].toFixed(4)) Ue sea turtle population
    invasiveGrouperPopulation, // .push(1 * (3 * grouperPopulation[e]).toFixed(4)) Ue groupers population
    invasiveSnapperPopulation, // .push(1 * (2 * snapperPopulation[e]).toFixed(4)) Ue snappers population
    maxLionfishPopulation, // [100] max of lionfish $e
    staghornAndStarCoralSum, // ee.push(1 * (staghornCoralPopulation[e] + starCoralPopulation[e]).toFixed(4)) $e sum staghorn and star coral
    organismArray, // used by ga for pop,density {parrotfish: 60,angelfish: 60,turtle: 24,grouper: 33.3 * 1.2,snapper: 80.16,lionfish: 60,}
    oceanBackgroundOpacity, // ocean background opacity
    scalingFactor, // divide by this number [t] to scale on graph [0.21,0.28,0.11,0.27,8.25,5.4,2.4,0.48,11.6,0.25,1,5]
    allPopulationValues, // ne //arr push, operated on for graph coordinates/csv export
    randomNumArray, // arr with random num 0-3
    zeroArray, // arr with 0 and etc
    currentTime, // current time , elapsed since animation update
    demoPaused, // !1, whether or not demo is paused
    maxAlgaePopulation, // 685
    maxSpongePopulation, // 655
    initialPopulation = 4; // same as ae but first letter capital

  // rounding to 4 decimal places
  function advanceYear(e) {
    // ***run all functions upon each year update
    let algaeGrowthRate,
      currentAlgaePopulation,
      currentSpongePopulation,
      currentStaghornPopulation,
      currentStarCoralPopulation;
    yearIncrement++,
      domManipulation.simulationInfo.setText(
        "Year: " + yearIncrement.toFixed(0)
      ),
      calculateOrganismGrowth(),
      (allPopulationValues = []).push(invasiveStaghornPopulation),
      allPopulationValues.push(invasiveStarCoralPopulation),
      allPopulationValues.push(invasiveSpongePopulation),
      allPopulationValues.push(invasiveAlgaePopulation),
      allPopulationValues.push(invasiveParrotfishPopulation),
      allPopulationValues.push(invasiveAngelfishPopulation),
      allPopulationValues.push(invasiveSnapperPopulation),
      allPopulationValues.push(invasiveGrouperPopulation),
      allPopulationValues.push(invasiveSeaUrchinCover),
      allPopulationValues.push(invasiveTurtlePopulation),
      allPopulationValues.push(invasiveLionfishPopulation),
      allPopulationValues.push(invasiveCrownOfThornsPopulation),
      (algaeGrowthRate = []),
      (currentAlgaePopulation = algaePopulation.length - 1),
      (algaePositions = organismArray.algae),
      (currentAlgaePopulation = algaePopulation[currentAlgaePopulation]),
      (algaeGrowthRate =
        currentAlgaePopulation +
        algaePositions[0] *
          currentAlgaePopulation *
          (1 -
            currentAlgaePopulation /
              maxAlgaePopulation[currentAlgaePopulation]) -
        (algaePositions[1] *
          currentAlgaePopulation *
          (parrotfishPopulation[currentAlgaePopulation] +
            3 * seaUrchinPopulation[currentAlgaePopulation])) /
          4),
      algaePopulation.push(1 * algaeGrowthRate.toFixed(4)),
      (algaeGrowthRate = organismArray.sponge),
      (currentSpongePopulation = spongePopulation[currentAlgaePopulation]),
      (algaeGrowthRate =
        currentSpongePopulation +
        algaeGrowthRate[0] *
          currentSpongePopulation *
          (1 -
            currentSpongePopulation /
              maxSpongePopulation[currentAlgaePopulation]) -
        (algaeGrowthRate[1] *
          currentSpongePopulation *
          (angelfishPopulation[currentAlgaePopulation] +
            2 * turtlePopulation[currentAlgaePopulation])) /
          2),
      spongePopulation.push(1 * algaeGrowthRate.toFixed(4)),
      (algaeGrowthRate = organismArray.staghorn),
      (currentStaghornPopulation =
        staghornCoralPopulation[currentAlgaePopulation]),
      (algaeGrowthRate =
        currentStaghornPopulation *
          (1 - calculateInvasiveGrowth()) *
          (1 - calculateSeaUrchinImpact() / 2) +
        algaeGrowthRate[0] *
          currentStaghornPopulation *
          (1 - calculateSeaUrchinImpact()) *
          (1 -
            currentStaghornPopulation /
              maxStaghornPopulation[currentAlgaePopulation]) -
        (algaeGrowthRate[1] *
          currentStaghornPopulation *
          invasiveCrownOfThornsPopulation[currentAlgaePopulation] +
          calculateSeaUrchinImpact() * currentStaghornPopulation)),
      staghornCoralPopulation.push(1 * algaeGrowthRate.toFixed(4)),
      (algaeGrowthRate = organismArray.star),
      (currentStarCoralPopulation =
        starCoralPopulation[currentAlgaePopulation]),
      (algaeGrowthRate =
        currentStarCoralPopulation *
          (1 - calculateInvasiveGrowth()) *
          (1 - calculateSeaUrchinImpact() / 2) +
        algaeGrowthRate[0] *
          currentStarCoralPopulation *
          (1 - calculateSeaUrchinImpact()) *
          (1 -
            currentStarCoralPopulation /
              maxStarCoralPopulation[currentAlgaePopulation]) -
        (algaeGrowthRate[1] *
          currentStarCoralPopulation *
          invasiveCrownOfThornsPopulation[currentAlgaePopulation] +
          (calculateSeaUrchinImpact() * currentStarCoralPopulation) / 5)),
      starCoralPopulation.push(1 * algaeGrowthRate.toFixed(4)),
      (algaeGrowthRate = organismArray.urchin),
      (currentSeaUrchinPopulation =
        seaUrchinPopulation[currentAlgaePopulation]),
      (algaeGrowthRate =
        currentSeaUrchinPopulation * (1 - textFields[11].obj.getValue() / 100) +
        algaeGrowthRate[2] *
          currentSeaUrchinPopulation *
          algaePopulation[currentAlgaePopulation] -
        algaeGrowthRate[3] * currentSeaUrchinPopulation),
      seaUrchinPopulation.push(1 * algaeGrowthRate.toFixed(4)),
      (algaeGrowthRate = organismArray.parrot),
      (currentParrotfishPopulation =
        parrotfishPopulation[currentAlgaePopulation]),
      (algaeGrowthRate =
        currentParrotfishPopulation +
        algaeGrowthRate[2] *
          currentParrotfishPopulation *
          algaePopulation[currentAlgaePopulation] -
        algaeGrowthRate[3] * currentParrotfishPopulation -
        (grouperPopulation[currentAlgaePopulation] +
          snapperPopulation[currentAlgaePopulation] +
          5 * lionfishPopulation[currentAlgaePopulation]) *
          currentParrotfishPopulation *
          algaeGrowthRate[1]),
      parrotfishPopulation.push(1 * algaeGrowthRate.toFixed(4)),
      (algaeGrowthRate = organismArray.angel),
      (currentAngelfishPopulation =
        angelfishPopulation[currentAlgaePopulation]),
      (algaeGrowthRate =
        currentAngelfishPopulation +
        algaeGrowthRate[2] *
          currentAngelfishPopulation *
          spongePopulation[currentAlgaePopulation] -
        algaeGrowthRate[3] * currentAngelfishPopulation -
        (grouperPopulation[currentAlgaePopulation] +
          snapperPopulation[currentAlgaePopulation] +
          6 * lionfishPopulation[currentAlgaePopulation]) *
          currentAngelfishPopulation *
          algaeGrowthRate[1]),
      angelfishPopulation.push(1 * algaeGrowthRate.toFixed(4)),
      (algaeGrowthRate = organismArray.turtle),
      (currentTurtlePopulation = turtlePopulation[currentAlgaePopulation]),
      (algaeGrowthRate =
        currentTurtlePopulation +
        algaeGrowthRate[2] *
          currentTurtlePopulation *
          spongePopulation[currentAlgaePopulation] -
        algaeGrowthRate[3] * currentTurtlePopulation),
      turtlePopulation.push(1 * algaeGrowthRate.toFixed(4)),
      (algaeGrowthRate = organismArray.grouper),
      (currentGrouperPopulation = grouperPopulation[currentAlgaePopulation]),
      (algaeGrowthRate =
        currentGrouperPopulation +
        algaeGrowthRate[2] *
          currentGrouperPopulation *
          (parrotfishPopulation[currentAlgaePopulation] +
            angelfishPopulation[currentAlgaePopulation] +
            snapperPopulation[currentAlgaePopulation] / 3) -
        algaeGrowthRate[3] * currentGrouperPopulation),
      grouperPopulation.push(1 * algaeGrowthRate.toFixed(4)),
      (algaeGrowthRate = organismArray.snapper),
      (currentSnapperPopulation = snapperPopulation[currentAlgaePopulation]),
      (algaeGrowthRate =
        currentSnapperPopulation +
        algaeGrowthRate[2] *
          currentSnapperPopulation *
          (parrotfishPopulation[currentAlgaePopulation] +
            angelfishPopulation[currentAlgaePopulation]) -
        (algaeGrowthRate[3] *
          currentSnapperPopulation *
          grouperPopulation[currentAlgaePopulation]) /
          10 -
        (algaeGrowthRate[3] * lionfishPopulation[currentAlgaePopulation]) / 5),
      snapperPopulation.push(1 * algaeGrowthRate.toFixed(4)),
      (algaeGrowthRate = organismArray.lion),
      (currentLionfishPopulation = lionfishPopulation[currentAlgaePopulation]),
      (algaeGrowthRate =
        currentLionfishPopulation +
        algaeGrowthRate[2] *
          currentLionfishPopulation *
          (parrotfishPopulation[currentAlgaePopulation] +
            angelfishPopulation[currentAlgaePopulation] +
            grouperPopulation[currentAlgaePopulation] +
            snapperPopulation[currentAlgaePopulation]) -
        algaeGrowthRate[3] * currentLionfishPopulation),
      lionfishPopulation.push(1 * algaeGrowthRate.toFixed(4)),
      (algaeGrowthRate = organismArray.thorns),
      (currentCrownOfThornsPopulation =
        invasiveCrownOfThornsPopulation[currentAlgaePopulation]),
      (algaeGrowthRate =
        currentCrownOfThornsPopulation +
        algaeGrowthRate[2] *
          currentCrownOfThornsPopulation *
          (staghornCoralPopulation[currentAlgaePopulation] +
            starCoralPopulation[currentAlgaePopulation]) -
        algaeGrowthRate[3] * currentCrownOfThornsPopulation),
      invasiveCrownOfThornsPopulation.push(1 * algaeGrowthRate.toFixed(4)),
      updatePopulationLimits(),
      (algaeGrowthRate = algaePopulation[++currentAlgaePopulation]),
      (currentAlgaePopulation = maxAlgaePopulation[currentAlgaePopulation]),
      (algaePopulation[currentAlgaePopulation] =
        algaeGrowthRate < 0
          ? 0
          : currentAlgaePopulation < algaeGrowthRate
            ? currentAlgaePopulation
            : algaeGrowthRate),
      (algaeGrowthRate = spongePopulation[currentAlgaePopulation]),
      (currentAlgaePopulation = maxSpongePopulation[currentAlgaePopulation]),
      (spongePopulation[currentAlgaePopulation] =
        algaeGrowthRate < 0
          ? 0
          : currentAlgaePopulation < algaeGrowthRate
            ? currentAlgaePopulation
            : algaeGrowthRate),
      (algaeGrowthRate = staghornCoralPopulation[currentAlgaePopulation]),
      (currentAlgaePopulation = maxStaghornPopulation[currentAlgaePopulation]),
      (staghornCoralPopulation[currentAlgaePopulation] =
        algaeGrowthRate < 0
          ? 0
          : currentAlgaePopulation < algaeGrowthRate
            ? currentAlgaePopulation
            : algaeGrowthRate),
      (algaeGrowthRate = starCoralPopulation[currentAlgaePopulation]),
      (currentAlgaePopulation = maxStarCoralPopulation[currentAlgaePopulation]),
      (starCoralPopulation[currentAlgaePopulation] =
        algaeGrowthRate < 0
          ? 0
          : currentAlgaePopulation < algaeGrowthRate
            ? currentAlgaePopulation
            : algaeGrowthRate),
      (algaeGrowthRate = seaUrchinPopulation[currentAlgaePopulation]),
      (currentAlgaePopulation = maxSeaUrchinPopulation[currentAlgaePopulation]),
      (seaUrchinPopulation[currentAlgaePopulation] =
        algaeGrowthRate < 0
          ? 0
          : currentAlgaePopulation < algaeGrowthRate
            ? currentAlgaePopulation
            : algaeGrowthRate),
      (algaeGrowthRate = parrotfishPopulation[currentAlgaePopulation]),
      (currentAlgaePopulation =
        maxParrotfishPopulation[currentAlgaePopulation]),
      (parrotfishPopulation[currentAlgaePopulation] =
        algaeGrowthRate < 0
          ? 0
          : currentAlgaePopulation < algaeGrowthRate
            ? currentAlgaePopulation
            : algaeGrowthRate),
      (algaeGrowthRate = angelfishPopulation[currentAlgaePopulation]),
      (currentAlgaePopulation = maxAngelfishPopulation[currentAlgaePopulation]),
      (angelfishPopulation[currentAlgaePopulation] =
        algaeGrowthRate < 0
          ? 0
          : currentAlgaePopulation < algaeGrowthRate
            ? currentAlgaePopulation
            : algaeGrowthRate),
      (algaeGrowthRate = turtlePopulation[currentAlgaePopulation]),
      (currentAlgaePopulation = maxTurtlePopulation[currentAlgaePopulation]),
      (turtlePopulation[currentAlgaePopulation] =
        algaeGrowthRate < 0
          ? 0
          : currentAlgaePopulation < algaeGrowthRate
            ? currentAlgaePopulation
            : algaeGrowthRate),
      (algaeGrowthRate = grouperPopulation[currentAlgaePopulation]),
      (currentAlgaePopulation = maxGrouperPopulation[currentAlgaePopulation]),
      (grouperPopulation[currentAlgaePopulation] =
        algaeGrowthRate < 0
          ? 0
          : currentAlgaePopulation < algaeGrowthRate
            ? currentAlgaePopulation
            : algaeGrowthRate),
      (algaeGrowthRate = snapperPopulation[currentAlgaePopulation]),
      (currentAlgaePopulation = maxSnapperPopulation[currentAlgaePopulation]),
      (snapperPopulation[currentAlgaePopulation] =
        algaeGrowthRate < 0
          ? 0
          : currentAlgaePopulation < algaeGrowthRate
            ? currentAlgaePopulation
            : algaeGrowthRate),
      (algaeGrowthRate = lionfishPopulation[currentAlgaePopulation]),
      (currentAlgaePopulation = maxLionfishPopulation[currentAlgaePopulation]),
      (lionfishPopulation[currentAlgaePopulation] =
        algaeGrowthRate < 0
          ? 0
          : currentAlgaePopulation < algaeGrowthRate
            ? currentAlgaePopulation
            : algaeGrowthRate),
      (algaeGrowthRate =
        invasiveCrownOfThornsPopulation[currentAlgaePopulation]),
      (currentAlgaePopulation =
        staghornAndStarCoralSum[currentAlgaePopulation]),
      (invasiveCrownOfThornsPopulation[currentAlgaePopulation] =
        algaeGrowthRate < 0
          ? 0
          : currentAlgaePopulation < algaeGrowthRate
            ? currentAlgaePopulation
            : algaeGrowthRate),
      updatePopulationGraphs(),
      updateGraph(),
      updateSimulationInfo(),
      resetSimulation(),
      calculatePopulationDensity("ParrotFish"),
      calculatePopulationDensity("AngelFish"),
      calculatePopulationDensity("SeaTurtle"),
      calculatePopulationDensity("Grouper"),
      calculatePopulationDensity("Snapper"),
      calculatePopulationDensity("LionFish"),
      demoPaused,
      resetSimulation("coralReef", 25),
      algaePopulation.length;
  }

  function resetSimulation(e) {
    // reset everything
    if (
      ((yearIncrement = 0),
      resetPopulationValues(),
      domManipulation.simulationInfo.setText(
        "Year: " + yearIncrement.toFixed(0)
      ),
      updateSimulationInfo(),
      demoPaused)
    ) {
      let currentTime, elapsedTime;
      0.1 <
        (elapsedTime =
          ((currentTime = new Date().getTime()) - currentTime) / 1e3) &&
        (elapsedTime = 0.1),
        (currentTime = currentTime);
    }
  }

  let initialize = !((reset = this).init = function () {
    // ** initial values
    domManipulation.advanceBtn.addEventListener("click", advanceYear), // runs the main function when year is advanced
      domManipulation.restartBtn.addEventListener("click", resetSimulation), // reset everything
      domManipulation.exprtBtn.addEventListener("click", exportToCSV), // export as csv
      (sliderComponents = []),
      (textFields = []),
      (coralPlots = []),
      (currentYear = []),
      (scalingFactor = []),
      (allPopulationValues = []),
      sliderComponents.push({
        id: "sliderComp1",
        obj: domManipulation.sliderComp1,
      }),
      sliderComponents.push({
        id: "sliderComp2",
        obj: domManipulation.sliderComp2,
      }),
      sliderComponents.push({
        id: "sliderComp3",
        obj: domManipulation.sliderComp3,
      }),
      sliderComponents.push({
        id: "sliderComp4",
        obj: domManipulation.sliderComp4,
      }),
      sliderComponents.push({
        id: "sliderComp5",
        obj: domManipulation.sliderComp5,
      }),
      sliderComponents.push({
        id: "sliderComp6",
        obj: domManipulation.sliderComp6,
      }),
      sliderComponents.push({
        id: "sliderComp7",
        obj: domManipulation.sliderComp7,
      }),
      sliderComponents.push({
        id: "sliderComp8",
        obj: domManipulation.sliderComp8,
      }),
      sliderComponents.push({
        id: "sliderComp9",
        obj: domManipulation.sliderComp9,
      }),
      sliderComponents.push({
        id: "sliderComp10",
        obj: domManipulation.sliderComp10,
      }),
      sliderComponents.push({
        id: "sliderComp11",
        obj: domManipulation.sliderComp11,
      }),
      sliderComponents.push({
        id: "sliderComp12",
        obj: domManipulation.sliderComp12,
      }),
      textFields.push({ id: "tField1", obj: domManipulation.tField1 }),
      textFields.push({ id: "tField2", obj: domManipulation.tField2 }),
      textFields.push({ id: "tField3", obj: domManipulation.tField3 }),
      textFields.push({ id: "tField4", obj: domManipulation.tField4 }),
      textFields.push({ id: "tField5", obj: domManipulation.tField5 }),
      textFields.push({ id: "tField6", obj: domManipulation.tField6 }),
      textFields.push({ id: "tField7", obj: domManipulation.tField7 }),
      textFields.push({ id: "tField8", obj: domManipulation.tField8 }),
      textFields.push({ id: "tField9", obj: domManipulation.tField9 }),
      textFields.push({ id: "tField10", obj: domManipulation.tField10 }),
      textFields.push({ id: "tField11", obj: domManipulation.tField11 }),
      textFields.push({ id: "tField12", obj: domManipulation.tField12 }),
      coralPlots.push({
        id: "plotStaghorn",
        obj: domManipulation.plotStaghorn,
        color: "#CC0033",
      }),
      coralPlots.push({
        id: "plotStarCoral",
        obj: domManipulation.plotStarCoral,
        color: "#666666",
      }),
      coralPlots.push({
        id: "plotSponge",
        obj: domManipulation.plotSponge,
        color: "#FFCC99",
      }),
      coralPlots.push({
        id: "plotAlgae",
        obj: domManipulation.plotAlgae,
        color: "#00CC66",
      }),
      coralPlots.push({
        id: "plotPrrtfish",
        obj: domManipulation.plotPrrtfish,
        color: "#0000CC",
      }),
      coralPlots.push({
        id: "plotAngelfish",
        obj: domManipulation.plotAngelfish,
        color: "#993399",
      }),
      coralPlots.push({
        id: "plotSnapper",
        obj: domManipulation.plotSnapper,
        color: "#CC9966",
      }),
      coralPlots.push({
        id: "plotGrouper",
        obj: domManipulation.plotGrouper,
        color: "#999933",
      }),
      coralPlots.push({
        id: "plotUrchin",
        obj: domManipulation.plotUrchin,
        color: "#FF33FF",
      }),
      coralPlots.push({
        id: "plotTurtle",
        obj: domManipulation.plotTurtle,
        color: "#FF9933",
      }),
      coralPlots.push({
        id: "plotLionfish",
        obj: domManipulation.plotLionfish,
        color: "#00CCCC",
      }),
      coralPlots.push({
        id: "plotThorns",
        obj: domManipulation.plotThorns,
        color: "#CCCC66",
      }),
      scalingFactor.push(0.21),
      scalingFactor.push(0.28),
      scalingFactor.push(0.11),
      scalingFactor.push(0.27),
      scalingFactor.push(8.25),
      scalingFactor.push(5.4),
      scalingFactor.push(2.4),
      scalingFactor.push(0.48),
      scalingFactor.push(11.6),
      scalingFactor.push(0.25),
      scalingFactor.push(1),
      scalingFactor.push(5);
    for (let index = 0; index < 12; index++)
      currentYear.push(Number(textFields[index].obj.getValue()));
    currentYear.push(domManipulation.checkBox1.getStatus()),
      currentYear.push(domManipulation.checkBox2.getStatus());
    for (index = 0; index < coralPlots.length; index++)
      coralPlots[index].obj.addEventListener("change", updateGraph);
    (algaeGrowthRate = yearIncrement = 0),
      10,
      (organismArray = []),
      (zeroArray = []),
      (currentYear = []),
      (currentYear = []),
      (currentYear = []),
      (currentYear = []),
      (initialPopulation = {
        parrotfish: 60,
        angelfish: 60,
        turtle: 24,
        grouper: 33.3 * 1.2,
        snapper: 80.16,
        lionfish: 60,
      }),
      (initialPopulation = {
        ParrotFish: 60,
        AngelFish: 60,
        SeaTurtle: 24,
        Grouper: 33.3 * 1.2,
        Snapper: 80.16,
        LionFish: 60,
      }),
      (maxAlgaePopulation = 685),
      (maxSpongePopulation = 655),
      resetPopulationValues(),
      resetSimulation("coralReef", 25);
  });

  function updateGraph(e) {
    // update values for invasive
    let invasiveStatus, invasivePopulation;
    if (
      ((invasiveStatus = domManipulation.checkBox2.getStatus() ? 1 : 0), // invasives status
      invasiveCrownOfThornsPopulation && // crown of thorns data, multiply by 5 and round 4
        (0 == (invasivePopulation = invasiveCrownOfThornsPopulation.length)
          ? invasiveCrownOfThornsPopulation.push(
              1 * (5 * invasiveStatus).toFixed(4)
            )
          : (invasiveCrownOfThornsPopulation[invasivePopulation - 1] =
              1 * (5 * invasiveStatus).toFixed(4))),
      invasiveSeaUrchinPopulation && // lionfish
        (0 == (invasivePopulation = invasiveSeaUrchinPopulation.length)
          ? invasiveSeaUrchinPopulation.push(
              1 * (15 * invasiveStatus).toFixed(4)
            )
          : (invasiveSeaUrchinPopulation[invasivePopulation - 1] =
              1 * (15 * invasiveStatus).toFixed(4))),
      coralPlots[11].obj.getStatus())
    ) {
      dataArr = [];
      for (let index = 0; index < allPopulationValues[11].length; index++)
        dataArr.push({
          x: index,
          y: allPopulationValues[11][index] / scalingFactor[11],
        });
      domManipulation.graph1.cleanAll(11),
        domManipulation.graph1.drawLines({
          id: 11,
          data: dataArr,
          color: coralPlots[11].color,
        });
    }
  }

  let healthStatus = "";
  function updateSimulationInfo() {
    // * stores independent let to display + if statements describing current simulation
    let stormSeverity, oceanTemperature, oceanPH;
    (oceanTemperature = textFields[1].obj.getValue()),
      (stormSeverity = invasivePopulation.length - 1),
      (healthStatus = "<center><b>Reef conditions</b></center>"),
      (healthStatus +=
        "<br>Storm severity: " + textFields[0].obj.getValue() + "%"),
      (healthStatus +=
        "<br>Ocean temperature: " + textFields[1].obj.getValue() + " °C"),
      (healthStatus += "<br>Ocean pH: " + textFields[2].obj.getValue()),
      (healthStatus +=
        "<br>Sediment load: " + calculateSedimentLoad().toFixed(0) + " ppt"),
      (healthStatus +=
        "<br>Nutrient load: " + calculateNutrientLoad().toFixed(0) + " ppt"),
      (healthStatus +=
        "<br>Water clarity: " + calculateWaterClarity().toFixed(0) + "%"),
      (healthStatus +=
        "<br>Coral cover: " +
        (
          invasiveStaghornPopulation[stormSeverity] +
          invasiveStarCoralPopulation[stormSeverity]
        ).toFixed(0) +
        "%"),
      (healthStatus +=
        "<br>Coral stress: " + (100 * calculateCoralStress()).toFixed(0) + "%"),
      (healthStatus +=
        "<br>Total fish species: " + calculateTotalFishSpecies().toFixed(0)),
      (healthStatus += "<br><br><br><center><b>Summary</center><br>"),
      (healthStatus = ""),
      25 <= oceanTemperature &&
        oceanTemperature <= 29 &&
        7.9 <= textFields[2].obj.getValue() &&
        0 == textFields[9].obj.getValue() &&
        calculateCoralStress() < 0.1 &&
        400 < calculateTotalFishSpecies() &&
        40 <
          invasiveStaghornPopulation[stormSeverity] +
            invasiveStarCoralPopulation[stormSeverity] &&
        ((healthStatus +=
          "Coral reef is healthy, with no bleaching or disease. Fish diversity is high. "),
        (healthStatus +=
          "Coral reef is healthy, with no bleaching or disease. Fish diversity is high. ")),
      40 <=
      invasiveStaghornPopulation[stormSeverity] +
        invasiveStarCoralPopulation[stormSeverity]
        ? ((healthStatus += "Coral cover is high. "),
          (healthStatus += "Coral cover is high. "))
        : 20 <=
            invasiveStaghornPopulation[stormSeverity] +
              invasiveStarCoralPopulation[stormSeverity] &&
          ((healthStatus += "Coral cover is medium. "),
          (healthStatus += "Coral cover is medium. ")),
      invasiveStaghornPopulation[stormSeverity] +
        invasiveStarCoralPopulation[stormSeverity] <
        20 &&
        ((healthStatus += "Coral cover is low. "),
        (healthStatus += "Coral cover is low. ")),
      20 < invasiveSpongePopulation[stormSeverity] &&
        ((healthStatus += "Sponge cover is high. "),
        (healthStatus += "Sponge cover is high. ")),
      0 < textFields[9].obj.getValue() &&
        ((healthStatus += "Black-band disease is present. "),
        (healthStatus += "Black-band disease is present. ")),
      0 < textFields[10].obj.getValue() &&
        ((healthStatus += "White-band disease is present. "),
        (healthStatus += "White-band disease is present. ")),
      0 < textFields[11].obj.getValue() &&
        ((healthStatus += "Sea urchin disease is present. "),
        (healthStatus += "Sea urchin disease is present. ")),
      calculateTotalFishSpecies() < 200 &&
        ((healthStatus += "Fish diversity is low. "),
        (healthStatus += "Fish diversity is low. ")),
      0 < lionfishPopulation[stormSeverity] &&
        ((healthStatus += "Lionfish are present. "),
        (healthStatus += "Lionfish are present. ")),
      0 < invasiveCrownOfThornsPopulation[stormSeverity] &&
        ((healthStatus += "Crown-of-thorns starfish are present. "),
        (healthStatus += "Crown-of-thorns starfish are present. ")),
      50 < invasiveAlgaePopulation[stormSeverity] &&
        ((healthStatus += "Algae cover is high. "),
        (healthStatus += "Algae cover is high. ")),
      0.2 < calculateSeaUrchinImpact() &&
        ((healthStatus += "Bleaching is occurring due to high temperatures. "),
        (healthStatus += "Bleaching is occurring due to high temperatures. ")),
      textFields[2].obj.getValue() < 7.9 &&
        ((healthStatus += "pH is low. "), (healthStatus += "pH is low. ")),
      invasiveStaghornPopulation[stormSeverity] < 0.1 &&
        ((healthStatus += "Staghorn coral has died out. "),
        (healthStatus += "Staghorn coral has died out. ")),
      invasiveStarCoralPopulation[stormSeverity] < 0.1 &&
        ((healthStatus += "Star coral has died out. "),
        (healthStatus += "Star coral has died out. ")),
      (healthStatus += "</b>"),
      domManipulation.summaryMssg.setText(healthStatus);
  }

  function resetPopulationValues() {
    // resets entire function, might have all starter values
    let currentIndex, currentPopulation;
    (yearIncrement = 0),
      (allPopulationValues = []),
      domManipulation.graph1.cleanAll(),
      (currentPopulation = initialPopulation = 3),
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
      (invasiveCrownOfThornsPopulation = []),
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
      (currentIndex = domManipulation.checkBox1.getStatus() ? 1 : 0),
      (currentPopulation = domManipulation.checkBox2.getStatus() ? 1 : 0),
      lionfishPopulation.push(1 * (5 * currentIndex).toFixed(4)),
      invasiveCrownOfThornsPopulation.push(
        1 * (5 * currentPopulation).toFixed(4)
      ),
      (invasiveAlgaePopulation = []),
      (invasiveSpongePopulation = []),
      (invasiveStaghornPopulation = []),
      (invasiveStarCoralPopulation = []),
      (invasiveSeaUrchinPopulation = []),
      (invasiveParrotfishPopulation = []),
      (invasiveAngelfishPopulation = []),
      (invasiveTurtlePopulation = []),
      (invasiveGrouperPopulation = []),
      (invasiveSnapperPopulation = []),
      (invasiveLionfishPopulation = []),
      (invasiveCrownOfThornsPopulation = []),
      (maxAlgaePopulation = []),
      (maxSpongePopulation = []),
      (maxStaghornPopulation = []),
      (maxStarCoralPopulation = []),
      (maxSeaUrchinPopulation = []),
      (maxParrotfishPopulation = []),
      (maxAngelfishPopulation = []),
      (maxTurtlePopulation = []),
      (maxGrouperPopulation = []),
      (maxSnapperPopulation = []),
      (maxLionfishPopulation = []),
      (maxCrownOfThornsPopulation = []),
      (maxAlgaeCover = []),
      (maxSpongeCover = []),
      (maxStaghornCover = []),
      (maxStarCover = []),
      (maxUrchinCover = []),
      (maxParrotCover = []),
      (maxAngelCover = []),
      (maxTurtleCover = []),
      (maxGrouperCover = []),
      (maxSnapperCover = []),
      (maxLionCover = []),
      (maxThornsCover = []),
      allPopulationValues.push(invasiveStaghornPopulation),
      allPopulationValues.push(invasiveStarCoralPopulation),
      allPopulationValues.push(invasiveSpongePopulation),
      allPopulationValues.push(invasiveAlgaePopulation),
      allPopulationValues.push(invasiveParrotfishPopulation),
      allPopulationValues.push(invasiveAngelfishPopulation),
      allPopulationValues.push(invasiveSnapperPopulation),
      allPopulationValues.push(invasiveGrouperPopulation),
      allPopulationValues.push(invasiveSeaUrchinPopulation),
      allPopulationValues.push(invasiveTurtlePopulation),
      allPopulationValues.push(invasiveLionfishPopulation),
      allPopulationValues.push(invasiveCrownOfThornsPopulation),
      updatePopulationGraphs(),
      calculatePopulationDensity("ParrotFish"),
      calculatePopulationDensity("AngelFish"),
      calculatePopulationDensity("SeaTurtle"),
      calculatePopulationDensity("Grouper"),
      calculatePopulationDensity("Snapper"),
      calculatePopulationDensity("LionFish"),
      algaePopulation.length;
  }

  function calculatePopulationDensity(species) {
    // calculate population density
    let currentDensity, currentPopulation;
    switch (species) {
      case "parrotfish":
        (currentPopulation = invasiveParrotfishPopulation.length),
          (currentDensity =
            invasiveParrotfishPopulation[currentPopulation - 1] / 2500);
        break;
      case "angelfish":
        (currentPopulation = invasiveAngelfishPopulation.length),
          (currentDensity =
            invasiveAngelfishPopulation[currentPopulation - 1] / 2500);
        break;
      case "turtle":
      case "seaturtle":
        (currentPopulation = invasiveTurtlePopulation.length),
          (currentDensity =
            invasiveTurtlePopulation[currentPopulation - 1] / 1000);
        break;
      case "grouper":
        (currentPopulation = invasiveGrouperPopulation.length),
          (currentDensity =
            invasiveGrouperPopulation[currentPopulation - 1] / 1000);
        break;
      case "snapper":
        (currentPopulation = invasiveSnapperPopulation.length),
          (currentDensity =
            invasiveSnapperPopulation[currentPopulation - 1] / 1000);
        break;
      case "lionfish":
        (currentPopulation = invasiveLionfishPopulation.length),
          (currentDensity =
            invasiveLionfishPopulation[currentPopulation - 1] / 1000);
    }
    return currentDensity;
  }

  function calculateOrganismGrowth() {
    // calculations for organism growth
    let currentIndex;
    (currentIndex = algaePopulation.length - 1),
      maxAlgaePopulation.push(1500),
      maxSpongePopulation.push(
        1 *
          Math.max(
            staghornCoralPopulation[currentIndex] +
              starCoralPopulation[currentIndex],
            1
          ).toFixed(4)
      ),
      (currentIndex =
        1500 -
        (algaePopulation[currentIndex] +
          spongePopulation[currentIndex] +
          starCoralPopulation[currentIndex])),
      maxStaghornPopulation.push(1 * Math.max(currentIndex, 1).toFixed(4)),
      (currentIndex =
        1500 -
        (algaePopulation[currentIndex] +
          spongePopulation[currentIndex] +
          staghornCoralPopulation[currentIndex])),
      maxStarCoralPopulation.push(1 * Math.max(currentIndex, 1).toFixed(4)),
      maxSeaUrchinPopulation.push(
        1 *
          (
            (staghornCoralPopulation[currentIndex] +
              starCoralPopulation[currentIndex]) /
            3
          ).toFixed(4)
      ),
      maxParrotfishPopulation.push(
        1 *
          Math.min(
            (staghornCoralPopulation[currentIndex] +
              starCoralPopulation[currentIndex]) /
              2,
            450
          ).toFixed(4)
      ),
      maxSpongePopulation.push(
        1 *
          (
            (spongePopulation[currentIndex] +
              staghornCoralPopulation[currentIndex] +
              starCoralPopulation[currentIndex]) /
            3
          ).toFixed(4)
      ),
      maxAngelfishPopulation.push(
        1 *
          Math.min(
            (spongePopulation[currentIndex] +
              staghornCoralPopulation[currentIndex] +
              starCoralPopulation[currentIndex]) /
              10,
            40
          ).toFixed(4)
      ),
      maxGrouperPopulation.push(
        1 *
          Math.min(
            (spongePopulation[currentIndex] +
              staghornCoralPopulation[currentIndex] +
              starCoralPopulation[currentIndex]) /
              10,
            50
          ).toFixed(4)
      ),
      maxSnapperPopulation.push(
        1 *
          Math.min(
            (spongePopulation[currentIndex] +
              staghornCoralPopulation[currentIndex] +
              starCoralPopulation[currentIndex]) /
              2,
            400
          ).toFixed(4)
      ),
      maxLionfishPopulation.push(100),
      staghornAndStarCoralSum.push(
        1 *
          (
            staghornCoralPopulation[currentIndex] +
            starCoralPopulation[currentIndex]
          ).toFixed(4)
      );
  }

  function updatePopulationGraphs() {
    // draw graph
    let graphData;
    domManipulation.graph1.cleanAll();
    for (let index = 0; index < coralPlots.length; index++)
      if (coralPlots[index].obj.getStatus()) {
        graphData = [];
        for (
          let timeIndex = 0;
          timeIndex < allPopulationValues[index].length;
          timeIndex++
        )
          graphData.push({
            x: timeIndex,
            y: allPopulationValues[index][timeIndex] / scalingFactor[index],
          });
        domManipulation.graph1.drawLines({
          id: index,
          data: graphData,
          color: coralPlots[index].color,
        });
      }
  }

  function calculateCoralStress() {
    // calculations for coral stress
    return (
      (0.6 * textFields[3].obj.getValue() +
        0.3 * textFields[5].obj.getValue() +
        0.05 * textFields[4].obj.getValue() +
        0.05 * textFields[0].obj.getValue()) /
      100
    );
  }

  function calculateTotalFishSpecies() {
    // calculations for total fish species
    let currentIndex;
    return (
      (currentIndex = spongePopulation.length - 1),
      (currentIndex =
        (currentIndex =
          30 +
          (480 *
            (spongePopulation[currentIndex] / 2 +
              staghornCoralPopulation[currentIndex] +
              starCoralPopulation[currentIndex] +
              parrotfishPopulation[currentIndex] +
              angelfishPopulation[currentIndex] +
              turtlePopulation[currentIndex] +
              grouperPopulation[currentIndex] +
              snapperPopulation[currentIndex])) /
            1500 -
          2 * lionfishPopulation[currentIndex]) < 6
          ? 6
          : currentIndex)
    );
  }

  function resetSimulation() {
    // reset everything
    if (
      ((yearIncrement = 0),
      resetPopulationValues(),
      domManipulation.simulationInfo.setText(
        "Year: " + yearIncrement.toFixed(0)
      ),
      updateSimulationInfo(),
      demoPaused)
    ) {
      let currentTime, elapsedTime;
      0.1 <
        (elapsedTime =
          ((currentTime = new Date().getTime()) - currentTime) / 1e3) &&
        (elapsedTime = 0.1),
        (currentTime = currentTime);
    }
  }

  function exportToCSV(e) {
    // export to csv
    let percentageData, yearData, rawData, headers;
    (yearData = []),
      (percentageData = []),
      (rawData = []),
      (headers = [
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
      (percentageData = new Array()).push(yearData),
      percentageData.push(rawData),
      yearData.push("Percentage data"),
      rawData.push("Year"),
      yearData.push("");
    for (let index = 0; index < coralPlots.length; index++)
      coralPlots[index].obj.getStatus() &&
        (rawData.push(headers[index]),
        percentageData.push(index),
        yearData.push(""));
    for (let index = 0; index <= yearIncrement; index++) {
      percentageData.push(new Array()),
        percentageData[index + 2].push(index.toString());
      for (let j = 0; j < percentageData.length; j++)
        percentageData[index + 2].push(
          (
            allPopulationValues[percentageData[j]][index] /
            scalingFactor[percentageData[j]]
          ).toFixed(0) + "%"
        );
      percentageData[index + 2].push("");
    }
    rawData.push(""), yearData.push("Raw data");
    for (let j = 0; j < percentageData.length; j++)
      rawData.push(headers[percentageData[j]]);
    for (let index = 0; index <= yearIncrement; index++)
      for (let j = 0; j < percentageData.length; j++)
        percentageData[index + 2].push(
          allPopulationValues[percentageData[j]][index].toFixed(0)
        );
    exportToApiObj.exportCSV(percentageData);
  }
};
