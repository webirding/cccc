import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    colors: {
      'jet': { DEFAULT: '#31302e', 100: '#0a0a09', 200: '#141413', 300: '#1e1d1c', 400: '#282726', 500: '#31302e', 600: '#5c5b57', 700: '#87847f', 800: '#afadaa', 900: '#d7d6d4' },
      'linen': { DEFAULT: '#f8eee2', 100: '#4c3212', 200: '#996525', 300: '#d3954a', 400: '#e6c296', 500: '#f8eee2', 600: '#f9f2e8', 700: '#fbf5ee', 800: '#fcf8f4', 900: '#fefcf9' },
      'almond': { DEFAULT: '#e5d5c5', 100: '#3b2b1b', 200: '#765635', 300: '#b18150', 400: '#cbab8c', 500: '#e5d5c5', 600: '#ebded2', 700: '#f0e7dd', 800: '#f5efe8', 900: '#faf7f4' },
      'salmon': { DEFAULT: '#f47f6b', 100: '#410e05', 200: '#831c0a', 300: '#c42a0f', 400: '#ef482b', 500: '#f47f6b', 600: '#f69a89', 700: '#f8b3a7', 800: '#fbccc4', 900: '#fde6e2' },
      'vista_blue': { DEFAULT: '#8590c8', 100: '#15192e', 200: '#29325b', 300: '#3e4a89', 400: '#5666b3', 500: '#8590c8', 600: '#9ca6d3', 700: '#b5bcde', 800: '#ced2e9', 900: '#e6e9f4' },
      'cinnabar': { DEFAULT: '#e65a41', 100: '#340e07', 200: '#691b0e', 300: '#9d2914', 400: '#d1371b', 500: '#e65a41', 600: '#eb7b67', 700: '#f09c8d', 800: '#f5bdb3', 900: '#faded9' },
      'moss_green': { DEFAULT: '#8a8d56', 100: '#1c1c11', 200: '#383923', 300: '#545534', 400: '#707246', 500: '#8a8d56', 600: '#a7aa74', 700: '#bdbf97', 800: '#d3d4b9', 900: '#e9eadc' },
      'hunyadi_yellow': { DEFAULT: '#fbb04b', 100: '#402501', 200: '#804a03', 300: '#c06e04', 400: '#fa920b', 500: '#fbb04b', 600: '#fcbf6f', 700: '#fdcf93', 800: '#fedfb7', 900: '#feefdb' },
      'white':{DEFAULT: '#FFFFFF'}
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.6' }],
        sm: ['0.875rem', { lineHeight: '1.5715' }],
        base: ['1.06rem', { lineHeight: '1.3', letterSpacing: '-0.023em' }],
        lg: ['1.09rem', { lineHeight: '1.4', letterSpacing: '-0.023em' }],
        xl: ['1.25rem', { lineHeight: '1.2', letterSpacing: '-0.020em' }],
        '2xl': ['1.5rem', { lineHeight: '1.415', letterSpacing: '-0.001em' }],
        '3xl': ['1.875rem', { lineHeight: '1.333', letterSpacing: '-0.001em' }],
        '4xl': ['2.25rem', { lineHeight: '1.277', letterSpacing: '-0.001em' }],
        '5xl': ['3.15rem', { lineHeight: '1.13', letterSpacing: '-0.023em' }],
        '6xl': ['3.75rem', { lineHeight: '1.2', letterSpacing: '-0.001em' }],
        '7xl': ['4.5rem', { lineHeight: '1.2', letterSpacing: '-0.001em' }],
      },
      fontFamily: {
        circular: ['var(--font-cir)'],
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.4em',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config