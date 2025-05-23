import { waterTestConditions } from "@/Stores/watertest/waterTestStore";

function setPhData() {
  const heatmapData = [
    {
      y: ["pH"],
      z: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]],
      type: "heatmap",
      colorscale: [
        ["0.0", "#ee1c25"],
        ["0.25", "#f5ed1c"],
        ["0.5", "#33a94b"],
        ["0.75", "#3853a4"],
        ["1.0", "#462c83"],
      ],
    },
    {
      type: "scatter",
      x: [waterTestConditions().compliance[1].pH],
      y: ["pH"],
      mode: "markers",
      name: "your water's current pH level",
      marker: {
        color: "rgba(99, 99, 196)",
        line: {
          color: "rgba(156, 165, 196, 1.0)",
          width: 1,
        },
        symbol: "circle",
        size: 16,
      },
    },
  ];
  return heatmapData;
}

function setOxygenData() {
  const heatmapData = [
    {
      y: ["oxygen"],
      z: [[100, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]],
      type: "heatmap",
    },
    {
      type: "scatter",
      x: [waterTestConditions().compliance[1].DO],
      y: ["oxygen"],
      mode: "markers",
      name: "your water's current pH level",
      marker: {
        color: "rgba(99, 99, 196)",
        line: {
          color: "rgba(156, 165, 196, 1.0)",
          width: 1,
        },
        symbol: "circle",
        size: 16,
      },
    },
  ];
  return heatmapData;
}

function setNutrientData() {
  const barData = [
    {
      x: ["nitrogen", "phosphorus"],
      y: [
        waterTestConditions().compliance[1].nitrate,
        waterTestConditions().compliance[1].phosphorus,
      ],
      type: "bar",
      marker: {
        color: ["#a47292", "#2567a2"],
      },
    },
  ];

  return barData;
}

export { setOxygenData, setPhData, setNutrientData };
