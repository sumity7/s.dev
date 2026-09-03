/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0A0E16', // page base — deep cool ink, not flat black
          2: '#0C111B',
        },
        surface: {
          DEFAULT: '#111A2B', // cards
          raised: '#0F1624', // slightly raised alt sections
          hi: '#18233A', // elevated within a card
        },
        foreground: '#EAEEF7',
        muted: '#9AA6BC',
        faint: '#6B7789',
        line: 'rgba(255,255,255,0.08)',
        'line-strong': 'rgba(255,255,255,0.14)',
        accent: {
          DEFAULT: '#5A8CFF', // azure — MERN / modern web
          strong: '#4C7DF5',
          soft: '#8FB0FF',
        },
        amber: {
          DEFAULT: '#F6B35C', // warm signature — a nod to Java
          strong: '#E89B3C',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      maxWidth: {
        content: '1180px',
      },
      boxShadow: {
        card: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 24px 50px -30px rgba(0,0,0,0.85)',
        glow: '0 0 0 1px rgba(90,140,255,0.18), 0 26px 60px -28px rgba(90,140,255,0.42)',
        'glow-amber': '0 0 0 1px rgba(246,179,92,0.20), 0 26px 60px -28px rgba(246,179,92,0.34)',
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'rise-in': {
          from: { opacity: '0', transform: 'translateY(14px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        blink: 'blink 1.1s steps(1) infinite',
        floaty: 'floaty 6s ease-in-out infinite',
        'fade-in': 'fade-in 0.6s ease forwards',
        'rise-in': 'rise-in 0.7s cubic-bezier(0.22,1,0.36,1) forwards',
      },
    },
  },
  plugins: [],
}
