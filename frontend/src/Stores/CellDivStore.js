import { defineStore } from "pinia";
import { ref } from "vue";

export const cellDivStore = defineStore("data", () => {
  const currentTime = ref(0); // keep track of current time value
  const graphData = ref([{ x: 0, y: 0 }]);

  function clearGraph() {
    graphData.value = [];
    currentTime.value = 0;
  }
  function addTime(divType) {
    switch (divType) {
      case "mitosis": // 1 cycle of mitosis takes 1 hour, 4 phases
        currentTime.value = currentTime.value + 0.25;
        break;
      case "meiosis":
        currentTime.value = currentTime.value + 8; // 1 cycle spermatogenesis takes 64 days, 8 phases
      default:
        break;
    }
  }

  function addPoint(cells) {
    graphData.value.push({ x: currentTime.value, y: cells });
  }

  return {
    currentTime,
    graphData,
    clearGraph,
    addTime,
    addPoint,
  };
});
