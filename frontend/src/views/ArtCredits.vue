<template>
    <h1
        class="text-3xl lg:text-5xl font-bold text-surface-900 dark:text-surface-0 mb-4 lg:leading-normal text-center lg:text-left">
        Art Credits</h1>
    <div class="card">
        <DataView :value="demoRoutes" :layout="'grid'">
            <template #grid="slotProps">
                <div class="grid grid-cols-12 gap-4">
                    <div v-for="(item, index) in slotProps.items" :key="index"
                        class="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-6 p-2">
                        <div
                            class="p-6 border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 rounded flex flex-col">
                            <i :class="`${item.icon} w-full rounded`" style="font-size: 5rem"></i>
                            <div class="pt-6">
                                <div class="flex flex-row justify-between items-start gap-2">
                                    <div>
                                        <div class="text-lg font-medium mt-1" v-if="item.artistName != ''">assets by {{
                                            item.artistName }}</div>
                                    </div>
                                </div>
                                <div class="flex flex-col gap-6 mt-6">
                                    <span class="text-2xl font-semibold">{{ item.label }}</span>
                                    <div class="flex gap-2">
                                        <Button icon="pi pi-external-link" class="ml-2" as="router-link"
                                            label="go to demo" :to="item.to" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </DataView>
    </div>
</template>

<script setup>
import menuModel from '@/layout/MenuModel';
import DataView from 'primevue/dataview';
import Button from 'primevue/button';

const demoRoutes = [];

menuModel[1].items.forEach(item => {
    demoRoutes.push(...item.items);
})
</script>

<style scoped></style>