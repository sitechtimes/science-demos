import { populationStore } from "@/Stores/populationStore";

const popStore = populationStore();

const setChartData = (chartType) => {
  const organismsData = {
    algae: { color: "#11cf70", group: "benthic" },
    boulderStarCoral: { color: "#686868", group: "coral" },
    crownOfThornsStarfish: { color: "#cfcf6f", group: "invasive" },
    hawksbillSeaTurtle: { color: "#ff9a34", group: "keystone" },
    longSpinedUrchin: { color: "#ff48ff", group: "keystone" },
    nassauGrouper: { color: "#9d9d3c", group: "consumer fish" },
    queenAngelfish: { color: "#a348a3", group: "consumer fish" },
    redLionfish: { color: "#5e0000", group: "invasive" },
    sponge: { color: "#ffce9d", group: "benthic" },
    spotlightParrotfish: { color: "#0b0bce", group: "keystone" },
    staghornCoral: { color: "#cc0234", group: "coral" },
    yellowtailSnapper: { color: "#cc9966", group: "consumer fish" },
  };
  return Object.entries(organismsData).map(([organism, { color, group }]) => ({
    y:
      chartType === "Population Count"
        ? popStore[organism].population.map((ele) => Math.round(ele))
        : popStore[organism].population.map((ele) =>
            Math.round((ele / popStore[organism].maxCapacity[0]) * 100)
          ),
    name: organism,
    type: "scatter",
    line: { color: color },
    legendgroup: group,
  }));
};

export default setChartData;
