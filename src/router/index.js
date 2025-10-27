import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/HomePage.vue'
import IfsTherapy from '@/pages/IfsTherapy.vue'
import TermsAndPrivacy from '@/pages/TermsAndPrivacy.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
            meta: {
                title: 'IFS & EMDR-Informed Psychotherapy · Robert Ormiston MBACP',
                description:
                    'Brief, integrative psychotherapy online — Internal Family Systems (IFS) and EMDR-informed work, with optional reflective summaries.',
                canonical: 'https://www.robormiston.com/',
                ogTitle: 'IFS & EMDR-Informed Psychotherapy · Robert Ormiston MBACP',
                ogDescription:
                    'Calm, focused psychotherapy for clinicians, carers, and long-term seekers.',
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
    ],
    scrollBehavior() {
        // THIS is the fix: force scroll to top when navigating
        return { top: 0 }
    }
})

// keep your afterEach hook + helper functions exactly the same as before
router.afterEach((to) => {
    if (to.meta?.title) {
        document.title = to.meta.title
    }

    const descTag = document.querySelector('meta[name="description"]')
    if (descTag && to.meta?.description) {
        descTag.setAttribute('content', to.meta.description)
    }

    let canonicalTag = document.querySelector('link[rel="canonical"]')
    if (!canonicalTag) {
        canonicalTag = document.createElement('link')
        canonicalTag.setAttribute('rel', 'canonical')
        document.head.appendChild(canonicalTag)
    }
    if (to.meta?.canonical) {
        canonicalTag.setAttribute('href', to.meta.canonical)
    }

    setOrCreateMetaProperty('og:title', to.meta?.ogTitle)
    setOrCreateMetaProperty('og:description', to.meta?.ogDescription)
    setOrCreateMetaProperty('og:image', to.meta?.ogImage)
    setOrCreateMetaProperty('og:url', to.meta?.ogUrl)

    setOrCreateMetaName('twitter:title', to.meta?.ogTitle || to.meta?.title)
    setOrCreateMetaName(
        'twitter:description',
        to.meta?.ogDescription || to.meta?.description
    )
    setOrCreateMetaName('twitter:image', to.meta?.ogImage)
})

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
