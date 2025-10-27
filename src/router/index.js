import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/HomePage.vue'
import IfsTherapy from '@/pages/IfsTherapy.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage,
        meta: {
            title: 'IFS & EMDR-Informed Psychotherapy · Robert Ormiston MBACP',
            description:
                'Brief, integrative psychotherapy online — Internal Family Systems (IFS) and EMDR-informed work, with optional reflective summaries.'
        }
    },
    {
        path: '/ifs-therapy',
        name: 'ifs-therapy',
        component: IfsTherapy,
        meta: {
            title: 'Internal Family Systems (IFS) Therapy · Robert Ormiston',
            description:
                'Calm, trauma-aware IFS work focused on regulation, attention, and integration — not endless excavation.'
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// dynamic <title> and <meta name="description">
router.afterEach((to) => {
    if (to.meta?.title) {
        document.title = to.meta.title
    }
    if (to.meta?.description) {
        const tag = document.querySelector('meta[name="description"]')
        if (tag) {
            tag.setAttribute('content', to.meta.description)
        }
    }
})

export default router
