import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Palette Everdawn sable/ambre
        sand: {
          light: '#F5E9D2',
          DEFAULT: '#E8D5B5',
          dark: '#D4C09A',
        },
        amber: {
          DEFAULT: '#FFB000',
          dark: '#D98A00',
          glow: '#FFC940',
        },
        slate: {
          text: '#1F2937',
        },
        ivory: '#FAFAF7',
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-in': 'slideIn 0.4s ease-out',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 176, 0, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 176, 0, 0.8)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-sand': 'linear-gradient(135deg, #F5E9D2 0%, #E8D5B5 100%)',
        'gradient-amber': 'linear-gradient(135deg, #FFB000 0%, #D98A00 100%)',
      },
    },
  },
  plugins: [],
}
export default config
