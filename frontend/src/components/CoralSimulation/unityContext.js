import UnityWebgl from "unity-webgl";
import UnityVue from "unity-webgl/vue";

const cacheBuster = Date.now(); // Unique number each load

const unityContext = new UnityWebgl({
    loaderUrl: `/Build/Coral/CoralReef.loader.js?v=${cacheBuster}`,
    dataUrl: `/Build/Coral/CoralReef.data?v=${cacheBuster}`,
    frameworkUrl: `/Build/Coral/CoralReef.framework.js?v=${cacheBuster}`,
    codeUrl: `/Build/Coral/CoralReef.wasm?v=${cacheBuster}`,
  });

  export {unityContext}