module.exports = {
  mode: 'jit',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      colors: {
        dark: {
          themePrimary: '#7269ef',
          themePrimary2: '#6159d1',
          themeColor1: '#36404a',
          themeColor2: '#2e353e',
          themeColor3: '#262e35',
          themeColor4: '#303841',
          themeGrey1: '#a6b0cf',
          themeGrey2: '#3e4a56',
          red1: '#ef476f',
          white1: '#e1e9f1',
          white2: '#abb4d2',
          text1: '#9aa1b9',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
