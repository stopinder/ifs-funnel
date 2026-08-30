import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/HomePage.vue'
import IfsTherapy from '@/pages/IfsTherapy.vue'
import EmdrTherapy from '@/pages/EmdrTherapy.vue'
import TermsAndPrivacy from '@/pages/TermsAndPrivacy.vue'

// --- try to stop the browser from restoring scroll position on nav (especially Safari / iOS / some Vercel flows)
if (typeof window !== 'undefined' && 'scrollRestoration' in history) {
    history.scrollRestoration = 'manual'
}

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage,
        meta: {
            title: 'Robert Ormiston · Clinician, Psychotherapist, Writer & Helios Founder',
            description:
                'Robert Ormiston is a mental health clinician, psychotherapist and writer with more than four decades of experience across clinical practice, service development and mental health systems, and the founder of Helios.',
            canonical: 'https://www.robormiston.com/',
            ogTitle: 'Robert Ormiston · Clinician, Psychotherapist, Writer & Helios Founder',
            ogDescription:
                'Robert Ormiston is a mental health clinician, psychotherapist and writer with more than four decades of experience across clinical practice, service development and mental health systems, and the founder of Helios.',
            ogImage: 'https://www.robormiston.com/images/social-card.jpg',
            ogUrl: 'https://www.robormiston.com/'
        }
    },
    {
        path: '/ifs-therapy',
        name: 'ifs-therapy',
        component: IfsTherapy,
        meta: {
            title: 'Internal Family Systems (IFS) Therapy Online · Robert Ormiston',
            description:
                'Internal Family Systems (IFS) therapy, EMDR-informed and regulation-aware. Steady, trauma-conscious work focusing on attention, integration, and relief — not endless excavation.',
            canonical: 'https://www.robormiston.com/ifs-therapy',
            ogTitle: 'IFS Therapy with Robert Ormiston (MBACP)',
            ogDescription:
                'Calm, parts-informed psychotherapy. Optional reflective summaries between sessions to help integration continue in your own time.',
            ogImage: 'https://www.robormiston.com/images/social-card.jpg',
            ogUrl: 'https://www.robormiston.com/ifs-therapy'
        }
    },
    {
        path: '/emdr-therapy',
        name: 'emdr-therapy',
        component: EmdrTherapy,
        meta: {
            title: 'EMDR-Informed Trauma Therapy Online · Robert Ormiston',
            description:
                'EMDR-informed trauma therapy online, integrated with IFS and regulation-aware work. Careful, paced processing of overwhelming experiences, with attention to safety and day-to-day functioning.',
            canonical: 'https://www.robormiston.com/emdr-therapy',
            ogTitle: 'EMDR-Informed Trauma Therapy · Robert Ormiston',
            ogDescription:
                'Calm, structured EMDR-informed work focusing on stabilisation, trauma processing, and integration – not endless excavation.',
            ogImage: 'https://www.robormiston.com/images/social-card.jpg',
            ogUrl: 'https://www.robormiston.com/emdr-therapy'
        }
    },
    {
        path: '/terms',
        name: 'terms',
        component: TermsAndPrivacy,
        meta: {
            title: 'Terms & Privacy · Chrysalis Therapy Services',
            description:
                'Terms of use and privacy policy for Chrysalis Therapy Services, operated by Robert Ormiston MBACP.',
            canonical: 'https://www.robormiston.com/terms',
            ogTitle: 'Terms & Privacy · Chrysalis Therapy Services',
            ogDescription:
                'Confidentiality, GDPR basis, data retention, and client rights under UK data protection law.',
            ogImage: 'https://www.robormiston.com/images/social-card.jpg',
            ogUrl: 'https://www.robormiston.com/terms'
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    // this still helps locally and in most browsers
    scrollBehavior() {
        return { left: 0, top: 0 }
    }
})

// HARD SCROLL ENFORCER (fix for production Vercel case)
// run before each route, force the viewport to the top
router.beforeEach((_to, _from, next) => {
    // next() first so navigation isn't blocked
    next()

    // then force scroll reset on the next tick
    requestAnimationFrame(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'auto'
        })
    })
})

// afterEach hook updates <title>, <meta>, canonical, and OG tags
router.afterEach((to) => {
    // <title>
    if (to.meta && to.meta.title) {
        document.title = to.meta.title
    }

    // description
    const descTag = document.querySelector('meta[name="description"]')
    if (descTag && to.meta && to.meta.description) {
        descTag.setAttribute('content', to.meta.description)
    }

    // canonical <link rel="canonical">
    let canonicalTag = document.querySelector('link[rel="canonical"]')
    if (!canonicalTag) {
        canonicalTag = document.createElement('link')
        canonicalTag.setAttribute('rel', 'canonical')
        document.head.appendChild(canonicalTag)
    }
    if (to.meta && to.meta.canonical) {
        canonicalTag.setAttribute('href', to.meta.canonical)
    }

    // Open Graph tags
    setOrCreateMetaProperty(
        'og:title',
        to.meta && (to.meta.ogTitle || to.meta.title)
    )
    setOrCreateMetaProperty(
        'og:description',
        to.meta && (to.meta.ogDescription || to.meta.description)
    )
    setOrCreateMetaProperty('og:image', to.meta && to.meta.ogImage)
    setOrCreateMetaProperty('og:url', to.meta && to.meta.ogUrl)

    // Twitter Card
    setOrCreateMetaName(
        'twitter:title',
        to.meta && (to.meta.ogTitle || to.meta.title)
    )
    setOrCreateMetaName(
        'twitter:description',
        to.meta && (to.meta.ogDescription || to.meta.description)
    )
    setOrCreateMetaName('twitter:image', to.meta && to.meta.ogImage)
})

// helper to manage <meta property="og:...">
function setOrCreateMetaProperty(property, content) {
    if (!content) return
    let tag = document.querySelector(`meta[property="${property}"]`)
    if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('property', property)
        document.head.appendChild(tag)
    }
    tag.setAttribute('content', content)
}

// helper to manage <meta name="..."> for twitter tags
function setOrCreateMetaName(name, content) {
    if (!content) return
    let tag = document.querySelector(`meta[name="${name}"]`)
    if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', name)
        document.head.appendChild(tag)
    }
    tag.setAttribute('content', content)
}

export default router
