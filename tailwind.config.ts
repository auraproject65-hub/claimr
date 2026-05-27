import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0A',
        money: '#00F54C',
        interactive: '#3B82F6',
        alert: '#F59E0B',
        slate: {
          950: '#0A101A',
          900: '#111827',
          800: '#17233E',
          700: '#334155',
          500: '#64748B',
          300: '#CBD5E1'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 45px rgba(0, 245, 76, 0.18)',
        card: '0 35px 80px rgba(0, 0, 0, 0.32)'
      },
      backgroundImage: {
        'hero-ambient': 'radial-gradient(circle at top, rgba(0,245,76,0.14), transparent 20%), radial-gradient(circle at 20% 30%, rgba(59,130,246,0.1), transparent 26%), linear-gradient(180deg, #0A0A0A 0%, #05070A 100%)'
      }
    }
  },
  plugins: []
};

export default config;
