export const ButtonColor = {
  red: "#FF3333",
  green: "#8BFF00",
  white: "#FBFDFB",
  black: "#000000",
} as const;

export type btnColor = keyof typeof ButtonColor;
