import UnityWebgl from "unity-webgl";
import UnityVue from "unity-webgl/vue";

const cacheBuster = Date.now(); // Unique number each load

const unityContext = new UnityWebgl({
    loaderUrl: `/Build/Coral/CoralReef.loader.js?v=${cacheBuster}`,
    dataUrl: `/Build/Coral/CoralReef.data?v=${cacheBuster}`,
    frameworkUrl: `/Build/Coral/CoralReef.framework.js?v=${cacheBuster}`,
    codeUrl: `/Build/Coral/CoralReef.wasm?v=${cacheBuster}`,
  });

function updatePop(popStore){
  //make population update based on environmental factors here 
  Object.keys(popStore.finalPopulations).forEach((key) => {
    const payload = {
      popName: key,
      population: popStore.finalPopulations[key],
    };
    const jsonString = JSON.stringify(payload);
    unityContext.sendMessage("FishManager", "UpdatePop", jsonString);
  });
  unityContext.sendMessage("FishManager", "initializeScene");
}
  export {unityContext,updatePop}