import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 45px rgba(72, 255, 166, 0.18)'
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(72,255,166,0.15), transparent 35%), linear-gradient(180deg, #020617 0%, #08101f 100%)'
      }
    }
  },
  plugins: []
};

export default config;
