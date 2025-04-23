<script setup>
import { ref } from 'vue';
import menuModel from './MenuModel';
import AppMenuItem from './AppMenuItem.vue';

const model = ref(menuModel);
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
    </ul>
</template>

<style scoped></style>
