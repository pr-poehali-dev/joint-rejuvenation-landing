
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          // Бирюзовый
          lighter: '#6BE7F2',
          light: '#4FD1DD',
          DEFAULT: '#38B2BD',
          dark: '#2798A3',
          darker: '#1A7F89',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          // Фиолетовый
          lighter: '#C5B4FF',
          light: '#9B87F5',
          DEFAULT: '#7E69AB',
          dark: '#6E59A5',
          darker: '#5D489F',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        accent: {
          // Оранжево-красный (для акцентов)
          lighter: '#FFB499',
          light: '#FF9E7A',
          DEFAULT: '#FF8859',
          dark: '#E76C3D',
          darker: '#D75223',
          foreground: 'hsl(var(--accent-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        brand: {
          // Градиентные цвета бренда
          orange: '#FF8859',
          yellow: '#F7D046',
          purple: '#9B87F5',
          blue: '#4FD1DD',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        pulse: 'pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 3s ease-in-out infinite',
        fadeIn: 'fadeIn 0.6s ease-in-out',
        shimmer: 'shimmer 2s linear infinite',
        bounce: 'bounce 1.5s ease-in-out infinite',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        montserrat: ['Montserrat', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-diagonal': 'linear-gradient(135deg, var(--tw-gradient-stops))',
        'brand-gradient': 'linear-gradient(135deg, #38B2BD 0%, #7E69AB 100%)',
        'brand-gradient-soft': 'linear-gradient(135deg, rgba(56,178,189,0.15) 0%, rgba(126,105,171,0.15) 100%)',
        'accent-gradient': 'linear-gradient(135deg, #FF8859 0%, #F7D046 100%)',
        'brand-circle': 'radial-gradient(circle, #38B2BD 0%, #7E69AB 100%)',
        'brand-pattern': "url('/pattern.svg')",
      },
      boxShadow: {
        'soft': '0 2px 10px rgba(0, 0, 0, 0.05)',
        'glow': '0 0 15px rgba(56, 178, 189, 0.5)',
        'glow-purple': '0 0 15px rgba(126, 105, 171, 0.5)',
        'glow-light': '0 0 25px rgba(56, 178, 189, 0.3)',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: theme('colors.gray.800'),
            h1: {
              color: theme('colors.primary.DEFAULT'),
            },
            h2: {
              color: theme('colors.secondary.DEFAULT'),
            },
            h3: {
              color: theme('colors.secondary.dark'),
            },
            strong: {
              color: theme('colors.primary.dark'),
            },
            a: {
              color: theme('colors.primary.DEFAULT'),
              '&:hover': {
                color: theme('colors.primary.dark'),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};

export default config;
