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
            path:'/bio',
            component: AppLayout,
            children:[
                {
                    path: '/bio/celldivision',
                    name: 'dashboard',
                    component: () => import('@/views/pages/bio/Cell_Division.vue')
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
