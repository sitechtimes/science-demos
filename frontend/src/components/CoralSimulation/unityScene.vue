<template>
  <div class="w-full aspect-[16/9]">
    <UnityVue :unity="unityContext" tabindex="0" class="w-full h-full" />
  </div>
</template>

<script setup>
import UnityVue from "unity-webgl/vue";
import { populationStore } from "@/Stores/populationStore";
import { unityContext, updatePop } from "./unityContext.js";
const popStore = populationStore();

window.gameStart = function (msg) {
  console.log("gameStart:", msg);
};

unityContext
  .on("progress", (p) => console.log("loading :", p))
  .on("mounted", () => console.log("unity mounted ..."))
  .on("debug", (msg) => console.log("unity debug", msg))
  .on("mounted", () => {
    updatePop(popStore);
  });
</script>
