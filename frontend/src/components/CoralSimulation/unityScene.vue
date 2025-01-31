<template>
    <div style="width: 800px; height: 600px; border: 1px solid #f00">
    <UnityVue :unity="unityContext" tabindex="0" />
  </div>
</template>

<script setup>
import UnityWebgl from 'unity-webgl';
import UnityVue from 'unity-webgl/vue';

const unityContext = new UnityWebgl({
  loaderUrl:
    'Build\Sciencedemowebgl.data.br',
  dataUrl:
    'Build\Sciencedemowebgl.data.br',
  frameworkUrl:
    'Build\Sciencedemowebgl.wasm.br',
  codeUrl:
    'Build\Sciencedemowebgl.loader.js',
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