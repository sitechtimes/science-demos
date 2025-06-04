const setChartOptions = (styles, cellType) => {
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
        text:
          cellType === "Mitosis"
            ? "time (hours)"
            : cellType === "Meiosis"
              ? "time (days)"
              : "undefined",
      },
      zeroline: false,
      gridcolor: styles.surfaceBorder,
    },
    yaxis: {
      title: {
        text: "number of cells",
      },
      gridcolor: styles.surfaceBorder,
    },
    showlegend: false,
  };
  return chartOptions;
};

export default setChartOptions;
