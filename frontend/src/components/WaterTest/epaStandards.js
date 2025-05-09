const epaStandards = {
  coldAquaticLife: {
    dissolvedOxygen: [6.0, "none"], // minimum dissolved oxygen
    pH: [6.5, 8.5], // range of acceptable pH
    turbidity: ["none", 10], // Max 10 NTU increase from natural
    fecal_coliform: ["none", 200], // Max 200 CFU/100mL (geometric mean)
  },
  warmAquaticLife: {
    dissolvedOxygen: [5.0, "none"], // Minimum 5.0 mg/L
    pH: [6.5, 9.0], // range of acceptable pH
    turbidity: ["none", 50], // Max 50 NTU
    fecal_coliform: ["none", 200], // Max 200 CFU/100mL (geometric mean)
  },
  recreationWater: {
    fecal_coliform: ["none", 200], // Single sample max
    pH: [6.5, 8.5], //range of acceptable pH
  },
  drinkingWater: {
    nitrate: ["none", 10.0], // Max 10 mg/L NO3-N
    phosphorus: ["none", 0.1], // Max 0.1 mg/L (varies by state)
    pH: [6.5, 8.5],
  },
};

// Source: https://www.ecfr.gov/current/title-40/chapter-I/subchapter-D/part-131
export default epaStandards;
