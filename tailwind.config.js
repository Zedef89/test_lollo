/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#0a0a0a',
        renaissance: '#FFE600',
      },
      fontFamily: {
        'heading': ['"Oswald"', 'sans-serif'],
        'tight': ['"Inter Tight"', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'breathing': 'breathing 4s ease-in-out infinite',
        'ken-burns': 'kenBurns 20s ease-out infinite',
        'blink': 'blink 2s ease-in-out infinite',
      },
      keyframes: {
        breathing: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        kenBurns: {
          '0%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
      },
      boxShadow: {
        'yellow-glow': '0 0 30px rgba(255, 230, 0, 0.5)',
        'yellow-glow-lg': '0 0 50px rgba(255, 230, 0, 0.6)',
      },
    },
  },
  plugins: [],
}
