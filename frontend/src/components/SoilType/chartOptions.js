function makeAxis(title, styles) {
  // styling for ternary plot
  return {
    title: {
      text: title,
    },
    ticksuffix: "%",
    min: 0.01,
    linewidth: 2,
    ticks: "outside",
    ticklen: 8,
    showgrid: true,
    gridcolor: styles.surfaceBorder,
    gridwidth: 1,
    zerolinecolor: styles.textColorSecondary,
  };
}

function setChartOptions(styles) {
  // set chart styles
  const layout = {
    ternary: {
      sum: 100,
      aaxis: makeAxis("Clay", styles),
      baxis: makeAxis("Sand", styles),
      caxis: makeAxis("Silt", styles),
    },
    title: "Soil Types",
    plot_bgcolor: styles.surfaceCard,
    paper_bgcolor: styles.surfaceCard,
    showlegend: false,
    margin: {
      // should change to computed margin
      t: 50,
      b: 50,
      l: 50,
      r: 50,
    },
    font: {
      size: 10,
      color: styles.textColor,
      family: styles.font,
    },
  };
  return layout;
}

export default setChartOptions;
