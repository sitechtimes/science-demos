function phOptions(styles) {
  const layout = {
    title: "Water pH",
    plot_bgcolor: styles.surfaceCard,
    paper_bgcolor: styles.surfaceCard,
    margin: {
      t: 10,
      b: 10,
      l: 40,
      r: 40,
    },
    font: {
      size: 10,
      color: styles.textColor,
      family: styles.font,
    },
    height: 70,
    xaxis: {
      fixedrange: true,
    },
    yaxis: {
      fixedrange: true,
    },
  };

  return layout;
}

function oxygenOptions(styles) {
  const layout = {
    title: "Water pH",
    plot_bgcolor: styles.surfaceCard,
    paper_bgcolor: styles.surfaceCard,
    margin: {
      t: 10,
      b: 10,
      l: 40,
      r: 40,
    },
    font: {
      size: 10,
      color: styles.textColor,
      family: styles.font,
    },
    height: 70,
    xaxis: {
      fixedrange: true,
    },
    yaxis: {
      fixedrange: true,
    },
  };

  return layout;
}

function turbidityOptions(styles) {
  const layout = {
    title: "Turbidity",
    plot_bgcolor: styles.surfaceCard,
    paper_bgcolor: styles.surfaceCard,
    margin: {
      t: 40,
      b: 40,
      l: 40,
      r: 40,
    },
    font: {
      size: 10,
      color: styles.textColor,
      family: styles.font,
    },
    height: 280,
    width: 300,
    xaxis: {
      fixedrange: true,
    },
    yaxis: {
      fixedrange: true,
    },
  };

  return layout;
}

function feceOptions(styles) {
  const layout = {
    title: "Fecal Coliform",
    plot_bgcolor: styles.surfaceCard,
    paper_bgcolor: styles.surfaceCard,
    margin: {
      t: 40,
      b: 40,
      l: 40,
      r: 40,
    },
    font: {
      size: 10,
      color: styles.textColor,
      family: styles.font,
    },
    height: 280,
    width: 300,
    xaxis: {
      fixedrange: true,
    },
    yaxis: {
      fixedrange: true,
    },
  };

  return layout;
}

function nutrientOptions(styles) {
  const layout = {
    showlegend: false,
    title: "Nitrogen & Phosphorus Concentrations",
    plot_bgcolor: styles.surfaceCard,
    paper_bgcolor: styles.surfaceCard,
    margin: {
      t: 40,
      b: 40,
      l: 40,
      r: 40,
    },
    font: {
      size: 10,
      color: styles.textColor,
      family: styles.font,
    },
    xaxis: {
      fixedrange: true,
    },
    yaxis: { range: [0, 8], fixedrange: true },
    width: 330,
  };

  return layout;
}

export {
  oxygenOptions,
  phOptions,
  turbidityOptions,
  feceOptions,
  nutrientOptions,
};
