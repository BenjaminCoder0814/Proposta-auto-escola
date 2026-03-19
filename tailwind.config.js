/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      colors: {
        night: {
          950: '#03030c',
          900: '#050510',
          800: '#08081a',
          700: '#0d0d22',
          600: '#121230',
          500: '#18183a',
        },
      },
      boxShadow: {
        glow: '0 0 40px rgba(37,99,235,0.25), 0 0 80px rgba(37,99,235,0.1)',
        'glow-sm': '0 0 20px rgba(37,99,235,0.2)',
        'glow-cyan': '0 0 40px rgba(6,182,212,0.25)',
        'glow-purple': '0 0 40px rgba(139,92,246,0.25)',
        'glow-green': '0 0 40px rgba(16,185,129,0.25)',
        card: '0 8px 40px rgba(0,0,0,0.5)',
        deep: '0 30px 100px rgba(0,0,0,0.7)',
        'phone': '0 50px 120px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.05) inset',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'border-glow': 'borderGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1200px 0' },
          '100%': { backgroundPosition: '1200px 0' },
        },
        borderGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
