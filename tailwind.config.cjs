module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
      },
      
      animation: {
        float: "float 6s ease-in-out infinite",
        fadeInUp: 'fadeInUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'holo-float': 'holo-float 1.5s ease-out both',
        'glow-once': 'glowPulse 0.8s ease-out forwards',
        'glow-line': 'glowLine 1.2s linear forwards',
        'border-glow': 'borderGlow 1.2s linear',
        twinkle: 'twinkle 2s infinite ease-in-out',
        'pulse-slow': 'pulse 3s infinite ease-in-out',
        'bounce-slow': 'bounce 2.5s infinite',
        shine: 'shine 2s linear infinite',
        shineBar: 'shineBar 3s linear infinite',
      },
      keyframes: {
        shine: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        shineBar: {
          '0%': { left: '-20%' },
          '100%': { left: '100%' },
        },
        float: {
          '0%': { transform: 'translateY(0px) translateX(0px)' },
          '25%': { transform: 'translateY(-30px) translateX(10px)' },
          '50%': { transform: 'translateY(-60px) translateX(0px)' },
          '75%': { transform: 'translateY(-30px) translateX(-10px)' },
          '100%': { transform: 'translateY(0px) translateX(0px)' },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'holo-float': {
          '0%': { opacity: 0, transform: 'scale(0.96) translateY(20px)' },
          '100%': { opacity: 1, transform: 'scale(1) translateY(0)' },
        },
        glowPulse: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '50%': { transform: 'scale(1)', opacity: '0.7' },
          '100%': { transform: 'scale(1.2)', opacity: '0' },
        },
        boxShadow: {
          glow: '0 0 10px rgba(129, 255, 247, 0.6)',
        },
        keyframes: {
          twinkle: {
            '0%, 100%': { opacity: '0.2' },
            '50%': { opacity: '0.4' },
          },
        },
        borderGlow: {
          '0%': {
            transform: 'scale(1)',
            opacity: '0',
            boxShadow: '0 0 0px #00fff7',
          },
          '50%': {
            transform: 'scale(1.1)',
            opacity: '0.6',
            boxShadow: '0 0 15px #00fff7',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '0',
            boxShadow: '0 0 0px #00fff7',
          },
        },
        glowLine: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        
      }
    },
  },
  plugins: [],
}
