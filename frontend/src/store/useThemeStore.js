import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("lexlist-theme") || "dracula",
  setTheme: (theme) => {
    localStorage.setItem("lexlist-theme", theme);
    set({ theme });
  },
}));
