const setChartOptions = (styles, chartType) => {
  // return chart options
  const chartOptions = {
    title: "Organism Population",
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
      title: {
        text: "years",
      },
      zeroline: false,
      gridcolor: styles.surfaceBorder,
    },
    yaxis: {
      title: {
        text:
          chartType === "Population %"
            ? "% of organisms"
            : chartType === "Population Count"
              ? "# of organisms"
              : "undefined",
      },
      gridcolor: styles.surfaceBorder,
    },
  };
  return chartOptions;
};

export default setChartOptions;
