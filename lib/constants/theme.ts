export const themeColors = {
  light: {
    background: "#ffffff",
    foreground: "#171717",
    primary: "#0070f3",
    muted: "#f5f5f5",
  },
  dark: {
    background: "#0a0a0a",
    foreground: "#ededed",
    primary: "#3291ff",
    muted: "#1a1a1a",
  },
} as const;

export type Theme = keyof typeof themeColors;
export type ThemeColorKey = keyof typeof themeColors.light;
