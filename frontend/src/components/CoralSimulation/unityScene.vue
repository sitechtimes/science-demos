<template>
    <div id="unity-container" :class="containerClass" ref="unityContainer">
      <canvas id="unity-canvas" width="960" height="600" tabindex="-1"></canvas>
      <div id="unity-loading-bar">
        <div id="unity-logo"></div>
        <div id="unity-progress-bar-empty">
          <div id="unity-progress-bar-full" :style="{ width: progressBarWidth }"></div>
        </div>
      </div>
      <div id="unity-warning"></div>
      <div id="unity-footer">
        <div id="unity-webgl-logo"></div>
        <div id="unity-fullscreen-button" @click="handleFullscreen"></div>
        <div id="unity-build-title">scienceDemo</div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  
  const progressBarWidth = ref('0%');
  const containerClass = ref('unity-desktop');
  const unityContainer = ref(null);
  
  const unityShowBanner = (msg, type) => {
    const warningBanner = document.querySelector('#unity-warning');
    const div = document.createElement('div');
    div.innerHTML = msg;
    warningBanner.appendChild(div);
    if (type === 'error') {
      div.style = 'background: red; padding: 10px;';
    } else {
      if (type === 'warning') {
        div.style = 'background: yellow; padding: 10px;';
      }
      setTimeout(() => {
        warningBanner.removeChild(div);
        updateBannerVisibility();
      }, 5000);
    }
    updateBannerVisibility();
  };
  
  const updateBannerVisibility = () => {
    const warningBanner = document.querySelector('#unity-warning');
    warningBanner.style.display = warningBanner.children.length ? 'block' : 'none';
  };
  
  const handleFullscreen = () => {
    if (window.unityInstance) {
      window.unityInstance.SetFullscreen(1);
    }
  };
  
  onMounted(() => {
    const container = document.querySelector("#unity-container");
    const canvas = document.querySelector("#unity-canvas");
    const loadingBar = document.querySelector("#unity-loading-bar");
    const progressBarFull = document.querySelector("#unity-progress-bar-full");
    const fullscreenButton = document.querySelector("#unity-fullscreen-button");
  
    let buildUrl = "Build";
    let loaderUrl = `${buildUrl}/Sciencedemowebgl.loader.js`;
  
    let config = {
      dataUrl: `${buildUrl}/Sciencedemowebgl.data.br`,
      frameworkUrl: `${buildUrl}/Sciencedemowebgl.framework.js.br`,
      codeUrl: `${buildUrl}/Sciencedemowebgl.wasm.br`,
      streamingAssetsUrl: "StreamingAssets",
      companyName: "DefaultCompany",
      productName: "scienceDemo",
      productVersion: "1.0",
      showBanner: unityShowBanner,
    };
  
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      const meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content = 'width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes';
      document.head.appendChild(meta);
      containerClass.value = 'unity-mobile';
      canvas.className = "unity-mobile";
    } else {
      canvas.style.width = "960px";
      canvas.style.height = "600px";
    }
  
    loadingBar.style.display = "block";
  
    const script = document.createElement("script");
    script.src = loaderUrl;
    script.onload = () => {
      createUnityInstance(canvas, config, (progress) => {
        progressBarWidth.value = `${100 * progress}%`;
      }).then((unityInstance) => {
        loadingBar.style.display = "none";
        window.unityInstance = unityInstance;  
      }).catch((message) => {
        alert(message);
      });
    };
  
    if (unityContainer.value) {
      unityContainer.value.appendChild(script);
    }
  });
  
  onBeforeUnmount(() => {
    const unityContainerEl = unityContainer.value;
    if (unityContainerEl && unityContainerEl.contains(script)) {
      unityContainerEl.removeChild(script);
    }
  });
  </script>
  
  <style scoped>
  #unity-container.unity-mobile {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  #unity-loading-bar {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  #unity-progress-bar-empty {
    width: 100%;
    height: 20px;
    background-color: #f0f0f0;
  }
  
  #unity-progress-bar-full {
    height: 100%;
    background-color: #4caf50;
  }
  </style>
  