/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f5f7fa',
          100: '#e9eef5',
          200: '#cfd9e6',
          300: '#a7b8cf',
          400: '#7689a8',
          500: '#54678a',
          600: '#3e4f6e',
          700: '#2c3a54',
          800: '#1c2740',
          900: '#111a2e',
          950: '#0a1120',
        },
        brand: {
          50: '#eef6ff',
          100: '#d9ecff',
          200: '#bcddff',
          300: '#8ec6ff',
          400: '#59a6ff',
          500: '#3385fc',
          600: '#1d66f0',
          700: '#1551d4',
          800: '#1843ab',
          900: '#1a3c87',
          950: '#142653',
        },
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        success: { DEFAULT: '#16a34a', soft: '#dcfce7' },
        warning: { DEFAULT: '#d97706', soft: '#fef3c7' },
        error: { DEFAULT: '#dc2626', soft: '#fee2e2' },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Barlow Condensed"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 30px -12px rgba(20, 38, 83, 0.18)',
        soft: '0 4px 20px -8px rgba(20, 38, 83, 0.15)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        'fade-in': 'fade-in 0.6s ease-out both',
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
};
