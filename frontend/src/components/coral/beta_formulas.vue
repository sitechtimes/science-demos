<script setup>
import Slider from 'primevue/slider';
import InputField from 'primevue/slider';
import { ref, watch } from 'vue';

const reg_animals = [{
    reg_staghorn_coral: 21,
    reg_boulder_star_coral: 28,
    reg_algae: 27,
    reg_long_spined_urchin: 1160,
    reg_sponge: 11,
    reg_queen_angelfish: 540,
    reg_nassau_grouper: 48,
    reg_hawksbill_sea_turtle: 25,
    reg_spotlight_parrotfish: 825,
    reg_yellowtail_snapper: 240,
    reg_red_lionfish: 0,
    reg_crown_of_thorns_starfish: 0
}]
const reg_conditions = [{
    storm_severity: 20,
    ocean_temp: 27,
    ocean_ph:8.1,
    logging:0,
    sewage:0,
    agriculture:0,
    net_fishing:10,
    grouper: 0,
    snapper: 0,
    black_band: 0,
    white_band: 0,
    sea_urchin_infection: 0,
    red_lionfish_invasive: false,
    crown_of_thorns_invasive: false
}]
const animals = ref([{
    staghorn_coral: 21,
    boulder_star_coral: 28,
    algae: 27,
    long_spined_urchin: 1160,
    sponge: 11,
    queen_angelfish: 540,
    nassau_grouper: 48,
    hawksbill_sea_turtle: 25,
    spotlight_parrotfish: 825,
    yellowtail_snapper: 240,
    red_lionfish: 0,
    crown_of_thorns_starfish: 0
}])
const conditions = ref([{
    storm_severity: 20,
    ocean_temp: 27,
    ocean_ph:8.1,
    logging:0,
    sewage:0,
    agriculture:0,
    net_fishing:10,
    grouper: 0,
    snapper: 0,
    black_band: 0,
    white_band: 0,
    sea_urchin_infection: 0,
    red_lionfish_invasive: false,
    crown_of_thorns_invasive: false
}])
const past_algae = ref([27])
function calculate_animal(condition, reg_condition, animal, reg_animal, list){
    const condition_difference = condition-reg_condition
    let result
    console.log(list.length)
    if (list.length === 1){
        console.log('list length 1')
        if (condition_difference<0){
            result = animal * (((condition_difference-(condition_difference*2))/100)+1)
        }
        else if(condition_difference === 0){
            result = animal
        }
        else{
            result = animal * (condition_difference/100)
        }
    }
    else{
        console.log(list[list.length-1])
        if (condition_difference<0){
            result = list[list.length-1] * (((condition_difference-(condition_difference*2))/100)+1)
        }
        else if(condition_difference === 0){
            result = list[list.length-1]
        }
        else{
            result = list[list.length-1] * (condition_difference/100)
        }
    }
    console.log(condition_difference, result)
    past_algae.value.push(result)
    return result
}
function calc_algae(condition,reg_condition,animal,reg_animal, list){
    console.log("Storm severity = "+ conditions.value[0].storm_severity)
    animals.value[0].algae = calculate_animal(condition,reg_condition,animal,reg_animal, list)
    console.log("Algae = "+ animals.value[0].algae)
    console.log(past_algae.value)
}
function calc_algae2(){
    const algae=calc_algae(conditions.value[0].storm_severity,reg_conditions[0].storm_severity,animals.value[0].algae,reg_animals[0].reg_algae, past_algae.value)
    animals.value[0].algae = algae
}
</script>
<template>
    <InputText v-model.number="conditions[0].storm_severity" />
    <Slider v-model="conditions[0].storm_severity" :step="5" />
    <Button @click="calc_algae2()">Progress Year</Button>
</template>