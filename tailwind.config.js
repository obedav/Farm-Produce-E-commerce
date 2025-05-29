/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--primary)',
        'primary-dark': 'var(--primary-dark)',
        'primary-light': 'var(--primary-light)',
        'secondary': 'var(--secondary)',
        'accent': 'var(--accent)',
        'accent-light': 'var(--accent-light)',
        'earth': 'var(--earth)',
        'earth-light': 'var(--earth-light)',
        'sun-yellow': 'var(--sun-yellow)',
        'sun-yellow-light': 'var(--sun-yellow-light)',
        'off-white': 'var(--off-white)',
      },
      backgroundColor: {
        'page': 'var(--background)',
      },
      textColor: {
        'body': 'var(--text)',
        'body-light': 'var(--text-light)',
      },
    },
  },
  plugins: [],
}