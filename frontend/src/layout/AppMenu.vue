<script setup>
import { ref } from 'vue';

import AppMenuItem from './AppMenuItem.vue';

const model = ref([
    {
        label: 'Home',
        items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' }]
    },
    {
        label: 'Science Demos',
        items: [
            {
                label: 'Environmental Science',
                icon: 'pi pi-fw pi-bookmark',
                items: [
                        { label: 'Coral Reefs and Abiotic Factors', icon: 'pi pi-fw pi-bookmark', to: '/apes/abioticcoral' },
                ]
            },
            {
                label: 'Biology',
                icon: 'pi pi-fw pi-bookmark',
                items: [
                        { label: 'Cell Division', icon: 'pi pi-fw pi-bookmark', to: '/bio/celldivision' },
                ]
            },
            /* {
                label: '-- Science',
                icon: 'pi pi-fw pi-bookmark',
                items: [
                    {
                        label: 'Submenu 2.1',
                        icon: 'pi pi-fw pi-bookmark',
                        items: [
                        { label: 'Placeholder', icon: 'pi pi-fw pi-bookmark' },
                        ]
                    },
                ]
            } */
        ]
    },
]);
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
    </ul>
</template>

<style lang="scss" scoped></style>
