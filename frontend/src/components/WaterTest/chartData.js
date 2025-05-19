import { waterTestConditions } from "@/Stores/watertest/waterTestStore";

function setPhData() {
  const heatmapData = [
    {
      y: ["pH"],
      z: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]],
      type: "heatmap",
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

export { setPhData };
