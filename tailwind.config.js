/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"]
      },
      colors: {
        primary: {
          main: "#5E59FF",
          hover: "#4E4AD4",
          pressed: "#3F3BAA",
          surface: "#DFDEFF",
          border: "#7975FF"
        },
        netral: {
          10: "#FFFFFF",
          15: "#FAFAFA",
          20: "#F4F5F6",
          30: "#E5E7EB",
          40: "#D3D6DA",
          50: "#A0A8B0",
          60: "#707784",
          70: "#515966",
          80: "#3B4453",
          90: "#232B39",
          100: "#101623"
        },
        error: {
          main: "#FF5630",
          hover: "#D44828",
          pressed: "#AA3920",
          surface: "#FFDDD6",
          border: "#FF7252"
        },
        warning: {
          main: "#FFAB00",
          hover: "#D48E00",
          pressed: "#AA7200",
          surface: "#FFEECC",
          border: "#FFB92A"
        },
        success: {
          main: "#36B37E",
          hover: "#2D9569",
          pressed: "#247754",
          surface: "#D7F0E5",
          border: "#57C093"
        },
        info: {
          main: "#0065FF",
          hover: "#0054D4",
          pressed: "#247754",
          surface: "#CCE0FF",
          border: "#2A7FFF"
        }
      },
      borderRadius: {
        "lg-10": "10px"
      },
      fontSize: {
        "heading-xl": ["58px", "64px"],
        "heading-lg": ["44px", " 50px"],
        "heading-md": ["32px", " 40px"],
        "heading-sm": ["22px", " 28px"],
        "body-xl": ["18px", "26px"],
        "body-lg": ["16px", "22px"],
        "body-base": ["14px", "22px"],
        "body-sm": ["12px", "20px"],
        "body-xs": ["10px", "16px"],
        "body-2xs": ["8px", "14px"]
      },
      strokeWidth: {
        1.5: "1.5px"
      },
      boxShadow: {
        1: "0px 1px 0px 0px rgba(0, 0, 0, 0.05)",
        2: "0px -8px 20px 0px rgba(244, 244, 244, 0.25), 0px 2px 2px 0px rgba(160, 168, 176, 0.08)",
        alerts:
          "0px 3px 5px 0px rgba(47, 47, 47, 0.10), 0px 0px 1px 0px rgba(47, 47, 47, 0.10)",
        dropdown: "0px 4px 16px 0px rgba(0, 0, 0, 0.08)"
      },
      keyframes: {
        hide: {
          from: { opacity: 1 },
          to: { opacity: 0 }
        },
        slideIn: {
          from: {
            transform: "translateX(calc(100% + var(--viewport-padding)))"
          },
          to: { transform: "translateX(0)" }
        },
        swipeOut: {
          from: { transform: "translateX(var(--radix-toast-swipe-end-x))" },
          to: { transform: "translateX(calc(100% + var(--viewport-padding)))" }
        },
        overlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        },
        contentShow: {
          from: { opacity: 0, transform: "translate(-50%, -20%) scale(0.96)" },
          to: { opacity: 1, transform: "translate(-50%, -25%) scale(1)" }
        },
        slideDownAndFade: {
          from: { opacity: 0, transform: "translateY(-2px)" },
          to: { opacity: 1, transform: "translateY(0)" }
        },
        slideLeftAndFade: {
          from: { opacity: 0, transform: "translateX(2px)" },
          to: { opacity: 1, transform: "translateX(0)" }
        },
        slideUpAndFade: {
          from: { opacity: 0, transform: "translateY(2px)" },
          to: { opacity: 1, transform: "translateY(0)" }
        },
        slideRightAndFade: {
          from: { opacity: 0, transform: "translateX(-2px)" },
          to: { opacity: 1, transform: "translateX(0)" }
        }
      },
      animation: {
        hide: "hide 100ms ease-in",
        slideIn: "slideIn 300ms cubic-bezier(0.16, 1, 0.3, 1)",
        swipeOut: "swipeOut 300ms ease-out",
        overlayShow: "overlayShow 500ms cubic-bezier(0.16, 1, 0.3, 1)",
        contentShow: "contentShow 500ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideDownAndFade:
          "slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideLeftAndFade:
          "slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideUpAndFade: "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideRightAndFade:
          "slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)"
      }
    }
  },
  plugins: [require("@headlessui/tailwindcss")({ prefix: "ui" })]
}
