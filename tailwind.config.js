/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        'mainred': '#FF6767',
        'mainyellow': '#FFF4E3',
        'accentyellow': '#fffdfb',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'Helvetica', 'sans-serif'],
        'Inter': ['Inter', 'Helvetica', 'sans-serif'],
        'karla': ['Karla', 'Helvetica', 'sans-serif'],
        'swizert': ['Switzer', 'Helvetica', 'sans-serif'],
        'noto-malayalam': ['Noto Sans Malayalam', 'Helvetica', 'sans-serif']
      },
    },
  },
}