import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        border: 'rgb(228 228 231)',
        input: 'rgb(228 228 231)',
        ring: 'rgb(24 24 27)',
        background: 'rgb(250 250 249)',
        foreground: 'rgb(24 24 27)',
        primary: {
          DEFAULT: 'rgb(24 24 27)',
          foreground: 'rgb(250 250 249)'
        },
        secondary: {
          DEFAULT: 'rgb(244 244 245)',
          foreground: 'rgb(39 39 42)'
        },
        muted: {
          DEFAULT: 'rgb(244 244 245)',
          foreground: 'rgb(113 113 122)'
        }
      }
    }
  },
  plugins: []
};

export default config;
