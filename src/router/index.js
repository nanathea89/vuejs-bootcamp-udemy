import { createRouter, createWebHistory } from "vue-router";


import LifecyleHooks from '@/components/LifecycleHooks.vue';
import ConditionalComponent from '@/components/ConditionalComp.vue';
import LoopingComponent from '@/components/LoopingComp.vue';
import MainComponent from '@/components/MainComponent.vue';

const routes =[
    {
        path : "/",
        name : "Main",
        component: MainComponent
    },
    {
        path : "/lifecycle",
        name : "LifeCycle",
        component : LifecyleHooks
    },
    {
        path : "/conditional",
        name : "Conditional",
        component : ConditionalComponent,
    },
    {
        path : "/looping",
        name : "Looping",
        component : LoopingComponent
    }
];
 
const router = createRouter({
    // mode : history,
    history: createWebHistory(process.env.BASE_URI),
    routes
});

export default router;
