module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.svelte'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        appaccent: "#FF897B",
        appaccentdark: "#FF5E5E",
        ecllipse: "#FAF3E780"


      },
      fontFamily: {
        courage: ["Courgette", "cursive"],
        pumpkin: ['"Pumpkin Story"', "cursive"],
        adelia: ["Adelia", "cursive"],
        euclid: ['"Euclid Circular A Regular"',],
        mono: ['"DM Mono"', "monospac"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
