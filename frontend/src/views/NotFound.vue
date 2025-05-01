<script setup>
import Button from 'primevue/button';
</script>

<template>
    <div class="flex items-center justify-center min-h-screen overflow-hidden">
        <div class="flex flex-col items-center justify-center">
            <div class="rounded-[56px] p-[0.3rem] bg-gradient-custom">
                <div
                    class="w-full bg-surface-0 dark:bg-surface-900 py-20 px-8 sm:px-20 flex flex-col items-center rounded-[53px]">
                    <span class="text-primary font-bold text-3xl">404</span>
                    <h1 class="text-surface-900 dark:text-surface-0 font-bold text-3xl lg:text-5xl mb-2">Not Found</h1>
                    <div class="text-surface-600 dark:text-surface-200 mb-8">Requested resource is not available.</div>
                    <Button as="router-link" label="Go to Dashboard" to="/" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.bg-gradient-custom {
    background: linear-gradient(180deg, color-mix(in srgb, var(--primary-color), transparent 60%) 10%, var(--surface-ground) 30%);
}
</style>
