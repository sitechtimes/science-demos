// mitosis 60 min https://bionumbers.hms.harvard.edu/bionumber.aspx?s=n&v=4&id=112373
// spermatogenesis (sperm meiosis) 64 days https://www.aatbio.com/resources/faq-frequently-asked-questions/how-long-does-meiosis-take

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

const setChartData = (storeData, styles) => {
  // return data options
  return [
    {
      ...storeData,
      name: "cell number",
      fill: "tozeroy",
      type: "scatter",
      line: {
        color: styles.primaryColor,
      },
    },
  ];
};

export { setChartOptions, setChartData };
