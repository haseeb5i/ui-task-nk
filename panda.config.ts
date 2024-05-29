import { defineConfig } from "@pandacss/dev";

const percentVar = {
  syntax: "<length-percentage>",
  inherits: false,
  initialValue: "0%",
};

const visibleMask = `
 linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%),
 linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%),
 linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%),
 linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%),
 linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%),
 linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%)
 `;

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  globalVars: {
    extend: {
      // custom properties for the mask size
      "--m-size-1": percentVar,
      "--m-size-2": percentVar,
      "--m-size-3": percentVar,
      "--m-size-4": percentVar,
      "--m-size-5": percentVar,
      "--m-size-6": percentVar,
    },
  },
  globalCss: {
    body: {
      color: "rgb(176, 178, 182)",
      backgroundColor: "rgb(16, 18, 24)",
      fontFamily: "var(--font-oxanium)",
    },
    ".reveal-image": {
      position: "absolute",
      inset: "0",

      maskImage: visibleMask,
      maskRepeat: "no-repeat",
      maskPosition:
        "67% 0, 45% 90px, 49% 180px, 51% 271px, 50% 361px, 53% 452px",
      "--m-size-1": "0%",
      "--m-size-2": "0%",
      "--m-size-3": "0%",
      "--m-size-4": "0%",
      "--m-size-5": "0%",
      "--m-size-6": "0%",
      maskSize:
        "var(--m-size-1) 76px,var(--m-size-2) 77px,var(--m-size-3) 77px,var(--m-size-4) 77px,var(--m-size-5) 77px,var(--m-size-6) 76px",
      // add small delay between each m-size transition, to create stagger
      transition:
        "--m-size-1 .3s, --m-size-2 .3s .05s, --m-size-3 .3s .1s, --m-size-4 .3s .15s, --m-size-5 .3s .2s, --m-size-6 .3s .25s",
      _hover: {
        "--m-size-1": "100%",
        "--m-size-2": "100%",
        "--m-size-3": "100%",
        "--m-size-4": "100%",
        "--m-size-5": "100%",
        "--m-size-6": "100%",
      },
    },
  },

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // The output directory for your css system
  outdir: "styled-system",
});
