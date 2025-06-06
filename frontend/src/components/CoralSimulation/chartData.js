import { populationStore } from "@/Stores/populationStore";

const popStore = populationStore();

const setChartData = () => {
  let data = [];
  /* popStore.value.forEach((element) => {
    console.log(element);
  }); */
  let organisms = [
    "algae",
    "boulderStarCoral",
    "crownOfThornsStarfish",
    "hawksbillSeaTurtle",
    "longSpinedUrchin",
    "nassauGrouper",
    "queenAngelfish",
    "redLionfish",
    "sponge",
    "spotlightParrotfish",
    "staghornCoral",
    "yellowtailSnapper",
  ];

  let colors = [
    "#11cf70",
    "#686868",
    "#cfcf6f",
    "#ff9a34",
    "#ff48ff",
    "#9d9d3c",
    "#a348a3",
    "#ffce9d",
    "#ffce9d",
    "#0b0bce",
    "#cc0234",
    "#ffce9d",
  ];

  organisms.forEach((element, index) => {
    data.push({
      y: popStore[element].population,
      name: element,
      type: "scatter",
      line: {
        color: colors[index],
      },
    });
  });
  // return data options
  return data;
};

export default setChartData;
