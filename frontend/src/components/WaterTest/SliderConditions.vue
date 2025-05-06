<script setup>
import SliderInput from "../InputComponents/SliderInput.vue";
import { waterTestConditions } from "@/Stores/watertest/waterTestStore";
import { ref } from "vue";
import SelectButton from "primevue/selectbutton";

const dataStore = waterTestConditions();
const sliderVariables = ref(["waterTemp",
  "acidRain",
  "mineDrainage",
  "deforestation",
  "untreatedSewage",]);
// if we do include more conditions we will have to include a selectbutton or dropdown to switch between
</script>

<template>
  <div class="flex flex-col gap-4">
    <div>
      <label for="water use" class="block">Water Use Type</label>
      <SelectButton aria-label="water use" v-model="dataStore.waterUse.inputSelected"
        :options="dataStore.waterUse.inputList" />
    </div>
    <div v-for="variable in sliderVariables" :key="variable">
      <SliderInput :var="dataStore[variable]" />
    </div>
    <!-- return to original settings button here? will need store to have default value -->
  </div>
</template>
