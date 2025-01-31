<template>
    <div style="width: 800px; height: 600px; border: 1px solid #f00">
    <UnityVue :unity="unityContext" tabindex="0" />
  </div>
</template>

<script setup>
import UnityWebgl from 'unity-webgl';
import UnityVue from 'unity-webgl/vue';

const cacheBuster = Date.now(); // Unique number each load

const unityContext = new UnityWebgl({
  loaderUrl: `/Build/Downloads.loader.js?v=${cacheBuster}`,
  dataUrl: `/Build/Downloads.data?v=${cacheBuster}`,
  frameworkUrl: `/Build/Downloads.framework.js?v=${cacheBuster}`,
  codeUrl: `/Build/Downloads.wasm?v=${cacheBuster}`,
});

unityContext
  .on('progress', (p) => console.log('loading :', p))
  .on('mounted', () => console.log('unity mounted ...'))
  .on('debug', (msg) => console.log('unity debug', msg));

unityContext.addUnityListener('gameStart', (msg) => {
  alert(msg);
  console.log('gameStart : ', msg);
});

</script>