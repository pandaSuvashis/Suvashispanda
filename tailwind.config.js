export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        noir: {
          bg: '#080808',
          panel: '#111111',
          text: '#F2F0ED',
          muted: '#929292',
          accent: '#FF1738',
          border: '#303030'
        }
      },
      boxShadow: {
        noir: '0 0 0 1px rgba(255,255,255,0.06), 0 24px 70px rgba(0,0,0,0.55)'
      }
    }
  },
  plugins: []
};
