<template>
  <div class="w-full aspect-[16/9]">
    <UnityVue :unity="unityContext" tabindex="0" class="w-full h-full" />
  </div>
</template>

<script setup>
import UnityWebgl from "unity-webgl";
import UnityVue from "unity-webgl/vue";
import { populationStore } from "@/Stores/populationStore";

const popStore = populationStore();
const cacheBuster = Date.now(); // Unique number each load
console.log(popStore)
window.gameStart = function (msg) {
  console.log("gameStart:", msg);
};

const unityContext = new UnityWebgl({
  loaderUrl: `/Build/Coral/CoralReef.loader.js?v=${cacheBuster}`,
  dataUrl: `/Build/Coral/CoralReef.data?v=${cacheBuster}`,
  frameworkUrl: `/Build/Coral/CoralReef.framework.js?v=${cacheBuster}`,
  codeUrl: `/Build/Coral/CoralReef.wasm?v=${cacheBuster}`,
});

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
