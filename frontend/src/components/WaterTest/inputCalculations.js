import epaStandards from "./epaStandards";

const calculateNutrients = function (agricultureRunoff) {
  //Calculates nitrogen and phosphorus concentrations (mg/L) from agricultural runoff.
  //Sources: USDA (5-10% N loss), EPA (1-3% P loss).
  const nitrogen = 0.075 * agricultureRunoff; // in mgL, 7.5% of applied N lost to runoff (midrange USDA)
  const phosphorus = 0.02 * agricultureRunoff; // in mgL, 2% of applied P lost (EPA)
  return nitrogen, phosphorus;
};

const calculateEutrophication = function (nitrogen, phosphorus) {
  // Determines eutrophication risk (NOAA thresholds).
  if (nitrogen > 1.0 && phosphorus > 0.1) {
    return "High risk (algal bloom likely)";
  } else if (nitrogen > 0.5 || phosphorus > 0.05) {
    return "Moderate risk";
  } else {
    return "Low risk";
  }
};

const calculateDissolvedOxygen = function (temperature) {
  // in degrees celsius.
  //Calculates dissolved oxygen saturation (mg/L) using USGS formula.
  //Temperature constrained to 0-40°C (realistic water range).
  temperature = max(0, min(40, temperature)); // Clamp temperature to biological limits (inputs are also limited to 0-40)
  // Simplified USGS formula: DO_sat = 14.6 - 0.394*T + 0.00771*T² - 0.000064*T³
  const dissolvedOxygen =
    14.6 -
    0.394 * temperature +
    0.00771 * temperature ** 2 -
    0.000064 * temperature ** 3;
  return max(dissolvedOxygen, 0); // DO can't be negative
};

const calculatePh = function (acidRain, mineDrainage) {
  // Calculates pH from acid rain (H+ ions) and mine drainage (sulfuric acid).
  // Sources: EPA (1% acid rain ≈ 0.02 pH drop, 1% mining ≈ 0.05 pH drop).
  const basePh = 7.0; // Neutral pH
  const ph = basePh - 0.02 * acidRain - 0.05 * mineDrainage;
  return max(0.0, min(14.0, ph)); // pH must be 0-14
};

const calculateTurbidity = function (logging) {
  // Calculates turbidity (NTU) from logging/deforestation.
  // because deforestation -> less roots in soil -> soil erods -> sediment comes out -> washes off into waters
  // Source: EPA (10% logging → ~50 NTU increase).
  return 5.0 * logging; // Linear approximation
};

const fecalColiform = function (sewage) {
  // Calculates fecal coliform (CFU/100mL) from sewage.
  // Source: WHO (1% untreated sewage ≈ 10^4 CFU).
  return 10000 * (sewage / 100); // 1% = 100 CFU, 100% = 10,000 CFU
};

const epaCompliance = function (
  waterUse,
  waterTemp,
  acidRain,
  mineDrainage,
  deforestation,
  untreatedSewage,
  agricultureRunoff
) {
  const params = {
    DO: calculateDissolvedOxygen(waterTemp),
    pH: calculatePh(acidRain, mineDrainage),
    turbidity: calculateTurbidity(deforestation),
    fecal_coliform: fecalColiform(untreatedSewage),
    nitrate: calculateNutrients(agricultureRunoff)[0],
    phosphorus: calculateNutrients(agricultureRunoff)[1],
  };

  // Checks compliance with EPA WQS for a designated use.
  const standards = epaStandards[waterUse];
  let violations = [];

  // Check each parameter
  Object.entries(standards).forEach(([param, [minVal, maxVal]]) => {
    const value = params[param];
    if (value === undefined) return;
    if (minVal !== null && value < minVal) {
      violations.push(`${param} too low (${value.toFixed(1)} < ${minVal})`);
    }
    if (maxVal !== null && value > maxVal) {
      violations.push(`${param} too high (${value.toFixed(1)} > ${maxVal})`);
    }
  });

  return violations;
};

export default epaCompliance;
