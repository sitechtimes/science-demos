const setChartOptions = (styles, chartType) => {
  // return chart options
  const chartOptions = {
    title: "Number of Cells",
    plot_bgcolor: styles.surfaceCard,
    paper_bgcolor: styles.surfaceCard,
    margin: {
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
    showlegend: false,
  };
  return chartOptions;
};

export default setChartOptions;
