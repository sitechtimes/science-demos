<script setup>
import Slider from 'primevue/slider';
import InputField from 'primevue/slider';
import { ref, watch } from 'vue';
import Select from 'primevue/select';

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
const tf = [true, false]

const past_algae = ref([27])
const past_staghorn_coral=ref([21])
const past_boulder_star_coral=ref([28])
const past_long_spined_urchin=ref([1160])
const past_sponge=ref([11])
const past_queen_angelfish=ref([540])
const past_nassau_grouper=ref([48])
const past_hawksbill_sea_turtle=ref([25])
const past_spotlight_parrotfish=ref([825])
const past_yellowtail_snapper=ref([240])
const past_red_lionfish=ref([0])
const past_crown_of_thorns_starfish=ref([0])

function find_mult_value(condition,reg_condition){
    let result
    if (condition === true){
        result = 0.8
    }
    else{
        const condition_difference = condition-reg_condition
        if (condition_difference<0){
            result =  (((condition_difference-(condition_difference*2))/100)+1)
        }
        else if(condition_difference === 0){
            result = false //no change, tell to ignore if value is 0
        }
        else{
            result = (condition_difference/100)
        }
    }
    return result
}
function calc_animal(mult_list, list){
    let result
    list.push(list[list.length-1])
    for (let i = 0; i<mult_list.length; i++){
        if(mult_list[i]===false){
            continue
        }
        else{
            list[list.length-1]=mult_list[i]*list[list.length-2]
        }
    }
    return list[list.length-1]
}

function calculate_everything(){
    const storm = find_mult_value(conditions.value[0].storm_severity, reg_conditions[0].storm_severity)
    const temp = find_mult_value(conditions.value[0].ocean_temp, reg_conditions[0].ocean_temp)
    const ph = find_mult_value(conditions.value[0].ocean_ph, reg_conditions[0].ocean_ph)
    const logging = find_mult_value(conditions.value[0].logging, reg_conditions[0].logging)
    const sewage = find_mult_value(conditions.value[0].sewage, reg_conditions[0].sewage)
    const agriculture = find_mult_value(conditions.value[0].agriculture, reg_conditions[0].agriculture)
    const fishing = find_mult_value(conditions.value[0].net_fishing, reg_conditions[0].net_fishing)
    const grouper = find_mult_value(conditions.value[0].grouper, reg_conditions[0].grouper)
    const snapper = find_mult_value(conditions.value[0].snapper, reg_conditions[0].snapper)
    const black = find_mult_value(conditions.value[0].black_band,reg_conditions[0].black_band)
    const white = find_mult_value(conditions.value[0].white_band,reg_conditions[0].white_band)
    const urchin = find_mult_value(conditions.value[0].sea_urchin_infection,reg_conditions[0].sea_urchin_infection)
    const lionfish = find_mult_value(conditions.value[0].red_lionfish_invasive,reg_conditions[0].red_lionfish_invasive)
    const thorns = find_mult_value(conditions.value[0].crown_of_thorns_invasive,reg_conditions[0].crown_of_thorns_invasive)
    const mult_list = [storm, temp, ph, logging, sewage, agriculture, fishing, grouper, snapper, black, white, urchin, lionfish, thorns]
    console.log(mult_list)
    animals.value[0].staghorn_coral=calc_animal(mult_list, past_staghorn_coral.value)
    animals.value[0].boulder_star_coral=calc_animal(mult_list, past_boulder_star_coral.value)    
    animals.value[0].algae=calc_animal(mult_list, past_algae.value)
    animals.value[0].long_spined_urchin=calc_animal(mult_list, past_long_spined_urchin.value)
    animals.value[0].sponge=calc_animal(mult_list, past_sponge.value)
    animals.value[0].queen_angelfish=calc_animal(mult_list, past_queen_angelfish.value)
    animals.value[0].nassau_grouper=calc_animal(mult_list, past_nassau_grouper.value)
    animals.value[0].hawksbill_sea_turtle=calc_animal(mult_list, past_hawksbill_sea_turtle.value)
    animals.value[0].spotlight_parrotfish=calc_animal(mult_list, past_spotlight_parrotfish.value)
    animals.value[0].yellowtail_snapper=calc_animal(mult_list, past_yellowtail_snapper.value)
    animals.value[0].red_lionfish=calc_animal(mult_list, past_red_lionfish.value)    
    animals.value[0].crown_of_thorns_starfish=calc_animal(mult_list, past_crown_of_thorns_starfish.value)
    console.log(animals.value[0])
}
</script>
<template>
    Storm Severity:
    <InputText v-model.number="conditions[0].storm_severity" />
    <Slider v-model="conditions[0].storm_severity" :step="5" />
    Ocean Temp:
    <InputText v-model.number="conditions[0].ocean_temp" />
    <Slider v-model="conditions[0].ocean_temp" :step="5" />
    Ocean pH:
    <InputText v-model.number="conditions[0].ocean_ph" />
    <Slider v-model="conditions[0].ocean_ph" :step="5" />
    Logging:
    <InputText v-model.number="conditions[0].logging" />
    <Slider v-model="conditions[0].logging" :step="5" />
    Sewage:
    <InputText v-model.number="conditions[0].sewage" />
    <Slider v-model="conditions[0].sewage" :step="5" />
    Agriculture:
    <InputText v-model.number="conditions[0].agriculture" />
    <Slider v-model="conditions[0].agriculture" :step="5" />
    Net Fishing:
    <InputText v-model.number="conditions[0].net_fishing" />
    <Slider v-model="conditions[0].net_fishing" :step="5" />
    Grouper:
    <InputText v-model.number="conditions[0].grouper" />
    <Slider v-model="conditions[0].grouper" :step="5" />
    Snapper:
    <InputText v-model.number="conditions[0].snapper" />
    <Slider v-model="conditions[0].snapper" :step="5" />
    Black Band:
    <InputText v-model.number="conditions[0].black_band" />
    <Slider v-model="conditions[0].black_band" :step="5" />
    White Band:
    <InputText v-model.number="conditions[0].white_band" />
    <Slider v-model="conditions[0].white_band" :step="5" />
    Sea Urchin Infection:
    <InputText v-model.number="conditions[0].sea_urchin_infection" />
    <Slider v-model="conditions[0].sea_urchin_infection" :step="5" />
    Red Lionfish Invasive Species:
    <Select v-model="conditions[0].red_lionfish_invasive" :options="tf" />
    Crown of Thorns Invasive Species:
    <Select v-model="conditions[0].crown_of_thorns_invasive" :options="tf" />

    <Button @click="calculate_everything()">Progress Year</Button>

    {{ animals[0] }}
</template>