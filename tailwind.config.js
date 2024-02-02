/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        '2xl': '1441px',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      fontWeight: {
        extrabold: '800',
        bold: '700',
        semibold: '600',
        medium: '400',
        regular: '300',
      },
      lineHeight: {
        xxs: '100%',
        xs: '115%',
        sm: '120%',
        md: '133%',
        lg: '150%',
        xl: '175%',
      },
      letterSpacing: {
        default: '0px',
        sm: '-1px',
        md: '-2px',
        lg: '-3px',
      },
      fontSize: {
        xxxs: '12px',
        xxs: '14px',
        xs: '16px',
        sm: '20px',
        md: '24px',
        lg: '32px',
        xl: '40px',
        xxl: '48px',
        xxxl: '64px',
      },
      borderRadius: {
        none: '0px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        pill: '500px',
        circle: '50%',
      },
      borderWidth: {
        none: '0px',
        hairline: '1px',
        thin: '2px',
        thick: '4px',
        heavy: '8px',
      },
      spacing: {
        'inline-quark': '4px',
        'inline-nano': '8px',
        'inline-xxxs': '16px',
        'inline-xxs': '24px',
        'inline-xs': '32px',
        'inline-sm': '40px',
        'inline-md': '48px',
        'inline-lg': '64px',
        'inline-xl': '80px',
        'stack-quark': '4px',
        'stack-nano': '8px',
        'stack-xxxs': '16px',
        'stack-xxs': '24px',
        'stack-xs': '32px',
        'stack-sm': '40px',
        'stack-md': '48px',
        'stack-lg': '56px',
        'stack-xl': '64px',
        'stack-xxl': '80px',
        'stack-xxxl': '120px',
        'stack-huge': '160px',
        'stack-giant': '200px',
      },
      animation: {
        slideToLeft: '30s slideToLeft linear infinite',
        fadeUp: '1s fadeUp ease-out forwards',
        fadeDown: '1s fadeDown ease-out forwards',
      },
      keyframes: {
        slideToLeft: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        initialToBottom: {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(-100%)' },
        },
        middleToBottom: {
          from: { transform: 'translateY(-20%)' },
          to: { transform: 'translateY(-120%)' },
        },
        fadeUp: {
          from: { transform: 'translateY(20%)', opacity: '0' },
          to: {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        fadeDown: {
          from: { transform: 'translateY(-20%)', opacity: '0' },
          to: {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
      },
      colors: {
        primary: {
          light: '#F3C96F',
          main: ' #F1BC4B',
          dark: '#A88334',
          contrast: '#211E1E',
          background: '#FDF4E3',
        },
        secondary: {
          light: '#F38F6F',
          main: ' #F1734B',
          dark: '#A85034',
          contrast: '#211E1E',
          background: '#FDE9E3',
        },
        tertiary: {
          light: '#9E604C',
          main: ' #863920',
          dark: '#5D2716',
          contrast: '#F0EFEE',
          background: '#F4E5E1',
        },
        error: {
          light: '#EF5350',
          main: ' #D32F2F',
          dark: '#C62828',
          contrast: '#FFFFFF',
          background: '#FFDDEE',
        },
        success: {
          light: '#4CAF50',
          main: ' #2E7D32',
          dark: '#1B5E20',
          contrast: '#FFFFFF',
          background: '#EDF7ED',
        },
        warning: {
          light: '#FF9800',
          main: ' #ED6C02',
          dark: '#E65100',
          contrast: '#211E1E',
          background: '#FFF4E5',
        },
        info: {
          light: '#03A9F4',
          main: ' #0288D1',
          dark: '#01579B',
          contrast: '#FFFFFF',
          background: '#E5F6FD',
        },
        base: {
          dark: {
            secondary: '#565454',
            main: '#333333',
            highlight: '#211E1E',
            contrast: '#FFFFFF',
            disabled: '#AEAEAE',
          },
          light: {
            secondary: '#F5F5F5',
            main: '#EDEDED',
            highlight: '#D6D5D5',
            contrast: '#FFFFFF',
          },
        },
        background: {
          '01': '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
};
