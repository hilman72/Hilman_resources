module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        canvas: "url('https://i.imgur.com/3qJ8bgS.png')",
        m8: "url('https://i.imgur.com/pqgnVo5.png')",
        ob: "url('https://i.imgur.com/bUTWkeq.png')",
        about: "url('https://i.imgur.com/uaPKRSc.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
