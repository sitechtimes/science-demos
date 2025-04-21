<template>
    <div class="flex lg:flex-row flex-col gap-4 bg-surface-0 dark:bg-surface-900">
        <div class="flex-1 flex items-center justify-center">
            <div class="p-6 pt-12 lg:p-12">
                <h1
                    class="text-3xl lg:text-5xl font-bold text-surface-900 dark:text-surface-0 mb-4 lg:leading-normal text-center lg:text-left">
                    See a variety of science demos.
                </h1>
                <p class="text-surface-700 dark:text-surface-200 leading-normal mb-8 text-center lg:text-left">
                    Developed with Unity WebGL and Sakai Vue template.
                </p>
                <div class="flex items-center justify-center lg:justify-start gap-6">
                    <Button label="View Demos" @click="onMenuToggle" />
                </div>
            </div>
        </div>
        <div class="flex-1 overflow-hidden">
            <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/hero/hero-1.png"
                alt="hero-1"
                class="h-full w-full object-cover lg:[clip-path:polygon(12%_0,100%_0%,100%_100%,0_100%)]" />
        </div>
    </div>
</template>
<script setup>
import Button from 'primevue/button';
import { useLayout } from '@/layout/composables/layout';
const { onMenuToggle } = useLayout();
</script>
