import { defineStore } from "pinia";
import { ref } from "vue";

export const cellDivStore = defineStore("cellDivData", () => {
  const currentTime = ref(0); // keep track of current time value
  const currentCells = ref(1);
  const currentState = ref(0);
  const initialGraph = {
    x: [0],
    y: [1],
  };
  const graphData = ref(initialGraph);

  function clearGraph() {
    graphData.value = initialGraph;
    currentTime.value = 0;
    currentCells.value = 1;
  }
  function addTime(divType) {
    switch (divType) {
      case "mitosis": // 1 cycle of mitosis takes 1 hour, 4 phases 5 cell states
        currentTime.value = currentTime.value + 0.25;
        break;
      case "meiosis":
        currentTime.value = currentTime.value + 8; // 1 cycle spermatogenesis takes 64 days, 8 phases
      default:
        break;
    }
  }

  function addPoint() {
    currentCells.value = currentCells.value * 2;
    graphData.value = {
      x: [...graphData.value.x, currentTime.value],
      y: [...graphData.value.y, currentCells.value],
    };
  }

  return {
    currentTime,
    graphData,
    clearGraph,
    addTime,
    addPoint,
  };
});
