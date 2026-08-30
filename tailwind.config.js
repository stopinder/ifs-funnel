/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',
    ],

    theme: {
        extend: {
            colors: {
                surface: 'var(--color-surface)',
                'surface-muted': 'var(--color-surface-muted)',
                'surface-dark': 'var(--color-surface-dark)',

                text: 'var(--color-text)',
                'text-muted': 'var(--color-text-muted)',

                border: 'var(--color-border)',

                accent: 'var(--color-accent)',
                'accent-hover': 'var(--color-accent-hover)',

                cobalt: 'var(--color-cobalt)',
                'cobalt-hover': 'var(--color-cobalt-hover)',
                'cobalt-deep': 'var(--color-cobalt-deep)',
            },

            fontFamily: {
                sans: [
                    'Inter',
                    'ui-sans-serif',
                    'system-ui',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    '"Segoe UI"',
                    'sans-serif',
                ],

                serif: [
                    'Georgia',
                    'Cambria',
                    '"Times New Roman"',
                    'Times',
                    'serif',
                ],
            },

            maxWidth: {
                reading: '44rem',
            },
        },
    },

    plugins: [],
}