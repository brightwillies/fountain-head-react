import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}','./components/**/*.{js,ts,jsx,tsx,mdx}','./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#10147c', dark: '#0a0e5c', light: '#1a1fa0', muted: '#1e2399' },
        gold: { DEFAULT: '#c9a84c', light: '#e8c96e' },
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
      }
    }
  },
  plugins: [],
}
export default config
