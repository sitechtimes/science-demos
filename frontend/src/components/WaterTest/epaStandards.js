export default epaStandards = {
  coldAquaticLife: {
    dissolvedOxygen: 6.0, // minimum dissolved oxygen
    pH: [6.5, 8.5], // range of acceptable pH
    turbidity: 10, // Max 10 NTU increase from natural
    fecal_coliform: 200, // Max 200 CFU/100mL (geometric mean)
  },
  warmAquaticLife: {
    dissolvedOxygen: 5.0, // Minimum 5.0 mg/L
    pH: (6.5, 9.0), // range of acceptable pH
    turbidity: 50, // Max 50 NTU
  },
  recreationWater: {
    fecal_coliform: (None, 200), // Single sample max
    pH: [6.5, 8.5], //range of acceptable pH
  },
  drinkingWater: {
    nitrate: (None, 10.0), // Max 10 mg/L NO3-N
    phosphorus: (None, 0.1), // Max 0.1 mg/L (varies by state)
    pH: (6.5, 8.5),
  },
};

// Source: https://www.ecfr.gov/current/title-40/chapter-I/subchapter-D/part-131
