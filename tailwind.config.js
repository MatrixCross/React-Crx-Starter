const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        primary_hover: 'var(--primary-color-hover)',
        primary_pressed: 'var(--primary-color-pressed)',
        primary_active: 'var(--primary-color-active)',
        info: 'var(--info-color)',
        info_hover: 'var(--info-color-hover)',
        info_pressed: 'var(--info-color-pressed)',
        info_active: 'var(--info-color-active)',
        success: 'var(--success-color)',
        success_hover: 'var(--success-color-hover)',
        success_pressed: 'var(--success-color-pressed)',
        success_active: 'var(--success-color-active)',
        warning: 'var(--warning-color)',
        warning_hover: 'var(--warning-color-hover)',
        warning_pressed: 'var(--warning-color-pressed)',
        warning_active: 'var(--warning-color-active)',
        error: 'var(--error-color)',
        error_hover: 'var(--error-color-hover)',
        error_pressed: 'var(--error-color-pressed)',
        error_active: 'var(--error-color-active)',
        dark: '#18181c'
      }
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.wh-full': { width: '100%', height: '100%' },
        '.flex-center': { display: 'flex', justifyContent: 'center', alignItems: 'center' },
        '.flex-col-center': { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' },
        '.flex-x-center': { display: 'flex', justifyContent: 'center' },
        '.flex-y-center': { display: 'flex', alignItems: 'center' },
        '.i-flex-center': { display: 'inline-flex', justifyContent: 'center', alignItems: 'center' },
        '.i-flex-x-center': { display: 'inline-flex', justifyContent: 'center' },
        '.i-flex-y-center': { display: 'inline-flex', alignItems: 'center' },
        '.flex-col': { display: 'flex', flexDirection: 'column' },
        '.flex-col-stretch': { display: 'flex', flexDirection: 'column', alignItems: 'stretch' },
        '.i-flex-col': { display: 'inline-flex', flexDirection: 'column' },
        '.i-flex-col-stretch': { display: 'inline-flex', flexDirection: 'column', alignItems: 'stretch' },
        '.flex-1-hidden': { flex: 1, overflow: 'hidden' },
        '.absolute-lt': { position: 'absolute', left: 0, top: 0 },
        '.absolute-lb': { position: 'absolute', left: 0, bottom: 0 },
        '.absolute-rt': { position: 'absolute', right: 0, top: 0 },
        '.absolute-rb': { position: 'absolute', right: 0, bottom: 0 },
        '.absolute-center': { position: 'absolute', left: 0, top: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' },
        '.fixed-lt': { position: 'fixed', left: 0, top: 0 },
        '.fixed-lb': { position: 'fixed', left: 0, bottom: 0 },
        '.fixed-rt': { position: 'fixed', right: 0, top: 0 },
        '.fixed-rb': { position: 'fixed', right: 0, bottom: 0 },
        '.fixed-center': { position: 'fixed', left: 0, top: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' },
        '.nowrap-hidden': { whiteSpace: 'nowrap', overflow: 'hidden' },
        '.ellipsis-text': { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' },
        '.transition-base': { transition: 'all 0.3s ease-in-out' }
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    })
  ]
};
