<template>
  <div class="w-full aspect-[16/9]">
    <UnityVue :unity="unityContext" tabindex="0" class="w-full h-full" />
  </div>
</template>

<script setup>
import UnityWebgl from "unity-webgl";
import UnityVue from "unity-webgl/vue";
import { populationStore } from "@/Stores/populationStore";
import {unityContext} from "./unityContext.js"
const popStore = populationStore();
console.log(popStore)
window.gameStart = function (msg) {
  console.log("gameStart:", msg);
};



unityContext
  .on("progress", (p) => console.log("loading :", p))
  .on("mounted", () => console.log("unity mounted ..."))
  .on("debug", (msg) => console.log("unity debug", msg))
  .on('mounted', () => {
    Object.keys(popStore.finalPopulations).forEach(key => {
  const combined = `${key}|${popStore.finalPopulations[key]}`;
  unityContext.sendMessage("FishManager", "UpdatePop", combined);
});

  unityContext.sendMessage(
    "FishManager",
    "initializeScene",
  )
});

</script>
