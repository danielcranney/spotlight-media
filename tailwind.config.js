module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#0F0F0F',
      white: '#fff',
      gray: {
        100: '#f5f5f5',
        200: '#e5e5e5',
        300: '#dbdbdb',
        400: '#9CA3AF',
        500: '#8c8c8c',
        600: '#6e6e6e',
        700: '#4e4e4e',
        800: '#343434',
        900: '#121212'
      },
      yellow: '#F9D542'
    },
    extend: {
      fontFamily: {
        'display': ['sofia-pro', 'sans-serif'],
        'body': ['sofia-pro', 'sans-serif']
      },
      transitionProperty: {
        'width': 'width'
      },
      backgroundImage: theme => ({
        'home-header': "url('https://images.squarespace-cdn.com/content/v1/5f32d1a293937a1cddf9b038/1597432400612-3IMAC8ZTRIE5WNT6G6MB/ke17ZwdGBToddI8pDm48kNXJx2oVw3QD2MVhfMkJIj57gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UQdx4tx0CvAgvzPJCrI0Q6UGjKEtMRjaE52bNfk_1dk2pC969RuPXvt2ZwyzUXQf7Q/dark-bg.png?format=1500w%201500w')"
       }),
       animation: {
        fadeSlideUp: "fadeSlideUp 1.2s ease-out forwards",
        fadeSlideDown: "fadeSlideDown 1.2s ease-out forwards"
      },
      keyframes: {
        fadeSlideUp: {
          "0%": { opacity: 0, transform: 'translateY(1.3rem)' },
          "100%": { opacity: 1, transform: 'translateY(0)' }
        },
        fadeSlideDown: {
          "0%": { opacity: 0, transform: 'translateY(-1.1rem)' },
          "100%": { opacity: 1, transform: 'translateY(0)' }
        }
      },
      
    },
  },
  variants: {
    animation: ["motion-safe"],
    extend: {},
  },
  plugins: [],
}
