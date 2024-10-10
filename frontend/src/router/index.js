import AppLayout from '@/layout/AppLayout.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    path: '/',
                    name: 'dashboard',
                    component: () => import('@/views/Dashboard.vue')
                }
            ]
        },
        {
            path: '/apes',
            component: AppLayout,
            children: [
                {
                    path: '/apes/abioticcoral',
                    name: 'Abiotic Coral',
                    component: () => import('@/views/pages/apes/AbioticCoral.vue')
                },
            ]
        },
        {
            path: '/testphaser',
            component: () => import('@/components/CoralSimulation/GameScene.vue'),
            name: 'phaser'
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'notfound',
            component: () => import('@/views/pages/NotFound.vue')
            
        },
    ]
});

export default router;
