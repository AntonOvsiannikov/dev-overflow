"use client";
import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from "next-themes";
import type { FC } from "react";

const ThemeProvider: FC<ThemeProviderProps> = ({ children, ...props }) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};

export default ThemeProvider;
