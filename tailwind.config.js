module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "hobbies-bounce": {
          "0%": {
            opacity: "0",
            transform: "scale(0.5)"
          },
          "70%": {
            transform: "scale(1.1)",
            opacity: "1"
          },
          "100%": {
            transform: "scale(1)"
          }
        },
        "work-fade-out": {
          "0%": {
            transform: "translateX(0)"
          },
          "50%": {
            transform: "translateX(100px) rotate(5deg)"
          },
          "100%": {
            transform: "translateX(-100vw) translateY(-50px)"
          }
        },
        "work-fade-in": {
          "0%": {
            transform: "translateX(-100vw) translateY(-50px)"
          },
          "50%": {
            transform: "translateX(100px) rotate(5deg)"
          },
          "100%": {
            transform: "translateX(0)"
          }
        }
      },
      animation: {
        "hobbies-bounce": "hobbies-bounce .5s ease-in-out",
        "work-fade-out": "work-fade-out .5s ease-in-out forwards",
        "work-fade-in": "work-fade-in .5s ease-in-out"
      }
    },
  },
  plugins: [],
}
