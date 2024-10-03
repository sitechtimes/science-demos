<script setup>
import Beta_formulas2 from '@/components/beta_formulas2.vue';
import { useLayout } from '@/layout/composables/layout';
import { ProductService } from '@/service/ProductService';
import { onMounted, ref, watch } from 'vue';
const { getPrimary, getSurface, isDarkTheme } = useLayout();

const products = ref(null);

const items = ref([
    { label: 'Add New', icon: 'pi pi-fw pi-plus' },
    { label: 'Remove', icon: 'pi pi-fw pi-trash' }
]);

/* watch([getPrimary, getSurface, isDarkTheme], () => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
}); */// chart theme changing if site theme changes
</script>

<template>
    <div>placeholder for dashboard</div>
    <Beta_formulas2/>
</template>
