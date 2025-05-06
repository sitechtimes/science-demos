<template>
  <div class="width: 800px; height: 600px;">
    <UnityVue :unity="unityContext" tabindex="0" />
  </div>
</template>

<script setup>
import UnityWebgl from "unity-webgl";
import UnityVue from "unity-webgl/vue";

const cacheBuster = Date.now(); // Unique number each load

const unityContext = new UnityWebgl({
  loaderUrl: `/Build/Coral/CoralReef.loader.js?v=${cacheBuster}`,
  dataUrl: `/Build/Coral/CoralReef.data?v=${cacheBuster}`,
  frameworkUrl: `/Build/Coral/CoralReef.framework.js?v=${cacheBuster}`,
  codeUrl: `/Build/Coral/CoralReef.wasm?v=${cacheBuster}`,
});

unityContext
  .on("progress", (p) => console.log("loading :", p))
  .on("mounted", () => console.log("unity mounted ..."))
  .on("debug", (msg) => console.log("unity debug", msg));

unityContext.addUnityListener("gameStart", (msg) => {
  alert(msg);
  console.log("gameStart : ", msg);
});
</script>
