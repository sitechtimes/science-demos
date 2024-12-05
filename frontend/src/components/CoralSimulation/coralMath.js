function calculateGrowthRates(environment) {
  // Environment input is an object with key properties
  // Ocean Conditions
  // - environment.oceanTemp: ocean temperature (°C)
  // - environment.stormSeverity: storm severity (0 to 1)
  // - environment.pH: ocean pH (acidity)
  // Land Use
  // - environment.logging, environment.agriculture, environment.sewage (0 to 1 scale)
  // Fishing
  // - environment.netFishing, environment.grouperFishing, environment.snapperFishing (0 to 1 scale)
  // Disease
  // - environment.blackBandDisease, environment.whiteBandDisease, environment.urchinDisease (0 to 1 scale)
  // Invasive Species (booleans for presence)
  // - environment.crownOfThorns, environment.redLionfish (true or false)

  const populationGrowthRates = {};

  // Helper Functions to calculate impact factors from environmental conditions
  function tempFactor(temp) {
    return Math.max(0, Math.min(1, (temp - 18) / 10));
  }

  function pHFactor(pH) {
    if (pH >= 7.9 && pH <= 8.1) return 1;
    if (pH < 7.9) return (pH - 7.6) / 0.3;
    return 1 - (pH - 8.1) / 0.2;
  }

  function diseaseImpact() {
    return (
      environment.blackBandDisease * 0.3 +
      environment.whiteBandDisease * 0.3 +
      environment.urchinDisease * 0.4
    );
  }

  function invasiveImpact() {
    return (
      (environment.crownOfThorns ? 0.3 : 0) +
      (environment.redLionfish ? 0.2 : 0)
    );
  }

  function humanImpact() {
    return (
      (environment.logging + environment.agriculture + environment.sewage) * 0.4
    );
  }

  function fishingImpact() {
    return (
      (environment.netFishing +
        environment.grouperFishing * 0.5 +
        environment.snapperFishing * 0.5) *
      0.6
    );
  }

  // Calculate growth rates for each species based on available conditions

  // Staghorn Coral - very sensitive to pH, disease, and storm severity
  const staghornCoralGrowth =
    0.5 *
    pHFactor(environment.pH) *
    (1 - diseaseImpact()) *
    (1 - environment.stormSeverity);
  populationGrowthRates.staghornCoral = Math.max(0, staghornCoralGrowth);

  // Stoplight Parrotfish - depends on algae and fishing impact
  const parrotfishGrowth = 0.6 * (1 - fishingImpact()) * (1 - invasiveImpact());
  populationGrowthRates.stoplightParrotfish = Math.max(0, parrotfishGrowth);

  // Long-spined Sea Urchin - sensitive to urchin disease and storm severity
  const seaUrchinGrowth =
    0.4 * (1 - environment.urchinDisease) * (1 - environment.stormSeverity);
  populationGrowthRates.longSpinedUrchin = Math.max(0, seaUrchinGrowth);

  // Boulder Star Coral - sensitive to pH and disease, moderate storm resistance
  const boulderStarCoralGrowth =
    0.4 *
    pHFactor(environment.pH) *
    (1 - diseaseImpact()) *
    (1 - 0.5 * environment.stormSeverity);
  populationGrowthRates.boulderStarCoral = Math.max(0, boulderStarCoralGrowth);

  // Queen Angelfish - affected by fishing, invasive species, and coral cover
  const angelfishGrowth = 0.5 * (1 - fishingImpact()) * (1 - invasiveImpact());
  populationGrowthRates.queenAngelfish = Math.max(0, angelfishGrowth);

  // Hawksbill Sea Turtle - depends on fishing impact and ocean health
  const seaTurtleGrowth = 0.3 * (1 - fishingImpact()) * (1 - humanImpact());
  populationGrowthRates.hawksbillSeaTurtle = Math.max(0, seaTurtleGrowth);

  // Sponges - resilient to most impacts, but affected by human and ocean conditions
  const spongeGrowth =
    0.6 *
    (1 - humanImpact()) *
    (1 - invasiveImpact()) *
    tempFactor(environment.oceanTemp);
  populationGrowthRates.sponges = Math.max(0, spongeGrowth);

  // Yellowtail Snapper - affected by snapper fishing and ocean conditions
  const yellowtailSnapperGrowth =
    0.4 * (1 - environment.snapperFishing) * tempFactor(environment.oceanTemp);
  populationGrowthRates.yellowtailSnapper = Math.max(
    0,
    yellowtailSnapperGrowth
  );

  // Red Lionfish - invasive species, unaffected by other factors (constant growth rate)
  populationGrowthRates.redLionfish = environment.redLionfish ? 0.2 : 0;

  // Algae - thrives in high nutrient (sewage) environments, sensitive to clarity
  const algaeGrowth =
    0.7 * environment.sewage * (1 - environment.logging * 0.2);
  populationGrowthRates.algae = Math.max(0, algaeGrowth);

  // Nassau Grouper - affected by fishing and invasive lionfish
  const grouperGrowth =
    0.3 *
    (1 - environment.grouperFishing) *
    (1 - (environment.redLionfish ? 0.2 : 0));
  populationGrowthRates.nassauGrouper = Math.max(0, grouperGrowth);

  // Crown-of-thorns Starfish - only present if flagged, grows at a base rate
  populationGrowthRates.crownOfThornsStarfish = environment.crownOfThorns
    ? 0.15
    : 0;

  return populationGrowthRates;
}

// Example usage:
const environment = {
  oceanTemp: 26,
  stormSeverity: 0.5,
  pH: 8.0,
  logging: 0.2,
  agriculture: 0.4,
  sewage: 0.5,
  netFishing: 0.3,
  grouperFishing: 0.2,
  snapperFishing: 0.4,
  blackBandDisease: 0.1,
  whiteBandDisease: 0.2,
  urchinDisease: 0.3,
  crownOfThorns: true,
  redLionfish: true,
};

const growthRates = calculateGrowthRates(environment);
console.log(growthRates);
