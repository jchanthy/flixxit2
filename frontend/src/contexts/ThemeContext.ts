import { createContext } from "react";

export type ThemeContextType = {
  theme: string;
  setTheme: (theme: string) => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);
