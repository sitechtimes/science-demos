function phOptions(styles) {
  // set chart styles
  const layout = {
    title: "Water pH",
    plot_bgcolor: styles.surfaceCard,
    paper_bgcolor: styles.surfaceCard,
    margin: {
      // should change to computed margin
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
  };

  return layout;
}

function oxygenOptions(styles) {
  const layout = {
    title: "Water pH",
    plot_bgcolor: styles.surfaceCard,
    paper_bgcolor: styles.surfaceCard,
    margin: {
      // should change to computed margin
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
  };

  return layout;
}

export { oxygenOptions, phOptions };
