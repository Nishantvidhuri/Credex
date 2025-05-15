/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'media' if you want to respect system settings
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        dark: {
          100: '#d1d5db',
          200: '#9ca3af', 
          300: '#6b7280',
          400: '#4b5563',
          500: '#374151',
          600: '#1f2937',
          700: '#172032',
          800: '#111a2b',
          900: '#000000',
          bg: '#0f172a',
          surface: '#1e293b',
          text: '#e5e7eb',
        },
        light: {
          100: '#f9fafb',
          200: '#f3f4f6',
          300: '#e5e7eb',
          400: '#d1d5db',
          500: '#9ca3af',
          600: '#6b7280',
          700: '#4b5563',
          800: '#1f2937',
          900: '#111827',
          bg: '#ffffff',
          surface: '#f3f4f6',
          text: '#111827',
        }
      },
      backgroundColor: {
        dark: '#0f172a',
        light: '#ffffff'
      },
      textColor: {
        dark: '#e5e7eb',
        light: '#111827'
      }
    },
  },
  plugins: [],
} 