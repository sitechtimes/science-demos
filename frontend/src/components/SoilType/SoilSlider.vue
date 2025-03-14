<script setup>
import SliderInput from "../input_components/SliderInput.vue";
import { CarbonStore } from "@/Stores/CarbonStore";
import { ref } from "vue";

const sliderValues = defineModel();
// if we do include more conditions we will have to include a selectbutton or dropdown to switch between
</script>

<template>
    <div class="flex flex-col gap-4">
        <div v-for="slider in sliderValues" :key="slider.value">
            <SliderInput :var="slider" />
        </div>
    </div>
</template>
