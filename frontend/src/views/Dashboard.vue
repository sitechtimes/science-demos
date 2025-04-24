<template>
    <div class="flex lg:flex-row flex-col gap-4 card">
        <div class="flex-1 flex items-center justify-center">
            <div class="p-6 pt-12 lg:p-12">
                <h1
                    class="text-3xl lg:text-5xl font-bold text-surface-900 dark:text-surface-0 mb-4 lg:leading-normal text-center lg:text-left">
                    See a variety of science demos.
                </h1>
                <p class="text-surface-700 dark:text-surface-200 leading-normal mb-8 text-center lg:text-left">
                    Developed with Unity WebGL and Sakai Vue template.
                </p>
            </div>
        </div>
        <div class="flex-1 overflow-hidden">
            <Carousel :value="demoRoutes" :numVisible="1" :numScroll="1">
                <template #item="slotProps">
                    <div class="border border-surface-200 dark:border-surface-700 rounded m-2  p-4">
                        <div class="mb-4">
                            <div class="relative mx-auto">
                                <i :class="`${slotProps.data.icon} w-full rounded`" style="font-size: 5rem"></i>
                            </div>
                        </div>
                        <div class="flex justify-between items-center">
                            <div class="mt-0 font-semibold text-xl">{{ slotProps.data.label }}</div>
                            <span>
                                <Button icon="pi pi-external-link" class="ml-2" as="router-link" label="go to demo"
                                    :to="slotProps.data.to" />
                            </span>
                        </div>
                    </div>
                </template>
            </Carousel>
        </div>
    </div>
    <div class="card flex">
        <h2
            class="text-1xl lg:text-2xl font-bold text-surface-900 dark:text-surface-0 mb-4 lg:leading-normal text-center">
            Check out our asset credits!
        </h2>
        <Button icon="pi pi-external-link" class="ml-2" as="router-link" label="see art credits" to="/artcredits" />
    </div>
</template>
<script setup>
import Button from 'primevue/button';
import Carousel from 'primevue/carousel';
import { useLayout } from '@/layout/composables/layout';
const { onMenuToggle } = useLayout();
import menuModel from '@/layout/MenuModel';

const demoRoutes = [];

menuModel[1].items.forEach(item => {
    demoRoutes.push(...item.items);
})
console.log(demoRoutes)
</script>
