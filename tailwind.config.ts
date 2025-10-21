import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          hover: "hsl(var(--primary-hover))", // Adicionado do segundo arquivo
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        success: { // Adicionado do segundo arquivo
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        progress: { // Adicionado do segundo arquivo
            active: "hsl(var(--progress-active))",
            inactive: "hsl(var(--progress-inactive))",
            complete: "hsl(var(--progress-complete))",
        },
        sidebar: { // Adicionado do primeiro arquivo
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        julia: { // Adicionado do primeiro arquivo
          blue: "#008FF1",
          darkBlue: "#00498F",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "float": { // Do primeiro arquivo
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-slow": { // Do primeiro arquivo
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        "fade-up": { // Do primeiro arquivo
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": { // Definição mesclada/melhorada
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "fade-out": { // Do segundo arquivo
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(-10px)" }
        },
        "slide-in-right": { // Do segundo arquivo
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" }
        },
        "slide-in-left": { // Do segundo arquivo
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" }
        },
        "pulse-glow": { // Do segundo arquivo
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.05)" }
        },
        "spin-slow": { // Do segundo arquivo
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        },
        "slide-in-down": { // Do segundo arquivo
          "0%": { transform: "translateY(-100%)", opacity: "0.5" },
          "100%": { transform: "translateY(100%)", opacity: "0" }
        },
        "rotate-3d": { // Do segundo arquivo
          "0%": { transform: "rotateY(0deg) rotateX(0deg)" },
          "100%": { transform: "rotateY(360deg) rotateX(360deg)" }
        },
        "wave": { // Do segundo arquivo
          "0%, 100%": { transform: "translateX(0px)" },
          "25%": { transform: "translateX(4px)" },
          "75%": { transform: "translateX(-4px)" }
        },
        "elastic-wave": { // Do segundo arquivo
          "0%, 100%": { transform: "translateX(0px) scaleX(1)" },
          "15%": { transform: "translateX(12px) scaleX(1.3)" },
          "30%": { transform: "translateX(-8px) scaleX(0.9)" },
          "45%": { transform: "translateX(8px) scaleX(1.2)" },
          "60%": { transform: "translateX(-5px) scaleX(0.95)" },
          "75%": { transform: "translateX(3px) scaleX(1.05)" },
          "90%": { transform: "translateX(-2px) scaleX(0.98)" }
        },
        "whip-motion": { // Do segundo arquivo
          "0%": { transform: "translateX(0px) rotate(0deg)" },
          "10%": { transform: "translateX(30px) rotate(8deg)" },
          "20%": { transform: "translateX(-25px) rotate(-10deg)" },
          "30%": { transform: "translateX(20px) rotate(12deg)" },
          "40%": { transform: "translateX(-18px) rotate(-8deg)" },
          "50%": { transform: "translateX(15px) rotate(6deg)" },
          "60%": { transform: "translateX(-12px) rotate(-5deg)" },
          "70%": { transform: "translateX(8px) rotate(3deg)" },
          "80%": { transform: "translateX(-5px) rotate(-2deg)" },
          "90%": { transform: "translateX(2px) rotate(1deg)" },
          "100%": { transform: "translateX(0px) rotate(0deg)" }
        },
        "snake-wave": { // Do segundo arquivo
          "0%": { transform: "translateX(0px)" },
          "25%": { transform: "translateX(8px)" },
          "50%": { transform: "translateX(0px)" },
          "75%": { transform: "translateX(-8px)" },
          "100%": { transform: "translateX(0px)" }
        },
        "glow-pulse": { // Do segundo arquivo
          "0%, 100%": {
            boxShadow: "0 0 20px hsl(var(--primary) / 0.3)",
            filter: "brightness(1)"
          },
          "50%": {
            boxShadow: "0 0 40px hsl(var(--primary) / 0.8), 0 0 60px hsl(var(--accent) / 0.6)",
            filter: "brightness(1.5)"
          }
        },
        "wave-hand": { // Do segundo arquivo
          "0%, 100%": { transform: "rotate(0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10deg)" },
          "60%": { transform: "rotate(0deg)" }
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 3s ease-in-out infinite", // Do primeiro arquivo
        "pulse-slow": "pulse-slow 4s ease-in-out infinite", // Do primeiro arquivo
        "fade-up": "fade-up 0.5s ease-out", // Do primeiro arquivo
        "fade-in": "fade-in 0.4s ease-out", // Do segundo arquivo
        "fade-out": "fade-out 0.4s ease-out", // Do segundo arquivo
        "slide-in-right": "slide-in-right 0.5s ease-out", // Do segundo arquivo
        "slide-in-left": "slide-in-left 0.5s ease-out", // Do segundo arquivo
        "pulse-glow": "pulse-glow 2s ease-in-out infinite", // Do segundo arquivo
        "spin-slow": "spin-slow 3s linear infinite", // Do segundo arquivo
        "rotate-3d": "rotate-3d 8s linear infinite", // Do segundo arquivo
        "wave": "wave 0.8s ease-in-out infinite", // Do segundo arquivo
        "elastic-wave": "elastic-wave 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)", // Do segundo arquivo
        "whip-motion": "whip-motion 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)", // Do segundo arquivo
        "snake-wave": "snake-wave 2s ease-in-out", // Do segundo arquivo
        "glow-pulse": "glow-pulse 0.8s ease-in-out", // Do segundo arquivo
        "wave-hand": "wave-hand 1.5s ease-in-out infinite", // Do segundo arquivo
      },
      backgroundImage: { // Do primeiro arquivo
        "gradient-hero": "var(--gradient-hero)",
        "gradient-blue": "var(--gradient-blue)",
        "gradient-accent": "var(--gradient-accent)",
        "gradient-accent-vertical": "var(--gradient-accent-vertical)",
      },
      boxShadow: { // Do primeiro arquivo
        "sm": "var(--shadow-sm)",
        "md": "var(--shadow-md)",
        "lg": "var(--shadow-lg)",
        "blue": "var(--shadow-blue)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
