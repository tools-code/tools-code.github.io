/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./html/**/*.html",
    "./articles/**/*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: '#4b5563',
            maxWidth: '65ch',
            h1: {
              color: '#111827',
              fontWeight: '700',
              fontSize: '2.25rem',
              marginTop: '2rem',
              marginBottom: '1rem',
              lineHeight: '2.5rem',
            },
            h2: {
              color: '#1f2937',
              fontWeight: '700',
              fontSize: '1.875rem',
              marginTop: '2rem',
              marginBottom: '0.75rem',
              lineHeight: '2.25rem',
            },
            h3: {
              color: '#374151',
              fontWeight: '600',
              fontSize: '1.5rem',
              marginTop: '1.5rem',
              marginBottom: '0.5rem',
              lineHeight: '2rem',
            },
            h4: {
              color: '#374151',
              fontWeight: '600',
              fontSize: '1.25rem',
              marginTop: '1.25rem',
              marginBottom: '0.5rem',
              lineHeight: '1.75rem',
            },
            p: {
              marginTop: '1rem',
              marginBottom: '1rem',
              lineHeight: '1.75',
            },
            strong: {
              color: '#1f2937',
              fontWeight: '600',
            },
            code: {
              color: '#1f2937',
              fontWeight: '500',
              backgroundColor: '#f3f4f6',
              padding: '0.125rem 0.25rem',
              borderRadius: '0.25rem',
              fontSize: '0.875rem',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: '#1f2937',
              color: '#f9fafb',
              padding: '1rem',
              borderRadius: '0.5rem',
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
              overflow: 'auto',
            },
            'pre code': {
              backgroundColor: 'transparent',
              color: 'inherit',
              padding: '0',
              fontWeight: '400',
            },
            ul: {
              listStyleType: 'disc',
              paddingLeft: '1.5rem',
              marginTop: '1rem',
              marginBottom: '1rem',
            },
            ol: {
              listStyleType: 'decimal',
              paddingLeft: '1.5rem',
              marginTop: '1rem',
              marginBottom: '1rem',
            },
            li: {
              marginTop: '0.25rem',
              marginBottom: '0.25rem',
              paddingLeft: '0.25rem',
            },
            table: {
              width: '100%',
              borderCollapse: 'collapse',
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
            },
            thead: {
              borderBottom: '2px solid #e5e7eb',
            },
            th: {
              fontWeight: '600',
              textAlign: 'left',
              padding: '0.75rem 1rem',
              color: '#1f2937',
              backgroundColor: '#f9fafb',
            },
            td: {
              padding: '0.75rem 1rem',
              borderBottom: '1px solid #e5e7eb',
              color: '#4b5563',
            },
            'tbody tr:last-child td': {
              borderBottom: 'none',
            },
            'tbody tr:nth-child(even)': {
              backgroundColor: '#f9fafb',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}