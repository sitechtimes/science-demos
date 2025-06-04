import { populationStore } from "@/Stores/populationStore";

const popStore = populationStore();

const setChartData = () => {
  let data = [];
  // popStore.forEach();
  // return data options
  return [
    {
      ...populationStore,
      name: "cell number",
      fill: "tozeroy",
      type: "scatter",
      line: {
        color: "#FFF",
      },
    },
  ];
};

export default setChartData;
