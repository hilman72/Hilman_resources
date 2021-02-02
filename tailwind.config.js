module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
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
    screens: {
      phone: "320px",

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
